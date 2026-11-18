import { en } from './en'
import { es } from './es'
import type { Content, Locale } from './types'

export type { Content, IconItem, Locale, Step, TechItem, TechStatus, Transaction } from './types'

// Language-independent values shared by every locale.

export const brand = 'Corte y Pago'

export const DEFAULT_LOCALE: Locale = 'en'

export const locales: { code: Locale; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
]

export const content: Record<Locale, Content> = { en, es }

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'es'
}

export const links = {
  repo: 'https://github.com/kenneth260298/corte-y-pago',
  github: 'https://github.com/kenneth260298',
  linkedin: 'https://www.linkedin.com/in/kennethlp',
} as const

export const sections = {
  howItWorks: { id: 'how-it-works', index: '01' },
  features: { id: 'features', index: '02' },
  security: { id: 'security', index: '03' },
  tech: { id: 'tech', index: '04' },
  apiStatus: { id: 'api-status', index: '05' },
} as const

export const mainContentId = 'content'

export const gmailScope = 'https://www.googleapis.com/auth/gmail.readonly'

export const apiEndpoint = 'GET /api/hello'

// Billing cycle used by the illustrative hero mockup.
export const previewCycle = {
  cycleDays: 30,
  graceDays: 17,
  daysAfterCut: 2,
  cardLast4: '4821',
} as const
