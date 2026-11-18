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

export const es: Content = {
  meta: {
    lang: 'es',
    description:
      'Corte y Pago: app de finanzas personales para Costa Rica que leerá los correos de SINPE Móvil y compras con tarjeta para calcular cuánto y cuándo pagar cada tarjeta de crédito.',
  },
  header: {
    homeLabel: 'Corte y Pago, inicio',
    skipLink: 'Saltar al contenido',
    navLabel: 'Secciones',
    repoLabel: 'Repositorio en GitHub',
    languageLabel: 'Idioma',
    nav: {
      howItWorks: 'Cómo funciona',
      features: 'Funcionalidades',
      security: 'Seguridad',
      tech: 'Tecnología',
    },
  },
  hero: {
    status: 'En desarrollo · Costa Rica',
    tagline: 'Sepa cuánto y cuándo pagar cada tarjeta de crédito.',
    description:
      'Una app de finanzas personales que convertirá los correos de notificación de su banco (SINPE Móvil y compras con tarjeta) en transacciones ordenadas y en un plan de pago según la fecha de corte y la fecha de pago de cada tarjeta.',
    primaryCta: 'Ver en GitHub',
    secondaryCta: 'Cómo funciona',
    facts: ['Gmail solo lectura', 'Solo últimos dígitos', 'CRC y USD'],
  },
  preview: {
    caption: 'Vista previa ilustrativa con datos de ejemplo. La app aún no está disponible.',
    cardName: 'Tarjeta de crédito',
    cardBadge: 'Crédito',
    amountLabel: 'Saldo al corte',
    amount: '₡184 350,00',
    dueText: 'Pagar antes del 2 dic',
    daysLeft: 'Faltan 15 días',
    startLabel: '16 oct',
    cutLabel: 'Corte 15 nov',
    dueLabel: 'Pago 2 dic',
    todayLabel: 'Hoy',
    usdLabel: 'Saldo en dólares',
    usdAmount: '$42,18',
    activityLabel: 'Movimientos detectados',
    transactions: [
      { icon: Smartphone, label: 'SINPE a M. Rojas', meta: 'Hoy · 8:42', amount: '−₡12 000,00' },
      { icon: CreditCard, label: 'Supermercado', meta: '···· 4821 · Ayer', amount: '−₡23 450,00' },
      { icon: DollarSign, label: 'Suscripción', meta: '···· 4821 · 14 nov', amount: '−$15,49' },
      { icon: Inbox, label: 'Correo no reconocido', meta: 'En cola de revisión', amount: '—' },
    ],
  },
  howItWorks: {
    title: 'Cómo funciona',
    intro: 'Del correo del banco a un plan de pago, sin digitar cada gasto a mano.',
    stepLabel: 'Paso',
    steps: [
      {
        title: 'Su banco le avisa',
        description:
          'Por cada SINPE Móvil y cada compra con tarjeta, su banco le envía un correo de notificación.',
        sample: [
          ['Asunto', 'Transferencia SINPE Móvil'],
          ['Monto', '₡12 000,00'],
          ['Destino', 'M. Rojas'],
        ],
      },
      {
        title: 'Corte y Pago los lee',
        description:
          'La app lee esos correos desde Gmail con acceso de solo lectura: nunca envía, borra ni modifica nada.',
        sample: [
          ['tipo', 'SINPE'],
          ['monto', '12000.00'],
          ['moneda', 'CRC'],
        ],
      },
      {
        title: 'Usted ve el panorama',
        description: 'Consulta sus transacciones y cuánto y cuándo pagar cada tarjeta para evitar intereses.',
        sample: [
          ['Tarjeta', '···· 4821'],
          ['Pagar', '₡184 350,00'],
          ['Antes del', '2 dic'],
        ],
      },
    ],
  },
  features: {
    title: 'Funcionalidades',
    intro: 'Lo que se está construyendo. Ninguna funcionalidad está disponible todavía.',
    badge: 'Próximamente',
    items: [
      {
        icon: Smartphone,
        title: 'Seguimiento automático de SINPE',
        description:
          'Cada transferencia SINPE Móvil enviada o recibida se registrará a partir del correo del banco.',
      },
      {
        icon: CreditCard,
        title: 'Compras asociadas a su tarjeta',
        description: 'Las compras se asignarán a la tarjeta correcta usando sus últimos dígitos.',
      },
      {
        icon: CalendarClock,
        title: 'Ciclo de facturación y pago',
        description:
          'Cálculo del monto a pagar de cada tarjeta de crédito según su fecha de corte y su fecha de pago.',
      },
      {
        icon: Coins,
        title: 'Saldos en colones y dólares',
        description: 'Saldos separados en CRC y USD, sin conversiones que mezclen las cuentas.',
      },
      {
        icon: Inbox,
        title: 'Cola de revisión',
        description:
          'Los correos que no se reconozcan quedarán en una cola para revisarlos y clasificarlos a mano.',
      },
    ],
  },
  security: {
    title: 'Seguridad',
    intro: 'Sus datos financieros merecen el mínimo acceso posible.',
    scopeLabel: 'Permiso que se solicitará a Google',
    items: [
      {
        icon: MailOpen,
        title: 'Gmail en solo lectura',
        description:
          'El permiso solo permite leer correos. La app no puede enviar, borrar ni modificar mensajes.',
      },
      {
        icon: CreditCard,
        title: 'Solo los últimos dígitos',
        description: 'De cada tarjeta se guardan únicamente sus últimos dígitos, nunca el número completo.',
      },
      {
        icon: Server,
        title: 'Servidor privado',
        description: 'Los datos se quedan en un servidor privado, no en servicios de terceros.',
      },
      {
        icon: UserLock,
        title: 'Acceso solo para el dueño',
        description: 'El inicio de sesión está restringido a la persona dueña de la cuenta.',
      },
    ],
  },
  tech: {
    title: 'Tecnología',
    intro: 'Stack actual y lo que se integrará en las próximas etapas.',
    statusLabels: { current: 'En uso', planned: 'Planificado' },
    items: [
      { role: 'Lenguaje', name: 'Java 21', status: 'current' },
      { role: 'Backend', name: 'Spring Boot 4', status: 'current' },
      { role: 'Frontend', name: 'React + TypeScript', status: 'current' },
      { role: 'Contenedores', name: 'Docker', status: 'current' },
      { role: 'Proxy y HTTPS', name: 'Caddy', status: 'current' },
      { role: 'Hosting web', name: 'Vercel', status: 'current' },
      { role: 'Base de datos', name: 'PostgreSQL', status: 'planned' },
      { role: 'Eventos', name: 'Kafka', status: 'planned' },
      { role: 'Autenticación', name: 'Firebase Auth', status: 'planned' },
      { role: 'Correo', name: 'Gmail API', status: 'planned' },
    ],
  },
  apiStatus: {
    title: 'Estado de la API',
    intro: 'Esta página consulta en vivo el endpoint público del backend.',
    loading: 'Comprobando la API…',
    online: 'API en línea',
    offline: 'API no disponible',
    latencyLabel: 'Latencia',
    timestampLabel: 'Respuesta',
    missingUrl: 'La URL de la API no está configurada.',
    requestFailed: 'No se pudo conectar con el servidor.',
    timeLocale: 'es-CR',
  },
  footer: {
    credit: 'Desarrollado por Kenneth López Porras',
    disclaimer: 'Proyecto personal en desarrollo. No está afiliado a ningún banco.',
    linksLabel: 'Perfiles del autor',
  },
}
