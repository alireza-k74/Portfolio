import { Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const PHONE_TEL = '+989120734656'

export function ContactPage() {
  const { t } = useTranslation(['contact', 'common'])

  return (
    <Page containerSize="narrow">
      <PageHeader
        title={t('contact:title')}
        description={t('contact:description')}
      />

      <div className="mt-8 space-y-6">
        <p className="text-muted-foreground">{t('contact:intro')}</p>

        <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
          <Button asChild size="lg" className="w-full min-[420px]:w-auto">
            <a href={`mailto:${profile.email}`}>
              <Mail data-icon="inline-start" />
              {profile.email}
            </a>
          </Button>

          {profile.phone ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full min-[420px]:w-auto"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone data-icon="inline-start" />
                {profile.phone}
              </a>
            </Button>
          ) : null}
        </div>

        <dl className="space-y-3 text-sm text-muted-foreground">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <dt className="font-medium text-foreground">{t('common:email')}</dt>
            <dd>
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </dd>
          </div>
          {profile.phone ? (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="font-medium text-foreground">
                {t('common:phone')}
              </dt>
              <dd>
                <a
                  className="underline-offset-4 hover:underline"
                  href={`tel:${PHONE_TEL}`}
                  dir="ltr"
                >
                  {profile.phone}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </Page>
  )
}
