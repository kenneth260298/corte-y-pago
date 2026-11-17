import { ArrowDown } from 'lucide-react'
import { hero, links, sectionIds } from '../content'
import { GitHubIcon } from './BrandIcons'
import { StatementPreview } from './StatementPreview'

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="overflow-hidden bg-white px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent-800">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-accent-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-700" />
            </span>
            {hero.status}
          </p>

          <h1
            id="hero-titulo"
            className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-brand-900 sm:text-7xl lg:text-8xl"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-2xl leading-snug tracking-[-0.02em] text-slate-700 sm:text-3xl">
            {hero.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{hero.description}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.repo}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-800 px-7 font-semibold text-white transition-colors hover:bg-brand-900"
            >
              <GitHubIcon />
              {hero.primaryCta}
            </a>
            <a
              href={`#${sectionIds.howItWorks}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 font-semibold text-brand-900 transition-colors hover:border-brand-800"
            >
              {hero.secondaryCta}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-6 font-mono text-xs text-slate-600">
            {hero.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent-700" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <StatementPreview />
      </div>
    </section>
  )
}
