import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { Page, PageHeader } from '@/components/common/Page'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const STRENGTH_KEYS = ['0', '1', '2', '3'] as const
const APPROACH_POINT_KEYS = ['0', '1', '2', '3'] as const
const AI_POINT_KEYS = ['0', '1', '2'] as const
const FOCUS_KEYS = ['0', '1', '2', '3', '4', '5'] as const

export function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <Page>
      <PageHeader title={t('title')} description={t('description')} />

      <div className="mt-10 space-y-12">
        <section aria-labelledby="about-summary-heading" className="space-y-3">
          <Heading id="about-summary-heading" as="h2" size="md">
            {t('summary.title')}
          </Heading>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t('summary.body')}
          </p>
        </section>

        <Separator />

        <section aria-labelledby="about-approach-heading" className="space-y-4">
          <div className="space-y-3">
            <Heading id="about-approach-heading" as="h2" size="md">
              {t('approach.title')}
            </Heading>
            <p className="max-w-3xl text-muted-foreground">
              {t('approach.body')}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {APPROACH_POINT_KEYS.map((key) => (
              <li
                key={key}
                className="rounded-xl border border-border/80 bg-card/50 px-4 py-3 text-sm leading-relaxed text-foreground/90"
              >
                {t(`approach.points.${key}`)}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="about-strengths-heading"
          className="space-y-4"
        >
          <Heading id="about-strengths-heading" as="h2" size="md">
            {t('strengths.title')}
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2">
            {STRENGTH_KEYS.map((key) => (
              <article
                key={key}
                className="space-y-2 rounded-xl border border-border/80 bg-card/40 p-5"
              >
                <h3 className="font-heading text-base font-medium tracking-tight">
                  {t(`strengths.items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`strengths.items.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-ai-heading" className="space-y-4">
          <div className="space-y-3">
            <Heading id="about-ai-heading" as="h2" size="md">
              {t('ai.title')}
            </Heading>
            <p className="max-w-3xl text-muted-foreground">{t('ai.body')}</p>
          </div>
          <ol className="space-y-3">
            {AI_POINT_KEYS.map((key, index) => (
              <li key={key} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-heading mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-medium text-primary">
                  {index + 1}
                </span>
                <span className="text-foreground/90">
                  {t(`ai.points.${key}`)}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="about-focus-heading" className="space-y-4">
          <div className="space-y-3">
            <Heading id="about-focus-heading" as="h2" size="md">
              {t('focus.title')}
            </Heading>
            <p className="max-w-3xl text-muted-foreground">{t('focus.body')}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FOCUS_KEYS.map((key) => (
              <Badge key={key} variant="secondary">
                {t(`focus.items.${key}`)}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </Page>
  )
}
