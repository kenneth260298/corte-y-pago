import { sectionIds, tech } from '../content'
import { Section } from './Section'

export function TechStack() {
  return (
    <Section id={sectionIds.tech} index={tech.index} title={tech.title} intro={tech.intro}>
      <ul className="border-b border-slate-200">
        {tech.items.map(({ role, name, status }) => {
          const planned = status === 'planned'
          return (
            <li
              key={name}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-slate-200 py-4 md:grid-cols-[14rem_1fr_auto]"
            >
              <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-slate-600 md:col-span-1">
                {role}
              </span>
              <span
                className={`text-lg font-medium tracking-tight ${planned ? 'text-slate-600' : 'text-brand-900'}`}
              >
                {name}
              </span>
              <span
                className={`inline-flex items-center gap-2 font-mono text-xs ${planned ? 'text-slate-600' : 'text-accent-800'}`}
              >
                <span
                  className={`size-1.5 rounded-full ${planned ? 'border border-slate-500' : 'bg-accent-700'}`}
                  aria-hidden="true"
                />
                {tech.statusLabels[status]}
              </span>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
