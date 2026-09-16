import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { SkillCategoryCard } from '@/features/skills/SkillCategoryCard'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

export function SkillsPage() {
  const { t } = useTranslation('skills')
  const totalSkills = skillCategories.reduce(
    (count, category) => count + category.skills.length,
    0,
  )

  return (
    <Page>
      <PageHeader title={t('title')} description={t('description')} />

      <section
        aria-label={t('overview.label')}
        className="mt-8 rounded-xl border border-border/80 bg-card/40"
      >
        <dl className="grid grid-cols-2">
          <div className="flex flex-col gap-1 px-5 py-4">
            <dt className="text-sm text-muted-foreground">
              {t('overview.categories')}
            </dt>
            <dd className="font-heading text-2xl font-semibold tracking-tight">
              {skillCategories.length}
            </dd>
          </div>
          <div className="flex flex-col gap-1 border-s border-border/70 px-5 py-4">
            <dt className="text-sm text-muted-foreground">
              {t('overview.skills')}
            </dt>
            <dd className="font-heading text-2xl font-semibold tracking-tight">
              {totalSkills}
            </dd>
          </div>
        </dl>
      </section>

      <nav
        aria-label={t('overview.categories')}
        className="sticky top-14 z-30 mt-8 max-w-full overflow-x-auto overscroll-x-contain bg-background/80 py-2 backdrop-blur-sm sm:top-16 [-ms-overflow-style:none] [scrollbar-width:thin]"
      >
        <ul className="flex w-max gap-2">
          {skillCategories.map((category) => (
            <li key={category.id}>
              <a
                href={`#skill-${category.id}`}
                className={cn(
                  'inline-flex rounded-md border border-border/80 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors',
                  'hover:border-border hover:bg-card hover:text-foreground',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
              >
                {t(`categories.${category.id}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Page>
  )
}
