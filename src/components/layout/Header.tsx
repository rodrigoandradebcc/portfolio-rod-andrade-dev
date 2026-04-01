import { Container, CodeIcon } from '../ui'
import { navItems } from '../../data/portfolio'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-50">
          <CodeIcon className="size-5 text-emerald-400" />
          <span>Portfolio <span className="text-zinc-400">Rodrigo Andrade</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition duration-200 hover:bg-white/5 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
