import React from 'react';

function rnd(id: string) {
  let h = 0;
  for (const ch of id) {
    h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  }
  return () => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 4294967296;
  };
}

export const renderCardArt = (id: string, shelf: string) => {
  const r = rnd(id);
  const s = 'currentColor';
  const L = (x: number) => Math.round(x);
  let elements: React.ReactNode[] = [];

  if (shelf === 'Counterintuitive') {
    const cx = 200 + (r() - 0.5) * 40;
    for (let i = 1; i <= 7; i++) {
      elements.push(
        <circle
          key={`ci-${i}`}
          cx={L(cx + i * r() * 6)}
          cy={150}
          r={i * 20}
          fill="none"
          stroke={s}
          strokeWidth="2.5"
        />
      );
    }
    elements.push(
      <circle key="ci-center" cx={L(cx)} cy={150} r={16} fill={s} />
    );
  } else if (shelf === 'Startups') {
    for (let i = 0; i < 7; i++) {
      const h = 40 + i * 26 + r() * 20;
      elements.push(
        <rect
          key={`st-${i}`}
          x={40 + i * 48}
          y={L(280 - h)}
          width={34}
          height={L(h)}
          rx={6}
          fill={i === 6 ? s : 'none'}
          stroke={s}
          strokeWidth="2.5"
        />
      );
    }
    elements.push(
      <path
        key="st-path"
        d="M40 230 L120 190 L200 205 L280 120 L360 40"
        fill="none"
        stroke={s}
        strokeWidth="3"
        strokeDasharray="2 9"
        strokeLinecap="round"
      />
    );
  } else if (shelf === 'Money') {
    for (let k = 0; k < 4; k++) {
      const n = 2 + Math.floor(r() * 5);
      for (let i = 0; i < n; i++) {
        elements.push(
          <ellipse
            key={`mn-${k}-${i}`}
            cx={70 + k * 85}
            cy={270 - i * 22}
            rx={36}
            ry={12}
            fill={i === n - 1 ? s : 'none'}
            stroke={s}
            strokeWidth="2.5"
          />
        );
      }
    }
  } else if (shelf === 'Habits') {
    let d = 'M200 150';
    for (let a = 0; a < 26; a += 0.25) {
      const q = 4 + a * 5.2;
      d += ` L${L(200 + q * Math.cos(a))} ${L(150 + q * Math.sin(a))}`;
    }
    elements.push(
      <path
        key="hb-path"
        d={d}
        fill="none"
        stroke={s}
        strokeWidth="3"
        strokeLinecap="round"
      />
    );
  } else if (shelf === 'Work') {
    const f = Math.floor(r() * 20);
    for (let i = 0; i < 20; i++) {
      elements.push(
        <rect
          key={`wk-${i}`}
          x={50 + (i % 5) * 64}
          y={40 + Math.floor(i / 5) * 60}
          width={48}
          height={48}
          rx={8}
          fill={i === f ? s : 'none'}
          stroke={s}
          strokeWidth="2.5"
        />
      );
    }
  } else if (shelf === 'Strategy') {
    let x = 40;
    let y = 250;
    let d = `M${x} ${y}`;
    const dots: React.ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
      x += 55 + r() * 20;
      y = Math.max(40, Math.min(260, y - (r() * 70 - 25)));
      d += ` L${L(x)} ${L(y)}`;
      dots.push(
        <circle key={`dot-${i}`} cx={L(x)} cy={L(y)} r={9} fill={s} />
      );
    }
    elements.push(
      <path
        key="str-path"
        d={d}
        fill="none"
        stroke={s}
        strokeWidth="3"
        strokeDasharray="6 8"
      />
    );
    elements.push(...dots);
  } else {
    // Mind (default)
    const points: [number, number, number][] = [
      [150, 130, 90],
      [250, 130, 90],
      [200, 200, 90]
    ];
    points.forEach((p, i) => {
      elements.push(
        <circle
          key={`mnd-${i}`}
          cx={L(p[0] + (r() - 0.5) * 20)}
          cy={L(p[1] + (r() - 0.5) * 20)}
          r={p[2]}
          fill={s}
          fillOpacity={i === 2 ? 0.35 : 0.18}
          stroke={s}
          strokeWidth="2.5"
        />
      );
    });
  }

  return (
    <div className="art">
      <svg viewBox="0 0 400 300" aria-hidden="true">
        {elements}
      </svg>
    </div>
  );
};
