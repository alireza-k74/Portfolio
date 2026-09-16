import type { ReactNode } from 'react'

import { Heading } from '@/components/common/Heading'
import { Section } from '@/components/layout/Section'
import { cn } from '@/lib/utils'

type PageHeaderProps = {
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Heading size="xl">{title}</Heading>
      {description ? (
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}

type PageProps = {
  children: ReactNode
  className?: string
  containerSize?: 'default' | 'narrow' | 'wide'
}

export function Page({
  children,
  className,
  containerSize = 'default',
}: PageProps) {
  return (
    <Section className={className} containerSize={containerSize}>
      {children}
    </Section>
  )
}
