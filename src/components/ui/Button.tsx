interface ButtonProps {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-emerald-400 text-zinc-950 hover:brightness-110',
  secondary:
    'border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10',
}

export function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 active:scale-[0.98] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
