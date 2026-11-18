import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, DEFAULT_LOCALE, isLocale, type Locale } from '../content'
import { LocaleContext } from './context'

const STORAGE_KEY = 'corteypago-locale'

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(stored) ? stored : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the choice just won't persist.
    }
  }, [])

  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = t.meta.lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LocaleContext value={value}>{children}</LocaleContext>
}
