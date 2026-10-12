import React, { useState, useEffect, useMemo } from 'react';
import { IDEAS, Idea } from './data/ideas';
import { MOM_TEST_BOOK, BookConcept, BookDefinition } from './data/momTestBook';
import { POSITIONING_BOOK } from './data/positioningBook';
import { STEAL_LIKE_AN_ARTIST_BOOK } from './data/stealLikeAnArtistBook';
import { HOOKED_BOOK } from './data/hookedBook';
import { TRACTION_BOOK } from './data/tractionBook';
import { COLD_START_BOOK } from './data/coldStartBook';
import { Link, useRouter } from './router';
import { syncToCloud } from './services/cloudSync';
import { ActivityTracker, updateStreakOnMastery, getActiveStreak } from './components/ActivityTracker';
import { ConceptSchematic } from './components/ConceptSchematics';
import { EmailAuthModal } from './components/EmailAuthModal';
import { ThinkerPassport } from './components/ThinkerPassport';
import {
  verifyEmailAuth,
  saveAccountToRegistry,
  isEmailRegistered,
  StoredAccount,
  getRegisteredAccounts
} from './services/authService';

// Shelf color configurations matching BoringBros
const CL: Record<string, [string, string]> = {
  Counterintuitive: ['#1B1BC8', '#F3F0E8'],
  Startups: ['#FF4B1F', '#0B0B0C'],
  Money: ['#0F5C3B', '#F3F0E8'],
  Mind: ['#5B1A58', '#F3F0E8'],
  Habits: ['#FFC21E', '#0B0B0C'],
  Work: ['#151517', '#FCAC04'],
  Strategy: ['#0B5E75', '#F3F0E8']
};

const SH = Object.keys(CL);

// Thinker Archetypes
const ARCHETYPES = [
  { id: 'founder', icon: '🚀', label: 'The Founder', desc: 'Velocity & execution' },
  { id: 'contrarian', icon: '⚡', label: 'The Contrarian', desc: 'Thinks backwards' },
  { id: 'architect', icon: '📐', label: 'The Architect', desc: 'Builds systems' },
  { id: 'strategist', icon: '♟️', label: 'The Strategist', desc: 'Second-order thinker' },
  { id: 'experimenter', icon: '🧪', label: 'The Experimenter', desc: 'Tests in production' },
  { id: 'polymath', icon: '🧠', label: 'The Polymath', desc: 'Connects disciplines' },
];

const FOCUS_GOALS = [
  'Building a High-Growth Startup',
  'Un-rotting My Brain & Focus',
  'Mastering Mental Models & Logic',
  'High-Stakes Decision Making',
  'Unit Economics & Wealth Building'
];

const DAILY_TARGETS = [
  '1 concept / day (Steady)',
  '3 concepts / day (Standard)',
  '5 concepts / day (Beast Mode)'
];

// Official BoringBroLabs logo mark
const LG = (extraClass = '') => (
  <svg className={`mk${extraClass}`} viewBox="0 0 512 512" role="img" aria-label="BoringBroLabs logo">
    <path className="b" d="M0 0H307C385 0 439 55 439 130C439 175 420 205 392 220C470 235 512 295 512 365C512 455 450 510 375 510H0Z" />
    <rect className="f" x="102" y="82" width="220" height="50" rx="25" />
    <path className="f" d="M154 128V205L56 385Q40 415 62 440Q75 455 100 455H330Q355 455 368 440Q388 415 372 385L267 205V128Z" />
    <path className="l" d="M97 368C130 340 170 346 205 360C240 376 280 380 317 362L337 395Q345 430 315 430H110Q80 430 88 400Z" />
    <circle className="l" cx="197" cy="305" r="24" />
    <circle className="l" cx="230" cy="250" r="16" />
  </svg>
);

// Deterministic PRNG for card art
function rnd(id: string) {
  let h = 0;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return () => (h = (h * 1664525 + 1013904223) >>> 0) / 4294967296;
}

// Generative SVG shelf art
function renderArt(shelf: string, id: string) {
  const r = rnd(id);
  const s = 'currentColor';
  const L = (x: number) => Math.round(x);
  let elements: React.ReactNode = null;

  switch (shelf) {
    case 'Counterintuitive': {
      const cx = 200 + (r() - 0.5) * 40;
      const circles = [];
      for (let i = 1; i <= 7; i++) {
        circles.push(
          <circle key={i} cx={L(cx + i * r() * 6)} cy="150" r={i * 20} fill="none" stroke={s} strokeWidth="2.5" />
        );
      }
      elements = (
        <>
          {circles}
          <circle cx={L(cx)} cy="150" r="16" fill={s} />
        </>
      );
      break;
    }
    case 'Startups': {
      const rects = [];
      for (let i = 0; i < 7; i++) {
        const h = 40 + i * 26 + r() * 20;
        rects.push(
          <rect key={i} x={40 + i * 48} y={L(280 - h)} width="34" height={L(h)} rx="6" fill={i === 6 ? s : 'none'} stroke={s} strokeWidth="2.5" />
        );
      }
      elements = (
        <>
          {rects}
          <path d="M40 230 L120 190 L200 205 L280 120 L360 40" fill="none" stroke={s} strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
        </>
      );
      break;
    }
    case 'Money': {
      const ellipses = [];
      for (let k = 0; k < 4; k++) {
        const n = 2 + Math.floor(r() * 5);
        for (let i = 0; i < n; i++) {
          ellipses.push(
            <ellipse key={`${k}-${i}`} cx={70 + k * 85} cy={270 - i * 22} rx="36" ry="12" fill={i === n - 1 ? s : 'none'} stroke={s} strokeWidth="2.5" />
          );
        }
      }
      elements = <>{ellipses}</>;
      break;
    }
    case 'Habits': {
      let d = 'M200 150';
      for (let a = 0; a < 26; a += 0.25) {
        const q = 4 + a * 5.2;
        d += ` L${L(200 + q * Math.cos(a))} ${L(150 + q * Math.sin(a))}`;
      }
      elements = <path d={d} fill="none" stroke={s} strokeWidth="3" strokeLinecap="round" />;
      break;
    }
    case 'Work': {
      const f = Math.floor(r() * 20);
      const rects = [];
      for (let i = 0; i < 20; i++) {
        rects.push(
          <rect key={i} x={50 + (i % 5) * 64} y={40 + Math.floor(i / 5) * 60} width="48" height="48" rx="8" fill={i === f ? s : 'none'} stroke={s} strokeWidth="2.5" />
        );
      }
      elements = <>{rects}</>;
      break;
    }
    case 'Strategy': {
      let x = 40, y = 250, d = `M${x} ${y}`;
      const circles = [];
      for (let i = 0; i < 5; i++) {
        x += 55 + r() * 20;
        y = Math.max(40, Math.min(260, y - (r() * 70 - 25)));
        d += ` L${L(x)} ${L(y)}`;
        circles.push(<circle key={i} cx={L(x)} cy={L(y)} r="9" fill={s} />);
      }
      elements = (
        <>
          <path d={d} fill="none" stroke={s} strokeWidth="3" strokeDasharray="6 8" />
          {circles}
        </>
      );
      break;
    }
    case 'Mind':
    default: {
      const pts = [[150, 130, 90], [250, 130, 90], [200, 200, 90]];
      elements = (
        <>
          {pts.map((p, i) => (
            <circle key={i} cx={L(p[0] + (r() - 0.5) * 20)} cy={L(p[1] + (r() - 0.5) * 20)} r={p[2]} fill={s} fillOpacity={i === 2 ? 0.35 : 0.18} stroke={s} strokeWidth="2.5" />
          ))}
        </>
      );
      break;
    }
  }

  return (
    <div className="art">
      <svg viewBox="0 0 400 300" aria-hidden="true">
        {elements}
      </svg>
    </div>
  );
}

export interface UserProfile {
  n: string;          // Full name
  u: string;          // Username (@handle)
  age?: string;       // Age
  e?: string;         // Email
  avatar?: string;    // Archetype icon
  archetype?: string; // Archetype label
  goal?: string;      // Primary ambition
  target?: string;    // Daily target
  verifiedAt?: string;// Verified timestamp
}

interface UserState {
  done: Record<string, number>;
  wrong: Record<string, number>;
  ans: number;
  ok: number;
  user?: UserProfile;
  int?: string[];
  streak?: number;
  bestStreak?: number;
  lastActiveDate?: string;
  history?: Record<string, number>;
}

export const App: React.FC = () => {
  const { path: route, navigate } = useRouter();

  // User state persisted in localStorage under key 'bb4'
  const [state, setState] = useState<UserState>(() => {
    try {
      const raw = localStorage.getItem('bb4');
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          done: parsed.done || {},
          wrong: parsed.wrong || {},
          ans: parsed.ans || 0,
          ok: parsed.ok || 0,
          user: parsed.user,
          int: parsed.int || [],
          streak: parsed.streak || 0,
          bestStreak: parsed.bestStreak || 0,
          lastActiveDate: parsed.lastActiveDate,
          history: parsed.history || {}
        };
      }
    } catch {
      // ignore
    }
    return { done: {}, wrong: {}, ans: 0, ok: 0, int: [], streak: 0, bestStreak: 0, history: {} };
  });

  const saveState = (newState: UserState) => {
    setState(newState);
    try {
      localStorage.setItem('bb4', JSON.stringify(newState));
      if (newState.user?.e) {
        saveAccountToRegistry(newState.user.e, newState.user, newState);
      }
    } catch {
      // ignore
    }
  };

  // Email Authentication Modal & Toast State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [authNotificationToast, setAuthNotificationToast] = useState<{
    message: string;
    type: 'success' | 'info' | 'error';
  } | null>(null);

  // Active quiz selections: conceptId -> pickedIndex
  const [picked, setPicked] = useState<Record<string, number>>({});

  // Search filter query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Profile form state (populated with existing profile if present)
  const [profileName, setProfileName] = useState<string>(() => state.user?.n || '');
  const [profileUsername, setProfileUsername] = useState<string>(() => state.user?.u || '');
  const [profileAge, setProfileAge] = useState<string>(() => state.user?.age || '');
  const [profileEmail, setProfileEmail] = useState<string>(() => state.user?.e || '');
  const [profileAvatar, setProfileAvatar] = useState<string>(() => state.user?.avatar || '🚀');
  const [profileArchetype, setProfileArchetype] = useState<string>(() => state.user?.archetype || 'The Founder');
  const [profileGoal, setProfileGoal] = useState<string>(() => state.user?.goal || FOCUS_GOALS[0]);
  const [profileTarget, setProfileTarget] = useState<string>(() => state.user?.target || DAILY_TARGETS[1]);
  const [formError, setFormError] = useState<string>('');
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string>('');
  const [activeModuleByBook, setActiveModuleByBook] = useState<Record<string, string>>({});

  // Masterclass Books registry
  const ALL_BOOKS: BookDefinition[] = [MOM_TEST_BOOK, POSITIONING_BOOK, STEAL_LIKE_AN_ARTIST_BOOK, HOOKED_BOOK, TRACTION_BOOK, COLD_START_BOOK];
  const BOOKS_MAP: Record<string, BookDefinition> = {
    'the-mom-test': MOM_TEST_BOOK,
    'positioning': POSITIONING_BOOK,
    'positioning-the-battle-for-your-mind': POSITIONING_BOOK,
    'steal-like-an-artist': STEAL_LIKE_AN_ARTIST_BOOK,
    'hooked': HOOKED_BOOK,
    'traction': TRACTION_BOOK,
    'the-cold-start-problem': COLD_START_BOOK,
    'the_cold_start_problem': COLD_START_BOOK,
    'cold-start': COLD_START_BOOK
  };

  // Final Challenge lab responses across books
  const [challengeAnswers, setChallengeAnswers] = useState<Record<string, Record<string, string>>>(() => {
    try {
      const raw = localStorage.getItem('bb4_book_challenges');
      if (raw) return JSON.parse(raw);
      const oldMom = localStorage.getItem('bb4_mom_challenge');
      if (oldMom) {
        return { 'the-mom-test': JSON.parse(oldMom) };
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [challengeSubmitted, setChallengeSubmitted] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem('bb4_challenges_done');
      if (raw) return JSON.parse(raw);
      const oldDone = localStorage.getItem('bb4_mom_challenge_done') === 'true';
      if (oldDone) return { 'the-mom-test': true };
    } catch {
      // ignore
    }
    return {};
  });

  const handleChallengeInput = (bookId: string, qId: string, val: string) => {
    setChallengeAnswers((prev) => {
      const bookObj = { ...(prev[bookId] || {}), [qId]: val };
      const updated = { ...prev, [bookId]: bookObj };
      try {
        localStorage.setItem('bb4_book_challenges', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleSaveChallenge = (bookId: string, e: React.FormEvent) => {
    e.preventDefault();
    setChallengeSubmitted((prev) => {
      const updated = { ...prev, [bookId]: true };
      try {
        localStorage.setItem('bb4_challenges_done', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Fast concept lookup across all masterclass books
  const allBookConceptsMap = useMemo(() => {
    const map = new Map<string, { concept: BookConcept; book: BookDefinition }>();
    for (const book of ALL_BOOKS) {
      const prefix = book.id.startsWith('the-mom-test')
        ? 'mom-'
        : book.id.startsWith('steal-like-an-artist')
        ? 'sla-'
        : book.id.startsWith('hooked')
        ? 'hook-'
        : book.id.startsWith('traction')
        ? 'trac-'
        : book.id.startsWith('the-cold-start') || book.id.startsWith('the_cold') || book.id.startsWith('cold-start')
        ? 'csp-'
        : 'pos-';
      for (const mod of book.learning_path) {
        for (const c of mod.concepts) {
          map.set(`${prefix}${c.id.replace(/_/g, '-')}`, { concept: c, book });
        }
      }
    }
    return map;
  }, []);

  const handleSyncCloud = async () => {
    setSyncStatus('Syncing to Cloudflare R2...');
    const res = await syncToCloud(state);
    if (res.ok) {
      setSyncStatus('Backed up to R2 ✓');
    } else {
      setSyncStatus(res.message || 'Saved on device');
    }
    setTimeout(() => setSyncStatus(''), 4000);
  };

  // Sync profile form when user updates
  useEffect(() => {
    if (state.user) {
      setProfileName(state.user.n || '');
      setProfileUsername(state.user.u || '');
      setProfileAge(state.user.age || '');
      setProfileEmail(state.user.e || '');
      setProfileAvatar(state.user.avatar || '🚀');
      setProfileArchetype(state.user.archetype || 'The Founder');
      setProfileGoal(state.user.goal || FOCUS_GOALS[0]);
      setProfileTarget(state.user.target || DAILY_TARGETS[1]);
    }
  }, [state.user]);

  // Auto-dismiss auth notifications
  useEffect(() => {
    if (!authNotificationToast) return;
    const t = setTimeout(() => {
      setAuthNotificationToast(null);
    }, 4500);
    return () => clearTimeout(t);
  }, [authNotificationToast]);

  // Magic Link URL detector and Route guards
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let searchParams: URLSearchParams | null = null;
      if (window.location.hash.includes('auth/verify')) {
        const qIdx = window.location.hash.indexOf('?');
        if (qIdx !== -1) {
          searchParams = new URLSearchParams(window.location.hash.substring(qIdx));
        }
      } else if (window.location.search.includes('token=')) {
        searchParams = new URLSearchParams(window.location.search);
      }

      if (searchParams) {
        const emailParam = searchParams.get('email');
        const tokenParam = searchParams.get('token');
        if (emailParam && tokenParam) {
          const res = verifyEmailAuth(tokenParam, emailParam);
          if (res.ok) {
            if (!res.isNewUser && res.account) {
              const restoredState: UserState = {
                done: res.account.state?.done || {},
                wrong: res.account.state?.wrong || {},
                ans: res.account.state?.ans || 0,
                ok: res.account.state?.ok || 0,
                user: res.account.user,
                int: res.account.state?.int || [],
                streak: res.account.state?.streak || 0,
                bestStreak: res.account.state?.bestStreak || 0,
                lastActiveDate: res.account.state?.lastActiveDate,
                history: res.account.state?.history || {}
              };
              saveState(restoredState);
              setAuthNotificationToast({
                message: `Welcome back, @${res.account.user.u}! Magic link verified.`,
                type: 'success'
              });
              window.history.replaceState(null, '', '/profile');
              navigate('/profile', true);
            } else {
              setProfileEmail(emailParam);
              setAuthNotificationToast({
                message: `Email ${emailParam} verified! Complete your thinker profile.`,
                type: 'success'
              });
              window.history.replaceState(null, '', '/start');
              navigate('/start', true);
            }
          } else {
            setAuthNotificationToast({
              message: res.error || 'Invalid or expired magic link.',
              type: 'error'
            });
            window.history.replaceState(null, '', '/');
          }
        }
      }
    }

    const p = route.split('/')[0] || 'home';
    if (p === 'signin') {
      setAuthModalMode('signin');
      setIsAuthModalOpen(true);
      window.history.replaceState(null, '', '/');
    } else if (p === 'signup') {
      setAuthModalMode('signup');
      setIsAuthModalOpen(true);
      window.history.replaceState(null, '', '/');
    } else if (p === 'start' && state.user) {
      navigate('/profile', true);
    } else if (p === 'profile' && !state.user) {
      navigate('/start', true);
    }
  }, [route, state.user, navigate]);

  // All 7 shelves and all concepts are ALWAYS available across the entire app
  const visibleIdeas = IDEAS;
  const availableShelves = SH;

  // Routing parts: [path, param]
  const routeParts = route.split('/');
  const page = routeParts[0] || 'home';
  const param = routeParts[1] ? decodeURIComponent(routeParts[1]) : '';

  // Helpers
  const getConceptStatus = (c: Idea) => {
    if (state.done[c.id]) return 'Mastered';
    if (state.wrong[c.id]) return 'Review';
    return 'New';
  };

  const handlePickAnswer = (id: string, index: number) => {
    const concept = IDEAS.find((c) => c.id === id);
    if (!concept || picked[id] !== undefined) return;

    setPicked((prev) => ({ ...prev, [id]: index }));

    const isCorrect = index === concept.k;
    const nextDone = { ...state.done };
    const nextWrong = { ...state.wrong };
    let streakUpdate = {};

    if (isCorrect) {
      nextDone[id] = 1;
      delete nextWrong[id];
      streakUpdate = updateStreakOnMastery(
        state.streak,
        state.bestStreak,
        state.lastActiveDate,
        state.history
      );
    } else {
      nextWrong[id] = 1;
    }

    const nextState: UserState = {
      ...state,
      ans: state.ans + 1,
      ok: isCorrect ? state.ok + 1 : state.ok,
      done: nextDone,
      wrong: nextWrong,
      ...streakUpdate
    };
    saveState(nextState);
  };

  const handleRetry = (id: string) => {
    setPicked((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleSaveProfile = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const name = profileName.trim();
    const rawUser = profileUsername.trim().replace(/^@+/, '');
    const email = profileEmail.trim();

    if (!name) {
      setFormError('Please tell us what to call you.');
      return;
    }
    if (!rawUser) {
      setFormError('Please choose a username.');
      return;
    }
    if (email && email.indexOf('@') < 1) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    const cleanHandle = rawUser.toLowerCase().replace(/[^a-z0-9_]/g, '');

    const updatedUser: UserProfile = {
      n: name,
      u: cleanHandle,
      age: profileAge.trim() || undefined,
      e: email || undefined,
      avatar: profileAvatar,
      archetype: profileArchetype,
      goal: profileGoal,
      target: profileTarget,
      verifiedAt: state.user?.verifiedAt || (email ? new Date().toISOString() : undefined)
    };

    const nextState = { ...state, user: updatedUser };
    saveState(nextState);
    if (email) {
      saveAccountToRegistry(email, updatedUser, nextState);
    }
    setIsEditingProfile(false);

    if (page === 'start') {
      navigate('/interests');
    } else {
      navigate('/profile');
    }
  };

  const handleAuthSuccess = (res: { email: string; isNewUser: boolean; account?: StoredAccount }) => {
    if (!res.isNewUser && res.account) {
      // Existing user sign-in: Restore entire state!
      const restoredState: UserState = {
        done: res.account.state?.done || {},
        wrong: res.account.state?.wrong || {},
        ans: res.account.state?.ans || 0,
        ok: res.account.state?.ok || 0,
        user: res.account.user,
        int: res.account.state?.int || [],
        streak: res.account.state?.streak || 0,
        bestStreak: res.account.state?.bestStreak || 0,
        lastActiveDate: res.account.state?.lastActiveDate,
        history: res.account.state?.history || {}
      };
      saveState(restoredState);
      setAuthNotificationToast({
        message: `Welcome back, @${res.account.user.u}! Progress restored.`,
        type: 'success'
      });
      navigate('/profile');
    } else {
      // New user sign-up: Pre-fill email and take to onboarding form
      setProfileEmail(res.email);
      setAuthNotificationToast({
        message: `Email ${res.email} verified! Please complete your thinker profile.`,
        type: 'success'
      });
      navigate('/start');
    }
  };

  const handleSignOut = () => {
    if (window.confirm('Sign out of your account? Your progress is saved and will be restored when you sign in again with this email.')) {
      if (state.user?.e) {
        saveAccountToRegistry(state.user.e, state.user, state);
      }
      const resetState: UserState = { done: {}, wrong: {}, ans: 0, ok: 0, int: [] };
      saveState(resetState);
      setPicked({});
      setProfileName('');
      setProfileUsername('');
      setProfileEmail('');
      setAuthNotificationToast({
        message: 'Signed out successfully.',
        type: 'info'
      });
      navigate('/');
    }
  };

  const handleToggleInterest = (shelf: string) => {
    const arr = [...(state.int || [])];
    const idx = arr.indexOf(shelf);
    if (idx < 0) {
      arr.push(shelf);
    } else {
      arr.splice(idx, 1);
    }
    saveState({ ...state, int: arr });
  };

  const handleReset = () => {
    if (window.confirm('Reset all progress and sign out?')) {
      const resetState: UserState = { done: {}, wrong: {}, ans: 0, ok: 0, int: [] };
      saveState(resetState);
      setPicked({});
      navigate('/');
    }
  };

  // Nav page active helper
  const isNavActive = (target: string) => {
    if (target === 'home') return page === 'home';
    if (target === 'books') return page === 'books' || page === 'book';
    if (target === 'library') return page === 'library' || page === 'c';
    if (target === 'dashboard') return page === 'dashboard';
    return false;
  };

  // 1. HEADER
  const renderHeader = () => {
    const currentStreak = getActiveStreak(state.streak, state.lastActiveDate);

    return (
      <header className="hd">
        <Link className="lg" to="/">
          {LG()}
          <span className="lgt">boring<span className="bros">bros</span></span>
        </Link>
        <nav className="dn m">
          <Link className={isNavActive('home') ? 'on' : ''} to="/">Home</Link>
          <Link className={isNavActive('books') ? 'on' : ''} to="/books">Books</Link>
          <Link className={isNavActive('library') ? 'on' : ''} to="/library">Library</Link>
          <Link className={isNavActive('dashboard') ? 'on' : ''} to="/dashboard">Progress</Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {state.user ? (
            <>
              <Link
                className={`streak-pill m ${currentStreak > 0 ? 'lit' : ''}`}
                to="/dashboard"
                title={`${currentStreak} day streak`}
              >
                <span>{currentStreak > 0 ? '🔥' : '⚡'}</span>
                <span>{currentStreak}</span>
              </Link>
              <Link className="m" to="/profile" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }}>
                <span>{state.user.avatar || '🚀'}</span>
                <span>@{state.user.u || state.user.n.split(' ')[0]}</span>
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                className="m"
                onClick={() => {
                  setAuthModalMode('signin');
                  setIsAuthModalOpen(true);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  color: 'var(--ink)'
                }}
              >
                Sign in
              </button>
              <button
                type="button"
                className="bt dk"
                onClick={() => {
                  setAuthModalMode('signup');
                  setIsAuthModalOpen(true);
                }}
                style={{
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 800
                }}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </header>
    );
  };

  // 2. BOTTOM NAV (Mobile)
  const renderBottomNav = () => (
    <nav className="bn m">
      <div>
        <Link className={isNavActive('home') ? 'on' : ''} to="/">Home</Link>
        <Link className={isNavActive('books') ? 'on' : ''} to="/books">Books</Link>
        <Link className={isNavActive('library') ? 'on' : ''} to="/library">Library</Link>
        <Link className={isNavActive('dashboard') ? 'on' : ''} to="/dashboard">Progress</Link>
      </div>
    </nav>
  );

  // 3. HOME VIEW
  const renderHome = () => {
    const nextUnmastered = visibleIdeas.find((c) => !state.done[c.id]);
    const masteredCount = visibleIdeas.filter((c) => state.done[c.id]).length;

    return (
      <>
        <section className="hero">
          {LG(' big')}
          <div className="m" style={{ marginTop: 14 }}>by BoringBroLabs</div>
          <h1>Scroll less.<br />Learn more.</h1>
          <p>Facts that feel wrong, ideas from top books, and the terms founders use. One minute each, with a question on every one.</p>
          <div className="btns">
            <Link
              className="bt dk"
              to={state.user ? (nextUnmastered ? `/c/${nextUnmastered.id}` : '/library') : '/start'}
            >
              {state.user ? (nextUnmastered ? 'Continue learning' : 'Browse library') : 'Get started'}
            </Link>
            <Link className="bt" to="/library">Browse library</Link>
          </div>
        </section>

        {state.user && (
          <div className="panel row">
            <div>
              <div className="m mu">Your progress</div>
              <div className="stat">{masteredCount} / {visibleIdeas.length}</div>
            </div>
            <Link className="bt" to="/dashboard">View</Link>
          </div>
        )}

        <h2>Pick a shelf</h2>
        <div className="tiles">
          {availableShelves.map((x) => (
            <Link
              key={x}
              className="tile"
              to={`/library/${x}`}
              style={{ background: CL[x][0], color: CL[x][1] }}
            >
              <span className="m">{visibleIdeas.filter((c) => c.s === x).length} concepts</span>
              {x}
            </Link>
          ))}
        </div>

        <h2>How it works</h2>
        <div className="panel">
          <b>1. Pick a concept.</b><br />
          <span className="mu">Each one names the book or source it comes from.</span>
        </div>
        <div className="panel">
          <b>2. Read it in a minute.</b><br />
          <span className="mu">Plain words and one example.</span>
        </div>
        <div className="panel">
          <b>3. Answer right there.</b><br />
          <span className="mu">Get it wrong, see why, and try again.</span>
        </div>

        <p className="m mu" style={{ marginTop: 30 }}>An app that tells you when to stop. Learn one idea, then use it.</p>
        <div className="lock">
          {LG()}
          <b>BoringBro<span>Labs</span></b>
        </div>
      </>
    );
  };

  // 4. LIBRARY VIEW
  const renderLibrary = () => {
    const activeShelf = param;
    const q = searchQuery.toLowerCase().trim();

    const filtered = visibleIdeas.filter((c) => {
      const matchShelf = !activeShelf || c.s === activeShelf;
      const matchQuery = !q || (c.t + ' ' + c.b + ' ' + c.s).toLowerCase().includes(q);
      return matchShelf && matchQuery;
    });

    return (
      <>
        <h1 style={{ marginTop: 8 }}>Library</h1>

        {/* Featured Curricula Grid */}
        <div className="bookshelf-stage" style={{ margin: '18px 0 24px' }}>
          <div className="m row" style={{ marginBottom: 12 }}>
            <span className="mu" style={{ fontWeight: 700, letterSpacing: '0.05em' }}>FEATURED BOOK MASTERCLASSES</span>
            <Link to="/books" style={{ fontWeight: 700, fontSize: 13, color: 'var(--ac-text)' }}>View Bookshelf (4) →</Link>
          </div>

          <div className="bookshelf-scroll-track">
            {ALL_BOOKS.map((book, bookIndex) => renderPaperBook(book, bookIndex))}
          </div>

          <div className="bookshelf-ledge" />
        </div>

        <label htmlFor="q" className="m mu" style={{ display: 'block', marginTop: 18 }}>Search</label>
        <input
          id="q"
          className="s"
          placeholder="A concept or a book"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="chips">
          <Link className={!activeShelf ? 'on' : ''} to="/library">All</Link>
          <Link to="/book/the-mom-test" style={{ background: '#FF4B1F', color: '#0B0B0C', fontWeight: 700 }}>📖 The Mom Test (27)</Link>
          <Link to="/book/positioning" style={{ background: '#1B1BC8', color: '#F3F0E8', fontWeight: 700 }}>📖 Positioning (27)</Link>
          <Link to="/book/steal-like-an-artist" style={{ background: '#151517', color: '#FCAC04', fontWeight: 700, border: '1px solid #FCAC04' }}>📖 Steal Like an Artist (23)</Link>
          <Link to="/book/hooked" style={{ background: '#FFC21E', color: '#0B0B0C', fontWeight: 700 }}>📖 Hooked (34)</Link>
          <Link to="/book/traction" style={{ background: '#0F5C3B', color: '#F3F0E8', fontWeight: 700 }}>📖 Traction (30)</Link>
          <Link to="/book/the-cold-start-problem" style={{ background: '#5B1A58', color: '#F3F0E8', fontWeight: 700 }}>📖 Cold Start (23)</Link>
          {availableShelves.map((x) => (
            <Link key={x} className={activeShelf === x ? 'on' : ''} to={`/library/${x}`}>
              {x}
            </Link>
          ))}
        </div>

        <div className="grid">
          {filtered.length > 0 ? (
            filtered.map((c) => {
              const [bg, fg] = CL[c.s];
              return (
                <Link
                  key={c.id}
                  className="cc"
                  to={`/c/${c.id}`}
                  style={{ background: bg, color: fg }}
                >
                  {renderArt(c.s, c.id)}
                  <div className="m row">
                    <span>{c.s}</span>
                    <span>{getConceptStatus(c)}</span>
                  </div>
                  <h3>{c.t}</h3>
                  <div className="m">{c.b}</div>
                </Link>
              );
            })
          ) : (
            <p className="mu">No concept matches that.</p>
          )}
        </div>
      </>
    );
  };

  // 5. CONCEPT DETAIL VIEW (2 columns, sticky quiz)
  const renderConcept = (id: string) => {
    const concept = visibleIdeas.find((x) => x.id === id) || visibleIdeas[0];
    if (!concept) return <p className="mu">Concept not found.</p>;

    const bookEntry = allBookConceptsMap.get(concept.id);
    const bookConcept = bookEntry?.concept;
    const bookMeta = bookEntry?.book;
    const idx = visibleIdeas.indexOf(concept);
    const prevConcept = visibleIdeas[idx - 1];
    const nextConcept = visibleIdeas[idx + 1];
    const [bg, fg] = CL[concept.s];

    const pickIdx = picked[concept.id];
    const isAnswered = pickIdx !== undefined;

    return (
      <>
        <div className="chead" style={{ background: bg, color: fg }}>
          {renderArt(concept.s, concept.id)}
          <div className="m row">
            <span className="chip">{concept.s}</span>
            <span>{getConceptStatus(concept)}</span>
          </div>
          <h1>{concept.t}</h1>
          <div className="m">
            from {concept.b}
            {bookMeta && (
              <span style={{ marginLeft: 8 }}>
                · <Link to={`/book/${bookMeta.id}`} style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 700 }}>Curriculum View →</Link>
              </span>
            )}
          </div>
        </div>

        <div className="cols">
          <div className="ci">
            <div className="panel concept-schematic-panel">
              <div className="m mu" style={{ marginBottom: 12 }}>Visual Schematic & Mental Model</div>
              <ConceptSchematic id={concept.id} shelf={concept.s} />
            </div>

            <div className="panel">
              <div className="m mu">The idea</div>
              <p style={{ margin: '8px 0 0', fontSize: 19, lineHeight: 1.6 }}>{concept.d}</p>
            </div>
            <div className="panel">
              <div className="m mu">Example</div>
              <p style={{ margin: '8px 0 0', fontSize: 18, whiteSpace: 'pre-line' }}>{concept.e}</p>
            </div>

            {bookConcept?.underlying_concepts && bookConcept.underlying_concepts.length > 0 && (
              <div className="panel">
                <div className="m mu">Underlying Mental Models & Biases</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                  {bookConcept.underlying_concepts.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 10px',
                        background: 'var(--bg)',
                        border: '1px solid var(--ln)',
                        borderRadius: 16,
                        fontSize: 13,
                        fontFamily: 'IBM Plex Mono'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {bookConcept?.application && (
              <div className="panel" style={{ borderLeft: '4px solid var(--ac)' }}>
                <div className="m mu" style={{ color: 'var(--ac-text)', fontWeight: 700 }}>⚡ Field Application Task</div>
                <p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>{bookConcept.application}</p>
              </div>
            )}
          </div>

          <div className="cq">
            <div className="panel" id="qz">
              <div className="m mu">Your turn</div>

              <div className="quiz-schematic">
                <ConceptSchematic id={concept.id} shelf={concept.s} isCompact={true} />
              </div>

              <h3 className="q">{concept.q}</h3>
              {concept.o.map((o, i) => (
                <button
                  key={i}
                  className={`op${isAnswered ? (i === concept.k ? ' ok' : i === pickIdx ? ' no' : '') : ''}`}
                  disabled={isAnswered}
                  onClick={() => handlePickAnswer(concept.id, i)}
                >
                  <b className="m">{'ABCD'[i]}</b>
                  <span>{o}</span>
                </button>
              ))}

              {isAnswered && (
                <>
                  <div className="fb">
                    <b>{pickIdx === concept.k ? 'Correct. ' : 'Not quite. '}</b>
                    {concept.x}
                  </div>
                  {pickIdx === concept.k ? (
                    <span className="stamp m">Mastered</span>
                  ) : (
                    <button className="bt" onClick={() => handleRetry(concept.id)}>
                      Try again
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="cb btns">
            {prevConcept ? (
              <Link className="bt" to={`/c/${prevConcept.id}`}>Previous</Link>
            ) : null}
            {nextConcept ? (
              <Link className="bt dk" to={`/c/${nextConcept.id}`}>Next concept</Link>
            ) : (
              <Link className="bt dk" to="/dashboard">See progress</Link>
            )}
          </div>
        </div>
      </>
    );
  };

  // 6. DASHBOARD VIEW
  const renderDashboard = () => {
    const masteredCount = visibleIdeas.filter((c) => state.done[c.id]).length;
    const upNext = visibleIdeas.find((c) => !state.done[c.id]);
    const reviewList = visibleIdeas.filter((c) => state.wrong[c.id]);

    return (
      <>
        {/* Profile Identity Bar */}
        {state.user && (
          <div className="panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: 40, background: 'var(--bg)', borderRadius: 18, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--ink)', flex: 'none' }}>
                {state.user.avatar || '🚀'}
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800 }}>
                  {state.user.n} <span style={{ color: 'var(--ac-text)', fontSize: 18 }}>@{state.user.u}</span>
                </div>
                <div className="m mu" style={{ marginTop: 3 }}>
                  {state.user.archetype || 'The Founder'} {state.user.age ? `· Age ${state.user.age}` : ''} · {state.user.goal || 'Startup & Focus'}
                </div>
              </div>
            </div>
            <Link className="bt" to="/profile">Edit Profile</Link>
          </div>
        )}

        <h1 style={{ marginTop: 18 }}>
          {state.user ? `Your progress, @${state.user.u}.` : 'Your progress.'}
        </h1>

        {/* Activity & Streak Tracker */}
        <ActivityTracker
          streak={state.streak}
          bestStreak={state.bestStreak}
          lastActiveDate={state.lastActiveDate}
          history={state.history}
          target={state.user?.target}
        />

        <div className="tiles" style={{ marginTop: 16 }}>
          <div className="panel" style={{ margin: 0 }}>
            <div className="m mu">Mastered</div>
            <div className="stat">{masteredCount}/{visibleIdeas.length}</div>
          </div>
          <div className="panel" style={{ margin: 0 }}>
            <div className="m mu">Accuracy</div>
            <div className="stat">{state.ans ? Math.round((state.ok / state.ans) * 100) + '%' : '-'}</div>
          </div>
        </div>

        <div className="panel">
          <div className="m mu">{upNext ? 'Up next' : 'All done'}</div>
          <h3 style={{ fontSize: 30, margin: '8px 0 14px' }}>
            {upNext ? upNext.t : 'Every concept mastered'}
          </h3>
          {upNext && (
            <Link className="bt dk" to={`/c/${upNext.id}`}>Open concept</Link>
          )}
        </div>

        <h2>By shelf</h2>
        <div className="panel">
          {availableShelves.map((x) => {
            const shelfTotal = visibleIdeas.filter((c) => c.s === x);
            const shelfMastered = shelfTotal.filter((c) => state.done[c.id]).length;
            const pct = shelfTotal.length ? (shelfMastered / shelfTotal.length) * 100 : 0;
            return (
              <div key={x} style={{ margin: '14px 0' }}>
                <div className="row m">
                  <span>{x}</span>
                  <span>{shelfMastered} / {shelfTotal.length}</span>
                </div>
                <div className="bar">
                  <i style={{ width: `${pct}%`, background: CL[x][0] }} />
                </div>
              </div>
            );
          })}
        </div>

        <h2>Review queue</h2>
        <div className="panel">
          {reviewList.length > 0 ? (
            reviewList.map((c) => (
              <Link key={c.id} className="row" style={{ padding: '10px 0' }} to={`/c/${c.id}`}>
                <span>{c.t}</span>
                <span className="m mu">Retry</span>
              </Link>
            ))
          ) : (
            <span className="mu">Nothing to review yet.</span>
          )}
        </div>

        <div className="btns">
          <Link className="bt" to="/profile">Thinker Passport</Link>
          <Link className="bt" to="/interests">Edit interests</Link>
          <button className="bt" onClick={handleReset}>Reset</button>
        </div>
      </>
    );
  };

  // 7. START / SIGN UP VIEW (Step 1)
  const renderStart = () => (
    <>
      <h1 style={{ marginTop: 8 }}>
        Create your <span style={{ background: 'var(--ac)', color: '#0B0B0C', padding: '0 .1em' }}>profile.</span>
      </h1>
      <p className="mu">Step 1 of 2. Choose your handle, identity, and focus. Or sign in with email to restore progress.</p>

      {/* Email Sign-In Callout */}
      <div
        style={{
          background: 'var(--cd)',
          border: '1.5px solid var(--ln)',
          borderRadius: 14,
          padding: '16px 18px',
          margin: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>📧 Already registered on BoringBros?</span>
          </div>
          <div className="mu" style={{ fontSize: 13, marginTop: 2 }}>
            Sign in with your email to restore your mastered concepts, streak, and notes.
          </div>
        </div>
        <button
          type="button"
          className="bt dk"
          onClick={() => {
            setAuthModalMode('signin');
            setIsAuthModalOpen(true);
          }}
          style={{ padding: '8px 16px', fontSize: 13 }}
        >
          Sign In with Email →
        </button>
      </div>

      <form onSubmit={handleSaveProfile} style={{ marginTop: 20 }}>
        {/* Username */}
        <label className="m mu" htmlFor="un" style={{ display: 'block' }}>Username</label>
        <div style={{ position: 'relative' }}>
          <input
            id="un"
            className="s"
            placeholder="e.g. founder, manikanta"
            value={profileUsername}
            onChange={(e) => setProfileUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
          />
        </div>
        {profileUsername && (
          <div className="m" style={{ color: 'var(--ac-text)', marginTop: -6, marginBottom: 12 }}>
            Your handle: @{profileUsername.toLowerCase().replace(/[^a-z0-9_]/g, '')}
          </div>
        )}

        {/* Name / Display Name */}
        <label className="m mu" htmlFor="nm" style={{ display: 'block' }}>What should we call you?</label>
        <input
          id="nm"
          className="s"
          autoComplete="name"
          placeholder="e.g. Mani or Sai"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
        />

        {/* Age */}
        <label className="m mu" htmlFor="ag" style={{ display: 'block' }}>Age</label>
        <input
          id="ag"
          type="number"
          min="10"
          max="120"
          className="s"
          placeholder="e.g. 24"
          value={profileAge}
          onChange={(e) => setProfileAge(e.target.value)}
        />

        {/* Email */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
          <label className="m mu" htmlFor="em" style={{ display: 'block', margin: 0 }}>
            Email
          </label>
          {profileEmail ? (
            <button
              type="button"
              onClick={() => {
                setAuthModalMode('signup');
                setIsAuthModalOpen(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--ac-text)',
                fontSize: 12,
                fontWeight: 700,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Verify with 6-digit code →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAuthModalMode('signup');
                setIsAuthModalOpen(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--ac-text)',
                fontSize: 12,
                fontWeight: 700,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Sign up with verified email first →
            </button>
          )}
        </div>
        <input
          id="em"
          type="email"
          className="s"
          autoComplete="email"
          placeholder="you@domain.com"
          value={profileEmail}
          onChange={(e) => setProfileEmail(e.target.value)}
        />

        {/* Thinker Archetype */}
        <label className="m mu" style={{ display: 'block', marginTop: 14 }}>Choose Your Thinker Archetype</label>
        <div className="avatar-grid">
          {ARCHETYPES.map((a) => (
            <div
              key={a.id}
              className={`avatar-card ${profileAvatar === a.icon ? 'on' : ''}`}
              onClick={() => {
                setProfileAvatar(a.icon);
                setProfileArchetype(a.label);
              }}
            >
              <span className="ico">{a.icon}</span>
              <span className="lbl">{a.label}</span>
              <span className="sub">{a.desc}</span>
            </div>
          ))}
        </div>

        {/* Primary Ambition */}
        <label className="m mu" htmlFor="gl" style={{ display: 'block', marginTop: 14 }}>Primary Focus / Ambition</label>
        <select
          id="gl"
          className="s"
          value={profileGoal}
          onChange={(e) => setProfileGoal(e.target.value)}
        >
          {FOCUS_GOALS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        {/* Daily Mastery Target */}
        <label className="m mu" style={{ display: 'block', marginTop: 10 }}>Daily Mastery Target</label>
        <div className="opt-chips">
          {DAILY_TARGETS.map((t) => (
            <button
              key={t}
              type="button"
              className={`opt-chip ${profileTarget === t ? 'on' : ''}`}
              onClick={() => setProfileTarget(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {formError && <p className="m" style={{ color: '#c5221f', margin: '14px 0' }}>{formError}</p>}

        <button type="submit" className="bt dk" style={{ marginTop: 14 }}>
          Continue to Step 2 (Pick Interests)
        </button>
      </form>
    </>
  );

  // 8. PROFILE PASSPORT / EDIT VIEW
  const renderProfile = () => {
    if (!state.user) {
      return null;
    }

    if (isEditingProfile) {
      return (
        <>
          <h1 style={{ marginTop: 8 }}>
            Edit your <span style={{ background: 'var(--ac)', color: '#0B0B0C', padding: '0 .1em' }}>profile.</span>
          </h1>
          <p className="mu">Update your username, age, persona, and learning targets.</p>

          <form onSubmit={handleSaveProfile} style={{ marginTop: 20 }}>
            {/* Username */}
            <label className="m mu" htmlFor="pe-un" style={{ display: 'block' }}>Username</label>
            <input
              id="pe-un"
              className="s"
              placeholder="e.g. founder, manikanta"
              value={profileUsername}
              onChange={(e) => setProfileUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
            />

            {/* Name / Display Name */}
            <label className="m mu" htmlFor="pe-nm" style={{ display: 'block' }}>What should we call you?</label>
            <input
              id="pe-nm"
              className="s"
              placeholder="e.g. Mani or Sai"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
            />

            {/* Age */}
            <label className="m mu" htmlFor="pe-ag" style={{ display: 'block' }}>Age</label>
            <input
              id="pe-ag"
              type="number"
              min="10"
              max="120"
              className="s"
              placeholder="e.g. 24"
              value={profileAge}
              onChange={(e) => setProfileAge(e.target.value)}
            />

            {/* Email */}
            <label className="m mu" htmlFor="pe-em" style={{ display: 'block' }}>Email</label>
            <input
              id="pe-em"
              type="email"
              className="s"
              placeholder="you@domain.com"
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
            />

            {/* Thinker Archetype */}
            <label className="m mu" style={{ display: 'block', marginTop: 14 }}>Thinker Archetype</label>
            <div className="avatar-grid">
              {ARCHETYPES.map((a) => (
                <div
                  key={a.id}
                  className={`avatar-card ${profileAvatar === a.icon ? 'on' : ''}`}
                  onClick={() => {
                    setProfileAvatar(a.icon);
                    setProfileArchetype(a.label);
                  }}
                >
                  <span className="ico">{a.icon}</span>
                  <span className="lbl">{a.label}</span>
                  <span className="sub">{a.desc}</span>
                </div>
              ))}
            </div>

            {/* Primary Ambition */}
            <label className="m mu" htmlFor="pe-gl" style={{ display: 'block' }}>Primary Ambition</label>
            <select
              id="pe-gl"
              className="s"
              value={profileGoal}
              onChange={(e) => setProfileGoal(e.target.value)}
            >
              {FOCUS_GOALS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            {/* Daily Mastery Target */}
            <label className="m mu" style={{ display: 'block' }}>Daily Mastery Target</label>
            <div className="opt-chips">
              {DAILY_TARGETS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`opt-chip ${profileTarget === t ? 'on' : ''}`}
                  onClick={() => setProfileTarget(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            {formError && <p className="m" style={{ color: '#c5221f', margin: '14px 0' }}>{formError}</p>}

            <div className="btns" style={{ marginTop: 24 }}>
              <button type="submit" className="bt dk">Save Changes</button>
              <button type="button" className="bt" onClick={() => setIsEditingProfile(false)}>Cancel</button>
            </div>
          </form>
        </>
      );
    }

    const masteredCount = visibleIdeas.filter((c) => state.done[c.id]).length;

    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h1 style={{ margin: 0 }}>Thinker Passport</h1>
            <p className="mu" style={{ margin: '4px 0 0' }}>Official biometric credential and cognitive mastery record.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="bt" onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
          </div>
        </div>

        {/* Physical Biometric Passport Booklet */}
        <ThinkerPassport
          user={state.user}
          masteredCount={masteredCount}
          totalConcepts={visibleIdeas.length}
          streak={getActiveStreak(state.streak, state.lastActiveDate)}
          bestStreak={Math.max(state.bestStreak || 0, getActiveStreak(state.streak, state.lastActiveDate))}
          books={ALL_BOOKS}
          doneMap={state.done}
          onEditProfile={() => setIsEditingProfile(true)}
          onSignOut={handleSignOut}
          onSwitchAccount={() => {
            setAuthModalMode('signin');
            setIsAuthModalOpen(true);
          }}
          onConnectEmail={() => {
            setAuthModalMode('signup');
            setIsAuthModalOpen(true);
          }}
        />

        {/* Activity & Streak Tracker */}
        <div style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>Daily Rhythm &amp; Momentum</h2>
          <ActivityTracker
            streak={state.streak}
            bestStreak={state.bestStreak}
            lastActiveDate={state.lastActiveDate}
            history={state.history}
            target={state.user?.target}
          />
        </div>

        <div className="btns" style={{ marginTop: 24 }}>
          <Link className="bt dk" to="/dashboard">Go to Dashboard</Link>
          <button type="button" className="bt" onClick={handleSyncCloud}>
            {syncStatus || '☁️ Backup to R2'}
          </button>
          <button type="button" className="bt" onClick={() => { setAuthModalMode('signin'); setIsAuthModalOpen(true); }}>
            Switch Account
          </button>
          <button className="bt" onClick={handleSignOut}>Sign Out</button>
        </div>
      </>
    );
  };

  // 9. INTERESTS SELECTION VIEW
  const renderInterests = () => {
    const selected = state.int || [];

    return (
      <>
        <h1 style={{ marginTop: 8 }}>
          What excites <span style={{ background: 'var(--ac)', color: '#0B0B0C', padding: '0 .1em' }}>you most?</span>
        </h1>
        <p className="mu">Select your primary focus shelves. All 7 shelves are always fully accessible in the Library.</p>

        <div style={{ display: 'flex', gap: 10, margin: '14px 0', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="bt"
            onClick={() => saveState({ ...state, int: [...SH] })}
          >
            Select All 7 Shelves
          </button>
          <button
            type="button"
            className="bt"
            onClick={() => saveState({ ...state, int: [] })}
          >
            Clear Focus
          </button>
        </div>

        <div className="tiles" style={{ margin: '16px 0' }}>
          {SH.map((x) => {
            const on = selected.includes(x);
            const [bg, fg] = CL[x];
            return (
              <button
                key={x}
                type="button"
                className="tile"
                onClick={() => handleToggleInterest(x)}
                style={{
                  border: 0,
                  textAlign: 'left',
                  background: bg,
                  color: fg,
                  ...(on ? { outline: '4px solid var(--ink)', outlineOffset: 3 } : { opacity: 0.75 })
                }}
              >
                <span className="m">{on ? '★ Focus' : 'Tap to focus'}</span>
                {x}
              </button>
            );
          })}
        </div>

        <div className="btns" style={{ marginTop: 20 }}>
          <Link className="bt dk" to="/library">Explore All Concepts</Link>
          <Link className="bt" to="/dashboard">Go to Dashboard</Link>
        </div>
      </>
    );
  };

  // Helper: Render tactile paper book volume
  const renderPaperBook = (book: BookDefinition, bookIndex: number) => {
    const isMom = book.id.startsWith('the-mom-test');
    const isPos = book.id.startsWith('positioning');
    const isSla = book.id.startsWith('steal-like-an-artist');
    const isHook = book.id.startsWith('hooked');
    const isTrac = book.id.startsWith('traction');
    const isCsp = book.id.startsWith('the-cold-start') || book.id.startsWith('the_cold') || book.id.startsWith('cold-start');
    const bookIdeas = visibleIdeas.filter(c =>
      isMom
        ? c.b === 'The Mom Test'
        : isPos
        ? c.b === 'Positioning'
        : isSla
        ? c.b === 'Steal Like an Artist'
        : isHook
        ? (c.b === 'Hooked' && c.id !== 'hook-model')
        : isTrac
        ? c.b === 'Traction'
        : c.b === 'The Cold Start Problem'
    );
    const masteredCount = bookIdeas.filter(c => state.done[c.id]).length;
    const total = bookIdeas.length || (isMom || isPos ? 27 : isSla ? 23 : isHook ? 34 : isTrac ? 30 : 23);
    const pct = Math.round((masteredCount / total) * 100);
    const isCompleted = challengeSubmitted[book.id];
    const nextConcept = bookIdeas.find(c => !state.done[c.id]);

    // Authentic Paper Cover Palette
    const coverBg = isMom ? '#FF4B1F' : isPos ? '#1B1BC8' : isSla ? '#151517' : isHook ? '#FFC21E' : isTrac ? '#0F5C3B' : '#5B1A58';
    const coverFg = isMom ? '#0B0B0C' : isPos ? '#F3F0E8' : isSla ? '#FCAC04' : isHook ? '#0B0B0C' : '#F3F0E8';
    const ribbonBg = isMom ? '#0B0B0C' : isPos ? '#FCAC04' : isSla ? '#FCAC04' : isHook ? '#0B0B0C' : '#FCAC04';
    const ribbonFg = isMom ? '#FFF' : isPos ? '#0B0B0C' : isSla ? '#0B0B0C' : isHook ? '#FFF' : '#0B0B0C';
    const volNumber = String(bookIndex + 1).padStart(2, '0');

    return (
      <div
        key={book.id}
        className="paper-book"
        style={{
          background: coverBg,
          color: coverFg
        }}
      >
        {/* Silk Bookmark Ribbon */}
        <div
          className="paper-book-ribbon"
          style={{
            background: ribbonBg,
            color: ribbonFg
          }}
          title={`${pct}% Mastered`}
        >
          {isCompleted ? '★' : `${pct}%`}
        </div>

        {/* Book Top: Series & Category */}
        <div>
          <div className="paper-book-series">
            VOL. {volNumber} · {book.category}
          </div>

          <h2 className="paper-book-title" style={{ color: coverFg }}>
            {book.title}
          </h2>

          <div className="paper-book-author">
            {book.author}
          </div>

          {/* Book Cover Motif Box */}
          <div className="paper-book-motif">
            <div className="m" style={{ fontSize: 11, fontWeight: 700, opacity: 0.95 }}>
              {book.learning_path.length} Modules · {total} Mental Models
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.45, opacity: 0.88 }}>
              {book.purpose}
            </p>
          </div>
        </div>

        {/* Book Bottom: Reading Progress & Open Actions */}
        <div className="paper-book-progress">
          <div className="m row" style={{ fontSize: 11, fontWeight: 700, marginBottom: 6 }}>
            <span>Reading Progress</span>
            <span>{masteredCount}/{total} ({pct}%)</span>
          </div>

          {/* Minimalist Inset Paper Progress Track */}
          <div style={{ background: 'rgba(0,0,0,0.22)', height: 6, borderRadius: 3, overflow: 'hidden' }}>
            <div
              style={{
                background: isPos || isSla || isTrac || isCsp ? '#FCAC04' : '#0B0B0C',
                height: '100%',
                width: `${pct}%`,
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: 8, marginTop: 14 }}>
            <Link
              to={`/book/${book.id}`}
              className="paper-book-btn"
              style={{
                background: isMom || isHook ? '#0B0B0C' : '#FCAC04',
                color: isMom || isHook ? '#FFF' : '#0B0B0C',
                textDecoration: 'none'
              }}
            >
              {nextConcept ? `Read: ${nextConcept.t.length > 20 ? nextConcept.t.slice(0, 18) + '...' : nextConcept.t} →` : 'Open Curriculum →'}
            </Link>

            <Link
              to={`/book/${book.id}#final-challenge`}
              style={{
                fontSize: 12,
                fontFamily: 'IBM Plex Mono',
                fontWeight: 700,
                textAlign: 'center',
                padding: '4px',
                color: 'inherit',
                textDecoration: 'underline',
                opacity: 0.85
              }}
            >
              {isCompleted ? '✓ Capstone Lab Done' : 'Open Capstone Lab'}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // 10. BOOKS DIRECTORY VIEW (/books)
  const renderBooks = () => {
    return (
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="chead" style={{ background: '#151517', color: '#FCAC04', padding: '36px 30px', borderRadius: 16 }}>
          <div className="m row" style={{ marginBottom: 12 }}>
            <span className="chip" style={{ background: '#FCAC04', color: '#0B0B0C', fontWeight: 800 }}>MASTERCLASSES</span>
            <span style={{ color: 'var(--mu)', fontWeight: 600 }}>Interactive Startup & Strategy Curricula</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', margin: '0 0 10px', letterSpacing: '-0.03em', color: '#FFF' }}>
            The Bookshelf
          </h1>
          <p style={{ fontSize: 18, margin: '0 0 20px', lineHeight: 1.5, opacity: 0.95, color: '#E4E4E7' }}>
            Foundational books deconstructed into bite-sized mental models, active recall questions, and real-world capstone labs.
          </p>
          <div className="m" style={{ color: 'var(--mu)' }}>
            All book concepts are integrated into the Startups shelf and tracked in your daily streak.
          </div>
        </div>

        {/* Horizontal Bookshelf Stage */}
        <div className="bookshelf-stage">
          <div className="m row" style={{ marginBottom: 14 }}>
            <span style={{ fontWeight: 800, letterSpacing: '0.08em', color: 'var(--ink)' }}>
              THE MASTERCLASS EDITIONS · 4 VOLUMES
            </span>
            <span className="mu" style={{ fontSize: 12 }}>
              Browse horizontally across the shelf →
            </span>
          </div>

          <div className="bookshelf-scroll-track">
            {ALL_BOOKS.map((book, bookIndex) => renderPaperBook(book, bookIndex))}
          </div>

          {/* Solid Architectural Bookshelf Ledge */}
          <div className="bookshelf-ledge" />
        </div>
      </div>
    );
  };

  // 11. DYNAMIC BOOK CURRICULUM VIEW (/book/:id)
  const renderBook = (bookId: string) => {
    const normalizedId = bookId === 'positioning'
      ? 'positioning-the-battle-for-your-mind'
      : (bookId === 'the_cold_start_problem' || bookId === 'cold-start')
      ? 'the-cold-start-problem'
      : bookId;
    const book = BOOKS_MAP[normalizedId] || MOM_TEST_BOOK;
    const isMom = book.id.startsWith('the-mom-test');
    const isPos = book.id.startsWith('positioning');
    const isSla = book.id.startsWith('steal-like-an-artist');
    const isHook = book.id.startsWith('hooked');
    const isTrac = book.id.startsWith('traction');
    const isCsp = book.id.startsWith('the-cold-start') || book.id.startsWith('the_cold') || book.id.startsWith('cold-start');
    const bookIdeas = visibleIdeas.filter((c) =>
      isMom
        ? c.b === 'The Mom Test'
        : isPos
        ? c.b === 'Positioning'
        : isSla
        ? c.b === 'Steal Like an Artist'
        : isHook
        ? (c.b === 'Hooked' && c.id !== 'hook-model')
        : isTrac
        ? c.b === 'Traction'
        : c.b === 'The Cold Start Problem'
    );
    const bookMasteredCount = bookIdeas.filter((c) => state.done[c.id]).length;
    const pct = bookIdeas.length ? Math.round((bookMasteredCount / bookIdeas.length) * 100) : 0;
    const nextConcept = bookIdeas.find((c) => !state.done[c.id]);
    const heroBg = isMom ? '#FF4B1F' : isPos ? '#1B1BC8' : isSla ? '#151517' : isHook ? '#FFC21E' : isTrac ? '#0F5C3B' : '#5B1A58';
    const heroFg = isMom ? '#0B0B0C' : isPos ? '#F3F0E8' : isSla ? '#FCAC04' : isHook ? '#0B0B0C' : '#F3F0E8';
    const prefix = isMom ? 'mom-' : isPos ? 'pos-' : isSla ? 'sla-' : isHook ? 'hook-' : isTrac ? 'trac-' : 'csp-';
    const isDoneLab = challengeSubmitted[book.id];
    const userAnswers = challengeAnswers[book.id] || {};
    const currentModuleTab = activeModuleByBook[book.id] || 'all';
    const displayedModules = currentModuleTab === 'all'
      ? book.learning_path
      : book.learning_path.filter((m) => m.id === currentModuleTab);

    return (
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        {/* Book Hero */}
        <div className="chead" style={{ background: heroBg, color: heroFg, padding: '36px 30px', borderRadius: 16 }}>
          <div className="m row" style={{ marginBottom: 12 }}>
            <span className="chip" style={{ background: isMom || isHook ? '#0B0B0C' : '#FCAC04', color: isMom || isHook ? '#FFF' : '#0B0B0C', fontWeight: 800 }}>
              CURRICULUM
            </span>
            <span style={{ fontWeight: 700 }}>{book.author} · {book.category}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', margin: '0 0 10px', letterSpacing: '-0.03em' }}>
            {book.title}
          </h1>
          <p style={{ fontSize: 18, margin: '0 0 20px', lineHeight: 1.5, opacity: 0.95 }}>
            {book.purpose}
          </p>

          {/* Curriculum Progress Gauge */}
          <div style={{ background: 'rgba(0,0,0,0.14)', padding: '16px 20px', borderRadius: 12, maxWidth: 520 }}>
            <div className="m row" style={{ fontWeight: 800, marginBottom: 8 }}>
              <span>Curriculum Mastery</span>
              <span>{bookMasteredCount} / {bookIdeas.length} concepts ({pct}%)</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.25)', height: 10, borderRadius: 5, overflow: 'hidden' }}>
              <div
                style={{
                  background: '#FCAC04',
                  height: '100%',
                  width: `${pct}%`,
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>

          <div className="btns" style={{ marginTop: 22 }}>
            {nextConcept ? (
              <Link className="bt dk" to={`/c/${nextConcept.id}`} style={{ background: isMom || isHook ? '#0B0B0C' : '#FCAC04', color: isMom || isHook ? '#FFF' : '#0B0B0C' }}>
                Continue: {nextConcept.t} →
              </Link>
            ) : (
              <a className="bt dk" href="#final-challenge" style={{ background: isMom || isHook ? '#0B0B0C' : '#FCAC04', color: isMom || isHook ? '#FFF' : '#0B0B0C' }}>
                Complete Final Challenge Lab ★
              </a>
            )}
            <Link className="bt" to="/books" style={{ background: 'rgba(255,255,255,0.15)', color: 'inherit' }}>
              All Books
            </Link>
          </div>
        </div>

        {/* Content Policy & Educational Note */}
        <div
          style={{
            margin: '20px 0',
            padding: '14px 18px',
            background: 'var(--cd)',
            border: '1px solid var(--ln)',
            borderLeft: `4px solid ${heroBg}`,
            borderRadius: 10,
            fontSize: 13,
            lineHeight: 1.5
          }}
          className="mu"
        >
          <b style={{ color: 'var(--ink)' }}>Educational Curriculum:</b> {book.content_policy}
        </div>

        {/* Chapter Ribbon & Learning Modules Navigation */}
        <div id="modules" style={{ marginTop: 36, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
            <div>
              <div className="m" style={{ color: heroBg, fontWeight: 800, marginBottom: 4, letterSpacing: '.08em' }}>
                MASTERCLASS CURRICULUM
              </div>
              <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '-0.02em' }}>
                Chapters & Mental Models
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                type="button"
                onClick={() => setActiveModuleByBook((prev) => ({ ...prev, [book.id]: 'all' }))}
                style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: 'IBM Plex Mono',
                  fontWeight: 700,
                  background: currentModuleTab === 'all' ? heroBg : 'var(--cd)',
                  color: currentModuleTab === 'all' ? heroFg : 'var(--ink)',
                  border: `1.5px solid ${currentModuleTab === 'all' ? heroBg : 'var(--ln)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                All Chapters ({book.learning_path.length})
              </button>
              <a
                href="#final-challenge"
                style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: 'IBM Plex Mono',
                  fontWeight: 700,
                  background: '#FCAC04',
                  color: '#0B0B0C',
                  border: '1.5px solid #FCAC04',
                  textDecoration: 'none'
                }}
              >
                Capstone Lab ★
              </a>
            </div>
          </div>

          {/* Horizontal Chapter Track */}
          <div className="curriculum-nav-track">
            <button
              type="button"
              className={`curriculum-nav-pill ${currentModuleTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveModuleByBook((prev) => ({ ...prev, [book.id]: 'all' }))}
              style={{
                background: currentModuleTab === 'all' ? heroBg : 'var(--cd)',
                color: currentModuleTab === 'all' ? heroFg : 'inherit',
                borderColor: currentModuleTab === 'all' ? heroBg : 'var(--ln)'
              }}
            >
              <span>📖 All Chapters</span>
              <span style={{ opacity: 0.8, fontSize: 11 }}>({bookIdeas.length})</span>
            </button>
            {book.learning_path.map((module, modIdx) => {
              const isSelected = currentModuleTab === module.id;
              const modConceptIds = module.concepts.map((c) => `${prefix}${c.id.replace(/_/g, '-')}`);
              const modMastered = modConceptIds.filter((id) => state.done[id]).length;
              const isComplete = modMastered === modConceptIds.length && modConceptIds.length > 0;
              const shortTitle = module.category.replace(/^[0-9]+\.\s*/, '');

              return (
                <button
                  key={module.id}
                  type="button"
                  className={`curriculum-nav-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveModuleByBook((prev) => ({ ...prev, [book.id]: module.id }))}
                  style={{
                    background: isSelected ? heroBg : 'var(--cd)',
                    color: isSelected ? heroFg : 'inherit',
                    borderColor: isSelected ? heroBg : 'var(--ln)'
                  }}
                >
                  <span style={{ opacity: 0.85, fontFamily: 'IBM Plex Mono', fontSize: 11 }}>Ch {modIdx + 1}:</span>
                  <span>{shortTitle}</span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 10,
                      fontSize: 11,
                      fontFamily: 'IBM Plex Mono',
                      background: isSelected ? 'rgba(255,255,255,0.22)' : isComplete ? '#FCAC04' : 'var(--ln)',
                      color: isSelected ? '#FFF' : isComplete ? '#0B0B0C' : 'inherit',
                      fontWeight: 800
                    }}
                  >
                    {isComplete ? '✓' : `${modMastered}/${modConceptIds.length}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Learning Modules Grid / Focus View */}
        <div style={{ display: 'grid', gap: 24, marginTop: 16 }}>
          {displayedModules.map((module) => {
            const modIdx = book.learning_path.findIndex((m) => m.id === module.id);
            const modConceptIds = module.concepts.map((c) => `${prefix}${c.id.replace(/_/g, '-')}`);
            const modMastered = modConceptIds.filter((id) => state.done[id]).length;
            const pctMod = modConceptIds.length ? Math.round((modMastered / modConceptIds.length) * 100) : 0;
            const isFocusMode = currentModuleTab !== 'all';

            return (
              <div
                key={module.id}
                className="curriculum-module-card"
                style={{
                  background: 'var(--cd)',
                  ['--book-accent' as any]: heroBg
                }}
              >
                {/* Module Header */}
                <div className="curriculum-chapter-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: heroBg,
                        color: heroFg,
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontFamily: 'IBM Plex Mono',
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: '.05em'
                      }}
                    >
                      CHAPTER {String(modIdx + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ margin: 0, fontSize: 21, letterSpacing: '-0.02em' }}>
                      {module.category.replace(/^[0-9]+\.\s*/, '')}
                    </h3>
                  </div>

                  {/* Progress Gauge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      className="m"
                      style={{
                        color: modMastered === modConceptIds.length ? 'var(--ac-text)' : 'var(--mu)',
                        fontWeight: 700
                      }}
                    >
                      {modMastered}/{modConceptIds.length} Mastered ({pctMod}%)
                    </span>
                    <div style={{ width: 68, height: 7, background: 'var(--ln)', borderRadius: 4, overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${pctMod}%`,
                          background: modMastered === modConceptIds.length ? '#FCAC04' : heroBg,
                          transition: 'width 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Concepts Cards */}
                <div className="curriculum-concept-grid" style={{ marginTop: 18 }}>
                  {module.concepts.map((c, cIdx) => {
                    const cId = `${prefix}${c.id.replace(/_/g, '-')}`;
                    const isDone = !!state.done[cId];
                    const isWrong = !!state.wrong[cId];
                    const status = isDone ? '★ Mastered' : isWrong ? '● Review' : 'Study →';

                    return (
                      <Link
                        key={c.id}
                        to={`/c/${cId}`}
                        className="curriculum-concept-card"
                        style={{
                          borderLeft: isDone
                            ? `4px solid #FCAC04`
                            : isWrong
                            ? `4px solid #DC2626`
                            : `4px solid ${heroBg}`,
                          ['--book-accent' as any]: heroBg
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <div
                            className="curriculum-concept-number"
                            style={{
                              background: isDone ? '#FCAC04' : `${heroBg}18`,
                              color: isDone ? '#0B0B0C' : heroBg
                            }}
                          >
                            {String(cIdx + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span>{c.title}</span>
                              <span style={{ fontSize: 14, opacity: 0.35 }}>→</span>
                            </div>
                            <div className="mu" style={{ marginTop: 4, fontSize: 13, lineHeight: 1.45 }}>
                              {c.principle}
                            </div>
                          </div>
                        </div>

                        <span
                          className="m"
                          style={{
                            flex: 'none',
                            padding: '6px 12px',
                            borderRadius: 20,
                            fontSize: 11,
                            fontWeight: 800,
                            background: isDone ? '#FCAC04' : isWrong ? '#DC2626' : `${heroBg}15`,
                            color: isDone ? '#0B0B0C' : isWrong ? '#FFF' : heroBg,
                            border: isDone || isWrong ? 'none' : `1px solid ${heroBg}35`
                          }}
                        >
                          {status}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Focus Mode Navigation Controls */}
                {isFocusMode && (
                  <div className="curriculum-focus-nav">
                    <button
                      type="button"
                      disabled={modIdx === 0}
                      onClick={() => {
                        const prevMod = book.learning_path[modIdx - 1];
                        if (prevMod) setActiveModuleByBook((prev) => ({ ...prev, [book.id]: prevMod.id }));
                      }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: '1.5px solid var(--ln)',
                        background: 'var(--bg)',
                        fontSize: 13,
                        fontWeight: 700,
                        opacity: modIdx === 0 ? 0.35 : 1,
                        cursor: modIdx === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      ← Previous Chapter
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveModuleByBook((prev) => ({ ...prev, [book.id]: 'all' }))}
                      style={{
                        fontSize: 12,
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: 700,
                        background: 'none',
                        border: 'none',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'var(--mu)'
                      }}
                    >
                      View All Chapters
                    </button>

                    <button
                      type="button"
                      disabled={modIdx === book.learning_path.length - 1}
                      onClick={() => {
                        const nextMod = book.learning_path[modIdx + 1];
                        if (nextMod) setActiveModuleByBook((prev) => ({ ...prev, [book.id]: nextMod.id }));
                      }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: `1.5px solid ${modIdx === book.learning_path.length - 1 ? 'var(--ln)' : heroBg}`,
                        background: modIdx === book.learning_path.length - 1 ? 'var(--bg)' : heroBg,
                        color: modIdx === book.learning_path.length - 1 ? 'inherit' : heroFg,
                        fontSize: 13,
                        fontWeight: 700,
                        opacity: modIdx === book.learning_path.length - 1 ? 0.35 : 1,
                        cursor: modIdx === book.learning_path.length - 1 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      Next Chapter →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Challenge Capstone Lab */}
        <div id="final-challenge" style={{ marginTop: 44 }} className="panel">
          <div className="m row" style={{ marginBottom: 8 }}>
            <span className="chip" style={{ background: '#0B0B0C', color: '#FFF' }}>CAPSTONE LAB</span>
            <span className="mu">Interactive Application Lab</span>
          </div>
          <h2 style={{ margin: '0 0 10px', fontSize: 26 }}>{book.final_challenge.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, margin: '0 0 24px' }}>
            {book.final_challenge.objective}
          </p>

          {/* Step Deliverables Box */}
          <div
            style={{
              background: 'var(--bg)',
              padding: '20px',
              borderRadius: 10,
              border: '1px solid var(--ln)',
              marginBottom: 26
            }}
          >
            <h4
              style={{
                margin: '0 0 14px',
                fontFamily: 'IBM Plex Mono',
                textTransform: 'uppercase',
                fontSize: 13
              }}
            >
              Execution Steps & Deliverables
            </h4>
            <div style={{ display: 'grid', gap: 12 }}>
              {book.final_challenge.steps.map((st) => (
                <div key={st.id} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: 12 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      background: 'var(--ac)',
                      color: '#0B0B0C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 12
                    }}
                  >
                    {st.id}
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{st.task}</div>
                    <div className="m mu" style={{ fontSize: 13, marginTop: 2 }}>
                      {st.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Lab Questions */}
          <h3 style={{ marginBottom: 8 }}>Field Strategy & Verification Log</h3>
          <p className="mu" style={{ marginTop: 0, marginBottom: 20 }}>
            Document your research findings below. Answers auto-save to browser storage so your notes remain safe.
          </p>

          <form onSubmit={(e) => handleSaveChallenge(book.id, e)}>
            {book.final_challenge.user_questions.map((q, idx) => {
              const val = userAnswers[q.id] || '';
              return (
                <div key={q.id} style={{ marginBottom: 22 }}>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                    {idx + 1}. {q.prompt} {q.required && <span style={{ color: '#DC2626' }}>*</span>}
                  </label>

                  {q.input_type === 'single_choice' && q.options ? (
                    <div style={{ display: 'grid', gap: 8 }}>
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '10px 14px',
                            background: val === opt ? 'rgba(252, 172, 4, 0.15)' : 'var(--bg)',
                            border: val === opt ? '2px solid var(--ac)' : '1px solid var(--ln)',
                            borderRadius: 8,
                            cursor: 'pointer'
                          }}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={val === opt}
                            onChange={(e) => handleChallengeInput(book.id, q.id, e.target.value)}
                          />
                          <span style={{ fontSize: 14 }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <textarea
                      rows={3}
                      className="s"
                      style={{ width: '100%', resize: 'vertical', fontSize: 14 }}
                      placeholder="Document factual findings..."
                      value={val}
                      onChange={(e) => handleChallengeInput(book.id, q.id, e.target.value)}
                    />
                  )}
                </div>
              );
            })}

            {/* Completion criteria checklist */}
            <div
              style={{
                background: 'var(--bg)',
                padding: '16px',
                borderRadius: 8,
                border: '1px solid var(--ln)',
                margin: '20px 0'
              }}
            >
              <div className="m mu" style={{ fontWeight: 700, marginBottom: 8 }}>
                Grading & Completion Criteria:
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.6 }} className="mu">
                {book.final_challenge.completion_criteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <button type="submit" className="bt dk" style={{ padding: '12px 24px', fontSize: 16 }}>
                {isDoneLab ? '✓ Field Log Submitted (Update)' : 'Submit Field Notes & Complete Challenge'}
              </button>
              {isDoneLab && (
                <span className="stamp m" style={{ background: '#FCAC04', color: '#0B0B0C' }}>
                  Challenge Completed ★
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  };

  const isNarrow = ['start', 'interests', 'dashboard', 'profile'].includes(page);

  return (
    <>
      {renderHeader()}
      <main className="wrap">
        {isNarrow ? (
          <div className="narrow">
            {page === 'start' && renderStart()}
            {page === 'profile' && renderProfile()}
            {page === 'interests' && renderInterests()}
            {page === 'dashboard' && renderDashboard()}
          </div>
        ) : (
          <>
            {page === 'home' && renderHome()}
            {page === 'books' && renderBooks()}
            {page === 'book' && (!param || param === 'all') && renderBooks()}
            {page === 'book' && param && param !== 'all' && renderBook(param)}
            {page === 'library' && renderLibrary()}
            {page === 'c' && renderConcept(param)}
          </>
        )}
      </main>
      {renderBottomNav()}

      {/* Email Sign-In / Sign-Up Modal */}
      <EmailAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
        initialEmail={profileEmail}
        onSuccess={handleAuthSuccess}
      />

      {/* Floating System Notification Toast */}
      {authNotificationToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '75px',
            right: '20px',
            zIndex: 10000,
            background: 'var(--ink)',
            color: 'var(--bg)',
            padding: '12px 18px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '380px',
            fontSize: '14px',
            fontWeight: 600,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <span style={{ fontSize: '16px' }}>
            {authNotificationToast.type === 'success' ? '✓' : authNotificationToast.type === 'error' ? '⚠️' : 'ℹ️'}
          </span>
          <span style={{ flex: 1, lineHeight: 1.4 }}>{authNotificationToast.message}</span>
          <button
            type="button"
            onClick={() => setAuthNotificationToast(null)}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              padding: '2px',
              cursor: 'pointer',
              opacity: 0.7,
              fontSize: '14px'
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default App;
