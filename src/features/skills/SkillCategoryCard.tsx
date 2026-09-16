import { useTranslation } from 'react-i18next'

import { SkillBadge } from '@/components/common/SkillBadge'
import type { SkillCategory } from '@/types/portfolio'

type SkillCategoryCardProps = {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const { t } = useTranslation('skills')

  return (
    <section
      id={`skill-${category.id}`}
      aria-labelledby={`skill-${category.id}-heading`}
      className="flex h-full flex-col gap-4 rounded-xl border border-border/80 bg-card/50 p-5 scroll-mt-24"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h2
            id={`skill-${category.id}-heading`}
            className="font-heading text-lg font-medium tracking-tight"
          >
            {t(`categories.${category.id}`)}
          </h2>
          <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {category.skills.length}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t(`categoryDescriptions.${category.id}`)}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill}>
            <SkillBadge>{skill}</SkillBadge>
          </li>
        ))}
      </ul>
    </section>
  )
}
