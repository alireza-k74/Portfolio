import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { ProjectCard } from '@/components/common/ProjectCard'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { getFeaturedProjects, projects } from '@/data/projects'
import { ROUTES } from '@/lib/constants'

function getHomeProjects(limit = 2) {
  const featured = getFeaturedProjects()
  if (featured.length >= limit) {
    return featured.slice(0, limit)
  }

  const featuredIds = new Set(featured.map((project) => project.id))
  const remaining = projects.filter((project) => !featuredIds.has(project.id))

  return [...featured, ...remaining].slice(0, limit)
}

export function FeaturedProjects() {
  const { t } = useTranslation('home')
  const items = getHomeProjects(2)

  return (
    <Section aria-labelledby="home-featured-heading" className="bg-card/25">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <Heading id="home-featured-heading" as="h2" size="lg">
              {t('featured.title')}
            </Heading>
            <p className="text-muted-foreground">{t('featured.description')}</p>
          </div>
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <Link to={ROUTES.projects}>
              {t('featured.cta')}
              <ArrowRight data-icon="inline-end" className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
