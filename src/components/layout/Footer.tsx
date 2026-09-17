import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SocialLinks } from '@/components/common/SocialLinks'
import { Container } from '@/components/layout/Container'
import { MainNav } from '@/components/layout/MainNav'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const { t } = useTranslation('common')
  const siteName = t('siteName')

  return (
    <footer className="mt-auto border-t border-border/80 bg-card/40 print:hidden">
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-3">
            <Link
              to="/"
              className="font-heading inline-flex rounded-md text-sm font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {siteName}
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <SocialLinks className="-ms-2" />
          </div>

          <MainNav
            orientation="vertical"
            ariaLabel={t('footer.navigation')}
            className="lg:min-w-40"
          />
        </div>

        <Separator />

        <p className="text-sm text-muted-foreground">
          {t('footer.copyright', {
            year: new Date().getFullYear(),
            name: siteName,
          })}
        </p>
      </Container>
    </footer>
  )
}
