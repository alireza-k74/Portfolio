import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function AppLayout() {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-svh min-w-0 flex-col overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-md focus:ring-2 focus:ring-ring print:hidden"
      >
        {t('nav.skipToContent')}
      </a>

      <Header />

      <main
        id="main-content"
        className="min-w-0 flex-1 outline-none"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  )
}
