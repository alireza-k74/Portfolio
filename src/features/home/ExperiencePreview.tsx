import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { experience } from '@/data/experience'
import { ROUTES } from '@/lib/constants'

export function ExperiencePreview() {
  const { t } = useTranslation(['home', 'experience', 'common'])
  const latestRoles = experience.slice(0, 2)

  return (
    <Section aria-labelledby="home-experience-heading">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <Heading id="home-experience-heading" as="h2" size="lg">
              {t('home:experience.title')}
            </Heading>
            <p className="text-muted-foreground">
              {t('home:experience.description')}
            </p>
          </div>
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <Link to={ROUTES.experience}>
              {t('home:experience.cta')}
              <ArrowRight data-icon="inline-end" className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <ol className="space-y-6">
          {latestRoles.map((item) => (
            <li
              key={item.id}
              className="border-s-2 border-primary/30 ps-4 sm:ps-5"
            >
              <h3 className="font-heading text-lg font-medium tracking-tight">
                {t(`experience:items.${item.id}.role`, {
                  defaultValue: item.role,
                })}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(`experience:items.${item.id}.company`, {
                  defaultValue: item.company,
                })}{' '}
                · {item.startDate} –{' '}
                {item.endDate ?? t('home:experience.present')} ·{' '}
                {t(`experience:workMode.${item.workMode}`)}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/85">
                {t(`experience:items.${item.id}.description`, {
                  defaultValue: item.description,
                })}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
