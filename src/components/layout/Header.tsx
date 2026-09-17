import { useId, useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher'
import { Container } from '@/components/layout/Container'
import { MainNav } from '@/components/layout/MainNav'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useLocale } from '@/hooks/useLocale'

export function Header() {
  const { t } = useTranslation('common')
  const { dir } = useLocale()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [menuRoute, setMenuRoute] = useState(location.pathname)
  const menuTitleId = useId()
  const menuDescriptionId = useId()

  if (menuRoute !== location.pathname) {
    setMenuRoute(location.pathname)
    if (open) {
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-card/80 backdrop-blur-sm print:hidden">
      <Container className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-3">
        <Link
          to="/"
          className="font-heading max-w-[9.5rem] truncate rounded-md text-sm font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-[390px]:max-w-none"
        >
          {t('siteName')}
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <MainNav />
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          <div className="hidden min-[420px]:flex min-[420px]:items-center min-[420px]:gap-1.5">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-expanded={open}
                aria-controls={menuTitleId}
                aria-label={t('nav.openMenu')}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side={dir === 'rtl' ? 'left' : 'right'}
              className="w-[min(100%,20rem)] max-w-[calc(100vw-1.5rem)]"
              aria-describedby={menuDescriptionId}
            >
              <SheetHeader>
                <SheetTitle id={menuTitleId}>{t('nav.menu')}</SheetTitle>
                <SheetDescription id={menuDescriptionId}>
                  {t('nav.mobile')}
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-6 px-4 pb-4">
                <MainNav
                  orientation="vertical"
                  ariaLabel={t('nav.mobile')}
                  onNavigate={() => setOpen(false)}
                />

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">
                      {t('language.label')}
                    </span>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">
                      {t('theme.label')}
                    </span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
