import { useTranslation } from 'react-i18next'

export function PageLoader() {
  const { t } = useTranslation('common')

  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm text-muted-foreground">{t('loading')}</span>
    </div>
  )
}
