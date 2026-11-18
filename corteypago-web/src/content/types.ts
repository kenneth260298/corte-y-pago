import type { LucideIcon } from 'lucide-react'

export type Locale = 'en' | 'es'

export type TechStatus = 'current' | 'planned'

export interface IconItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface Transaction {
  icon: LucideIcon
  label: string
  meta: string
  amount: string
}

export interface Step {
  title: string
  description: string
  sample: [string, string][]
}

export interface TechItem {
  role: string
  name: string
  status: TechStatus
}

// Every locale must provide all of these strings.
export interface Content {
  meta: {
    lang: string
    description: string
  }
  header: {
    homeLabel: string
    skipLink: string
    navLabel: string
    repoLabel: string
    languageLabel: string
    nav: { howItWorks: string; features: string; security: string; tech: string }
  }
  hero: {
    status: string
    tagline: string
    description: string
    primaryCta: string
    secondaryCta: string
    facts: string[]
  }
  preview: {
    caption: string
    cardName: string
    cardBadge: string
    amountLabel: string
    amount: string
    dueText: string
    daysLeft: string
    startLabel: string
    cutLabel: string
    dueLabel: string
    todayLabel: string
    usdLabel: string
    usdAmount: string
    activityLabel: string
    transactions: Transaction[]
  }
  howItWorks: {
    title: string
    intro: string
    stepLabel: string
    steps: Step[]
  }
  features: {
    title: string
    intro: string
    badge: string
    items: IconItem[]
  }
  security: {
    title: string
    intro: string
    scopeLabel: string
    items: IconItem[]
  }
  tech: {
    title: string
    intro: string
    statusLabels: Record<TechStatus, string>
    items: TechItem[]
  }
  apiStatus: {
    title: string
    intro: string
    loading: string
    online: string
    offline: string
    latencyLabel: string
    timestampLabel: string
    missingUrl: string
    requestFailed: string
    timeLocale: string
  }
  footer: {
    credit: string
    disclaimer: string
    linksLabel: string
  }
}
