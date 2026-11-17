import { header, links } from '../content'
import { GitHubIcon } from './BrandIcons'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:rounded-md focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
      >
        {header.skipLink}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" aria-label={header.homeLabel} className="flex items-center gap-2.5">
          <Logo />
          <span className="text-lg font-semibold tracking-tight text-brand-900">{header.brand}</span>
        </a>

        <nav aria-label={header.navLabel} className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-700">
            {header.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-brand-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={links.repo}
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 hover:text-brand-900"
        >
          <GitHubIcon />
          <span className="sr-only">{header.repoLabel}</span>
        </a>
      </div>
    </header>
  )
}
