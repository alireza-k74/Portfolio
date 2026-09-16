import { useTranslation } from 'react-i18next'

import {
  PROJECT_FILTERS,
  type ProjectFilter,
} from '@/features/projects/filterProjects'
import { cn } from '@/lib/utils'

type ProjectFiltersProps = {
  value: ProjectFilter
  onChange: (filter: ProjectFilter) => void
  className?: string
}

export function ProjectFilters({
  value,
  onChange,
  className,
}: ProjectFiltersProps) {
  const { t } = useTranslation('projects')

  return (
    <div
      role="group"
      aria-label={t('filters.label')}
      className={cn(
        'max-w-full -mx-1 overflow-x-auto overscroll-x-contain px-1 [-ms-overflow-style:none] [scrollbar-width:thin]',
        className,
      )}
    >
      <ul className="flex w-max max-w-none gap-2 pb-1">
        {PROJECT_FILTERS.map((filter) => {
          const isActive = value === filter

          return (
            <li key={filter}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange(filter)}
                className={cn(
                  'inline-flex rounded-md border px-3 py-1.5 text-sm whitespace-nowrap transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border/80 bg-card/60 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground',
                )}
              >
                {t(`filters.${filter}`)}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
