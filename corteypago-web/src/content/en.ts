import {
  CalendarClock,
  Coins,
  CreditCard,
  DollarSign,
  Inbox,
  MailOpen,
  Server,
  Smartphone,
  UserLock,
} from 'lucide-react'
import type { Content } from './types'

export const en: Content = {
  meta: {
    lang: 'en',
    description:
      'Corte y Pago: a personal-finance app for Costa Rica that will read SINPE Móvil and card purchase emails to work out how much and when to pay each credit card.',
  },
  header: {
    homeLabel: 'Corte y Pago, home',
    skipLink: 'Skip to content',
    navLabel: 'Sections',
    repoLabel: 'GitHub repository',
    languageLabel: 'Language',
    nav: {
      howItWorks: 'How it works',
      features: 'Features',
      security: 'Security',
      tech: 'Tech stack',
    },
  },
  hero: {
    status: 'In development · Costa Rica',
    tagline: 'Know how much and when to pay each credit card.',
    description:
      'A personal-finance app that will turn your bank’s notification emails (SINPE Móvil transfers and card purchases) into organized transactions and a payment plan based on each card’s cut-off date (fecha de corte) and due date (fecha de pago).',
    primaryCta: 'View on GitHub',
    secondaryCta: 'How it works',
    facts: ['Read-only Gmail', 'Last digits only', 'CRC and USD'],
  },
  preview: {
    caption: 'Illustrative preview with sample data. The app is not available yet.',
    cardName: 'Credit card',
    cardBadge: 'Credit',
    amountLabel: 'Statement balance',
    amount: '₡184,350.00',
    dueText: 'Pay by Dec 2',
    daysLeft: '15 days left',
    startLabel: 'Oct 16',
    cutLabel: 'Cut-off Nov 15',
    dueLabel: 'Due Dec 2',
    todayLabel: 'Today',
    usdLabel: 'USD balance',
    usdAmount: '$42.18',
    activityLabel: 'Detected activity',
    transactions: [
      { icon: Smartphone, label: 'SINPE to M. Rojas', meta: 'Today · 8:42', amount: '−₡12,000.00' },
      { icon: CreditCard, label: 'Supermarket', meta: '···· 4821 · Yesterday', amount: '−₡23,450.00' },
      { icon: DollarSign, label: 'Subscription', meta: '···· 4821 · Nov 14', amount: '−$15.49' },
      { icon: Inbox, label: 'Unrecognized email', meta: 'In review queue', amount: '—' },
    ],
  },
  howItWorks: {
    title: 'How it works',
    intro: 'From your bank’s email to a payment plan, without typing in every expense.',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Your bank emails you',
        description:
          'For every SINPE Móvil transfer and every card purchase, your bank sends you a notification email.',
        sample: [
          ['Subject', 'SINPE Móvil transfer'],
          ['Amount', '₡12,000.00'],
          ['To', 'M. Rojas'],
        ],
      },
      {
        title: 'Corte y Pago reads them',
        description:
          'The app reads those emails from Gmail with read-only access: it never sends, deletes or changes anything.',
        sample: [
          ['type', 'SINPE'],
          ['amount', '12000.00'],
          ['currency', 'CRC'],
        ],
      },
      {
        title: 'You see the big picture',
        description: 'Check your transactions and how much and when to pay each card to avoid interest.',
        sample: [
          ['Card', '···· 4821'],
          ['Pay', '₡184,350.00'],
          ['By', 'Dec 2'],
        ],
      },
    ],
  },
  features: {
    title: 'Features',
    intro: 'What is being built. None of these features are available yet.',
    badge: 'Coming soon',
    items: [
      {
        icon: Smartphone,
        title: 'Automatic SINPE tracking',
        description: 'Every SINPE Móvil transfer you send or receive will be recorded from your bank’s email.',
      },
      {
        icon: CreditCard,
        title: 'Purchases matched to your card',
        description: 'Purchases will be assigned to the right card using its last digits.',
      },
      {
        icon: CalendarClock,
        title: 'Billing cycle and payment',
        description: 'Works out how much to pay on each credit card from its cut-off date and due date.',
      },
      {
        icon: Coins,
        title: 'Colones and dollars balances',
        description: 'Separate CRC and USD balances, with no conversions that mix up your accounts.',
      },
      {
        icon: Inbox,
        title: 'Review queue',
        description: 'Emails that are not recognized will wait in a queue for you to review and classify by hand.',
      },
    ],
  },
  security: {
    title: 'Security',
    intro: 'Your financial data deserves the least access possible.',
    scopeLabel: 'Permission that will be requested from Google',
    items: [
      {
        icon: MailOpen,
        title: 'Read-only Gmail',
        description: 'The permission only allows reading emails. The app cannot send, delete or change messages.',
      },
      {
        icon: CreditCard,
        title: 'Last digits only',
        description: 'Only the last digits of each card are stored, never the full number.',
      },
      {
        icon: Server,
        title: 'Private server',
        description: 'Data stays on a private server, not on third-party services.',
      },
      {
        icon: UserLock,
        title: 'Owner-only access',
        description: 'Sign-in is restricted to the owner of the account.',
      },
    ],
  },
  tech: {
    title: 'Tech stack',
    intro: 'The current stack and what will be added in the next stages.',
    statusLabels: { current: 'In use', planned: 'Planned' },
    items: [
      { role: 'Language', name: 'Java 21', status: 'current' },
      { role: 'Backend', name: 'Spring Boot 4', status: 'current' },
      { role: 'Frontend', name: 'React + TypeScript', status: 'current' },
      { role: 'Containers', name: 'Docker', status: 'current' },
      { role: 'Proxy and HTTPS', name: 'Caddy', status: 'current' },
      { role: 'Web hosting', name: 'Vercel', status: 'current' },
      { role: 'Database', name: 'PostgreSQL', status: 'planned' },
      { role: 'Events', name: 'Kafka', status: 'planned' },
      { role: 'Authentication', name: 'Firebase Auth', status: 'planned' },
      { role: 'Email', name: 'Gmail API', status: 'planned' },
    ],
  },
  apiStatus: {
    title: 'API status',
    intro: 'This page checks the backend’s public endpoint live.',
    loading: 'Checking the API…',
    online: 'API online',
    offline: 'API unavailable',
    latencyLabel: 'Latency',
    timestampLabel: 'Response',
    missingUrl: 'The API URL is not configured.',
    requestFailed: 'Could not connect to the server.',
    timeLocale: 'en-US',
  },
  footer: {
    credit: 'Built by Kenneth López Porras',
    disclaimer: 'Personal project in development. Not affiliated with any bank.',
    linksLabel: 'Author profiles',
  },
}
