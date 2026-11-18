import { sections } from '../content'
import { useLocale } from '../i18n/context'
import { Section } from './Section'

export function Features() {
  const { features } = useLocale().t

  return (
    <Section
      id={sections.features.id}
      index={sections.features.index}
      title={features.title}
      intro={features.intro}
    >
      <ul className="border-b border-slate-200">
        {features.items.map(({ icon: Icon, title, description }, i) => (
          <li
            key={i}
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 border-t border-slate-200 py-7 md:grid-cols-[3rem_minmax(0,20rem)_1fr_auto] md:items-baseline md:gap-x-8"
          >
            <span className="font-mono text-sm text-slate-600">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight text-brand-900">
              <Icon className="size-5 shrink-0 text-accent-700" aria-hidden="true" />
              {title}
            </h3>
            <p className="col-start-2 text-slate-600 md:col-start-auto">{description}</p>
            <span className="col-start-2 inline-flex items-center gap-2 justify-self-start font-mono text-xs font-medium uppercase tracking-wider text-accent-800 md:col-start-auto">
              <span className="size-1.5 rounded-full border border-accent-700" aria-hidden="true" />
              {features.badge}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
