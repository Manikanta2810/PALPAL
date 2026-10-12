import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Inbox,
  Copy,
  ExternalLink,
  KeyRound
} from 'lucide-react';
import {
  requestEmailAuth,
  verifyEmailAuth,
  isEmailRegistered,
  StoredAccount
} from '../services/authService';

interface EmailAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (result: {
    email: string;
    isNewUser: boolean;
    account?: StoredAccount;
  }) => void;
  initialMode?: 'signin' | 'signup';
  initialEmail?: string;
}

export const EmailAuthModal: React.FC<EmailAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'signin',
  initialEmail = ''
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [step, setStep] = useState<'input_email' | 'verify_code'>('input_email');
  const [email, setEmail] = useState<string>(initialEmail);
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(0);

  // Live dispatched email toast & simulation data
  const [emailDispatch, setEmailDispatch] = useState<{
    code: string;
    token: string;
    magicUrl: string;
    email: string;
    sentAt: string;
    isNewUser: boolean;
    hasResendKey?: boolean;
    resendSuccess?: boolean;
    resendError?: string;
  } | null>(null);

  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const digitInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Reset state when opening/closing or changing initial props
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      if (initialEmail) {
        setEmail(initialEmail);
      }
      setErrorMessage('');
    } else {
      setStep('input_email');
      setDigits(['', '', '', '', '', '']);
      setErrorMessage('');
      setEmailDispatch(null);
    }
  }, [isOpen, initialMode, initialEmail]);

  // Countdown timer for code resend
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  if (!isOpen) return null;

  // Handle Request Code / Send Email
  const handleSendCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await requestEmailAuth(cleanEmail);
      if (!result.ok) {
        setErrorMessage(result.error || 'Failed to dispatch email.');
        setIsLoading(false);
        return;
      }

      setEmailDispatch({
        code: result.code,
        token: result.token,
        magicUrl: result.magicUrl,
        email: cleanEmail,
        sentAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isNewUser: result.isNewUser,
        hasResendKey: result.hasResendKey,
        resendSuccess: result.resendSuccess,
        resendError: result.resendError
      });

      setStep('verify_code');
      setCountdown(45); // 45 seconds countdown
      setDigits(['', '', '', '', '', '']);

      // Focus first digit input after transition
      setTimeout(() => {
        digitInputRefs.current[0]?.focus();
      }, 150);
    } catch {
      setErrorMessage('Network or server error while dispatching email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle 6-Digit input changes
  const handleDigitChange = (index: number, val: string) => {
    const cleanVal = val.replace(/[^0-9]/g, '');
    if (!cleanVal) {
      const newDigits = [...digits];
      newDigits[index] = '';
      setDigits(newDigits);
      return;
    }

    // Single digit input
    const char = cleanVal.slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);

    // Auto-advance
    if (index < 5) {
      digitInputRefs.current[index + 1]?.focus();
    } else {
      // Last digit filled, auto submit
      const fullCode = newDigits.join('');
      if (fullCode.length === 6) {
        performVerification(fullCode);
      }
    }
  };

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      digitInputRefs.current[index - 1]?.focus();
    }
  };

  const handleDigitPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim().replace(/[^0-9]/g, '');
    if (pasteData.length >= 6) {
      const code6 = pasteData.slice(0, 6).split('');
      setDigits(code6);
      digitInputRefs.current[5]?.focus();
      performVerification(pasteData.slice(0, 6));
    }
  };

  // Perform code or token verification
  const performVerification = (codeOrToken: string) => {
    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      const result = verifyEmailAuth(codeOrToken, email);
      setIsLoading(false);

      if (!result.ok) {
        setErrorMessage(result.error || 'Invalid verification code.');
        return;
      }

      onSuccess({
        email: result.email || email,
        isNewUser: result.isNewUser,
        account: result.account
      });
      onClose();
    }, 350);
  };

  // Auto-fill from simulated email toast
  const handleAutoFillSimulation = () => {
    if (!emailDispatch) return;
    const codeArr = emailDispatch.code.split('');
    setDigits(codeArr);
    performVerification(emailDispatch.code);
  };

  const handleCopyMagicLink = () => {
    if (!emailDispatch) return;
    navigator.clipboard.writeText(emailDispatch.magicUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const fullEnteredCode = digits.join('');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(11, 11, 12, 0.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'var(--cd)',
          border: '2px solid var(--ink)',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--ln)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--ac)',
                color: '#0B0B0C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900
              }}
            >
              <Mail style={{ width: 20, height: 20 }} />
            </div>
            <div>
              <div
                className="m"
                style={{
                  fontWeight: 800,
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: 'var(--ac-text)'
                }}
              >
                BORINGBROS AUTH
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)'
                }}
              >
                {step === 'input_email'
                  ? mode === 'signin'
                    ? 'Sign In with Email'
                    : 'Create Account with Email'
                  : 'Check Your Inbox'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--mu)',
              padding: '6px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Close"
          >
            <X style={{ width: 20, height: 20 }} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {/* STEP 1: ENTER EMAIL */}
          {step === 'input_email' && (
            <div>
              <p
                className="mu"
                style={{
                  marginTop: 0,
                  marginBottom: '20px',
                  fontSize: '15px',
                  lineHeight: '1.5'
                }}
              >
                {mode === 'signin'
                  ? 'Enter your email address to receive a secure 6-digit sign-in code and magic link. No passwords needed.'
                  : 'Get started with verified email. All your mastered concepts, notes, and streak will be safely synced.'}
              </p>

              <form onSubmit={handleSendCode}>
                <label
                  className="m mu"
                  htmlFor="auth-email-input"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 700 }}
                >
                  Email Address
                </label>

                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <input
                    id="auth-email-input"
                    type="email"
                    required
                    autoFocus
                    placeholder="name@company.com or personal email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '14px 16px',
                      fontSize: '16px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--ln)',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {errorMessage && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#DC2626',
                      background: 'rgba(220, 38, 38, 0.08)',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      marginBottom: '16px'
                    }}
                  >
                    <AlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bt dk"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: isLoading ? 0.7 : 1,
                    cursor: isLoading ? 'wait' : 'pointer'
                  }}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="animate-spin" style={{ width: 18, height: 18 }} />
                      Sending Verification Code...
                    </>
                  ) : (
                    <>
                      <span>Send Sign-In Code</span>
                      <ArrowRight style={{ width: 18, height: 18 }} />
                    </>
                  )}
                </button>
              </form>

              {/* Mode Switcher */}
              <div
                style={{
                  marginTop: '22px',
                  paddingTop: '18px',
                  borderTop: '1px solid var(--ln)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px'
                }}
              >
                <span className="mu">
                  {mode === 'signin' ? "Don't have an account yet?" : 'Already registered?'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setErrorMessage('');
                    setMode(mode === 'signin' ? 'signup' : 'signin');
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontWeight: 800,
                    color: 'var(--ac-text)',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  {mode === 'signin' ? 'Sign up with email' : 'Sign in to existing account'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: VERIFY 6-DIGIT CODE & SIMULATED INBOX */}
          {step === 'verify_code' && (
            <div>
              <div style={{ marginBottom: '18px' }}>
                <p style={{ margin: '0 0 6px', fontSize: '15px', lineHeight: 1.4 }}>
                  We sent a 6-digit verification code to:
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <b style={{ fontFamily: 'IBM Plex Mono', fontSize: '15px', color: 'var(--ink)' }}>
                    {email}
                  </b>
                  <button
                    type="button"
                    onClick={() => {
                      setStep('input_email');
                      setErrorMessage('');
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '12px',
                      color: 'var(--ac-text)',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* 6 Digits Input */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '8px',
                  margin: '22px 0 16px'
                }}
              >
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { digitInputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleDigitKeyDown(index, e)}
                    onPaste={handleDigitPaste}
                    style={{
                      width: '46px',
                      height: '56px',
                      textAlign: 'center',
                      fontSize: '24px',
                      fontWeight: 800,
                      fontFamily: 'IBM Plex Mono',
                      borderRadius: '10px',
                      border: digit ? '2px solid var(--ink)' : '1.5px solid var(--ln)',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                      outline: 'none',
                      transition: 'border-color 0.15s ease'
                    }}
                  />
                ))}
              </div>

              {errorMessage && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#DC2626',
                    background: 'rgba(220, 38, 38, 0.08)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    marginBottom: '16px'
                  }}
                >
                  <AlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Verify Button */}
              <button
                type="button"
                disabled={isLoading || fullEnteredCode.length !== 6}
                onClick={() => performVerification(fullEnteredCode)}
                className="bt dk"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isLoading || fullEnteredCode.length !== 6 ? 0.6 : 1,
                  cursor: isLoading || fullEnteredCode.length !== 6 ? 'not-allowed' : 'pointer',
                  marginBottom: '14px'
                }}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="animate-spin" style={{ width: 18, height: 18 }} />
                    Verifying Code...
                  </>
                ) : (
                  <>
                    <CheckCircle2 style={{ width: 18, height: 18 }} />
                    <span>Verify Code & Continue</span>
                  </>
                )}
              </button>

              {/* Resend Action */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  marginBottom: '22px'
                }}
              >
                {countdown > 0 ? (
                  <span className="mu">
                    Resend verification email in <b style={{ fontFamily: 'IBM Plex Mono' }}>{countdown}s</b>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSendCode()}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    Didn't receive email? Resend code now
                  </button>
                )}
              </div>

              {/* DELIVERY STATUS (IF RESEND SUCCEEDED OR FAILED) */}
              {emailDispatch?.resendError && (
                <div
                  style={{
                    background: '#FEF2F2',
                    border: '1.5px solid #EF4444',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    marginTop: '16px',
                    fontSize: '13px',
                    color: '#991B1B',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <AlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                  <span>{emailDispatch.resendError}</span>
                </div>
              )}

              {emailDispatch?.resendSuccess && (
                <div
                  style={{
                    background: '#ECFDF5',
                    border: '1.5px solid #10B981',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    marginTop: '16px',
                    fontSize: '13px',
                    color: '#065F46',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle2 style={{ width: 16, height: 16, color: '#10B981', flexShrink: 0 }} />
                  <span>Verification email sent! Check your inbox (or spam) for the 6-digit code.</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security Footer */}
        <div
          style={{
            padding: '12px 24px',
            background: 'var(--bg)',
            borderTop: '1px solid var(--ln)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '12px',
            color: 'var(--mu)'
          }}
        >
          <ShieldCheck style={{ width: 14, height: 14 }} />
          <span>Encrypted with 256-bit session token. No passwords to compromise.</span>
        </div>
      </div>
    </div>
  );
};
