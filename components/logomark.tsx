// Node-network brand mark. Uses currentColor so the parent controls the color.
export function Logomark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="14.37" y1="16.76" x2="11.21" y2="14.95" />
        <line x1="13.5" y1="20" x2="9.9" y2="20" />
        <line x1="14.37" y1="23.24" x2="11.21" y2="25.05" />
        <line x1="24.99" y1="15.83" x2="27.78" y2="13.5" />
        <line x1="24.99" y1="24.17" x2="27.78" y2="26.5" />
      </g>
      <g fill="currentColor">
        <circle cx="8.7" cy="13.5" r="2.3" />
        <circle cx="7" cy="20" r="2.3" />
        <circle cx="8.7" cy="26.5" r="2.3" />
        <circle cx="30" cy="11.64" r="2.3" />
        <circle cx="30" cy="28.36" r="2.3" />
      </g>
      <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}
