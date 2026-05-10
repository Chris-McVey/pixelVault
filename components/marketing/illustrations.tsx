/** Decorative SVGs until legacy JPEGs land in /images/store/ — crisp at any size. */

export function IllustrationRepairBench({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="240" rx="16" fill="#12161d" stroke="#2e3444" />
      <path
        d="M40 180h240v24H40v-24z"
        fill="#1a2030"
        stroke="#f5c542"
        strokeOpacity="0.35"
      />
      <rect x="56" y="60" width="88" height="64" rx="6" fill="#2a3142" stroke="#f5c542" strokeOpacity="0.5" />
      <path d="M72 92h56M72 108h40" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="92" r="28" fill="#1e293b" stroke="#f5c542" strokeOpacity="0.45" />
      <path d="M188 92h24M200 80v24" stroke="#f5c542" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
      <rect x="232" y="72" width="40" height="88" rx="4" fill="#262e3d" stroke="#64748b" />
      <circle cx="252" cy="108" r="6" fill="#f5c542" fillOpacity="0.35" />
    </svg>
  );
}

export function IllustrationTradeBins({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="240" rx="16" fill="#12161d" stroke="#2e3444" />
      <rect x="48" y="140" width="72" height="56" rx="8" fill="#1f2937" stroke="#f5c542" strokeOpacity="0.4" />
      <rect x="124" y="128" width="72" height="68" rx="8" fill="#252f3f" stroke="#f5c542" strokeOpacity="0.55" />
      <rect x="200" y="148" width="72" height="48" rx="8" fill="#1a2230" stroke="#64748b" />
      <path d="M64 148h40M132 144h56M216 164h40" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="160" cy="48" r="4" fill="#f5c542" fillOpacity="0.9" />
      <circle cx="172" cy="44" r="3" fill="#f5c542" fillOpacity="0.5" />
    </svg>
  );
}

export function IllustrationCommunity({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="240" rx="16" fill="#12161d" stroke="#2e3444" />
      <circle cx="100" cy="100" r="36" fill="#1e293b" stroke="#f5c542" strokeOpacity="0.45" />
      <circle cx="220" cy="88" r="32" fill="#252f3f" stroke="#f5c542" strokeOpacity="0.35" />
      <circle cx="168" cy="152" r="40" fill="#1f2937" stroke="#94a3b8" strokeOpacity="0.5" />
      <path
        d="M120 100c24 8 48 8 72 0M152 152c20-12 40-12 60 0"
        stroke="#f5c542"
        strokeOpacity="0.25"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M160 40v28" stroke="#f5c542" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Magnifying glass over cart — authenticity / inspection */
export function IllustrationAuthenticity({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="240" rx="16" fill="#12161d" stroke="#2e3444" />
      <rect x="72" y="124" width="176" height="56" rx="10" fill="#1e293b" stroke="#64748b" />
      <rect x="88" y="108" width="144" height="28" rx="4" fill="#334155" stroke="#f5c542" strokeOpacity="0.45" />
      <path d="M104 122h112M104 130h96" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="132" cy="168" r="5" fill="#f5c542" fillOpacity="0.25" />
      <circle cx="188" cy="168" r="5" fill="#f5c542" fillOpacity="0.25" />
      <g transform="translate(198 52)">
        <circle cx="36" cy="36" r="34" fill="#1a2234" stroke="#f5c542" strokeOpacity="0.55" strokeWidth="3" />
        <circle cx="36" cy="36" r="22" stroke="#94a3b8" strokeOpacity="0.6" strokeWidth="2" />
        <path d="M52 52l28 28" stroke="#f5c542" strokeOpacity="0.8" strokeWidth="5" strokeLinecap="round" />
      </g>
      <rect x="56" y="56" width="72" height="22" rx="4" fill="#252f3f" stroke="#f5c542" strokeOpacity="0.35" />
      <path d="M64 67h28M64 73h40" stroke="#f5c542" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
