import {defaultLocale, getMessages, type Locale, type Namespace} from './messages'

function resolve(obj: unknown, key: string): string | undefined {
  const parts = key.split('.')
  let value: unknown = obj
  for (const part of parts) {
    if (value == null || typeof value !== 'object') return undefined
    value = (value as Record<string, unknown>)[part]
  }
  return typeof value === 'string' ? value : undefined
}

/**
 * Creates a scoped translation function for a given locale + namespace.
 * Falls back to defaultLocale (English) when a key is missing.
 * Usage: const t = useTranslations('uk', 'home')
 *        t('hero.headline') → Ukrainian if present, else English, else key
 */
export function useTranslations(locale: Locale, namespace: Namespace) {
  const msgs = getMessages(locale, namespace)
  const fallback = locale !== defaultLocale ? getMessages(defaultLocale, namespace) : null
  return function t(key: string): string {
    return resolve(msgs, key) ?? (fallback ? resolve(fallback, key) : undefined) ?? key
  }
}

export {defaultLocale, getMessages, type Locale, locales, type Namespace} from './messages'
