import type { ComponentType, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'

import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import type { SocialPlatform } from '@/types/portfolio'

type IconProps = SVGProps<SVGSVGElement>

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.584 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.683-.222.683-.493 0-.243-.009-.887-.014-1.741-2.782.617-3.369-1.37-3.369-1.37-.455-1.178-1.11-1.491-1.11-1.491-.908-.635.069-.622.069-.622 1.004.072 1.532 1.055 1.532 1.055.892 1.562 2.341 1.111 2.91.85.092-.661.35-1.111.636-1.367-2.22-.258-4.555-1.138-4.555-5.065 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.3.098-2.71 0 0 .84-.275 2.75 1.05A9.36 9.36 0 0 1 12 7.14c.85.004 1.705.117 2.504.343 1.909-1.325 2.747-1.05 2.747-1.05.546 1.41.203 2.451.1 2.71.64.717 1.028 1.632 1.028 2.751 0 3.937-2.34 4.804-4.566 5.057.359.316.679.94.679 1.895 0 1.368-.012 2.47-.012 2.807 0 .273.18.593.688.492A10.27 10.27 0 0 0 22 12.253C22 6.584 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GlobeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const SOCIAL_ICONS: Record<SocialPlatform, ComponentType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  twitter: GlobeIcon,
  website: GlobeIcon,
}

type SocialLinksProps = {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const { t } = useTranslation('common')

  return (
    <ul
      className={cn('flex items-center gap-1', className)}
      aria-label={t('footer.social')}
    >
      {profile.socialLinks.map((link) => {
        const Icon = SOCIAL_ICONS[link.platform]
        const label = t(`social.${link.platform}`, {
          defaultValue: link.label,
        })
        const isExternal = link.url.startsWith('http')

        return (
          <li key={link.platform}>
            <a
              href={link.url}
              aria-label={label}
              title={label}
              className={cn(
                'inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                iconClassName,
              )}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon className="size-4" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
