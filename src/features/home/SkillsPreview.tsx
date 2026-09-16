import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SkillBadge } from '@/components/common/SkillBadge'
import { Heading } from '@/components/common/Heading'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { skillCategories } from '@/data/skills'
import { ROUTES } from '@/lib/constants'

const PREVIEW_CATEGORY_IDS = ['frontend', 'mobile', 'testing', 'ai'] as const

export function SkillsPreview() {
  const { t } = useTranslation(['home', 'skills'])
  const previewCategories = skillCategories.filter((category) =>
    PREVIEW_CATEGORY_IDS.includes(
      category.id as (typeof PREVIEW_CATEGORY_IDS)[number],
    ),
  )

  return (
    <Section aria-labelledby="home-skills-heading" className="bg-card/25">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <Heading id="home-skills-heading" as="h2" size="lg">
              {t('home:skills.title')}
            </Heading>
            <p className="text-muted-foreground">
              {t('home:skills.description')}
            </p>
          </div>
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <Link to={ROUTES.skills}>
              {t('home:skills.cta')}
              <ArrowRight data-icon="inline-end" className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {previewCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h3 className="font-heading text-base font-medium">
                {t(`skills:categories.${category.id}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
