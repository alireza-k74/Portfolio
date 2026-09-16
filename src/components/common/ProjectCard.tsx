import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SkillBadge } from '@/components/common/SkillBadge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projectDetailsPath } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/portfolio'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { t } = useTranslation(['projects', 'common'])
  const title = t(`projects:items.${project.id}.title`, {
    defaultValue: project.title,
  })

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card/60 transition-colors hover:border-border hover:bg-card',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="size-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-full items-center justify-center bg-gradient-to-br from-primary/20 via-accent/30 to-muted"
          />
        )}
        <Badge className="absolute start-3 top-3" variant="secondary">
          {t(`projects:categories.${project.category}`)}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="space-y-2">
          <h3 className="font-heading text-base font-medium tracking-tight sm:text-lg">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t(`projects:items.${project.id}.description`, {
              defaultValue: project.description,
            })}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech}>
              <SkillBadge>{tech}</SkillBadge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Button asChild size="sm">
            <Link to={projectDetailsPath(project.id)}>
              {t('common:actions.details')}
              <ArrowUpRight
                data-icon="inline-end"
                className="rtl:-scale-x-100"
              />
            </Link>
          </Button>
          {project.githubUrl ? (
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:actions.github')}
              </a>
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:actions.liveDemo')}
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
