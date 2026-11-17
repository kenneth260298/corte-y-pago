import type { ReactNode } from 'react'

type Tone = 'white' | 'tinted' | 'dark'

interface SectionProps {
  id: string
  index: string
  title: string
  intro?: string
  tone?: Tone
  children: ReactNode
}

const toneClasses: Record<Tone, { bg: string; index: string; title: string; intro: string; rule: string }> = {
  white: {
    bg: 'bg-white',
    index: 'text-accent-700',
    title: 'text-brand-900',
    intro: 'text-slate-600',
    rule: 'border-slate-200',
  },
  tinted: {
    bg: 'bg-slate-50',
    index: 'text-accent-700',
    title: 'text-brand-900',
    intro: 'text-slate-600',
    rule: 'border-slate-200',
  },
  dark: {
    bg: 'bg-brand-900 text-white',
    index: 'text-accent-400',
    title: 'text-white',
    intro: 'text-brand-100',
    rule: 'border-white/15',
  },
}

export function Section({ id, index, title, intro, tone = 'white', children }: SectionProps) {
  const headingId = `${id}-titulo`
  const t = toneClasses[tone]

  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28 ${t.bg}`}>
      <div className="mx-auto max-w-6xl">
        <div className={`grid gap-6 border-t pt-6 md:grid-cols-12 ${t.rule}`}>
          <p className={`font-mono text-sm font-medium md:col-span-2 ${t.index}`}>{index}</p>
          <div className="md:col-span-10">
            <h2
              id={headingId}
              className={`text-3xl font-semibold tracking-[-0.03em] sm:text-5xl ${t.title}`}
            >
              {title}
            </h2>
            {intro && <p className={`mt-4 max-w-2xl text-lg ${t.intro}`}>{intro}</p>}
          </div>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
