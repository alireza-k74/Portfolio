import { useTranslation } from 'react-i18next'

import { Container } from '@/components/layout/Container'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'

const CORE_FOCUS_COUNT = 4

export function StatsSection() {
  const { t } = useTranslation('home')

  const stats = [
    {
      label: t('stats.projects'),
      value: String(projects.length),
    },
    {
      label: t('stats.skillAreas'),
      value: String(skillCategories.length),
    },
    {
      label: t('stats.focus'),
      value: String(CORE_FOCUS_COUNT),
    },
  ] as const

  return (
    <section
      aria-label={t('stats.label')}
      className="border-y border-border/70 bg-card/35"
    >
      <Container>
        <dl className="grid grid-cols-1 min-[480px]:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between gap-4 border-border/70 px-1 py-5 min-[480px]:flex-col min-[480px]:items-start min-[480px]:justify-center min-[480px]:border-s min-[480px]:px-5 min-[480px]:py-8 first:min-[480px]:border-s-0 first:min-[480px]:ps-0 sm:px-6"
            >
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
