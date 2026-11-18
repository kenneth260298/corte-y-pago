import { brand, links, mainContentId, sections } from '../content'
import { useLocale } from '../i18n/context'
import { GitHubIcon } from './BrandIcons'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'

export function Header() {
  const { t } = useLocale()
  const nav = [
    { id: sections.howItWorks.id, label: t.header.nav.howItWorks },
    { id: sections.features.id, label: t.header.nav.features },
    { id: sections.security.id, label: t.header.nav.security },
    { id: sections.tech.id, label: t.header.nav.tech },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a
        href={`#${mainContentId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:rounded-md focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
      >
        {t.header.skipLink}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#" aria-label={t.header.homeLabel} className="flex min-w-0 items-center gap-2.5">
          <Logo />
          <span className="truncate text-lg font-semibold tracking-tight text-brand-900">{brand}</span>
        </a>

        <nav aria-label={t.header.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-700">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-brand-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <a
            href={links.repo}
            className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 hover:text-brand-900"
          >
            <GitHubIcon />
            <span className="sr-only">{t.header.repoLabel}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
