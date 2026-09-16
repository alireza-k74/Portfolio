import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

export function NotFoundPage() {
  const { t } = useTranslation(['notFound', 'common'])

  return (
    <Page>
      <PageHeader
        title={t('notFound:title')}
        description={t('notFound:description')}
      />
      <Button asChild>
        <Link to={ROUTES.home}>{t('common:actions.backToHome')}</Link>
      </Button>
    </Page>
  )
}
