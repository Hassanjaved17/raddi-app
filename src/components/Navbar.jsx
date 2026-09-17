import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book a pickup', href: '#book' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-semibold text-ink">Raddi</span>
          <span className="hidden text-sm text-ink-soft sm:inline">.pk</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-leaf px-5 py-2.5 text-[15px] font-semibold text-paper transition-colors hover:bg-leaf-deep"
          >
            Get a price
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-ink/10 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] font-medium text-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
