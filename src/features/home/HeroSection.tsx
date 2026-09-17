import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { ResumeDownloadButtons } from '@/components/common/ResumeDownloadButtons'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

const HIGHLIGHT_KEYS = [
  'highlights.reactNative',
  'highlights.react',
  'highlights.typescript',
  'highlights.ai',
] as const

export function HeroSection() {
  const { t } = useTranslation(['home', 'common'])

  return (
    <Section
      className="flex items-center py-12 sm:min-h-[calc(100svh-4rem)] sm:py-16 lg:py-24"
      aria-labelledby="home-hero-heading"
    >
      <div className="flex w-full max-w-3xl flex-col gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-5">
          <p className="font-heading text-xs font-medium tracking-[0.16em] text-primary uppercase sm:text-sm sm:tracking-[0.18em]">
            {t('home:name')}
          </p>

          <Heading
            id="home-hero-heading"
            as="h1"
            size="display"
            className="text-balance"
          >
            {t('home:greeting', { name: t('home:firstName') })}
          </Heading>

          <p className="max-w-2xl text-base text-foreground sm:text-lg md:text-xl">
            {t('home:title')}
          </p>

          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            {t('home:intro')}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {HIGHLIGHT_KEYS.map((key, index) => (
            <li key={key} className="flex items-center gap-3">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="hidden size-1 rounded-full bg-border sm:inline-block"
                />
              ) : null}
              <span className="text-foreground/80">{t(`home:${key}`)}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex w-full flex-col gap-3 min-[390px]:w-auto min-[390px]:flex-row min-[390px]:flex-wrap">
            <Button asChild size="lg" className="w-full min-[390px]:w-auto">
              <Link to={ROUTES.projects}>
                {t('common:actions.viewProjects')}
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

          <SocialLinks />
        </div>
      </div>
    </Section>
  )
}
