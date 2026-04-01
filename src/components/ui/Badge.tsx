interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default:
    'border-white/10 bg-zinc-950/70 text-zinc-400',
  accent:
    'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  outline:
    'border-white/10 bg-white/5 text-zinc-300',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
