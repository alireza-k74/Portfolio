import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/badge'
import type { ExperienceItem } from '@/types/portfolio'

type ExperienceTimelineItemProps = {
  item: ExperienceItem
  isLast?: boolean
}

export function ExperienceTimelineItem({
  item,
  isLast = false,
}: ExperienceTimelineItemProps) {
  const { t } = useTranslation(['experience', 'common'])
  const itemKey = `experience:items.${item.id}`

  return (
    <li className="relative ms-2 ps-7 sm:ms-4 sm:ps-10">
      <span
        aria-hidden="true"
        className="absolute start-0 top-1.5 -ms-1.5 size-3 rounded-full border-2 border-primary bg-background"
      />
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute start-0 top-5 bottom-[-1.5rem] -ms-px w-px bg-border"
        />
      ) : null}

      <article className="space-y-4 pb-10 last:pb-0">
        <header className="space-y-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <h2 className="font-heading text-lg font-medium tracking-tight sm:text-xl">
                {t(`${itemKey}.role`, { defaultValue: item.role })}
              </h2>
              <p className="text-sm font-medium text-foreground/85">
                {t(`${itemKey}.company`, { defaultValue: item.company })}
              </p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-end">
              <time dateTime={item.startDate}>{item.startDate}</time>
              {' – '}
              {item.endDate ? (
                <time dateTime={item.endDate}>{item.endDate}</time>
              ) : (
                t('common:present')
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <Badge variant="outline">
              {t(`experience:workMode.${item.workMode}`)}
            </Badge>
            <Badge variant="outline">
              {t(`experience:employmentType.${item.employmentType}`)}
            </Badge>
            <Badge variant="outline">{item.location}</Badge>
          </div>
        </header>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t(`${itemKey}.description`, { defaultValue: item.description })}
        </p>

        {item.responsibilities.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">
              {t('experience:responsibilities')}
            </h3>
            <ul className="list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-muted-foreground">
              {item.responsibilities.map((responsibility, index) => (
                <li key={`${item.id}-responsibility-${index}`}>
                  {t(`${itemKey}.responsibilities.${index}`, {
                    defaultValue: responsibility,
                  })}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.technologies.length > 0 ? (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">
              {t('experience:technologies')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </li>
  )
}
