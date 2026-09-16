import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'

type ResumeDownloadButtonsProps = {
  size?: 'default' | 'sm' | 'lg'
  className?: string
  buttonClassName?: string
  firstVariant?: ButtonVariant
  secondVariant?: ButtonVariant
}

export function ResumeDownloadButtons({
  size = 'default',
  className,
  buttonClassName,
  firstVariant = 'default',
  secondVariant = 'outline',
}: ResumeDownloadButtonsProps) {
  const { t } = useTranslation('common')

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Button
        asChild
        size={size}
        variant={firstVariant}
        className={buttonClassName}
      >
        <a href={profile.resumeUrls.en} download>
          <Download data-icon="inline-start" />
          {t('actions.downloadResumeEn')}
        </a>
      </Button>
      <Button
        asChild
        size={size}
        variant={secondVariant}
        className={buttonClassName}
      >
        <a href={profile.resumeUrls.fa} download>
          <Download data-icon="inline-start" />
          {t('actions.downloadResumeFa')}
        </a>
      </Button>
    </div>
  )
}
