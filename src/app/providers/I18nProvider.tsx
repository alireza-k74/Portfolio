import { useCallback, useEffect, type ReactNode } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

import i18n from '@/i18n'
import {
  applyDocumentLocale,
  isLocale,
  storeLocale,
  type Locale,
} from '@/lib/locale'

type I18nProviderProps = {
  children: ReactNode
}

function DocumentLocaleSync({ children }: { children: ReactNode }) {
  const { i18n: i18nInstance } = useTranslation()

  useEffect(() => {
    const syncLocale = (language: string) => {
      const locale = isLocale(language) ? language : language.split('-')[0]
      if (!isLocale(locale)) {
        return
      }

      applyDocumentLocale(locale)
      storeLocale(locale)
    }

    syncLocale(i18nInstance.resolvedLanguage ?? i18nInstance.language)

    const handleLanguageChanged = (language: string) => {
      syncLocale(language)
    }

    i18nInstance.on('languageChanged', handleLanguageChanged)
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChanged)
    }
  }, [i18nInstance])

  return children
}

export function I18nProvider({ children }: I18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <DocumentLocaleSync>{children}</DocumentLocaleSync>
    </I18nextProvider>
  )
}

export function useLocale() {
  const { i18n: i18nInstance } = useTranslation()

  const locale: Locale = isLocale(i18nInstance.language)
    ? i18nInstance.language
    : isLocale(i18nInstance.resolvedLanguage)
      ? i18nInstance.resolvedLanguage
      : 'en'

  const setLocale = useCallback(
    async (nextLocale: Locale) => {
      storeLocale(nextLocale)
      applyDocumentLocale(nextLocale)
      await i18nInstance.changeLanguage(nextLocale)
    },
    [i18nInstance],
  )

  return {
    locale,
    setLocale,
    dir: i18nInstance.dir(),
  }
}
