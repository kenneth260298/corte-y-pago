import { preview } from '../content'

function CycleBar() {
  const { cycleDays, graceDays, daysAfterCut, startLabel, cutLabel, dueLabel, todayLabel } = preview.cycle
  const total = cycleDays + graceDays
  const cyclePct = (cycleDays / total) * 100
  const todayPct = ((cycleDays + daysAfterCut) / total) * 100

  return (
    <div className="pt-8">
      <div className="relative h-2.5">
        <div className="absolute inset-0 flex gap-0.5 overflow-hidden rounded-full">
          <div className="h-full bg-brand-100" style={{ width: `${cyclePct}%` }} />
          <div className="h-full flex-1 bg-accent-700" />
        </div>
        <div
          className="absolute -top-1.5 h-5.5 w-0.5 -translate-x-1/2 rounded-full bg-brand-900"
          style={{ left: `${todayPct}%` }}
        />
        <span
          className="absolute -top-7 -translate-x-1/2 rounded bg-brand-900 px-1.5 py-0.5 font-mono text-[11px] font-medium text-white"
          style={{ left: `${todayPct}%` }}
        >
          {todayLabel}
        </span>
      </div>
      <div className="relative mt-2 h-4 font-mono text-[11px] text-slate-600">
        <span className="absolute left-0">{startLabel}</span>
        <span className="absolute hidden -translate-x-full pr-2 sm:block" style={{ left: `${cyclePct}%` }}>
          {cutLabel}
        </span>
        <span className="absolute right-0">{dueLabel}</span>
      </div>
    </div>
  )
}

export function StatementPreview() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Physical card, purely decorative */}
      <div
        aria-hidden="true"
        className="absolute -top-8 right-2 hidden h-32 w-52 rotate-6 flex-col justify-between rounded-2xl bg-brand-800 p-4 shadow-xl shadow-brand-900/20 sm:flex"
      >
        <div className="flex items-center justify-between">
          <span className="h-6 w-8 rounded-md bg-accent-400" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-100">Crédito</span>
        </div>
        <span className="font-mono text-base tracking-[0.2em] text-white">···· {preview.cardLast4}</span>
      </div>

      <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-brand-900/10 sm:mt-14 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-brand-900">
            {preview.cardName} <span className="font-mono font-normal text-slate-600">···· {preview.cardLast4}</span>
          </p>
          <span className="rounded-md bg-accent-50 px-2 py-1 font-mono text-[11px] font-medium text-accent-800">
            {preview.daysLeft}
          </span>
        </div>

        <p className="mt-5 text-sm text-slate-600">{preview.amountLabel}</p>
        <p className="mt-1 font-mono text-3xl font-semibold tracking-tight text-brand-900 tabular-nums sm:text-4xl">
          {preview.amount}
        </p>
        <p className="mt-1 text-sm font-medium text-accent-800">{preview.dueText}</p>

        <div className="mt-4">
          <CycleBar />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
          <span className="text-slate-600">{preview.usdLabel}</span>
          <span className="font-mono font-semibold text-brand-900 tabular-nums">{preview.usdAmount}</span>
        </div>

        <div className="mt-5 border-t border-slate-200 pt-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">{preview.activityLabel}</p>
          <ul className="mt-3 divide-y divide-slate-100">
            {preview.transactions.map(({ icon: Icon, label, meta, amount }) => (
              <li key={label} className="flex items-center gap-3 py-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-brand-800">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-slate-900">{label}</span>
                  <span className="block truncate font-mono text-[11px] text-slate-600">{meta}</span>
                </span>
                <span className="font-mono text-sm font-medium text-slate-900 tabular-nums">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-4 text-center font-mono text-xs text-slate-600">{preview.caption}</figcaption>
    </figure>
  )
}
