import { footer, header, links } from '../content'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { Logo } from './Logo'

const linkClass =
  'inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 text-sm font-medium text-slate-700 transition-colors hover:border-brand-800 hover:text-brand-900'

export function Footer() {
  return (
    <footer className="bg-white px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="size-10" />
              <p className="text-3xl font-semibold tracking-[-0.03em] text-brand-900 sm:text-4xl">{header.brand}</p>
            </div>
            <p className="mt-4 text-slate-700">{footer.credit}</p>
          </div>
          <nav aria-label={footer.linksLabel}>
            <ul className="flex flex-wrap gap-3">
              <li>
                <a href={links.linkedin} className={linkClass}>
                  <LinkedInIcon className="size-4" />
                  {footer.linkedin}
                </a>
              </li>
              <li>
                <a href={links.github} className={linkClass}>
                  <GitHubIcon className="size-4" />
                  {footer.github}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-slate-200 pt-6 font-mono text-xs text-slate-600">{footer.disclaimer}</p>
      </div>
    </footer>
  )
}
