import { useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { links } from '@/lib/data'

const NAV = [
  { href: '#profile', label: 'profile' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          ihsan<span className="text-approved">dzahri</span>
          <span className="text-muted">.com</span>
        </a>

        <nav className="hidden items-center gap-7 sm:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href={links.resume} className="btn-ghost !px-3.5 !py-1.5 text-[13px]" download>
            <FileDown size={14} aria-hidden />
            resume
          </a>
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 py-3 sm:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-sm text-muted"
            >
              {item.label}
            </a>
          ))}
          <a href={links.resume} className="block py-2.5 font-mono text-sm text-ink" download>
            ↓ resume
          </a>
        </nav>
      )}
    </header>
  )
}
