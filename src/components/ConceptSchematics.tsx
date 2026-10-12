import React from 'react';

interface SchematicProps {
  id: string;
  shelf?: string;
  isCompact?: boolean;
}

export const ConceptSchematic: React.FC<SchematicProps> = ({ id, shelf = 'Mind', isCompact = false }) => {
  const stroke = 'var(--ink)';
  const text = 'var(--ink)';
  const muted = 'var(--mu)';
  const boxBg = 'var(--bg)';
  const yellow = 'var(--ac)';
  const red = '#DC2626';
  const height = isCompact ? 135 : 180;

  // Render bespoke schematic based on concept ID
  switch (id) {
    // 1. THE MONTY HALL PROBLEM
    case 'monty':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Monty Hall Schematic">
          {/* Door 1 */}
          <rect x="25" y="30" width="85" height="110" rx="8" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <circle cx="95" cy="85" r="4" fill={stroke} />
          <text x="67" y="22" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="600">DOOR 1</text>
          <text x="67" y="70" textAnchor="middle" fill={text} fontSize="18" fontWeight="800">1/3</text>
          <text x="67" y="100" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">First Pick</text>

          {/* Door 2 */}
          <rect x="145" y="30" width="85" height="110" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="187" y="22" textAnchor="middle" fill={muted} fontSize="12" fontFamily="IBM Plex Mono">DOOR 2</text>
          <text x="187" y="75" textAnchor="middle" fill={text} fontSize="28">🐐</text>
          <text x="187" y="105" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Host Opens</text>

          {/* Door 3 (Switch) */}
          <rect x="265" y="30" width="90" height="110" rx="8" fill={yellow} fillOpacity="0.18" stroke={stroke} strokeWidth="2.5" />
          <circle cx="340" cy="85" r="4" fill={stroke} />
          <text x="310" y="22" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="700">DOOR 3</text>
          <rect x="280" y="52" width="60" height="26" rx="6" fill={yellow} />
          <text x="310" y="70" textAnchor="middle" fill="#0B0B0C" fontSize="16" fontWeight="800">2/3 ★</text>
          <text x="310" y="102" textAnchor="middle" fill={text} fontSize="20">🚗</text>
          <text x="310" y="125" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">SWITCH WINS</text>

          {/* Switch probability arrow */}
          <path d="M70 152 Q 187 172 305 152" fill="none" stroke={stroke} strokeWidth="2" />
          <polygon points="307,152 297,146 299,158" fill={stroke} />
          <text x="187" y="174" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">Switching doubles your odds</text>
        </svg>
      );

    // 2. SURVIVORSHIP BIAS (Abraham Wald)
    case 'wald':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Survivorship Bias Airplane Schematic">
          {/* Airplane Fuselage */}
          <path d="M190 20 L205 75 L330 100 L330 115 L205 105 L205 150 L240 168 L240 178 L190 170 L140 178 L140 168 L175 150 L175 105 L50 115 L50 100 L175 75 Z"
            fill="none" stroke={stroke} strokeWidth="2.5" />
          
          {/* Bullet holes on wings */}
          <circle cx="100" cy="104" r="3.5" fill={red} />
          <circle cx="120" cy="98" r="3.5" fill={red} />
          <circle cx="140" cy="102" r="3.5" fill={red} />
          <circle cx="240" cy="98" r="3.5" fill={red} />
          <circle cx="260" cy="104" r="3.5" fill={red} />
          <circle cx="280" cy="102" r="3.5" fill={red} />
          <circle cx="190" cy="135" r="3.5" fill={red} />

          {/* Engine Spots (Target Armor) */}
          <rect x="156" y="82" width="16" height="26" rx="4" fill={yellow} stroke={stroke} strokeWidth="2" />
          <rect x="208" y="82" width="16" height="26" rx="4" fill={yellow} stroke={stroke} strokeWidth="2" />
          
          <text x="65" y="42" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">● Bullet holes seen</text>
          <text x="65" y="58" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">(These planes survived)</text>

          <rect x="220" y="26" width="145" height="24" rx="6" fill={yellow} />
          <text x="292" y="42" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">★ ARMOR ENGINES</text>
          <text x="292" y="62" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">(Holes here were fatal)</text>
        </svg>
      );

    // 3. THE BIRTHDAY PARADOX
    case 'bday':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Birthday Paradox Combinations">
          {/* Network circle */}
          <circle cx="120" cy="90" r="60" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
          <line x1="80" y1="50" x2="160" y2="130" stroke={stroke} strokeWidth="1.5" opacity="0.25" />
          <line x1="160" y1="50" x2="80" y2="130" stroke={stroke} strokeWidth="1.5" opacity="0.25" />
          <line x1="60" y1="90" x2="180" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.25" />
          <line x1="120" y1="30" x2="120" y2="150" stroke={stroke} strokeWidth="1.5" opacity="0.25" />

          {/* Match nodes */}
          <circle cx="80" cy="50" r="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <circle cx="160" cy="130" r="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <path d="M80 50 Q 120 75 160 130" fill="none" stroke={stroke} strokeWidth="2.5" />

          <text x="120" y="96" textAnchor="middle" fill={text} fontSize="13" fontFamily="IBM Plex Mono" fontWeight="800">253 Pairs</text>

          {/* Probability card */}
          <rect x="220" y="35" width="135" height="110" rx="12" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="287" y="65" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">23 PEOPLE</text>
          
          <rect x="250" y="75" width="75" height="34" rx="8" fill={yellow} />
          <text x="287" y="99" textAnchor="middle" fill="#0B0B0C" fontSize="24" fontWeight="800">50%</text>
          
          <text x="287" y="130" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Shared Birthday</text>
        </svg>
      );

    // 4. BASE RATE FALLACY
    case 'base':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Base Rate Fallacy Tree">
          {/* Total pop */}
          <rect x="20" y="70" width="70" height="40" rx="8" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="55" y="87" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">1,000</text>
          <text x="55" y="101" textAnchor="middle" fill={muted} fontSize="9">People</text>

          {/* Branches */}
          <path d="M90 90 L135 50" stroke={stroke} strokeWidth="2" />
          <path d="M90 90 L135 130" stroke={stroke} strokeWidth="2" />

          {/* Sick vs Healthy */}
          <rect x="135" y="32" width="100" height="36" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="185" y="46" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">1 Sick (99%)</text>
          <text x="185" y="60" textAnchor="middle" fill={text} fontSize="10" fontWeight="800">1 True Pos</text>

          <rect x="135" y="112" width="100" height="36" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="185" y="126" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">999 Well (1%)</text>
          <text x="185" y="141" textAnchor="middle" fill={red} fontSize="10" fontWeight="800">10 False Pos</text>

          {/* Ratio result */}
          <rect x="255" y="55" width="105" height="70" rx="10" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="307" y="76" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1 in 11 Positive</text>
          <rect x="272" y="83" width="70" height="30" rx="6" fill={yellow} />
          <text x="307" y="104" textAnchor="middle" fill="#0B0B0C" fontSize="18" fontWeight="800">~9%</text>
        </svg>
      );

    // 5. RULE OF 72
    case 'r72':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Rule of 72 Doubling Formula">
          {/* Formula box */}
          <rect x="30" y="30" width="150" height="120" rx="16" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="105" y="58" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">FORMULA</text>
          <rect x="55" y="68" width="100" height="36" rx="8" fill={yellow} />
          <text x="105" y="93" textAnchor="middle" fill="#0B0B0C" fontSize="22" fontWeight="800">72 ÷ r</text>
          <text x="105" y="125" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="600">= Years to Double</text>

          {/* Exponential curve */}
          <path d="M210 135 Q 260 130 290 85 T 350 35" fill="none" stroke={stroke} strokeWidth="2.5" />
          <circle cx="210" cy="135" r="5" fill={stroke} />
          <circle cx="290" cy="85" r="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <circle cx="350" cy="35" r="6" fill={yellow} stroke={stroke} strokeWidth="2" />

          <text x="210" y="155" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">$10k</text>
          <text x="290" y="108" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">$20k</text>
          <text x="350" y="25" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">$40k</text>

          <text x="280" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">At 6%: 72 ÷ 6 = 12 Yrs</text>
        </svg>
      );

    // 6. CHURN RATE
    case 'churn':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Churn Leaky Bucket Schematic">
          {/* Water Inflow */}
          <rect x="110" y="6" width="160" height="22" rx="6" fill={yellow} />
          <text x="190" y="21" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">NEW USERS INFLOW</text>

          {/* Bucket */}
          <path d="M130 45 L150 140 L230 140 L250 45 Z" fill="none" stroke={stroke} strokeWidth="3" />
          
          {/* Water level */}
          <path d="M142 85 Q 190 80 238 85 L230 140 L150 140 Z" fill={yellow} fillOpacity="0.25" />
          <text x="190" y="112" textAnchor="middle" fill={text} fontSize="13" fontWeight="800">RETENTION</text>

          {/* Leaking hole */}
          <path d="M190 143 L190 162" stroke={red} strokeWidth="3" strokeDasharray="3 3" />
          <text x="190" y="176" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">CHURN LEAK (Lost Revenue)</text>

          {/* Stat panel on right */}
          <rect x="270" y="60" width="95" height="58" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="317" y="80" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">5% MONTHLY</text>
          <text x="317" y="102" textAnchor="middle" fill={red} fontSize="13" fontWeight="800">Half gone / yr</text>
        </svg>
      );

    // 7. CAC vs LTV
    case 'cac':
    case 'ltv':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="CAC to LTV Balance Scale">
          {/* Fulcrum Stand */}
          <polygon points="190,120 175,160 205,160" fill={stroke} />
          {/* Lever Bar tilted */}
          <line x1="80" y1="95" x2="300" y2="125" stroke={stroke} strokeWidth="4" strokeLinecap="round" />

          {/* Left Pan: CAC */}
          <line x1="90" y1="96" x2="90" y2="125" stroke={stroke} strokeWidth="1.5" />
          <rect x="60" y="125" width="60" height="28" rx="6" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="90" y="143" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">1x CAC</text>

          {/* Right Pan: LTV */}
          <line x1="290" y1="124" x2="290" y2="145" stroke={stroke} strokeWidth="1.5" />
          <rect x="255" y="145" width="70" height="30" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="290" y="165" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">≥ 3x LTV</text>

          {/* Headline */}
          <text x="190" y="45" textAnchor="middle" fill={text} fontSize="16" fontWeight="800">GOLDEN RATIO: LTV ≥ 3 × CAC</text>
          <text x="190" y="65" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">If LTV &lt; 3x CAC, marketing incinerates capital.</text>
        </svg>
      );

    // 8. SAFE
    case 'safe':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="SAFE Valuation Cap Ceiling">
          {/* Cap Ceiling Line */}
          <line x1="50" y1="65" x2="330" y2="65" stroke={stroke} strokeWidth="2.5" strokeDasharray="6 4" />
          <rect x="100" y="38" width="180" height="22" rx="4" fill={yellow} />
          <text x="190" y="53" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">VALUATION CAP CEILING ($5M)</text>

          {/* Actual Series A Valuation Rising */}
          <path d="M70 145 L150 110 L250 85 L310 25" fill="none" stroke={stroke} strokeWidth="3" />
          <circle cx="310" cy="25" r="6" fill={red} />
          <text x="310" y="16" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">Next Round: $15M</text>

          {/* Investor conversion anchor */}
          <circle cx="280" cy="65" r="7" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="280" y="85" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">Converts at $5M Cap!</text>
          <text x="190" y="165" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Early backer gets shares at a 3x discount.</text>
        </svg>
      );

    // 9. THE MOM TEST
    case 'mom-rule':
    case 'mom-commit':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Mom Test Filter">
          {/* Bad Question */}
          <rect x="25" y="35" width="150" height="90" rx="10" fill={boxBg} stroke={red} strokeWidth="2" />
          <text x="100" y="58" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">✕ OPINION TRAP</text>
          <text x="100" y="80" textAnchor="middle" fill={text} fontSize="11">"Would you buy this?"</text>
          <text x="100" y="102" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono">Result: Polite lies ($0)</text>

          {/* Good Question */}
          <rect x="205" y="35" width="150" height="90" rx="10" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <rect x="220" y="42" width="120" height="20" rx="4" fill={yellow} />
          <text x="280" y="56" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">✓ THE MOM TEST</text>
          <text x="280" y="80" textAnchor="middle" fill={text} fontSize="11">"How did you solve it?"</text>
          <text x="280" y="102" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Hard past facts + Cash</text>

          <text x="190" y="158" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Ask about past actions, never future promises.</text>
        </svg>
      );

    // 10. BURN RATE & RUNWAY
    case 'burn':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Burn Rate and Runway">
          {/* Cash Tank */}
          <rect x="35" y="30" width="120" height="110" rx="14" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="95" y="52" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">CASH IN BANK</text>
          <text x="95" y="82" textAnchor="middle" fill={text} fontSize="22" fontWeight="800">$900,000</text>
          <line x1="45" y1="98" x2="145" y2="98" stroke={stroke} strokeDasharray="3 3" opacity="0.4" />
          <text x="95" y="120" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">- $75k / month</text>

          {/* Arrow */}
          <path d="M165 85 L205 85" stroke={stroke} strokeWidth="2.5" />
          <polygon points="208,85 198,79 198,91" fill={stroke} />

          {/* Runway Formula */}
          <rect x="215" y="30" width="135" height="110" rx="14" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="282" y="52" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">RUNWAY FORMULA</text>
          <text x="282" y="74" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">$900k ÷ $75k</text>
          <rect x="245" y="84" width="75" height="34" rx="8" fill={yellow} />
          <text x="282" y="108" textAnchor="middle" fill="#0B0B0C" fontSize="22" fontWeight="800">12 MO</text>
          <text x="282" y="132" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">Until Out of Cash</text>
        </svg>
      );

    // 11. VALUATION
    case 'val':
    case 'vm':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Pre and Post Money Valuation">
          {/* Pre Money */}
          <rect x="30" y="45" width="110" height="70" rx="10" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="85" y="70" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">PRE-MONEY</text>
          <text x="85" y="96" textAnchor="middle" fill={text} fontSize="18" fontWeight="800">$4,000,000</text>

          {/* Plus sign */}
          <text x="150" y="88" textAnchor="middle" fill={stroke} fontSize="22" fontWeight="800">+</text>

          {/* Invested */}
          <rect x="165" y="45" width="85" height="70" rx="10" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="207" y="70" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">INVESTED</text>
          <text x="207" y="96" textAnchor="middle" fill={text} fontSize="16" fontWeight="800">$1,000,000</text>

          {/* Equals */}
          <text x="262" y="88" textAnchor="middle" fill={stroke} fontSize="22" fontWeight="800">=</text>

          {/* Post Money Badge */}
          <rect x="275" y="38" width="90" height="85" rx="12" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="320" y="60" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">POST-MONEY</text>
          <text x="320" y="82" textAnchor="middle" fill="#0B0B0C" fontSize="16" fontWeight="800">$5,000,000</text>
          <text x="320" y="105" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">Owns 20%</text>

          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Investment ($1M) ÷ Post-Money ($5M) = 20%</text>
        </svg>
      );

    // 12. DILUTION
    case 'dil':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Cap Table Dilution">
          {/* Before Dilution Bar */}
          <rect x="40" y="35" width="130" height="36" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <rect x="40" y="35" width="78" height="36" rx="8" fill={yellow} stroke={stroke} strokeWidth="1.5" />
          <text x="79" y="58" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">60% YOU</text>
          <text x="145" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">40%</text>
          <text x="105" y="24" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">BEFORE NEW ROUND</text>

          {/* Transition */}
          <text x="190" y="95" textAnchor="middle" fill={text} fontSize="13" fontWeight="800">↓ 25% NEW INVESTOR DILUTION ↓</text>

          {/* After Dilution Bar */}
          <rect x="40" y="115" width="300" height="38" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <rect x="40" y="115" width="135" height="38" rx="8" fill={yellow} stroke={stroke} strokeWidth="1.5" />
          <text x="107" y="139" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">45% YOU (60% × 0.75)</text>
          <rect x="175" y="115" width="75" height="38" fill="none" stroke={stroke} strokeWidth="1.5" />
          <text x="212" y="139" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">25% NEW</text>
          <text x="295" y="139" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">30% OTHER</text>
        </svg>
      );

    // 13. MRR & ARR
    case 'mrr':
    case 'arr':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="MRR to ARR Multiplier">
          {/* Monthly Block */}
          <rect x="35" y="40" width="120" height="90" rx="14" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="95" y="65" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">MONTHLY (MRR)</text>
          <text x="95" y="98" textAnchor="middle" fill={text} fontSize="24" fontWeight="800">$25,000</text>
          <text x="95" y="118" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Predictable Subs</text>

          {/* Multiply */}
          <rect x="170" y="65" width="45" height="40" rx="8" fill={stroke} />
          <text x="192" y="91" textAnchor="middle" fill="var(--bg)" fontSize="16" fontWeight="800">× 12</text>

          {/* Annual ARR Block */}
          <rect x="230" y="35" width="125" height="100" rx="14" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="292" y="60" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">ANNUAL (ARR)</text>
          <text x="292" y="96" textAnchor="middle" fill="#0B0B0C" fontSize="24" fontWeight="800">$300,000</text>
          <text x="292" y="118" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="600">Headline Valuation</text>
        </svg>
      );

    // 14. LEAN STARTUP MVP LOOP
    case 'mvp':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Lean Startup MVP Loop">
          <circle cx="190" cy="90" r="62" fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />

          {/* 1: IDEA */}
          <rect x="145" y="15" width="90" height="32" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="36" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="700">1. IDEAS</text>

          {/* 2: MVP BUILD */}
          <rect x="260" y="74" width="105" height="32" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="312" y="95" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">2. MVP BUILD</text>

          {/* 3: MEASURE */}
          <rect x="145" y="133" width="90" height="32" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="154" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="700">3. MEASURE</text>

          {/* 4: LEARN */}
          <rect x="15" y="74" width="95" height="32" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="62" y="95" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="700">4. LEARN</text>

          <text x="190" y="95" textAnchor="middle" fill={text} fontSize="13" fontFamily="IBM Plex Mono" fontWeight="800">CYCLE FAST</text>
        </svg>
      );

    // 15. ANCHORING BIAS
    case 'anch':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Anchoring Bias Tag">
          {/* Anchor Price */}
          <rect x="40" y="35" width="130" height="85" rx="12" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="105" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">ANCHOR NUMBER</text>
          <text x="105" y="92" textAnchor="middle" fill={red} fontSize="28" fontWeight="800">$200</text>
          <line x1="60" y1="84" x2="150" y2="84" stroke={red} strokeWidth="3" />
          <text x="105" y="110" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono">First Impression</text>

          {/* Arrow */}
          <path d="M180 75 L215 75" stroke={stroke} strokeWidth="2.5" />
          <polygon points="225,75 213,68 213,82" fill={stroke} />

          {/* Actual Price */}
          <rect x="235" y="30" width="125" height="95" rx="14" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="297" y="56" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">FEELS LIKE DEAL</text>
          <text x="297" y="92" textAnchor="middle" fill="#0B0B0C" fontSize="32" fontWeight="800">$120</text>
          <text x="297" y="114" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono">Pulled by Anchor</text>

          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Negotiator's first offer anchors all subsequent bids.</text>
        </svg>
      );

    // 16. GAMBLER'S FALLACY
    case 'gam':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Gambler's Fallacy Coin Flips">
          <text x="190" y="30" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">5 HEADS IN A ROW (PAST HAS NO MEMORY)</text>
          {[65, 115, 165, 215, 265].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy="65" r="20" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
              <text x={cx} y="72" textAnchor="middle" fill={text} fontSize="16" fontWeight="800">H</text>
            </g>
          ))}

          {/* Next flip */}
          <rect x="50" y="105" width="280" height="55" rx="12" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="190" y="127" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">NEXT FLIP PROBABILITY</text>
          <text x="190" y="148" textAnchor="middle" fill="#0B0B0C" fontSize="13" fontWeight="800">STILL EXACTLY 50% HEADS / 50% TAILS</text>
        </svg>
      );

    // 17. REGRESSION TO THE MEAN
    case 'reg':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Regression to the Mean">
          <line x1="40" y1="90" x2="340" y2="90" stroke={stroke} strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
          <text x="45" y="80" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">HISTORICAL AVERAGE (MEAN)</text>

          {/* Extreme spike */}
          <path d="M60 90 L130 30 L220 95 L290 85 L340 90" fill="none" stroke={stroke} strokeWidth="2.5" />
          <circle cx="130" cy="30" r="7" fill={red} stroke={stroke} strokeWidth="2" />
          <text x="130" y="18" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Extreme Outlier (Luck!)</text>

          {/* Return toward mean */}
          <circle cx="220" cy="95" r="7" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="220" y="125" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">Returns Toward Mean</text>

          <text x="190" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Next result drifts back toward average without any intervention.</text>
        </svg>
      );

    // 18. SIMPSON'S PARADOX
    case 'simp':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Simpson's Paradox">
          <rect x="30" y="35" width="145" height="50" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="102" y="52" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">SMALL CASES: A &gt; B</text>
          <text x="102" y="72" textAnchor="middle" fill={text} fontSize="13" fontWeight="800">A: 93% vs B: 87% ✓</text>

          <rect x="205" y="35" width="145" height="50" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="277" y="52" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">LARGE CASES: A &gt; B</text>
          <text x="277" y="72" textAnchor="middle" fill={text} fontSize="13" fontWeight="800">A: 73% vs B: 69% ✓</text>

          {/* Combined reversal */}
          <rect x="50" y="100" width="280" height="55" rx="12" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="190" y="120" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">COMBINED RATE REVERSES!</text>
          <text x="190" y="142" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono">Overall: B (83%) &gt; A (78%) due to group size</text>
        </svg>
      );

    // 19. CROSSING THE CHASM
    case 'chasm-gap':
    case 'beachhead':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Crossing the Chasm Bell Curve">
          <path d="M40 140 Q 90 40 130 90 L130 140 Z" fill="none" stroke={stroke} strokeWidth="2.5" />
          <text x="85" y="125" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Early Visionaries</text>

          {/* THE CHASM */}
          <rect x="135" y="40" width="45" height="100" fill={stroke} rx="4" />
          <text x="157" y="85" textAnchor="middle" fill="var(--bg)" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800" transform="rotate(-90 157 85)">THE CHASM</text>

          <path d="M185 140 Q 230 20 280 40 Q 330 60 360 140 Z" fill="none" stroke={stroke} strokeWidth="2.5" />
          <rect x="210" y="75" width="130" height="26" rx="6" fill={yellow} />
          <text x="275" y="92" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">Pragmatists (Majority)</text>
          <text x="275" y="120" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Need proven social proof</text>

          <text x="190" y="165" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono">Dominate one niche beachhead to jump the chasm.</text>
        </svg>
      );

    // 20. FOUNDER MODE
    case 'founder-mode':
    case 'skip-level':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Founder Mode vs Manager Mode">
          {/* Manager Mode */}
          <rect x="25" y="25" width="150" height="130" rx="12" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="100" y="46" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">MANAGER MODE</text>
          <circle cx="100" cy="65" r="7" fill={stroke} opacity="0.6" />
          <line x1="100" y1="72" x2="70" y2="95" stroke={stroke} opacity="0.4" />
          <line x1="100" y1="72" x2="130" y2="95" stroke={stroke} opacity="0.4" />
          <circle cx="70" cy="98" r="5" fill={stroke} opacity="0.4" />
          <circle cx="130" cy="98" r="5" fill={stroke} opacity="0.4" />
          <text x="100" y="135" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono">Told: "Hire & Delegate"</text>

          {/* Founder Mode */}
          <rect x="205" y="25" width="150" height="130" rx="12" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <rect x="225" y="34" width="110" height="20" rx="4" fill={yellow} />
          <text x="280" y="48" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">FOUNDER MODE</text>
          <circle cx="280" cy="68" r="9" fill={yellow} stroke={stroke} strokeWidth="2" />
          <line x1="280" y1="77" x2="245" y2="108" stroke={stroke} strokeWidth="2" />
          <line x1="280" y1="77" x2="315" y2="108" stroke={stroke} strokeWidth="2" />
          <line x1="280" y1="77" x2="280" y2="114" stroke={stroke} strokeWidth="2" />
          <circle cx="245" cy="112" r="6" fill={stroke} />
          <circle cx="280" cy="118" r="6" fill={stroke} />
          <circle cx="315" cy="112" r="6" fill={stroke} />
          <text x="280" y="142" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Direct skip-level details</text>
        </svg>
      );

    // 21. POWER LAW
    case 'pm-law':
    case 'zero-one':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Power Law Curve">
          <line x1="50" y1="150" x2="340" y2="150" stroke={stroke} strokeWidth="2" />
          <line x1="50" y1="150" x2="50" y2="25" stroke={stroke} strokeWidth="2" />

          {/* Exponential curve */}
          <path d="M55 145 Q 120 142 180 120 Q 250 90 280 25" fill="none" stroke={stroke} strokeWidth="3.5" />
          <circle cx="280" cy="25" r="7" fill={yellow} stroke={stroke} strokeWidth="2" />

          <rect x="70" y="12" width="230" height="22" rx="4" fill={yellow} />
          <text x="185" y="27" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">#1 Outlier &gt; All Others Combined</text>
          
          <rect x="70" y="138" width="12" height="12" fill={stroke} opacity="0.3" />
          <rect x="90" y="139" width="12" height="11" fill={stroke} opacity="0.3" />
          <rect x="110" y="140" width="12" height="10" fill={stroke} opacity="0.3" />
          <rect x="130" y="141" width="12" height="9" fill={stroke} opacity="0.3" />
          <text x="105" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">99% of investments return ~0x</text>
        </svg>
      );

    // 22. INVERSION
    case 'inv':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Inversion Mental Model">
          <path d="M60 55 L280 55" stroke={stroke} strokeWidth="2" opacity="0.4" />
          <text x="60" y="42" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">FORWARD: How do I succeed?</text>

          {/* Invert */}
          <path d="M320 115 L100 115" stroke={stroke} strokeWidth="3.5" />
          <polygon points="90,115 105,108 105,122" fill={stroke} />
          <rect x="70" y="90" width="240" height="22" rx="4" fill={yellow} />
          <text x="190" y="105" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">INVERT: How could this project die?</text>
          
          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Avoid the death traps first; success follows naturally.</text>
        </svg>
      );

    // 23. EISENHOWER MATRIX
    case 'eisenhower':
    case 'deep-work':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Eisenhower 4 Quadrants">
          {/* Q2 FOCUS */}
          <rect x="70" y="25" width="115" height="60" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="127" y="50" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">Q2: FOCUS</text>
          <text x="127" y="68" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontWeight="600">Important, Not Urgent</text>

          {/* Q1 DO NOW */}
          <rect x="195" y="25" width="115" height="60" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="252" y="50" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">Q1: DO NOW</text>
          <text x="252" y="68" textAnchor="middle" fill={muted} fontSize="10">Urgent & Important</text>

          {/* Q4 ELIMINATE */}
          <rect x="70" y="95" width="115" height="60" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="127" y="120" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Q4: ELIMINATE</text>
          <text x="127" y="138" textAnchor="middle" fill={muted} fontSize="10">Not Important</text>

          {/* Q3 DELEGATE */}
          <rect x="195" y="95" width="115" height="60" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="252" y="120" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Q3: DELEGATE</text>
          <text x="252" y="138" textAnchor="middle" fill={muted} fontSize="10">Urgent, Not Important</text>
        </svg>
      );

    // 24. THE MOM TEST: PITCH VS CONVERSATION
    case 'mom-the-mom-test':
    case 'mom-why-customer-conversations-fail':
    case 'mom-talk-about-their-lives':
    case 'mom-avoid-pitching':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Mom Test Conversation vs Pitch">
          {/* Wrong: Pitching the Idea */}
          <rect x="25" y="25" width="155" height="110" rx="8" fill={boxBg} stroke={red} strokeWidth="1.5" />
          <text x="102" y="44" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">❌ THE PITCH (BAD)</text>
          <text x="102" y="70" textAnchor="middle" fill={text} fontSize="11">"Would you buy my app?"</text>
          <text x="102" y="92" textAnchor="middle" fill={muted} fontSize="10">"Yeah, sounds cool!"</text>
          <rect x="35" y="106" width="135" height="20" rx="4" fill={red} fillOpacity="0.12" />
          <text x="102" y="120" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Courtesy Bias = 0 Truth</text>

          {/* Right: The Mom Test */}
          <rect x="200" y="25" width="155" height="110" rx="8" fill={yellow} fillOpacity="0.15" stroke={stroke} strokeWidth="2" />
          <text x="277" y="44" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">✅ THE MOM TEST</text>
          <text x="277" y="70" textAnchor="middle" fill={text} fontSize="11">"How do you fix it now?"</text>
          <text x="277" y="92" textAnchor="middle" fill={text} fontSize="10" fontWeight="600">"I paid $400 last week."</text>
          <rect x="210" y="106" width="135" height="20" rx="4" fill={yellow} />
          <text x="277" y="120" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">Behavioral Facts = Gold</text>

          <text x="190" y="160" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Talk about their life, not your solution.</text>
        </svg>
      );

    // 25. THE MOM TEST: PAST SPECIFICS VS FUTURE OPINIONS
    case 'mom-past-specifics':
    case 'mom-opinions-vs-facts':
    case 'mom-fluff':
    case 'mom-fluffy-data':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Past Specifics vs Future Opinions">
          {/* Past Concrete Actions */}
          <rect x="30" y="30" width="150" height="95" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="105" y="52" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">PAST ACTIONS ★</text>
          <text x="105" y="76" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="600">"When did you last do it?"</text>
          <text x="105" y="98" textAnchor="middle" fill="#0B0B0C" fontSize="10">Verifiable past events</text>
          <text x="105" y="114" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono">Actual $ and hours spent</text>

          {/* vs */}
          <text x="190" y="82" textAnchor="middle" fill={text} fontSize="14" fontWeight="800">VS</text>

          {/* Future Hypotheticals */}
          <rect x="200" y="30" width="150" height="95" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="275" y="52" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">FUTURE PROMISES</text>
          <text x="275" y="76" textAnchor="middle" fill={text} fontSize="11">"Would you use this?"</text>
          <text x="275" y="98" textAnchor="middle" fill={muted} fontSize="10">Polite optimistic guesses</text>
          <text x="275" y="114" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono">Zero economic commitment</text>

          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Never believe future predictions; ask for past proof.</text>
        </svg>
      );

    // 26. THE COMMITMENT LADDER & COMPLIMENTS
    case 'mom-compliments':
    case 'mom-commitment-and-advancement':
    case 'mom-commitment-currency':
    case 'mom-push-for-commitment':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Commitment Ladder">
          {/* Ladder Rungs */}
          {/* Level 0: Compliment */}
          <rect x="40" y="120" width="140" height="28" rx="5" fill={boxBg} stroke={red} strokeWidth="1.5" />
          <text x="110" y="138" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono">0: "Great idea!" (Fluff)</text>

          {/* Level 1: Time */}
          <rect x="80" y="88" width="170" height="28" rx="5" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="165" y="106" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono">1: Calendar / 60m Trial</text>

          {/* Level 2: Reputation */}
          <rect x="120" y="56" width="190" height="28" rx="5" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="215" y="74" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono">2: Intro to Boss / Decision Maker</text>

          {/* Level 3: Cash / Contract */}
          <rect x="160" y="24" width="190" height="28" rx="5" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="255" y="42" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">3: LOI / Deposit / Pre-order ★</text>

          {/* Commitment Arrow */}
          <path d="M50 115 L150 25" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="152,22 142,26 148,34" fill={stroke} />
          <text x="190" y="168" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Push meetings toward clear commitment or honest rejection.</text>
        </svg>
      );

    // 27. FEATURE REQUEST ICEBERG
    case 'mom-feature-requests':
    case 'mom-why-they-want-it':
    case 'mom-ideas':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Feature Request Iceberg">
          {/* Water surface */}
          <line x1="30" y1="75" x2="350" y2="75" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          <text x="310" y="70" textAnchor="end" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Surface level</text>

          {/* Iceberg Tip (Feature Request) */}
          <polygon points="190,30 230,75 150,75" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="190" y="56" textAnchor="middle" fill={red} fontSize="11" fontWeight="700">"Add feature X"</text>

          {/* Iceberg Body Under Water (Real Motivation & Pain) */}
          <polygon points="150,75 230,75 270,140 110,140" fill={yellow} fillOpacity="0.2" stroke={stroke} strokeWidth="2" />
          <rect x="125" y="95" width="130" height="24" rx="4" fill={yellow} />
          <text x="190" y="111" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">ROOT WORKFLOW PAIN</text>
          <text x="190" y="132" textAnchor="middle" fill={text} fontSize="10">Why do they need it? What breaks?</text>

          <text x="190" y="165" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Don't build requests blindly; dig for the root breakdown.</text>
        </svg>
      );

    // 28. THE MENTAL LADDER (Al Ries & Jack Trout)
    case 'pos-mental-ladders':
    case 'pos-first-mover-perception':
    case 'pos-positioning-definition':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Mental Brand Ladder">
          {/* Ladder Rails */}
          <line x1="85" y1="20" x2="85" y2="155" stroke={stroke} strokeWidth="3" />
          <line x1="295" y1="20" x2="295" y2="155" stroke={stroke} strokeWidth="3" />

          {/* Rung 1: Leader */}
          <line x1="85" y1="45" x2="295" y2="45" stroke={stroke} strokeWidth="2.5" />
          <rect x="100" y="32" width="180" height="26" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="190" y="49" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">#1: CATEGORY LEADER</text>

          {/* Rung 2: Challenger */}
          <line x1="85" y1="90" x2="295" y2="90" stroke={stroke} strokeWidth="2" />
          <rect x="110" y="78" width="160" height="24" rx="5" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="94" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">#2: CHALLENGER ("Try Harder")</text>

          {/* Rung 3: The Alternative */}
          <line x1="85" y1="135" x2="295" y2="135" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" />
          <rect x="120" y="123" width="140" height="24" rx="5" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="139" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">#3: ALTERNATIVE ("The Un-cola")</text>

          <text x="190" y="172" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">The mind holds at most 2-3 brands per category ladder.</text>
        </svg>
      );

    // 29. OUTSIDE-IN THINKING VS INSIDE-OUT
    case 'pos-outside-in-thinking':
    case 'pos-perception-and-reality':
    case 'pos-simplification':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Outside-In Positioning Thinking">
          {/* Inside-Out Box */}
          <rect x="25" y="25" width="155" height="110" rx="8" fill={boxBg} stroke={red} strokeWidth="1.5" />
          <text x="102" y="46" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">❌ INSIDE-OUT</text>
          <text x="102" y="70" textAnchor="middle" fill={muted} fontSize="10">"We wrote ML pipelines &</text>
          <text x="102" y="86" textAnchor="middle" fill={muted} fontSize="10">have 50 feature toggles."</text>
          <rect x="35" y="104" width="135" height="20" rx="4" fill={red} fillOpacity="0.12" />
          <text x="102" y="118" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">Developer Vanity (Ignored)</text>

          {/* Outside-In Box */}
          <rect x="200" y="25" width="155" height="110" rx="8" fill={yellow} fillOpacity="0.15" stroke={stroke} strokeWidth="2" />
          <text x="277" y="46" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">✅ OUTSIDE-IN</text>
          <text x="277" y="70" textAnchor="middle" fill={text} fontSize="10" fontWeight="600">"Learn difficult topics</text>
          <text x="277" y="86" textAnchor="middle" fill={text} fontSize="10" fontWeight="600">in 5 minutes a day."</text>
          <rect x="210" y="104" width="135" height="20" rx="4" fill={yellow} />
          <text x="277" y="118" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">Customer Mental Hook</text>

          <text x="190" y="160" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Start with the customer's mind, not your internal technology.</text>
        </svg>
      );

    // 30. LINE EXTENSION TRAP
    case 'pos-line-extension-trap':
    case 'pos-free-ride-trap':
    case 'pos-line-extension-conditions':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Line Extension Trap">
          {/* Left: Focused Brand */}
          <circle cx="95" cy="75" r="45" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="95" y="72" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">FOCUSED</text>
          <text x="95" y="88" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontWeight="600">One Clear Peg</text>
          <text x="95" y="142" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">High Brand Equity</text>

          {/* vs */}
          <text x="190" y="78" textAnchor="middle" fill={muted} fontSize="14" fontWeight="800">VS</text>

          {/* Right: Line Extension Blur */}
          <circle cx="285" cy="75" r="52" fill="none" stroke={red} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="260" cy="55" r="14" fill={boxBg} stroke={stroke} strokeWidth="1" />
          <circle cx="310" cy="55" r="14" fill={boxBg} stroke={stroke} strokeWidth="1" />
          <circle cx="260" cy="95" r="14" fill={boxBg} stroke={stroke} strokeWidth="1" />
          <circle cx="310" cy="95" r="14" fill={boxBg} stroke={stroke} strokeWidth="1" />
          <text x="285" y="78" textAnchor="middle" fill={red} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">DILUTED</text>
          <text x="285" y="142" textAnchor="middle" fill={red} fontSize="11" fontWeight="700">Customer Confusion</text>

          <text x="190" y="166" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Stretching a brand across everything dilutes its meaning to nothing.</text>
        </svg>
      );

    // 31. CHALLENGER REPOSITIONING
    case 'pos-challenger-positioning':
    case 'pos-competitor-repositioning':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Challenger Repositioning Strategy">
          {/* Incumbent Strength turned into Weakness */}
          <rect x="30" y="30" width="145" height="100" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="102" y="52" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">INCUMBENT</text>
          <text x="102" y="74" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">200 Complex Features</text>
          <text x="102" y="94" textAnchor="middle" fill={red} fontSize="10">↳ Slow, bloated, cluttered</text>
          <text x="102" y="112" textAnchor="middle" fill={muted} fontSize="10">(Exposed trade-off)</text>

          {/* Arrow */}
          <path d="M185 80 L210 80" stroke={stroke} strokeWidth="2.5" />
          <polygon points="218,80 206,73 206,87" fill={stroke} />

          {/* Challenger Pivot */}
          <rect x="220" y="30" width="145" height="100" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="292" y="52" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">CHALLENGER ★</text>
          <text x="292" y="74" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Calm Simplicity</text>
          <text x="292" y="94" textAnchor="middle" fill="#0B0B0C" fontSize="10">Instant setup in 60s</text>
          <text x="292" y="112" textAnchor="middle" fill="#0B0B0C" fontSize="10">(Opposite attribute)</text>

          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Don't fight the leader's strength; own the opposite benefit.</text>
        </svg>
      );

    // 32. RECOMBINATION & GENEALOGY (Steal Like an Artist)
    case 'sla-nothing-from-nothing':
    case 'sla-originality-as-transformation':
    case 'sla-combine-influences':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Creative Recombination">
          {/* 3 Input Nodes */}
          <rect x="25" y="25" width="85" height="32" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="67" y="45" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono">Influence A</text>

          <rect x="145" y="25" width="85" height="32" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="187" y="45" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono">Influence B</text>

          <rect x="265" y="25" width="85" height="32" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="307" y="45" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono">Influence C</text>

          {/* Merge arrows */}
          <path d="M67 60 L187 95" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
          <path d="M187 60 L187 95" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
          <path d="M307 60 L187 95" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />

          {/* Synthesis Node */}
          <rect x="110" y="95" width="155" height="42" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="187" y="114" textAnchor="middle" fill="#0B0B0C" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">YOUR SYNTHESIS ★</text>
          <text x="187" y="128" textAnchor="middle" fill="#0B0B0C" fontSize="10">Originality through Remix</text>

          <text x="187" y="164" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Nothing comes from nothing. Steal from 10 sources, not 1.</text>
        </svg>
      );

    // 33. GOOD THEFT VS BAD THEFT
    case 'sla-study-principles':
    case 'sla-influence-vs-plagiarism':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Good Theft vs Bad Theft">
          {/* Bad Theft */}
          <rect x="25" y="25" width="155" height="110" rx="8" fill={boxBg} stroke={red} strokeWidth="1.5" />
          <text x="102" y="46" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">❌ BAD THEFT</text>
          <text x="102" y="68" textAnchor="middle" fill={text} fontSize="10">Steals from 1 person</text>
          <text x="102" y="84" textAnchor="middle" fill={text} fontSize="10">Imitates surface appearance</text>
          <text x="102" y="100" textAnchor="middle" fill={text} fontSize="10">Hides attribution</text>
          <rect x="35" y="108" width="135" height="18" rx="4" fill={red} fillOpacity="0.12" />
          <text x="102" y="121" textAnchor="middle" fill={red} fontSize="9" fontFamily="IBM Plex Mono" fontWeight="700">Plagiarism / Copycat</text>

          {/* Good Theft */}
          <rect x="200" y="25" width="155" height="110" rx="8" fill={yellow} fillOpacity="0.15" stroke={stroke} strokeWidth="2" />
          <text x="277" y="46" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">✅ GOOD THEFT</text>
          <text x="277" y="68" textAnchor="middle" fill={text} fontSize="10">Steals from 10 disciplines</text>
          <text x="277" y="84" textAnchor="middle" fill={text} fontSize="10">Deconstructs deep principles</text>
          <text x="277" y="100" textAnchor="middle" fill={text} fontSize="10">Credits roots & transforms</text>
          <rect x="210" y="108" width="135" height="18" rx="4" fill={yellow} />
          <text x="277" y="121" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontFamily="IBM Plex Mono" fontWeight="800">Transformative Art</text>

          <text x="190" y="160" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Honor, credit, and transform into a new creation.</text>
        </svg>
      );

    // 34. CONSTRAINTS AS FREEDOM
    case 'sla-constraints':
    case 'sla-boredom-and-attention':
    case 'sla-creative-environment':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Constraints as Freedom">
          {/* Infinite Blank Canvas */}
          <rect x="30" y="30" width="145" height="95" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="102" y="54" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">INFINITE FREEDOM</text>
          <text x="102" y="78" textAnchor="middle" fill={muted} fontSize="10">Blank canvas paralysis</text>
          <text x="102" y="96" textAnchor="middle" fill={red} fontSize="10" fontWeight="700">Zero work produced</text>

          {/* vs */}
          <text x="190" y="78" textAnchor="middle" fill={text} fontSize="14" fontWeight="800">VS</text>

          {/* Tight Constraint */}
          <rect x="220" y="30" width="145" height="95" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="292" y="54" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">TIGHT CONSTRAINTS ★</text>
          <text x="292" y="76" textAnchor="middle" fill="#0B0B0C" fontSize="10">"50 words, 15 minutes"</text>
          <text x="292" y="96" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Breakthrough Artifact</text>

          <text x="190" y="155" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Limitless options paralyze; strict boundaries force invention.</text>
        </svg>
      );

    // 35. THE MAKING LOOP
    case 'sla-make-things':
    case 'sla-process-over-perfection':
    case 'sla-unfinished-work':
    case 'sla-side-projects':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Making Loop">
          {/* Cycle nodes */}
          <rect x="30" y="40" width="90" height="50" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="75" y="62" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. MAKE</text>
          <text x="75" y="78" textAnchor="middle" fill={text} fontSize="10" fontWeight="700">Messy Draft</text>

          <path d="M125 65 L145 65" stroke={stroke} strokeWidth="2" />

          <rect x="150" y="40" width="90" height="50" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="195" y="62" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. SHRINK</text>
          <text x="195" y="78" textAnchor="middle" fill={text} fontSize="10" fontWeight="700">Cut Scope</text>

          <path d="M245 65 L265 65" stroke={stroke} strokeWidth="2" />

          <rect x="270" y="40" width="90" height="50" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="315" y="62" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. SHIP ★</text>
          <text x="315" y="78" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontWeight="800">Deliver Today</text>

          {/* Loop back arrow */}
          <path d="M315 95 Q 195 140 75 95" fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" />
          <text x="195" y="132" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Iterate & build creative stamina</text>

          <text x="195" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Action precedes clarity. Make things to discover who you are.</text>
        </svg>
      );

    // 36. THE HOOK MODEL: 4-PHASE CYCLE
    case 'hook-four-phase-model':
    case 'hook-cycle-breakpoints':
    case 'hook-design-a-responsible-hook':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Hook Model 4-Phase Cycle">
          {/* Phase 1: Trigger */}
          <rect x="25" y="25" width="150" height="52" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="100" y="44" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. TRIGGER</text>
          <text x="100" y="62" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Internal / External</text>

          {/* Arrow 1 -> 2 */}
          <path d="M180 51 L200 51" stroke={stroke} strokeWidth="2" />

          {/* Phase 2: Action */}
          <rect x="205" y="25" width="150" height="52" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="280" y="44" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. ACTION</text>
          <text x="280" y="62" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Lowest Friction (MAP)</text>

          {/* Arrow 2 -> 3 */}
          <path d="M280 82 L280 97" stroke={stroke} strokeWidth="2" />

          {/* Phase 3: Variable Reward */}
          <rect x="205" y="102" width="150" height="52" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="280" y="121" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. VARIABLE REWARD ★</text>
          <text x="280" y="139" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Tribe, Hunt, Self</text>

          {/* Arrow 3 -> 4 */}
          <path d="M200 128 L180 128" stroke={stroke} strokeWidth="2" />

          {/* Phase 4: Investment */}
          <rect x="25" y="102" width="150" height="52" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="100" y="121" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">4. INVESTMENT</text>
          <text x="100" y="139" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Stored Value & Future Cue</text>

          {/* Arrow 4 -> 1 */}
          <path d="M100 97 L100 82" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />

          <text x="190" y="172" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">The Hook: Trigger ➔ Action ➔ Variable Reward ➔ Investment</text>
        </svg>
      );

    // 37. THE HABIT ZONE (Frequency vs Utility)
    case 'hook-habit-zone':
    case 'hook-habit-vs-one-time-use':
    case 'hook-habit-opportunity':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Habit Zone Matrix">
          {/* Axis lines */}
          <line x1="60" y1="140" x2="340" y2="140" stroke={stroke} strokeWidth="2" />
          <line x1="60" y1="140" x2="60" y2="25" stroke={stroke} strokeWidth="2" />

          {/* Axis labels */}
          <text x="330" y="156" textAnchor="end" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Perceived Utility →</text>
          <text x="50" y="32" textAnchor="end" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Frequency ↑</text>

          {/* The Habit Zone Area */}
          <path d="M140 35 Q 200 80 240 135 L 340 135 L 340 35 Z" fill={yellow} fillOpacity="0.35" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="200" y="48" width="125" height="34" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="262" y="66" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">THE HABIT ZONE ★</text>
          <text x="262" y="77" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="700">High Utility + Recurring</text>

          {/* Low zone */}
          <circle cx="100" cy="115" r="4" fill={stroke} />
          <text x="110" y="112" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">One-time visit</text>
          <text x="110" y="124" fill={muted} fontSize="9">(No habit forms)</text>

          <text x="190" y="172" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Habits require both recurring cadence and perceived utility.</text>
        </svg>
      );

    // 38. TRIGGER TRANSITION (External to Internal)
    case 'hook-trigger-basics':
    case 'hook-external-triggers':
    case 'hook-internal-triggers':
    case 'hook-emotional-triggers':
    case 'hook-trigger-transition':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Trigger Transition Bridge">
          {/* External Trigger */}
          <rect x="25" y="35" width="135" height="85" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="92" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">EXTERNAL CUE</text>
          <text x="92" y="80" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Push, Email, Link</text>
          <text x="92" y="102" textAnchor="middle" fill={muted} fontSize="10">"Training Wheels"</text>

          {/* Bridge Arrow */}
          <path d="M165 77 L210 77" stroke={stroke} strokeWidth="2.5" />
          <polygon points="215,77 203,71 203,83" fill={stroke} />
          <text x="187" y="68" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">Habit Loops</text>

          {/* Internal Trigger */}
          <rect x="220" y="35" width="135" height="85" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="287" y="58" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">INTERNAL CUE ★</text>
          <text x="287" y="80" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Emotion & Memory</text>
          <text x="287" y="102" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontWeight="700">Autonomous Open</text>

          <text x="190" y="152" textAnchor="middle" fill={text} fontSize="12" fontWeight="700">Confusion / Curiosity ➔ Instinctive Open</text>
          <text x="190" y="170" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">External triggers ignite use; internal triggers sustain habits.</text>
        </svg>
      );

    // 39. FOGG BEHAVIOR MODEL (Action Phase)
    case 'hook-action-basics':
    case 'hook-motivation':
    case 'hook-ability-and-friction':
    case 'hook-prompts-and-calls-to-action':
    case 'hook-ability-motivation-balance':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Behavior Model MAP">
          {/* Chart Axes */}
          <line x1="55" y1="135" x2="335" y2="135" stroke={stroke} strokeWidth="2" />
          <line x1="55" y1="135" x2="55" y2="25" stroke={stroke} strokeWidth="2" />
          <text x="325" y="152" textAnchor="end" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Ability (Hard ➔ Easy) →</text>
          <text x="45" y="32" textAnchor="end" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Motivation ↑</text>

          {/* Activation Curve */}
          <path d="M70 45 Q 140 100 320 125" fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="5 5" />
          <text x="260" y="70" fill={muted} fontSize="9" fontFamily="IBM Plex Mono" transform="rotate(-15 260 70)">Action Threshold Line</text>

          {/* Above threshold (Action Succeeds) */}
          <rect x="210" y="35" width="115" height="32" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="267" y="52" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">BEHAVIOR HAPPENS ★</text>
          <text x="267" y="63" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="700">High Ability + Prompt</text>

          {/* Below threshold (Frustration / Failure) */}
          <circle cx="110" cy="115" r="4" fill={red} />
          <text x="120" y="118" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Friction Barrier (Drop-off)</text>

          <text x="190" y="172" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">B = MAP (Behavior = Motivation × Ability × Prompt)</text>
        </svg>
      );

    // 40. THE THREE VARIABLE REWARDS
    case 'hook-reward-basics':
    case 'hook-reward-of-tribe':
    case 'hook-reward-of-hunt':
    case 'hook-reward-of-self':
    case 'hook-reward-relevance':
    case 'hook-variable-reward-limits':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Triad of Variable Rewards">
          {/* Tribe */}
          <rect x="25" y="35" width="100" height="90" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="75" y="60" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. TRIBE</text>
          <text x="75" y="80" textAnchor="middle" fill={text} fontSize="20">👥</text>
          <text x="75" y="105" textAnchor="middle" fill={text} fontSize="10" fontWeight="700">Belonging</text>
          <text x="75" y="118" textAnchor="middle" fill={muted} fontSize="9">Peer validation</text>

          {/* Hunt */}
          <rect x="140" y="35" width="100" height="90" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="60" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. HUNT</text>
          <text x="190" y="80" textAnchor="middle" fill={text} fontSize="20">🎯</text>
          <text x="190" y="105" textAnchor="middle" fill={text} fontSize="10" fontWeight="700">Discovery</text>
          <text x="190" y="118" textAnchor="middle" fill={muted} fontSize="9">Scarce insights</text>

          {/* Self */}
          <rect x="255" y="35" width="100" height="90" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="305" y="60" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. SELF ★</text>
          <text x="305" y="80" textAnchor="middle" fill="#0B0B0C" fontSize="20">🏆</text>
          <text x="305" y="105" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontWeight="800">Mastery</text>
          <text x="305" y="118" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="700">Competence</text>

          <text x="190" y="152" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Variable dopamine fuels continued intellectual curiosity.</text>
          <text x="190" y="170" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Never use manipulation or anxiety; reward genuine progress.</text>
        </svg>
      );

    // 41. STORED VALUE & THE NEXT TRIGGER
    case 'hook-investment-basics':
    case 'hook-stored-value':
    case 'hook-investment-after-reward':
    case 'hook-small-investments':
    case 'hook-user-content-and-preferences':
    case 'hook-next-trigger':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Stored Value & Next Trigger">
          {/* User Investment Input */}
          <rect x="25" y="40" width="105" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="77" y="62" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">INVESTMENT</text>
          <text x="77" y="82" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Save Notes</text>
          <text x="77" y="98" textAnchor="middle" fill={muted} fontSize="9">Set target streak</text>

          {/* Arrow */}
          <path d="M135 77 L155 77" stroke={stroke} strokeWidth="2" />

          {/* Stored Value Accumulator */}
          <rect x="160" y="40" width="105" height="75" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="212" y="62" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">STORED VALUE ★</text>
          <text x="212" y="82" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Mastery Graph</text>
          <text x="212" y="98" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="700">Personal history</text>

          {/* Arrow */}
          <path d="M270 77 L290 77" stroke={stroke} strokeWidth="2" />

          {/* Next Trigger Primed */}
          <rect x="295" y="40" width="65" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="327" y="62" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">PRIMES</text>
          <text x="327" y="82" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Next</text>
          <text x="327" y="98" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Loop</text>

          <text x="190" y="148" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Data, reputation, and notes make the product stickier over time.</text>
          <text x="190" y="168" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Investment loads the next trigger naturally.</text>
        </svg>
      );

    // 42. THE MANIPULATION MATRIX
    case 'hook-manipulation-vs-help':
    case 'hook-manipulation-matrix':
    case 'hook-ethical-metrics':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Manipulation Matrix">
          {/* Matrix boundary */}
          <rect x="60" y="30" width="280" height="110" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <line x1="200" y1="30" x2="200" y2="140" stroke={stroke} strokeWidth="1.5" />
          <line x1="60" y1="85" x2="340" y2="85" stroke={stroke} strokeWidth="1.5" />

          {/* Labels for quadrants */}
          {/* Top-Left: Peddler */}
          <text x="130" y="55" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">THE PEDDLER</text>
          <text x="130" y="70" textAnchor="middle" fill={muted} fontSize="9">Doesn't use / Claims help</text>

          {/* Top-Right: Facilitator (Yellow Gold) */}
          <rect x="202" y="32" width="136" height="51" fill={yellow} rx="6" />
          <text x="270" y="55" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">THE FACILITATOR ★</text>
          <text x="270" y="70" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="700">Uses it & Improves lives</text>

          {/* Bottom-Left: Dealer */}
          <text x="130" y="110" textAnchor="middle" fill={red} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">THE DEALER</text>
          <text x="130" y="125" textAnchor="middle" fill={muted} fontSize="9">Doesn't use / Exploits</text>

          {/* Bottom-Right: Entertainer */}
          <text x="270" y="110" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono">THE ENTERTAINER</text>
          <text x="270" y="125" textAnchor="middle" fill={muted} fontSize="9">Uses it / Fleeting fun</text>

          {/* Matrix Axes */}
          <text x="190" y="20" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Creator uses product? (No vs Yes)</text>
          <text x="190" y="168" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Always design as a Facilitator: build things you use that enrich lives.</text>
        </svg>
      );

    // TRACTION: THE BULLSEYE FRAMEWORK (Gabriel Weinberg & Justin Mares)
    case 'trac-brainstorm':
    case 'trac-prioritize':
    case 'trac-test':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Bullseye Framework 3 Rings">
          {/* Outer Ring */}
          <circle cx="120" cy="90" r="75" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          {/* Middle Ring */}
          <circle cx="120" cy="90" r="48" fill={boxBg} stroke={stroke} strokeWidth="2" />
          {/* Inner Bullseye */}
          <circle cx="120" cy="90" r="24" fill={yellow} stroke={stroke} strokeWidth="2.5" />
          <text x="120" y="94" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">CORE</text>

          {/* Callouts */}
          <text x="235" y="45" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">1. OUTER RING</text>
          <text x="235" y="60" fill={text} fontSize="11">Brainstorm all 19 channels</text>

          <text x="235" y="90" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">2. MIDDLE RING</text>
          <text x="235" y="105" fill={text} fontSize="11">Test 3-5 promising channels</text>

          <text x="235" y="135" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">3. INNER BULLSEYE ★</text>
          <text x="235" y="150" fill={text} fontSize="11" fontWeight="700">Focus on the 1 core channel</text>

          <path d="M120 90 L225 135" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
        </svg>
      );

    // TRACTION: 50% RULE & CRITICAL PATH
    case 'trac-traction':
    case 'trac-50-percent-rule':
    case 'trac-critical-path':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The 50 Percent Rule">
          {/* Balance Scale / Split Bar */}
          <rect x="35" y="45" width="150" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="110" y="72" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">PRODUCT (50%)</text>
          <text x="110" y="95" textAnchor="middle" fill={text} fontSize="14" fontWeight="800">Build & Refine</text>

          <text x="190" y="86" textAnchor="middle" fill={text} fontSize="20" fontWeight="800">=</text>

          <rect x="195" y="45" width="150" height="70" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="270" y="72" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">TRACTION (50%)</text>
          <text x="270" y="95" textAnchor="middle" fill="#0B0B0C" fontSize="14" fontWeight="800">Test Channels</text>

          {/* Equal energy arrow */}
          <path d="M60 135 L320 135" stroke={stroke} strokeWidth="2" />
          <polygon points="60,135 70,130 70,140" fill={stroke} />
          <polygon points="320,135 310,130 310,140" fill={stroke} />
          <text x="190" y="158" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">
            Never build in isolation: distribute in parallel
          </text>
        </svg>
      );

    // TRACTION: ACQUISITION FUNNEL & CAC VS LTV
    case 'trac-acquisition-cost':
    case 'trac-retention':
    case 'trac-scalability':
    case 'trac-optimizing-funnel':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Traction Funnel Economics">
          {/* Funnel trapezoid levels */}
          <polygon points="40,30 200,30 180,65 60,65" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="120" y="52" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. Impressions / Visits</text>

          <polygon points="60,65 180,65 160,100 80,100" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="120" y="87" textAnchor="middle" fill={text} fontSize="10" fontWeight="700">2. Signups / Leads</text>

          <polygon points="80,100 160,100 145,135 95,135" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="120" y="122" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. Paying (LTV)</text>

          {/* CAC vs LTV metric box */}
          <rect x="220" y="35" width="135" height="95" rx="8" fill={boxBg} stroke={stroke} strokeWidth="2" />
          <text x="287" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">UNIT RATIO</text>
          <text x="287" y="82" textAnchor="middle" fill={text} fontSize="15" fontWeight="800">LTV &gt; 3 × CAC</text>
          <rect x="235" y="95" width="105" height="22" rx="4" fill={yellow} />
          <text x="287" y="110" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">SCALABLE</text>

          <text x="190" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">
            Measure cost per activated customer, not superficial clicks
          </text>
        </svg>
      );

    // COLD START PROBLEM: THE ATOMIC NETWORK & THE HARD SIDE
    case 'csp-atomic-network':
    case 'csp-hard-side':
    case 'csp-empty-network':
    case 'csp-solve-hard-problem':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Atomic Network and Hard Side">
          {/* Micro-cluster perimeter */}
          <circle cx="120" cy="90" r="65" fill={boxBg} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          
          {/* Surrounding easy side nodes */}
          <circle cx="80" cy="55" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <circle cx="160" cy="55" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <circle cx="70" cy="115" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <circle cx="165" cy="115" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <circle cx="120" cy="145" r="12" fill={boxBg} stroke={stroke} strokeWidth="1.5" />

          {/* Connection lines to center */}
          <line x1="80" y1="55" x2="120" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <line x1="160" y1="55" x2="120" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <line x1="70" y1="115" x2="120" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <line x1="165" y1="115" x2="120" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <line x1="120" y1="145" x2="120" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.4" />

          {/* Center: The Hard Side */}
          <circle cx="120" cy="90" r="22" fill={yellow} stroke={stroke} strokeWidth="2.5" />
          <text x="120" y="88" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontFamily="IBM Plex Mono" fontWeight="800">HARD</text>
          <text x="120" y="99" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontFamily="IBM Plex Mono" fontWeight="800">SIDE</text>

          {/* Legend / Callouts */}
          <text x="215" y="45" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">1. ATOMIC NETWORK</text>
          <text x="215" y="62" fill={text} fontSize="11">Smallest self-sustaining unit</text>

          <text x="215" y="95" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">2. THE HARD SIDE ★</text>
          <text x="215" y="112" fill={muted} fontSize="11">Scarce, high-value creators</text>

          <text x="215" y="145" fill={muted} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">3. HIGH DENSITY</text>
          <text x="215" y="162" fill={text} fontSize="11">Overcomes cold start deficit</text>
        </svg>
      );

    // COLD START PROBLEM: GROWTH LOOPS & ESCAPE VELOCITY
    case 'csp-growth-loops':
    case 'csp-acquisition-effect':
    case 'csp-engagement-effect':
    case 'csp-economic-effect':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="Closed Growth Loop">
          {/* Circular closed track */}
          <circle cx="190" cy="90" r="62" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />

          {/* Step 1: User Action (Top) */}
          <rect x="135" y="15" width="110" height="28" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="33" textAnchor="middle" fill={text} fontSize="11" fontFamily="IBM Plex Mono" fontWeight="700">1. USER ACTION</text>

          {/* Step 2: Content/Asset (Right) */}
          <rect x="250" y="76" width="115" height="28" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="307" y="94" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">2. PUBLIC ASSET</text>

          {/* Step 3: Discovery/Invite (Bottom) */}
          <rect x="135" y="137" width="110" height="28" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="190" y="155" textAnchor="middle" fill={text} fontSize="10" fontFamily="IBM Plex Mono" fontWeight="700">3. NEW DISCOVERY</text>

          {/* Step 4: Activated User (Left) */}
          <rect x="15" y="76" width="115" height="28" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="72" y="94" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">4. NEW USER ADDS</text>

          {/* Center Flywheel Label */}
          <text x="190" y="88" textAnchor="middle" fill={text} fontSize="12" fontFamily="IBM Plex Mono" fontWeight="800">GROWTH</text>
          <text x="190" y="102" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">LOOP</text>
        </svg>
      );

    // COLD START PROBLEM: THE CEILING & ANTI-NETWORK GUARDRAILS
    case 'csp-network-saturation':
    case 'csp-declining-channel-efficiency':
    case 'csp-quality-at-scale':
    case 'csp-anti-network-effects':
      return (
        <svg viewBox="0 0 380 180" height={height} width="100%" aria-label="The Ceiling and Quality Filter">
          {/* S-curve chart */}
          <path d="M40 140 Q 110 135 150 90 T 220 50 L 340 50" fill="none" stroke={stroke} strokeWidth="2.5" />
          
          {/* Ceiling line */}
          <line x1="160" y1="42" x2="350" y2="42" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
          <text x="260" y="34" textAnchor="middle" fill="#DC2626" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">THE CEILING (SATURATION)</text>

          {/* Quality Guardrail gate */}
          <rect x="180" y="75" width="155" height="60" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="257" y="96" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">GUARDRAILS NEEDED</text>
          <text x="257" y="115" textAnchor="middle" fill={text} fontSize="11" fontWeight="700">Filter Spam & Noise</text>

          <circle cx="150" cy="90" r="5" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="90" y="105" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Inflection</text>

          <text x="190" y="165" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">
            Scale without curation destroys network value. Filter signal from noise.
          </text>
        </svg>
      );

    // DEFAULT SHELF SCHEMATICS
    default:
      if (id.startsWith('csp-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="The Cold Start 5 Stages Overview">
            <rect x="15" y="45" width="60" height="65" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="45" y="70" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">1. COLD</text>
            <text x="45" y="88" textAnchor="middle" fill={text} fontSize="9" fontWeight="700">Atomic</text>

            <path d="M78 78 L88 78" stroke={stroke} strokeWidth="2" />

            <rect x="90" y="45" width="60" height="65" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="120" y="70" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">2. TIPPING</text>
            <text x="120" y="88" textAnchor="middle" fill={text} fontSize="9" fontWeight="700">Density</text>

            <path d="M153 78 L163 78" stroke={stroke} strokeWidth="2" />

            <rect x="165" y="45" width="60" height="65" rx="6" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="195" y="70" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontFamily="IBM Plex Mono" fontWeight="800">3. ESCAPE</text>
            <text x="195" y="88" textAnchor="middle" fill="#0B0B0C" fontSize="9" fontWeight="800">Loops</text>

            <path d="M228 78 L238 78" stroke={stroke} strokeWidth="2" />

            <rect x="240" y="45" width="60" height="65" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="270" y="70" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">4. CEILING</text>
            <text x="270" y="88" textAnchor="middle" fill={text} fontSize="9" fontWeight="700">Quality</text>

            <path d="M303 78 L313 78" stroke={stroke} strokeWidth="2" />

            <rect x="315" y="45" width="55" height="65" rx="6" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="342" y="70" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">5. MOAT</text>
            <text x="342" y="88" textAnchor="middle" fill={text} fontSize="9" fontWeight="700">Defend</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">The Cold Start Problem: Andrew Chen's 5-Stage Network Framework</text>
          </svg>
        );
      }
      if (id.startsWith('trac-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Traction 19 Channels Bullseye Strategy">
            <rect x="25" y="40" width="95" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="72" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. 19 CHANNELS</text>
            <text x="72" y="88" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Brainstorm</text>

            <path d="M120 75 L140 75" stroke={stroke} strokeWidth="2" />

            <rect x="142" y="40" width="95" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="189" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. TEST 3-5</text>
            <text x="189" y="88" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Cheap Probes</text>

            <path d="M237 75 L257 75" stroke={stroke} strokeWidth="2" />

            <rect x="260" y="40" width="95" height="70" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="307" y="66" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. BULLSEYE</text>
            <text x="307" y="88" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">1 Core Channel</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Traction: Gabriel Weinberg & Justin Mares's Bullseye Framework</text>
          </svg>
        );
      }
      if (id.startsWith('hook-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="The Hook Model Cycle Overview">
            <rect x="25" y="35" width="75" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="62" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. TRIGGER</text>
            <text x="62" y="80" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">The Cue</text>

            <path d="M103 70 L117 70" stroke={stroke} strokeWidth="2" />

            <rect x="120" y="35" width="75" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="157" y="58" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. ACTION</text>
            <text x="157" y="80" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Behavior</text>

            <path d="M198 70 L212 70" stroke={stroke} strokeWidth="2" />

            <rect x="215" y="35" width="75" height="70" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="252" y="58" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. REWARD</text>
            <text x="252" y="80" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Variable</text>

            <path d="M293 70 L307 70" stroke={stroke} strokeWidth="2" />

            <rect x="310" y="35" width="60" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="340" y="58" textAnchor="middle" fill={muted} fontSize="9" fontFamily="IBM Plex Mono">4. INVEST</text>
            <text x="340" y="80" textAnchor="middle" fill={text} fontSize="10" fontWeight="600">Stored Val</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Hooked: Trigger ➔ Action ➔ Variable Reward ➔ Investment</text>
          </svg>
        );
      }
      if (id.startsWith('sla-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Steal Like an Artist Swipe & Synthesis">
            <rect x="30" y="40" width="95" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="77" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. SWIPE</text>
            <text x="77" y="90" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Collect Ideas</text>

            <path d="M130 78 L150 78" stroke={stroke} strokeWidth="2" />

            <rect x="152" y="40" width="95" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="199" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. REMIX</text>
            <text x="199" y="90" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Transform</text>

            <path d="M252 78 L272 78" stroke={stroke} strokeWidth="2" />

            <rect x="274" y="40" width="95" height="75" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="321" y="66" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. SHARE</text>
            <text x="321" y="90" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Show Work</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Steal Like an Artist: Collect curiosity, remix with craft, ship.</text>
          </svg>
        );
      }
      if (id.startsWith('pos-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Positioning Battle for the Mind">
            <rect x="30" y="40" width="95" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="77" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. AUDIENCE</text>
            <text x="77" y="90" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Existing Mind</text>

            <path d="M130 78 L150 78" stroke={stroke} strokeWidth="2" />

            <rect x="152" y="40" width="95" height="75" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="199" y="66" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. THE PEG</text>
            <text x="199" y="90" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Single Hook</text>

            <path d="M252 78 L272 78" stroke={stroke} strokeWidth="2" />

            <rect x="274" y="40" width="95" height="75" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="321" y="66" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. DEFEND</text>
            <text x="321" y="90" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Consistency</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">Positioning: Own a unique word in the customer's mind.</text>
          </svg>
        );
      }
      if (id.startsWith('mom-')) {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="The Mom Test Discovery Flow">
            <rect x="25" y="45" width="95" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="72" y="72" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">1. PAST FACTS</text>
            <text x="72" y="94" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Real Events</text>

            <path d="M120 80 L140 80" stroke={stroke} strokeWidth="2" />
            
            <rect x="142" y="45" width="95" height="70" rx="8" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="189" y="72" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">2. LISTEN</text>
            <text x="189" y="94" textAnchor="middle" fill={text} fontSize="11" fontWeight="600">Zero Pitching</text>

            <path d="M237 80 L257 80" stroke={stroke} strokeWidth="2" />

            <rect x="260" y="45" width="95" height="70" rx="8" fill={yellow} stroke={stroke} strokeWidth="2" />
            <text x="307" y="72" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">3. SKIN IN GAME</text>
            <text x="307" y="94" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">Commitment</text>

            <text x="190" y="145" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">The Mom Test: Extract unvarnished truth from anyone.</text>
          </svg>
        );
      }
      if (shelf === 'Startups') {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Startup Growth Flywheel">
            <circle cx="190" cy="80" r="55" fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="190" cy="25" r="14" fill={yellow} stroke={stroke} strokeWidth="2" />
            <circle cx="245" cy="80" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <circle cx="190" cy="135" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <circle cx="135" cy="80" r="14" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
            <text x="190" y="85" textAnchor="middle" fill={text} fontSize="13" fontFamily="IBM Plex Mono" fontWeight="700">FLYWHEEL</text>
            <text x="190" y="29" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontWeight="800">PMF</text>
            <text x="245" y="84" textAnchor="middle" fill={text} fontSize="10">SCALE</text>
            <text x="190" y="139" textAnchor="middle" fill={text} fontSize="10">RET</text>
            <text x="135" y="84" textAnchor="middle" fill={text} fontSize="10">LOOP</text>
          </svg>
        );
      }
      if (shelf === 'Counterintuitive') {
        return (
          <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Counterintuitive Paradox Shift">
            <line x1="50" y1="80" x2="160" y2="80" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
            <text x="105" y="65" textAnchor="middle" fill={muted} fontSize="11" fontFamily="IBM Plex Mono">Intuition</text>
            <polygon points="170,80 160,74 160,86" fill={stroke} opacity="0.4" />

            <circle cx="190" cy="80" r="18" fill={boxBg} stroke={stroke} strokeWidth="2.5" />
            <text x="190" y="86" textAnchor="middle" fill={text} fontSize="16" fontWeight="800">≠</text>

            <path d="M220 80 Q 280 40 330 80" fill="none" stroke={stroke} strokeWidth="2.5" />
            <rect x="235" y="42" width="110" height="22" rx="4" fill={yellow} />
            <text x="290" y="57" textAnchor="middle" fill="#0B0B0C" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="800">Reality (Math)</text>
            <circle cx="330" cy="80" r="5" fill={yellow} stroke={stroke} strokeWidth="1.5" />
          </svg>
        );
      }
      return (
        <svg viewBox="0 0 380 160" height={height} width="100%" aria-label="Mental Model Framework">
          <rect x="60" y="30" width="115" height="100" rx="12" fill={boxBg} stroke={stroke} strokeWidth="1.5" />
          <text x="117" y="65" textAnchor="middle" fill={muted} fontSize="10" fontFamily="IBM Plex Mono">ASSUMPTION</text>
          <text x="117" y="95" textAnchor="middle" fill={text} fontSize="13" fontWeight="700">Conventional</text>

          <path d="M185 80 L215 80" stroke={stroke} strokeWidth="2.5" />
          <polygon points="225,80 213,73 213,87" fill={stroke} />

          <rect x="235" y="30" width="115" height="100" rx="12" fill={yellow} stroke={stroke} strokeWidth="2" />
          <text x="292" y="65" textAnchor="middle" fill="#0B0B0C" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="800">FIRST PRINCIPLES</text>
          <text x="292" y="95" textAnchor="middle" fill="#0B0B0C" fontSize="13" fontWeight="800">Clear Truth</text>
        </svg>
      );
  }
};
