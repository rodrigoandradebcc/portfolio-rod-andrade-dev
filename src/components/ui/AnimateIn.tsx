import { useInView } from '../../hooks/useInView'

interface AnimateInProps {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
}

export function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`${inView ? `animate-in animate-in-delay-${delay}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
