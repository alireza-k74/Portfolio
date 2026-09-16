import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type MainNavProps = {
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
  ariaLabel?: string
  className?: string
}

export function MainNav({
  orientation = 'horizontal',
  onNavigate,
  ariaLabel,
  className,
}: MainNavProps) {
  const { t } = useTranslation('common')
  const isVertical = orientation === 'vertical'

  return (
    <nav aria-label={ariaLabel ?? t('nav.primary')} className={className}>
      <ul
        className={cn(
          'flex',
          isVertical ? 'flex-col gap-1' : 'items-center gap-1',
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'inline-flex rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isVertical
                    ? 'w-full px-3 py-2.5'
                    : 'px-2.5 py-1.5 whitespace-nowrap',
                  isActive
                    ? 'bg-accent font-medium text-accent-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
