import React, { useState } from 'react';
import { UserProfile } from '../App';
import { BookDefinition } from '../data/momTestBook';
import { Link } from '../router';
import { audioEngine } from '../services/audioEngine';
import {
  ShieldCheck,
  Award,
  Sparkles,
  BookOpen,
  Flame,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Eye,
  BookMarked
} from 'lucide-react';

interface ThinkerPassportProps {
  user: UserProfile;
  masteredCount: number;
  totalConcepts: number;
  streak: number;
  bestStreak: number;
  books: BookDefinition[];
  doneMap: Record<string, number>;
  onEditProfile: () => void;
  onSignOut: () => void;
  onSwitchAccount: () => void;
  onConnectEmail?: () => void;
}

export const ThinkerPassport: React.FC<ThinkerPassportProps> = ({
  user,
  masteredCount,
  totalConcepts,
  streak,
  bestStreak,
  books,
  doneMap,
  onEditProfile,
  onSignOut,
  onSwitchAccount,
  onConnectEmail
}) => {
  // 'spread' (open 2-page passport), 'cover' (folded leather cover), 'visas' (page 3 stamps focus)
  const [viewMode, setViewMode] = useState<'spread' | 'cover' | 'visas'>('spread');

  // Compute official-looking Passport Number
  const passportNumber = React.useMemo(() => {
    let hash = 0;
    const str = `${user.u || 'thinker'}-${user.n || 'boring'}`;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    const num = String(hash % 900000 + 100000);
    return `BB·2026·${num}`;
  }, [user.u, user.n]);

  // Format Machine Readable Zone (MRZ)
  const mrzLines = React.useMemo(() => {
    const rawSurname = (user.n.split(' ')[1] || user.n.split(' ')[0] || 'THINKER').toUpperCase().replace(/[^A-Z]/g, '');
    const rawGiven = (user.n.split(' ')[0] || 'FELLOW').toUpperCase().replace(/[^A-Z]/g, '');
    const handle = (user.u || 'USER').toUpperCase().replace(/[^A-Z0-9]/g, '');
    const cleanNum = passportNumber.replace(/[^A-Z0-9]/g, '');

    // Line 1: Type P < Code BBL << Surname << GivenNames <<<<<
    let line1 = `P<BBL<<${rawSurname}<<${rawGiven}`;
    while (line1.length < 44) line1 += '<';
    line1 = line1.slice(0, 44);

    // Line 2: Passport# < Check Digit < Nationality < DOB < Sex < Expiry < Handle < Check Digits
    const dob = user.age ? String(user.age).padStart(2, '0') + '0101' : '020101';
    let line2 = `${cleanNum}<8IND${dob}M3010124${handle}`;
    while (line2.length < 44) line2 += '<';
    line2 = line2.slice(0, 44);

    return { line1, line2 };
  }, [user.n, user.u, user.age, passportNumber]);

  const handleToggleMode = (mode: 'spread' | 'cover' | 'visas') => {
    audioEngine.playClick();
    setViewMode(mode);
  };

  return (
    <div className="thinker-passport-container" style={{ margin: '14px 0 32px' }}>
      {/* Top Booklet Mode Switcher */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 16
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            className="m"
            style={{
              background: '#0B0B0C',
              color: '#FCAC04',
              padding: '4px 10px',
              borderRadius: 6,
              fontWeight: 800,
              fontSize: 11
            }}
          >
            OFFICIAL CREDENTIAL
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>
            Biometric Thinker Passport
          </span>
        </div>

        {/* View Mode Pills */}
        <div
          style={{
            display: 'inline-flex',
            background: 'var(--cd)',
            padding: '3px',
            borderRadius: '999px',
            border: '1.5px solid var(--ln)'
          }}
        >
          <button
            type="button"
            onClick={() => handleToggleMode('spread')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: 12,
              fontWeight: 700,
              fontFamily: 'IBM Plex Mono',
              border: 'none',
              cursor: 'pointer',
              background: viewMode === 'spread' ? '#0B0B0C' : 'transparent',
              color: viewMode === 'spread' ? '#FCAC04' : 'var(--mu)',
              transition: 'all 0.15s ease'
            }}
          >
            📖 Open Passport
          </button>
          <button
            type="button"
            onClick={() => handleToggleMode('cover')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: 12,
              fontWeight: 700,
              fontFamily: 'IBM Plex Mono',
              border: 'none',
              cursor: 'pointer',
              background: viewMode === 'cover' ? '#0B0B0C' : 'transparent',
              color: viewMode === 'cover' ? '#FCAC04' : 'var(--mu)',
              transition: 'all 0.15s ease'
            }}
          >
            📕 Leather Cover
          </button>
          <button
            type="button"
            onClick={() => handleToggleMode('visas')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: 12,
              fontWeight: 700,
              fontFamily: 'IBM Plex Mono',
              border: 'none',
              cursor: 'pointer',
              background: viewMode === 'visas' ? '#0B0B0C' : 'transparent',
              color: viewMode === 'visas' ? '#FCAC04' : 'var(--mu)',
              transition: 'all 0.15s ease'
            }}
          >
            🔖 Field Stamps
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. FRONT COVER MODE (Folded Navy/Gold Leather Booklet) */}
      {/* ========================================================= */}
      {viewMode === 'cover' && (
        <div
          className="passport-cover-wrap animate-fadeIn"
          style={{
            maxWidth: 460,
            margin: '0 auto',
            perspective: '1200px'
          }}
        >
          <div
            className="passport-leather-cover"
            onClick={() => handleToggleMode('spread')}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)',
              color: '#F3F0E8',
              borderRadius: '16px 24px 24px 16px',
              border: '2px solid #334155',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), inset 6px 0 15px rgba(0,0,0,0.6)',
              padding: '48px 36px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              userSelect: 'none',
              minHeight: 560,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Left Binding Spine Crease */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: 22,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0.06) 50%, rgba(0,0,0,0.5) 100%)',
                borderRight: '1px solid rgba(255,255,255,0.1)'
              }}
            />

            {/* Leather Grain Texture Pattern */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.14,
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
                backgroundSize: '12px 12px',
                pointerEvents: 'none'
              }}
            />

            {/* Gold Gilded Outer Border */}
            <div
              style={{
                position: 'absolute',
                inset: 12,
                border: '1.5px solid rgba(252, 172, 4, 0.4)',
                borderRadius: 14,
                pointerEvents: 'none'
              }}
            />

            {/* Cover Header */}
            <div>
              <div
                style={{
                  fontFamily: 'IBM Plex Mono',
                  fontSize: 12,
                  letterSpacing: '0.28em',
                  fontWeight: 800,
                  color: '#FCAC04',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                REPUBLIC OF BORINGBROS
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: 'IBM Plex Mono',
                  letterSpacing: '0.18em',
                  opacity: 0.7,
                  textTransform: 'uppercase'
                }}
              >
                COGNITIVE ALLIANCE & RESEARCH GUILD
              </div>
            </div>

            {/* Gold Foil Emblem / Coat of Arms */}
            <div style={{ margin: '36px 0' }}>
              <div
                style={{
                  width: 140,
                  height: 140,
                  margin: '0 auto',
                  borderRadius: '50%',
                  border: '2px solid #FCAC04',
                  background: 'radial-gradient(circle, rgba(252, 172, 4, 0.15) 0%, rgba(0,0,0,0.4) 80%)',
                  boxShadow: '0 0 25px rgba(252, 172, 4, 0.25), inset 0 0 15px rgba(252, 172, 4, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: 56, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6))' }}>
                  {user.avatar || '🚀'}
                </div>
                {/* Orbital Gold Ring */}
                <svg
                  viewBox="0 0 100 100"
                  style={{
                    position: 'absolute',
                    inset: -10,
                    width: 'calc(100% + 20px)',
                    height: 'calc(100% + 20px)',
                    pointerEvents: 'none'
                  }}
                >
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#FCAC04" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
                </svg>
              </div>

              <div
                style={{
                  marginTop: 24,
                  fontSize: 26,
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  color: '#FCAC04',
                  textTransform: 'uppercase',
                  textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                }}
              >
                PASSPORT
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontFamily: 'IBM Plex Mono',
                  letterSpacing: '0.18em',
                  opacity: 0.75,
                  marginTop: 4
                }}
              >
                PASSEPORT DU PENSEUR
              </div>
            </div>

            {/* Bottom Biometric Chip Symbol */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 18px',
                  borderRadius: 8,
                  border: '1px solid rgba(252, 172, 4, 0.5)',
                  background: 'rgba(0, 0, 0, 0.35)',
                  color: '#FCAC04'
                }}
              >
                {/* Biometric Passport Symbol */}
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="1" y="1" width="26" height="16" rx="2" />
                  <circle cx="14" cy="9" r="4" />
                  <line x1="1" y1="9" x2="10" y2="9" />
                  <line x1="18" y1="9" x2="27" y2="9" />
                </svg>
                <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                  BIOMETRIC CHIP · {passportNumber}
                </span>
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 12,
                  color: '#94A3B8',
                  fontFamily: 'IBM Plex Mono'
                }}
              >
                Click anywhere to open booklet →
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. OPEN PASSPORT SPREAD MODE (2-PAGE OFFICIAL BOOKLET) */}
      {/* ========================================================= */}
      {(viewMode === 'spread' || viewMode === 'visas') && (
        <div
          className="passport-booklet-spread animate-fadeIn"
          style={{
            background: '#18181B',
            borderRadius: 20,
            padding: 10,
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            border: '2px solid #27272A'
          }}
        >
          <div
            className="passport-pages-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: viewMode === 'visas' ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 0,
              background: '#F9F7F1',
              borderRadius: 14,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.06)'
            }}
          >
            {/* Center Stitched Binding Crease */}
            {viewMode === 'spread' && (
              <div
                className="passport-gutter-crease dn-mobile"
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  width: 20,
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 48%, rgba(255,255,255,0.4) 50%, rgba(0,0,0,0.02) 52%, rgba(0,0,0,0.12) 100%)',
                  zIndex: 20,
                  pointerEvents: 'none'
                }}
              >
                {/* White Thread Stitches */}
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    bottom: 10,
                    left: '50%',
                    width: 2,
                    transform: 'translateX(-50%)',
                    borderLeft: '2px dashed rgba(255,255,255,0.95)',
                    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.4))'
                  }}
                />
              </div>
            )}

            {/* -------------------------------------------------- */}
            {/* PAGE 1: OFFICIAL BIOMETRIC DATA / IDENTITY SPREAD */}
            {/* -------------------------------------------------- */}
            {viewMode === 'spread' && (
              <div
                className="passport-page-left"
                style={{
                  padding: '28px 26px',
                  color: '#0B0B0C',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRight: '1px solid rgba(0,0,0,0.08)'
                }}
              >
                {/* Intricate Security Waves Background Pattern */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.06,
                    backgroundImage: `repeating-linear-gradient(45deg, #0B0B0C 0, #0B0B0C 1px, transparent 0, transparent 16px)`,
                    pointerEvents: 'none'
                  }}
                />

                {/* Page Top Header */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1.5px solid #0B0B0C', paddingBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        REPUBLIC OF BORINGBROS
                      </div>
                      <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', color: '#52525B', letterSpacing: '0.06em' }}>
                        PASSPORT / PASSEPORT
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, fontFamily: 'IBM Plex Mono', fontWeight: 800 }}>
                        PAGE 02
                      </div>
                      <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', color: '#52525B' }}>
                        TYPE P · BBL
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, fontSize: 11, fontFamily: 'IBM Plex Mono', fontWeight: 700, color: '#B45309' }}>
                    <span>PASSPORT NO: {passportNumber}</span>
                    <span>AUTHORITY: BBL-REGISTRY</span>
                  </div>
                </div>

                {/* Biometric Photo & Data Fields */}
                <div style={{ position: 'relative', zIndex: 2, margin: '20px 0 16px', display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16 }}>
                  {/* Photo Column */}
                  <div>
                    <div
                      style={{
                        width: 106,
                        height: 134,
                        borderRadius: 10,
                        border: '2px solid #0B0B0C',
                        background: 'linear-gradient(145deg, #F3F0E8 0%, #E4E0D5 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Avatar Icon */}
                      <span style={{ fontSize: 50, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' }}>
                        {user.avatar || '🚀'}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          fontFamily: 'IBM Plex Mono',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          marginTop: 6,
                          background: '#0B0B0C',
                          color: '#FCAC04',
                          padding: '2px 6px',
                          borderRadius: 4
                        }}
                      >
                        BIOMETRIC ID
                      </span>

                      {/* Holographic Security Overlay Seal */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: -15,
                          right: -15,
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          border: '2px dashed #DC2626',
                          transform: 'rotate(-25deg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 8,
                          fontFamily: 'IBM Plex Mono',
                          color: '#DC2626',
                          fontWeight: 900,
                          background: 'rgba(255,255,255,0.7)',
                          backdropFilter: 'blur(1px)'
                        }}
                      >
                        VALIDATED
                      </div>
                    </div>

                    <div style={{ marginTop: 8, textAlign: 'center' }}>
                      <span
                        style={{
                          fontFamily: 'IBM Plex Mono',
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#15803D',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 3
                        }}
                      >
                        <CheckCircle2 style={{ width: 11, height: 11 }} />
                        CHIP ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Passport Metadata Grid (Official ICAO Style) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 10px', fontSize: 12 }}>
                    {/* Surname */}
                    <div style={{ gridColumn: 'span 2' }}>
                      <div className="passport-field-label">1. Surname / Nom</div>
                      <div className="passport-field-value">{user.n.toUpperCase()}</div>
                    </div>

                    {/* Handle */}
                    <div>
                      <div className="passport-field-label">2. Handle / Identifiant</div>
                      <div className="passport-field-value" style={{ color: '#B45309' }}>
                        @{user.u}
                      </div>
                    </div>

                    {/* Nationality / Archetype */}
                    <div>
                      <div className="passport-field-label">3. Archetype / Nationalité</div>
                      <div className="passport-field-value">{user.archetype?.toUpperCase() || 'FOUNDER'}</div>
                    </div>

                    {/* Date of Birth / Age */}
                    <div>
                      <div className="passport-field-label">4. Age / Date de naiss.</div>
                      <div className="passport-field-value">{user.age ? `${user.age} YRS · CLASS 2026` : 'COGNITIVE ADULT'}</div>
                    </div>

                    {/* Issue Date */}
                    <div>
                      <div className="passport-field-label">5. Issued / Délivré</div>
                      <div className="passport-field-value">12 OCT 2026</div>
                    </div>

                    {/* Primary Ambition */}
                    <div style={{ gridColumn: 'span 2' }}>
                      <div className="passport-field-label">6. Ambition / Mission</div>
                      <div className="passport-field-value" style={{ fontSize: 12, lineHeight: 1.3 }}>
                        {user.goal || 'Building a Startup'}
                      </div>
                    </div>

                    {/* Registered Email */}
                    <div style={{ gridColumn: 'span 2' }}>
                      <div className="passport-field-label">7. Verified Credential / Courriel</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, fontFamily: 'IBM Plex Mono' }}>
                          {user.e || 'Guest Mode (No Email Linked)'}
                        </span>
                        {user.e ? (
                          <span style={{ fontSize: 9, background: '#15803D', color: '#FFF', padding: '1px 6px', borderRadius: 4, fontWeight: 800 }}>
                            ✓ VERIFIED
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={onConnectEmail}
                            style={{
                              fontSize: 10,
                              fontFamily: 'IBM Plex Mono',
                              color: '#B45309',
                              textDecoration: 'underline',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontWeight: 700
                            }}
                          >
                            Link Email →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* THE ICONIC MACHINE READABLE ZONE (MRZ) */}
                <div
                  className="passport-mrz-box"
                  style={{
                    background: '#ECE8DF',
                    border: '1.5px solid #0B0B0C',
                    borderRadius: 8,
                    padding: '8px 12px',
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 'clamp(10px, 1.8vw, 13px)',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    lineHeight: 1.45,
                    color: '#0B0B0C',
                    userSelect: 'all',
                    overflowX: 'auto',
                    marginTop: 10
                  }}
                >
                  <div style={{ whiteSpace: 'nowrap' }}>{mrzLines.line1}</div>
                  <div style={{ whiteSpace: 'nowrap' }}>{mrzLines.line2}</div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------- */}
            {/* PAGE 2: VISAS & FIELD ENDORSEMENT RUBBER STAMPS */}
            {/* -------------------------------------------------- */}
            <div
              className="passport-page-right"
              style={{
                padding: '28px 26px',
                color: '#0B0B0C',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FAF8F3'
              }}
            >
              {/* Subtle Banknote Guilloche Pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.05,
                  backgroundImage: `radial-gradient(circle, #0B0B0C 1px, transparent 1px)`,
                  backgroundSize: '14px 14px',
                  pointerEvents: 'none'
                }}
              ></div>

              {/* Page 3 Header */}
              <div style={{ position: 'relative', zIndex: 2, borderBottom: '1.5px solid #0B0B0C', paddingBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      VISAS & FIELD ENDORSEMENTS
                    </div>
                    <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', color: '#52525B', letterSpacing: '0.06em' }}>
                      IMMIGRATION & COGNITIVE CLEARANCES
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, fontFamily: 'IBM Plex Mono', fontWeight: 800 }}>
                      PAGE 03
                    </div>
                    <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', color: '#52525B' }}>
                      SERIES 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Rubber Stamps Canvas */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  margin: '18px 0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                  gap: '14px 12px',
                  alignContent: 'center'
                }}
              >
                {/* Stamp 1: Mom Test */}
                <Link
                  to="/book/the-mom-test"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #C5221F',
                    color: '#C5221F',
                    borderRadius: 12,
                    padding: '10px 12px',
                    transform: 'rotate(-4deg)',
                    background: 'rgba(197, 34, 31, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="The Mom Test Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #C5221F', paddingBottom: 3 }}>
                    BORINGBROS BORDER CONTROL
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    THE MOM TEST ★
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    CONVERSATION CLEARED
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    12 OCT 2026 · ENTRY OK
                  </div>
                </Link>

                {/* Stamp 2: Positioning */}
                <Link
                  to="/book/positioning"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #1B1BC8',
                    color: '#1B1BC8',
                    borderRadius: 14,
                    padding: '10px 12px',
                    transform: 'rotate(5deg)',
                    background: 'rgba(27, 27, 200, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="Positioning Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #1B1BC8', paddingBottom: 3 }}>
                    STRATEGY IMMIGRATION
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    POSITIONING SEAL
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    MIND SPACE OCCUPIED
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    CLASS A · VERIFIED
                  </div>
                </Link>

                {/* Stamp 3: Hooked Habit Engine */}
                <Link
                  to="/book/hooked"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #0F5C3B',
                    color: '#0F5C3B',
                    borderRadius: 10,
                    padding: '10px 12px',
                    transform: 'rotate(-2deg)',
                    background: 'rgba(15, 92, 59, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="Hooked Engine Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #0F5C3B', paddingBottom: 3 }}>
                    BEHAVIORAL CLEARANCE
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    HOOKED ENGINE ⬡
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    4-PHASE CYCLE VALID
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    RETENTION PERMIT
                  </div>
                </Link>

                {/* Stamp 4: Traction */}
                <Link
                  to="/book/traction"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #7C3AED',
                    color: '#7C3AED',
                    borderRadius: 14,
                    padding: '10px 12px',
                    transform: 'rotate(6deg)',
                    background: 'rgba(124, 58, 237, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="Traction Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #7C3AED', paddingBottom: 3 }}>
                    DISTRIBUTION VISA
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    TRACTION BULLSEYE
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    19 CHANNELS RANKED
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    OUTER/INNER RING OK
                  </div>
                </Link>

                {/* Stamp 5: Cold Start Network */}
                <Link
                  to="/book/the-cold-start-problem"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #D97706',
                    color: '#D97706',
                    borderRadius: 12,
                    padding: '10px 12px',
                    transform: 'rotate(-5deg)',
                    background: 'rgba(217, 119, 6, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="Cold Start Network Effects Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #D97706', paddingBottom: 3 }}>
                    NETWORK EFFECT PERMIT
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    ATOMIC NETWORK ⚡
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    TIPPING POINT ATTAINED
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    SCALE STAGE VALID
                  </div>
                </Link>

                {/* Stamp 6: Steal Like an Artist */}
                <Link
                  to="/book/steal-like-an-artist"
                  className="passport-stamp-pill"
                  style={{
                    border: '2px solid #0F766E',
                    color: '#0F766E',
                    borderRadius: 12,
                    padding: '10px 12px',
                    transform: 'rotate(3deg)',
                    background: 'rgba(15, 118, 110, 0.05)',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title="Creative Synthesis Clearance"
                >
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', borderBottom: '1px dashed #0F766E', paddingBottom: 3 }}>
                    ORIGINALITY ACCREDITED
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 900, margin: '4px 0 2px' }}>
                    STEAL LIKE AN ARTIST
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'IBM Plex Mono', opacity: 0.85 }}>
                    INFLUENCE RECOMBINED
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', marginTop: 3, fontWeight: 700 }}>
                    CREATIVE PRACTICE
                  </div>
                </Link>

                {/* Stamp 7: Active Streak Seal */}
                <div
                  style={{
                    border: '2.5px solid #DC2626',
                    color: '#DC2626',
                    borderRadius: '50%',
                    width: 130,
                    height: 130,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transform: 'rotate(-8deg)',
                    background: 'rgba(220, 38, 38, 0.06)',
                    gridColumn: 'span 2',
                    boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.15)'
                  }}
                >
                  <div style={{ fontSize: 9, fontFamily: 'IBM Plex Mono', fontWeight: 900, letterSpacing: '0.08em' }}>
                    DAILY DISCIPLINE
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 900, margin: '2px 0' }}>
                    🔥 {streak > 0 ? `${streak} DAYS` : 'READY'}
                  </div>
                  <div style={{ fontSize: 8, fontFamily: 'IBM Plex Mono', fontWeight: 800 }}>
                    STREAK CERTIFIED
                  </div>
                  <div style={{ fontSize: 8, fontFamily: 'IBM Plex Mono', opacity: 0.8, marginTop: 2 }}>
                    MAX: {bestStreak} DAYS
                  </div>
                </div>
              </div>

              {/* Page 3 Bottom Security Notice */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  borderTop: '1px solid #DCD8CC',
                  paddingTop: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 10,
                  fontFamily: 'IBM Plex Mono',
                  color: '#71717A'
                }}
              >
                <span>ALL 6 VOLUMES ENDORSED</span>
                <span>BORINGBRO LABS COGNITIVE PASSPORT</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. PASSPORT ACTION CONTROLS & SETTINGS */}
      {/* ========================================================= */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          marginTop: 22
        }}
      >
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            type="button"
            className="bt dk"
            onClick={onEditProfile}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <span>Edit Passport Identity</span>
          </button>

          <button
            type="button"
            className="bt"
            onClick={onSwitchAccount}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <span>Switch Account</span>
          </button>

          <Link className="bt" to="/dashboard">
            View Learning Dashboard →
          </Link>
        </div>

        <button
          type="button"
          onClick={onSignOut}
          style={{
            background: 'none',
            border: 'none',
            color: '#DC2626',
            fontFamily: 'IBM Plex Mono',
            fontSize: 13,
            fontWeight: 700,
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: '6px 10px'
          }}
        >
          Sign Out / Lock Passport
        </button>
      </div>
    </div>
  );
};
