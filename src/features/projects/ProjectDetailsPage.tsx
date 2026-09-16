import type { ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { Page, PageHeader } from '@/components/common/Page'
import { SkillBadge } from '@/components/common/SkillBadge'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getProjectById } from '@/data/projects'
import { ROUTES } from '@/lib/constants'
import type { Project } from '@/types/portfolio'

function resolveText(
  translate: (key: string, options?: { defaultValue?: string }) => string,
  key: string,
  fallback?: string,
): string | null {
  const value = translate(key, { defaultValue: fallback ?? '' }).trim()
  return value.length > 0 ? value : null
}

function resolveList(
  translate: (key: string, options?: { defaultValue?: string }) => string,
  keyPrefix: string,
  fallback: string[] = [],
): string[] {
  return fallback
    .map((item, index) =>
      translate(`${keyPrefix}.${index}`, { defaultValue: item }).trim(),
    )
    .filter((item) => item.length > 0)
}

type DetailSectionProps = {
  id: string
  title: string
  children: ReactNode
}

function DetailSection({ id, title, children }: DetailSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-3">
      <Heading id={id} as="h2" size="md">
        {title}
      </Heading>
      {children}
    </section>
  )
}

function ProjectHero({
  project,
  title,
  description,
}: {
  project: Project
  title: string
  description: string
}) {
  const { t } = useTranslation(['projects', 'common'])

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ms-2 self-start">
        <Link to={ROUTES.projects}>
          <ArrowLeft data-icon="inline-start" className="rtl:rotate-180" />
          {t('common:actions.backToProjects')}
        </Link>
      </Button>

      {project.image ? (
        <div className="overflow-hidden rounded-xl border border-border/80 bg-muted sm:rounded-2xl">
          <img
            src={project.image}
            alt={title}
            className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
            loading="eager"
            decoding="async"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-5">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge>{t(`projects:categories.${project.category}`)}</Badge>
            <Badge variant="secondary">
              {t(`projects:status.${project.status}`)}
            </Badge>
          </div>
          <Heading as="h1" size="xl" className="text-balance">
            {title}
          </Heading>
          <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 min-[390px]:w-auto min-[390px]:flex-row min-[390px]:flex-wrap">
          {project.liveUrl ? (
            <Button asChild size="lg" className="w-full min-[390px]:w-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:actions.liveDemo')}
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full min-[390px]:w-auto"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:actions.github')}
                <ArrowUpRight
                  data-icon="inline-end"
                  className="rtl:-scale-x-100"
                />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { t } = useTranslation(['projects', 'common'])
  const project = projectId ? getProjectById(projectId) : undefined

  if (!project) {
    return (
      <Page>
        <PageHeader
          title={t('projects:notFound.title')}
          description={t('projects:notFound.description')}
        />
        <Button asChild>
          <Link to={ROUTES.projects}>{t('common:actions.backToProjects')}</Link>
        </Button>
      </Page>
    )
  }

  const itemKey = `projects:items.${project.id}`
  const title =
    resolveText(t, `${itemKey}.title`, project.title) ?? project.title
  const description =
    resolveText(t, `${itemKey}.description`, project.description) ??
    project.description
  const overview = resolveText(
    t,
    `${itemKey}.longDescription`,
    project.longDescription,
  )
  const problem = resolveText(t, `${itemKey}.problem`, project.problem)
  const solution = resolveText(t, `${itemKey}.solution`, project.solution)
  const architecture = resolveText(
    t,
    `${itemKey}.architecture`,
    project.architecture,
  )
  const features = resolveList(t, `${itemKey}.features`, project.features)
  const challenges = resolveList(t, `${itemKey}.challenges`, project.challenges)
  const results = resolveList(t, `${itemKey}.results`, project.results)
  const screenshots = project.screenshots ?? []

  return (
    <>
      <Section containerSize="wide" className="pb-8 sm:pb-10 lg:pb-12">
        <ProjectHero
          project={project}
          title={title}
          description={description}
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {overview ? (
            <DetailSection
              id="project-overview"
              title={t('projects:sections.overview')}
            >
              <p className="leading-relaxed text-muted-foreground">
                {overview}
              </p>
            </DetailSection>
          ) : null}

          {problem ? (
            <DetailSection
              id="project-problem"
              title={t('projects:sections.problem')}
            >
              <p className="leading-relaxed text-muted-foreground">{problem}</p>
            </DetailSection>
          ) : null}

          {solution ? (
            <DetailSection
              id="project-solution"
              title={t('projects:sections.solution')}
            >
              <p className="leading-relaxed text-muted-foreground">
                {solution}
              </p>
            </DetailSection>
          ) : null}

          {features.length > 0 ? (
            <DetailSection
              id="project-features"
              title={t('projects:sections.features')}
            >
              <ul className="list-disc space-y-2 ps-5 text-muted-foreground">
                {features.map((feature) => (
                  <li key={feature} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {architecture ? (
            <DetailSection
              id="project-architecture"
              title={t('projects:sections.architecture')}
            >
              <p className="leading-relaxed text-muted-foreground">
                {architecture}
              </p>
            </DetailSection>
          ) : null}

          <DetailSection
            id="project-stack"
            title={t('projects:sections.stack')}
          >
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <SkillBadge>{tech}</SkillBadge>
                </li>
              ))}
            </ul>
          </DetailSection>

          {challenges.length > 0 ? (
            <DetailSection
              id="project-challenges"
              title={t('projects:sections.challenges')}
            >
              <ul className="list-disc space-y-2 ps-5 text-muted-foreground">
                {challenges.map((challenge) => (
                  <li key={challenge} className="leading-relaxed">
                    {challenge}
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {results.length > 0 ? (
            <DetailSection
              id="project-results"
              title={t('projects:sections.results')}
            >
              <ul className="list-disc space-y-2 ps-5 text-muted-foreground">
                {results.map((result) => (
                  <li key={result} className="leading-relaxed">
                    {result}
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {screenshots.length > 0 ? (
            <DetailSection
              id="project-screenshots"
              title={t('projects:sections.screenshots')}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {screenshots.map((screenshot, index) => (
                  <figure
                    key={screenshot}
                    className="overflow-hidden rounded-xl border border-border/80 bg-muted"
                  >
                    <img
                      src={screenshot}
                      alt={t('projects:screenshotAlt', {
                        title,
                        index: index + 1,
                      })}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </DetailSection>
          ) : null}

          <Separator />

          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:actions.liveDemo')}
                </a>
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:actions.github')}
                </a>
              </Button>
            ) : null}
            <Button asChild variant="ghost">
              <Link to={ROUTES.projects}>
                {t('common:actions.allProjects')}
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
