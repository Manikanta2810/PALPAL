import React from 'react';

interface MasteredStampProps {
  shelf: string;
  size?: number;
  className?: string;
  animated?: boolean;
}

// Optimal contrasting ink color for each shelf background
const STAMP_CONFIG: Record<string, { ink: string; ringBg?: string }> = {
  Habits: { ink: '#C5221F', ringBg: 'rgba(255, 255, 255, 0.25)' }, // Rich Stamp Red on Yellow
  Startups: { ink: '#0B0B0C', ringBg: 'rgba(255, 255, 255, 0.2)' }, // Stark Black Ink on Orange
  Counterintuitive: { ink: '#FCAC04', ringBg: 'rgba(0, 0, 0, 0.25)' }, // Luminous Gold on Blue
  Mind: { ink: '#FCAC04', ringBg: 'rgba(0, 0, 0, 0.25)' }, // Luminous Gold on Wine
  Money: { ink: '#FCAC04', ringBg: 'rgba(0, 0, 0, 0.25)' }, // Luminous Gold on Forest
  Work: { ink: '#FCAC04', ringBg: 'rgba(0, 0, 0, 0.3)' }, // Amber Gold on Midnight
  Strategy: { ink: '#FCAC04', ringBg: 'rgba(0, 0, 0, 0.25)' } // Luminous Gold on Teal
};

export const MasteredStamp: React.FC<MasteredStampProps> = ({
  shelf,
  size = 110,
  className = '',
  animated = true
}) => {
  const config = STAMP_CONFIG[shelf] || { ink: '#C5221F' };
  const ink = config.ink;

  // Unique ID prefix for SVG paths to prevent ID collisions
  const uid = React.useId().replace(/:/g, '');
  const topPathId = `top-arc-${uid}`;
  const botPathId = `bot-arc-${uid}`;

  return (
    <div
      className={`mastered-seal-wrapper ${animated ? 'animate-stamp-slam' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-block',
        transform: 'rotate(-11deg)',
        filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.35))',
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Top arc (clockwise) */}
          <path
            id={topPathId}
            d="M 28,100 A 72,72 0 0,1 172,100"
            fill="none"
          />
          {/* Bottom arc (clockwise from right to left so text is right-side up) */}
          <path
            id={botPathId}
            d="M 172,100 A 72,72 0 0,1 28,100"
            fill="none"
          />
        </defs>

        {/* Backplate disk for guaranteed legibility over any card art */}
        <circle cx="100" cy="100" r="94" fill={config.ringBg || 'rgba(0,0,0,0.15)'} />

        {/* Outer concentric rings */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={ink}
          strokeWidth="4"
          strokeDasharray="6 2"
        />
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke={ink}
          strokeWidth="2.5"
        />

        {/* Inner concentric ring */}
        <circle
          cx="100"
          cy="100"
          r="54"
          fill="none"
          stroke={ink}
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke={ink}
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Top curved text: ★ MASTERED ★ */}
        <text
          fill={ink}
          fontSize="11.5"
          fontWeight="900"
          fontFamily="'IBM Plex Mono', monospace"
          letterSpacing="3"
        >
          <textPath href={`#${topPathId}`} startOffset="50%" textAnchor="middle">
            ★ MASTERED ★
          </textPath>
        </text>

        {/* Bottom curved text: ★ MASTERED ★ */}
        <text
          fill={ink}
          fontSize="11.5"
          fontWeight="900"
          fontFamily="'IBM Plex Mono', monospace"
          letterSpacing="3"
        >
          <textPath href={`#${botPathId}`} startOffset="50%" textAnchor="middle">
            ★ MASTERED ★
          </textPath>
        </text>

        {/* Upper horizontal double bars & stars */}
        <line x1="42" y1="78" x2="158" y2="78" stroke={ink} strokeWidth="2" />
        <line x1="42" y1="82" x2="158" y2="82" stroke={ink} strokeWidth="1" />
        <text
          x="100"
          y="74"
          fill={ink}
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          ★ ★ ★
        </text>

        {/* Center bold block: MASTERED */}
        <text
          x="100"
          y="107"
          fill={ink}
          fontSize="22"
          fontWeight="900"
          fontFamily="'Bricolage Grotesque', system-ui, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          MASTERED
        </text>

        {/* Lower horizontal double bars & stars */}
        <line x1="42" y1="117" x2="158" y2="117" stroke={ink} strokeWidth="1" />
        <line x1="42" y1="121" x2="158" y2="121" stroke={ink} strokeWidth="2" />
        <text
          x="100"
          y="134"
          fill={ink}
          fontSize="11"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          ★ ★ ★
        </text>
      </svg>
    </div>
  );
};
