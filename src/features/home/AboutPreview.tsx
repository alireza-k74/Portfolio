import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { ROUTES } from '@/lib/constants'

export function AboutPreview() {
  const { t } = useTranslation(['home', 'common'])

  return (
    <Section aria-labelledby="home-about-heading">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
        <div className="flex items-start gap-5">
          <div className="hidden size-20 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-muted/40 sm:block">
            <img
              src={profile.image}
              alt={profile.name}
              className="size-full object-cover object-top"
              width={80}
              height={80}
              decoding="async"
            />
          </div>
          <div className="space-y-3">
            <Heading id="home-about-heading" as="h2" size="lg">
              {t('home:about.title')}
            </Heading>
            <p className="text-muted-foreground">
              {t('home:about.description')}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            {t('home:about.summary')}
          </p>
          <Button asChild variant="outline">
            <Link to={ROUTES.about}>
              {t('home:about.cta')}
              <ArrowRight data-icon="inline-end" className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
