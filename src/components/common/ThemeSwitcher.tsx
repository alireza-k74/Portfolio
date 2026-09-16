import { Monitor, Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/app/providers/ThemeProvider'
import { Button } from '@/components/ui/button'
import { type Theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const THEME_OPTIONS: Array<{
  value: Theme
  labelKey: 'theme.light' | 'theme.dark' | 'theme.system'
  icon: typeof Sun
}> = [
  { value: 'light', labelKey: 'theme.light', icon: Sun },
  { value: 'dark', labelKey: 'theme.dark', icon: Moon },
  { value: 'system', labelKey: 'theme.system', icon: Monitor },
]

type ThemeSwitcherProps = {
  className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { t } = useTranslation('common')
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="group"
      aria-label={t('theme.label')}
      className={cn(
        'inline-flex items-center rounded-lg border border-border bg-background p-0.5',
        className,
      )}
    >
      {THEME_OPTIONS.map(({ value, labelKey, icon: Icon }) => {
        const label = t(labelKey)
        const isActive = theme === value

        return (
          <Button
            key={value}
            type="button"
            size="icon-sm"
            variant="ghost"
            aria-label={t('theme.option', { label })}
            aria-pressed={isActive}
            title={label}
            className={cn(
              'size-7',
              isActive && 'bg-accent text-accent-foreground',
            )}
            onClick={() => setTheme(value)}
          >
            <Icon aria-hidden="true" />
          </Button>
        )
      })}
      <span className="sr-only">
        {t('theme.current', { theme: t(`theme.${theme}`) })}
      </span>
    </div>
  )
}
