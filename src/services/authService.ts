// Authentication and Email Verification Service for BoringBros

export interface AuthSession {
  email: string;
  code: string;
  token: string;
  createdAt: number;
  expiresAt: number;
  attempts: number;
}

export interface StoredAccount {
  email: string;
  user: {
    n: string;
    u: string;
    age?: string;
    e?: string;
    avatar?: string;
    archetype?: string;
    goal?: string;
    target?: string;
    verifiedAt?: string;
  };
  state?: any;
}

const STORAGE_ACCOUNTS_KEY = 'bb4_registered_accounts';
const STORAGE_PENDING_AUTH_KEY = 'bb4_pending_auth_session';

// Helper: Normalize email
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

// Generate random 6-digit numeric OTP code
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Generate secure random token for magic link
function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Retrieve all locally registered accounts
export function getRegisteredAccounts(): Record<string, StoredAccount> {
  try {
    const raw = localStorage.getItem(STORAGE_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Check if an email has already registered an account
export function isEmailRegistered(email: string): boolean {
  const accounts = getRegisteredAccounts();
  const normalized = normalizeEmail(email);
  return !!accounts[normalized];
}

// Save or update an account in the registry
export function saveAccountToRegistry(email: string, user: StoredAccount['user'], state?: any): void {
  try {
    const accounts = getRegisteredAccounts();
    const normalized = normalizeEmail(email);
    accounts[normalized] = {
      email: normalized,
      user: {
        ...user,
        e: normalized,
        verifiedAt: user.verifiedAt || new Date().toISOString()
      },
      state: state || {}
    };
    localStorage.setItem(STORAGE_ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch {
    // ignore
  }
}

// Request Email Sign-In / Sign-Up (Generates Code and Magic Link)
export async function requestEmailAuth(email: string): Promise<{
  ok: boolean;
  code: string;
  token: string;
  magicUrl: string;
  isNewUser: boolean;
  hasResendKey?: boolean;
  resendSuccess?: boolean;
  resendError?: string;
  error?: string;
}> {
  const normalized = normalizeEmail(email);
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return {
      ok: false,
      code: '',
      token: '',
      magicUrl: '',
      isNewUser: false,
      error: 'Please enter a valid email address.'
    };
  }

  const code = generateOTP();
  const token = generateToken();
  const now = Date.now();
  const session: AuthSession = {
    email: normalized,
    code,
    token,
    createdAt: now,
    expiresAt: now + 10 * 60 * 1000, // 10 minutes expiry
    attempts: 0
  };

  try {
    localStorage.setItem(STORAGE_PENDING_AUTH_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const magicUrl = `${baseUrl}/#auth/verify?email=${encodeURIComponent(normalized)}&token=${encodeURIComponent(token)}`;
  const isNewUser = !isEmailRegistered(normalized);

  // Attempt to notify backend email dispatcher if present
  let hasResendKey = false;
  let resendSuccess = false;
  let resendError = '';

  try {
    const res = await fetch('/api/auth/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: normalized,
        code,
        magicUrl,
        type: isNewUser ? 'signup' : 'signin'
      })
    });
    if (res.ok) {
      const respData = await res.json();
      hasResendKey = !!respData.hasResendKey;
      if (respData.resend) {
        if (respData.resend.id) {
          resendSuccess = true;
        } else if (respData.resend.message || respData.resend.error) {
          resendError = respData.resend.message || respData.resend.error?.message || 'Resend error';
        }
      }
    }
  } catch {
    // Background dispatch failed or offline
  }

  return {
    ok: true,
    code,
    token,
    magicUrl,
    isNewUser,
    hasResendKey,
    resendSuccess,
    resendError
  };
}

// Get the currently active pending auth session
export function getPendingAuthSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_PENDING_AUTH_KEY);
    if (!raw) return null;
    const session: AuthSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(STORAGE_PENDING_AUTH_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

// Clear pending auth session
export function clearPendingAuthSession(): void {
  try {
    localStorage.removeItem(STORAGE_PENDING_AUTH_KEY);
  } catch {
    // ignore
  }
}

// Verify entered code or magic link token
export function verifyEmailAuth(
  inputCodeOrToken: string,
  emailOverride?: string
): {
  ok: boolean;
  email?: string;
  isNewUser: boolean;
  account?: StoredAccount;
  error?: string;
} {
  const session = getPendingAuthSession();
  const cleanInput = inputCodeOrToken.trim();

  if (!session) {
    return {
      ok: false,
      isNewUser: false,
      error: 'No active verification session found or code has expired. Please request a new code.'
    };
  }

  if (emailOverride && normalizeEmail(emailOverride) !== session.email) {
    return {
      ok: false,
      isNewUser: false,
      error: 'Email address does not match this verification code.'
    };
  }

  // Increment attempt counter
  session.attempts = (session.attempts || 0) + 1;
  if (session.attempts > 5) {
    clearPendingAuthSession();
    return {
      ok: false,
      isNewUser: false,
      error: 'Too many incorrect attempts. Please request a new verification code.'
    };
  }

  try {
    localStorage.setItem(STORAGE_PENDING_AUTH_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }

  const isCodeMatch = cleanInput === session.code;
  const isTokenMatch = cleanInput === session.token;

  if (!isCodeMatch && !isTokenMatch) {
    return {
      ok: false,
      isNewUser: false,
      error: 'Invalid verification code. Please check your email and try again.'
    };
  }

  // Success! Clear pending session
  const targetEmail = session.email;
  clearPendingAuthSession();

  const accounts = getRegisteredAccounts();
  const existingAccount = accounts[targetEmail];

  return {
    ok: true,
    email: targetEmail,
    isNewUser: !existingAccount,
    account: existingAccount
  };
}
