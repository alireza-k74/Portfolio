import type { ComponentProps, ElementType } from 'react'

import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type SectionProps = ComponentProps<'section'> & {
  containerSize?: 'default' | 'narrow' | 'wide'
  as?: ElementType
}

export function Section({
  className,
  containerSize = 'default',
  as: Comp = 'section',
  children,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn('py-10 sm:py-14 md:py-16 lg:py-20', className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </Comp>
  )
}
