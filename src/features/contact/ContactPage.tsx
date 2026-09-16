import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { profile } from '@/data/profile'

export function ContactPage() {
  const { t } = useTranslation(['contact', 'common'])

  return (
    <Page containerSize="narrow">
      <PageHeader
        title={t('contact:title')}
        description={t('contact:description')}
      />
      <div className="mt-8 space-y-2 text-muted-foreground">
        <p>
          {t('common:email')}:{' '}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </p>
        <p>{t('contact:formPlaceholder')}</p>
      </div>
    </Page>
  )
}
