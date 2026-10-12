/**
 * Original hero illustration: external data sources flow into the
 * Ember Data layer, which delivers validated feeds to onchain
 * applications. Pure inline SVG — animated pulses use SMIL and are
 * hidden automatically under prefers-reduced-motion (see globals.css).
 */
export function DataFlowGraphic() {
  return (
    <svg
      viewBox="0 0 720 560"
      role="img"
      aria-label="Diagram: external data sources send raw observations into the Ember Data layer, which delivers validated feeds to smart contracts, DeFi protocols, and dashboards."
      className="dfg h-auto w-full"
    >
      <defs>
        <pattern id="dfg-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path
            d="M36 0H0V36"
            fill="none"
            stroke="rgba(245,245,240,0.045)"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="dfg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,107,74,0.2)" />
          <stop offset="100%" stopColor="rgba(255,107,74,0)" />
        </radialGradient>
      </defs>

      <rect width="720" height="560" fill="url(#dfg-grid)" />
      <ellipse cx="360" cy="280" rx="165" ry="150" fill="url(#dfg-glow)" />

      {/* Flow labels */}
      <text x="227" y="52" textAnchor="middle" className="dfg-m" fontSize="9" letterSpacing="2" fill="#6E7683">
        RAW OBSERVATIONS
      </text>
      <text x="493" y="52" textAnchor="middle" className="dfg-m" fontSize="9" letterSpacing="2" fill="#6E7683">
        VALIDATED FEEDS
      </text>

      {/* Connection paths */}
      <g fill="none" stroke="#343B45" strokeWidth="1.5">
        <path id="dfg-p1" d="M174 97 C 226 97, 229 280, 281 280" />
        <path id="dfg-p2" d="M174 280 H 281" />
        <path id="dfg-p3" d="M174 463 C 226 463, 229 280, 281 280" />
        <path id="dfg-p4" d="M439 280 C 491 280, 494 97, 546 97" />
        <path id="dfg-p5" d="M439 280 H 546" />
        <path id="dfg-p6" d="M439 280 C 491 280, 494 463, 546 463" />
      </g>

      {/* Animated pulses travelling along the paths */}
      <g fill="#FF6B4A">
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.6s" begin="0s" repeatCount="indefinite"><mpath href="#dfg-p1" /></animateMotion>
        </circle>
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.1s" begin="0.9s" repeatCount="indefinite"><mpath href="#dfg-p2" /></animateMotion>
        </circle>
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.6s" begin="1.6s" repeatCount="indefinite"><mpath href="#dfg-p3" /></animateMotion>
        </circle>
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.6s" begin="0.4s" repeatCount="indefinite"><mpath href="#dfg-p4" /></animateMotion>
        </circle>
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.1s" begin="1.3s" repeatCount="indefinite"><mpath href="#dfg-p5" /></animateMotion>
        </circle>
        <circle r="3.2" className="flow-pulse">
          <animateMotion dur="2.6s" begin="2s" repeatCount="indefinite"><mpath href="#dfg-p6" /></animateMotion>
        </circle>
      </g>

      {/* Endpoint dots */}
      <g fill="#343B45">
        <circle cx="174" cy="97" r="3" />
        <circle cx="174" cy="280" r="3" />
        <circle cx="174" cy="463" r="3" />
        <circle cx="546" cy="97" r="3" />
        <circle cx="546" cy="280" r="3" />
        <circle cx="546" cy="463" r="3" />
      </g>
      <circle cx="281" cy="280" r="3.5" fill="#FF6B4A" />
      <circle cx="439" cy="280" r="3.5" fill="#FF6B4A" />

      {/* Source nodes */}
      <g>
        <rect x="16" y="66" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="32" y="94" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">MARKET VENUES</text>
        <text x="32" y="113" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">EXCHANGES · AGGREGATED</text>

        <rect x="16" y="249" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="32" y="277" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">AUTHORIZED APIS</text>
        <text x="32" y="296" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">LICENSED SOURCES</text>

        <rect x="16" y="432" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="32" y="460" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">ON-CHAIN EVENTS</text>
        <text x="32" y="479" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">INDEXERS · LOGS</text>
      </g>

      {/* Consumer nodes */}
      <g>
        <rect x="546" y="66" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="562" y="94" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">SMART CONTRACTS</text>
        <text x="562" y="113" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">CONSUMERS</text>

        <rect x="546" y="249" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="562" y="277" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">DEFI PROTOCOLS</text>
        <text x="562" y="296" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">LENDING · TRADING</text>

        <rect x="546" y="432" width="158" height="62" rx="10" fill="#12161B" stroke="#23282F" />
        <text x="562" y="460" className="dfg-t" fontSize="11.5" fontWeight="600" letterSpacing="0.8" fill="#F5F5F0">DASHBOARDS + DAPPS</text>
        <text x="562" y="479" className="dfg-m" fontSize="8.5" letterSpacing="1.2" fill="#A0A7B2">APPS · TOOLING</text>
      </g>

      {/* Central Ember Data layer node */}
      <g>
        <rect x="281" y="178" width="158" height="204" rx="14" fill="#171C23" stroke="rgba(255,107,74,0.55)" strokeWidth="1.5" />
        <path d="M360 200 L376 216 L360 232 L344 216 Z" fill="none" stroke="#FF6B4A" strokeWidth="2" />
        <path d="M360 208 L368 216 L360 224 L352 216 Z" fill="#FF6B4A" />
        <text x="360" y="260" textAnchor="middle" className="dfg-t" fontSize="12" fontWeight="700" letterSpacing="1" fill="#F5F5F0">EMBER DATA LAYER</text>
        <text x="360" y="284" textAnchor="middle" className="dfg-m" fontSize="9" letterSpacing="1" fill="#A0A7B2">COLLECT · NORMALIZE</text>
        <text x="360" y="300" textAnchor="middle" className="dfg-m" fontSize="9" letterSpacing="1" fill="#A0A7B2">VALIDATE · PACKAGE</text>
        <line x1="305" y1="318" x2="415" y2="318" stroke="#23282F" strokeWidth="1" />
        <text x="360" y="342" textAnchor="middle" className="dfg-m" fontSize="8.5" letterSpacing="2.4" fill="#FF6B4A">ORACLE LAYER</text>
        <text x="360" y="360" textAnchor="middle" className="dfg-m" fontSize="8.5" letterSpacing="1.4" fill="#6E7683">SIGNED PAYLOADS</text>
      </g>
    </svg>
  );
}
