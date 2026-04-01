interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition duration-200 ${
        hover ? 'hover:-translate-y-1 hover:border-emerald-400/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
