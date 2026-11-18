import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { apiEndpoint, sections } from '../content'
import { useLocale } from '../i18n/context'
import { Section } from './Section'

const REQUEST_TIMEOUT_MS = 8000

interface HelloResponse {
  message: string
  timestamp: string
}

// Reasons are keys, not text, so the message follows the selected language.
type OfflineReason = 'missingUrl' | 'requestFailed'

type Status =
  | { state: 'loading' }
  | { state: 'online'; data: HelloResponse; latencyMs: number }
  | { state: 'offline'; reason: OfflineReason }

function isHelloResponse(value: unknown): value is HelloResponse {
  if (typeof value !== 'object' || value === null) return false
  const record = value as Record<string, unknown>
  return typeof record.message === 'string' && typeof record.timestamp === 'string'
}

function getApiBaseUrl(): string | null {
  const url = import.meta.env.VITE_API_URL?.trim()
  return url ? url.replace(/\/+$/, '') : null
}

function formatTimestamp(timestamp: string, locale: string): string {
  const date = new Date(timestamp)
  if (Number.isNaN(date.getTime())) return timestamp
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'medium' }).format(date)
}

function useApiStatus(): Status {
  const baseUrl = getApiBaseUrl()
  const [status, setStatus] = useState<Status>(() =>
    baseUrl ? { state: 'loading' } : { state: 'offline', reason: 'missingUrl' },
  )

  useEffect(() => {
    if (!baseUrl) return

    const controller = new AbortController()
    let active = true
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    const startedAt = performance.now()

    fetch(`${baseUrl}/api/hello`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const body: unknown = await response.json()
        if (!isHelloResponse(body)) throw new Error('Unexpected response shape')
        const latencyMs = Math.round(performance.now() - startedAt)
        if (active) setStatus({ state: 'online', data: body, latencyMs })
      })
      .catch(() => {
        if (active) setStatus({ state: 'offline', reason: 'requestFailed' })
      })
      .finally(() => window.clearTimeout(timeoutId))

    return () => {
      active = false
      window.clearTimeout(timeoutId)
      controller.abort()
    }
  }, [baseUrl])

  return status
}

function StatusDot({ online }: { online: boolean }) {
  return (
    <span className="relative flex size-3" aria-hidden="true">
      {online && (
        <span className="absolute inline-flex size-full rounded-full bg-accent-400 opacity-75 motion-safe:animate-ping" />
      )}
      <span className={`relative inline-flex size-3 rounded-full ${online ? 'bg-accent-700' : 'bg-slate-400'}`} />
    </span>
  )
}

export function ApiStatus() {
  const { apiStatus } = useLocale().t
  const status = useApiStatus()

  return (
    <Section
      id={sections.apiStatus.id}
      index={sections.apiStatus.index}
      title={apiStatus.title}
      intro={apiStatus.intro}
      tone="tinted"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div role="status" aria-live="polite" className="flex items-center gap-3">
            {status.state === 'loading' ? (
              <LoaderCircle className="size-5 text-slate-600 motion-safe:animate-spin" aria-hidden="true" />
            ) : (
              <StatusDot online={status.state === 'online'} />
            )}
            <span className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
              {status.state === 'loading' && apiStatus.loading}
              {status.state === 'online' && apiStatus.online}
              {status.state === 'offline' && apiStatus.offline}
            </span>
          </div>
          <code className="self-start rounded-md bg-slate-100 px-2.5 py-1 font-mono text-sm text-slate-700 sm:self-auto">
            {apiEndpoint}
          </code>
        </div>

        {status.state === 'online' && (
          <dl className="grid border-t border-slate-200 font-mono text-sm sm:grid-cols-[auto_1fr]">
            <div className="border-b border-slate-200 px-6 py-4 sm:border-b-0 sm:border-r sm:px-8">
              <dt className="text-xs uppercase tracking-wider text-slate-600">{apiStatus.latencyLabel}</dt>
              <dd className="mt-1 text-lg font-semibold text-brand-900 tabular-nums">{status.latencyMs} ms</dd>
            </div>
            <div className="px-6 py-4 sm:px-8">
              <dt className="text-xs uppercase tracking-wider text-slate-600">{apiStatus.timestampLabel}</dt>
              <dd className="mt-1 text-lg font-semibold text-brand-900 tabular-nums">
                <time dateTime={status.data.timestamp}>
                  {formatTimestamp(status.data.timestamp, apiStatus.timeLocale)}
                </time>
              </dd>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-slate-700 sm:col-span-2 sm:px-8">
              <dt className="sr-only">message</dt>
              <dd className="break-words">
                <span className="text-slate-600">"message": </span>
                <span className="text-accent-800">"{status.data.message}"</span>
              </dd>
            </div>
          </dl>
        )}

        {status.state === 'offline' && (
          <p className="border-t border-slate-200 bg-slate-50 px-6 py-4 font-mono text-sm text-slate-700 sm:px-8">
            {apiStatus[status.reason]}
          </p>
        )}
      </div>
    </Section>
  )
}
