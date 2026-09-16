import { useTranslation } from 'react-i18next'

import { useLocale } from '@/app/providers/I18nProvider'
import { Button } from '@/components/ui/button'
import { LOCALE_META, LOCALES } from '@/lib/locale'
import { cn } from '@/lib/utils'

type LanguageSwitcherProps = {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t } = useTranslation('common')
  const { locale, setLocale } = useLocale()

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={cn(
        'inline-flex items-center rounded-lg border border-border bg-background p-0.5',
        className,
      )}
    >
      {LOCALES.map((value) => {
        const meta = LOCALE_META[value]
        const isActive = locale === value

        return (
          <Button
            key={value}
            type="button"
            size="sm"
            variant="ghost"
            aria-label={t('language.option', { label: meta.nativeLabel })}
            aria-pressed={isActive}
            title={meta.nativeLabel}
            className={cn(
              'h-7 min-w-9 px-2 text-xs font-medium',
              isActive && 'bg-accent text-accent-foreground',
            )}
            onClick={() => {
              void setLocale(value)
            }}
          >
            {value.toUpperCase()}
          </Button>
        )
      })}
    </div>
  )
}
