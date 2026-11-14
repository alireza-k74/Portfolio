import { Mail, Phone, Send } from 'lucide-react'
import type { SVGProps } from 'react'
import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const PHONE_TEL = '+989120734656'
const TELEGRAM_HANDLE = '@alirezak74'

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full min-[420px]:w-auto"
          >
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send data-icon="inline-start" />
              {TELEGRAM_HANDLE}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full min-[420px]:w-auto"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon data-icon="inline-start" className="size-4" />
              {t('common:social.linkedin')}
            </a>
          </Button>
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
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <dt className="font-medium text-foreground">
              {t('common:social.telegram')}
            </dt>
            <dd>
              <a
                className="underline-offset-4 hover:underline"
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
              >
                {TELEGRAM_HANDLE}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <dt className="font-medium text-foreground">
              {t('common:social.linkedin')}
            </dt>
            <dd>
              <a
                className="underline-offset-4 hover:underline"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
              >
                {profile.linkedin.replace(/^https?:\/\//, '')}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Page>
  )
}
