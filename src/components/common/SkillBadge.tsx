import type { ComponentProps } from 'react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SkillBadgeProps = ComponentProps<typeof Badge>

export function SkillBadge({
  className,
  variant = 'outline',
  ...props
}: SkillBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        'h-7 rounded-md px-2.5 text-xs font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}
