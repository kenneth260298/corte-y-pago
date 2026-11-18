import { gmailScope, sections } from '../content'
import { useLocale } from '../i18n/context'
import { Section } from './Section'

export function Security() {
  const { security } = useLocale().t

  return (
    <Section
      id={sections.security.id}
      index={sections.security.index}
      title={security.title}
      intro={security.intro}
      tone="dark"
    >
      <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {security.items.map(({ icon: Icon, title, description }, i) => (
          <li key={i} className="border-t border-white/15 pt-6">
            <Icon className="size-6 text-accent-400" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="mt-2 max-w-md text-brand-100">{description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-xl border border-white/15 p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-brand-100">{security.scopeLabel}</p>
        <code className="mt-2 block break-all font-mono text-sm text-accent-400 sm:text-base">{gmailScope}</code>
      </div>
    </Section>
  )
}
