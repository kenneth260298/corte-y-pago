interface LogoProps {
  className?: string
}

// Same mark as the favicon: a card with a teal stripe.
export function Logo({ className = 'size-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <rect width="32" height="32" rx="7" fill="var(--color-brand-800)" />
      <rect x="6" y="9" width="20" height="14" rx="2.5" fill="none" stroke="#ffffff" strokeWidth="2" />
      <rect x="6" y="13" width="20" height="2.5" fill="var(--color-accent-400)" />
    </svg>
  )
}
