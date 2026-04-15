interface ButtonProps {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border-emerald-300/30 bg-emerald-400 text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_40px_rgba(16,185,129,0.16)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)]',
  secondary:
    'border-white/12 bg-white/[0.035] text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]',
}

export function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-w-0 max-w-full items-center justify-center gap-3 rounded-full border px-6 py-4 text-base font-semibold tracking-[-0.02em] transition duration-200 active:scale-[0.98] [&_svg]:shrink-0 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
