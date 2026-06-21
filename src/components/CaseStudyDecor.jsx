const doodles = {
  squiggle: (
    <svg viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <path
        d="M4 28C18 8 32 36 48 18C64 2 78 34 94 14C102 8 110 12 116 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 24h28M28 14l10 10-10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4v6M16 22v6M4 16h6M22 16h6M7 7l4 4M21 21l4 4M7 25l4-4M21 11l4-4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      {[0, 20, 40, 60].flatMap((x) =>
        [0, 20, 40, 60].map((y) => (
          <circle
            key={`${x}-${y}`}
            cx={x + 10}
            cy={y + 10}
            r="1"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  ),
};

function CaseStudyDecor({ variant = "squiggle", className = "" }) {
  return (
    <div className={`case-doodle case-doodle--${variant} ${className}`.trim()}>
      {doodles[variant] ?? doodles.squiggle}
    </div>
  );
}

export default CaseStudyDecor;
