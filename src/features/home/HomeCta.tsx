import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { ResumeDownloadButtons } from '@/components/common/ResumeDownloadButtons'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

export function HomeCta() {
  const { t } = useTranslation('home')

  return (
    <Section aria-labelledby="home-cta-heading">
      <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-primary/10 via-card/80 to-accent/20 px-4 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="space-y-3">
            <Heading id="home-cta-heading" as="h2" size="lg">
              {t('cta.title')}
            </Heading>
            <p className="text-sm text-muted-foreground sm:text-base">
              {t('cta.description')}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 min-[390px]:w-auto min-[390px]:flex-row min-[390px]:flex-wrap">
            <Button asChild size="lg" className="w-full min-[390px]:w-auto">
              <Link to={ROUTES.contact}>
                {t('cta.primary')}
                <ArrowRight data-icon="inline-end" className="rtl:rotate-180" />
              </Link>
            </Button>
            <ResumeDownloadButtons
              size="lg"
              firstVariant="outline"
              secondVariant="outline"
              buttonClassName="w-full min-[390px]:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
