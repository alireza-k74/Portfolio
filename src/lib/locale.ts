export const LOCALE_STORAGE_KEY = 'portfolio-locale'

export const LOCALES = ['en', 'fa'] as const

export type Locale = (typeof LOCALES)[number]

export type TextDirection = 'ltr' | 'rtl'

export const LOCALE_META: Record<
  Locale,
  { label: string; nativeLabel: string; dir: TextDirection }
> = {
  en: {
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr',
  },
  fa: {
    label: 'Persian',
    nativeLabel: 'فارسی',
    dir: 'rtl',
  },
}

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
  )
}

export function readStoredLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Ignore storage write failures.
  }
}

export function getLocaleDirection(locale: Locale): TextDirection {
  return LOCALE_META[locale].dir
}

export function applyDocumentLocale(locale: Locale): void {
  const root = document.documentElement
  const direction = getLocaleDirection(locale)

  root.lang = locale
  root.dir = direction
}
