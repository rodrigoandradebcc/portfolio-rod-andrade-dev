import { useState } from 'react'
import { Container, CodeIcon } from '../ui'
import { navItems } from '../../data/portfolio'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-50">
          <CodeIcon className="size-5 text-emerald-400" />
          <span>Portfolio <span className="text-zinc-400">Rodrigo Andrade</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-3 text-sm font-medium text-zinc-400 transition duration-200 hover:bg-white/5 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-200 hover:bg-white/10 md:hidden"
        >
          <svg
            className="size-5 text-zinc-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-400 transition duration-200 hover:bg-white/5 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
