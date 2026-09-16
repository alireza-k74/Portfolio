import type { ComponentProps, ElementType } from 'react'

import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps = ComponentProps<'h1'> & {
  as?: HeadingLevel
  size?: 'display' | 'xl' | 'lg' | 'md' | 'sm'
}

const sizeClasses = {
  display:
    'font-heading text-[2rem] leading-tight font-semibold tracking-tight min-[390px]:text-4xl sm:text-5xl lg:text-6xl',
  xl: 'font-heading text-2xl font-semibold tracking-tight min-[390px]:text-3xl sm:text-4xl',
  lg: 'font-heading text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl',
  md: 'font-heading text-lg font-medium tracking-tight sm:text-xl md:text-2xl',
  sm: 'font-heading text-base font-medium tracking-tight sm:text-lg',
} as const

export function Heading({
  as,
  size = 'lg',
  className,
  ...props
}: HeadingProps) {
  const Comp = (as ?? defaultElement(size)) as ElementType

  return <Comp className={cn(sizeClasses[size], className)} {...props} />
}

function defaultElement(size: HeadingProps['size']): HeadingLevel {
  switch (size) {
    case 'display':
      return 'h1'
    case 'xl':
      return 'h1'
    case 'lg':
      return 'h2'
    case 'md':
      return 'h3'
    case 'sm':
      return 'h4'
    default:
      return 'h2'
  }
}
