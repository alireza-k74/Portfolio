import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps = ComponentProps<'div'> & {
  size?: 'default' | 'narrow' | 'wide'
}

const sizeClasses = {
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-6xl 2xl:max-w-7xl',
} as const

export function Container({
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
