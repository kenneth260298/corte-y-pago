import { locales } from '../content'
import { useLocale } from '../i18n/context'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div role="group" aria-label={t.header.languageLabel} className="flex rounded-full border border-slate-300 p-0.5">
      {locales.map(({ code, label, name }) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={name}
            onClick={() => setLocale(code)}
            className={`min-h-9 min-w-10 rounded-full px-2.5 font-mono text-xs font-semibold transition-colors ${
              active ? 'bg-brand-800 text-white' : 'text-slate-700 hover:text-brand-900'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
