import { sections } from '../content'
import { useLocale } from '../i18n/context'
import { Section } from './Section'

export function HowItWorks() {
  const { howItWorks } = useLocale().t

  return (
    <Section
      id={sections.howItWorks.id}
      index={sections.howItWorks.index}
      title={howItWorks.title}
      intro={howItWorks.intro}
      tone="tinted"
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
        {howItWorks.steps.map(({ title, description, sample }, i) => (
          <li key={i} className="flex flex-col bg-white p-6 sm:p-8">
            <span className="font-mono text-5xl font-semibold tracking-tighter text-brand-100" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-900">
              <span className="sr-only">
                {howItWorks.stepLabel} {i + 1}:{' '}
              </span>
              {title}
            </h3>
            <p className="mt-2 flex-1 text-slate-600">{description}</p>

            <dl className="mt-8 rounded-xl bg-slate-50 p-4 font-mono text-xs ring-1 ring-slate-200">
              {sample.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 py-1">
                  <dt className="text-slate-600">{key}</dt>
                  <dd className="font-medium text-brand-900 tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </Section>
  )
}
