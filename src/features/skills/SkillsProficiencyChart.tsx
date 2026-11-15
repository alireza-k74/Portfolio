import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

const CHART_COLORS = [
  'bg-chart-1',
  'bg-chart-2',
  'bg-chart-3',
  'bg-chart-4',
  'bg-chart-5',
] as const

export function SkillsProficiencyChart() {
  const { t } = useTranslation('skills')
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="skills-proficiency-heading"
      className="mt-8 rounded-xl border border-border/80 bg-card/40 p-5 sm:p-6"
    >
      <div className="mb-6 space-y-1.5">
        <h2
          id="skills-proficiency-heading"
          className="font-heading text-lg font-medium tracking-tight sm:text-xl"
        >
          {t('proficiency.title')}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t('proficiency.description')}
        </p>
      </div>

      <ul className="flex flex-col gap-4" role="list">
        {skillCategories.map((category, index) => {
          const label = t(`categories.${category.id}`)
          const colorClass = CHART_COLORS[index % CHART_COLORS.length]
          const width = visible ? `${category.proficiency}%` : '0%'

          return (
            <li key={category.id} className="space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <a
                  href={`#skill-${category.id}`}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {label}
                </a>
                <span
                  className="font-heading text-sm font-semibold tabular-nums text-foreground/90"
                  aria-hidden="true"
                >
                  {category.proficiency}%
                </span>
              </div>

              <div
                className="h-2.5 overflow-hidden rounded-full bg-muted/80"
                role="meter"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={category.proficiency}
                aria-label={t('proficiency.meterLabel', {
                  category: label,
                  value: category.proficiency,
                })}
              >
                <div
                  className={cn(
                    'h-full rounded-full motion-safe:transition-[width] motion-safe:duration-700 motion-safe:ease-out',
                    colorClass,
                  )}
                  style={{
                    width,
                    transitionDelay: visible
                      ? `${index * 60}ms`
                      : '0ms',
                  }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
