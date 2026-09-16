import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { ExperienceTimelineItem } from '@/features/experience/ExperienceTimelineItem'
import { experience } from '@/data/experience'

export function ExperiencePage() {
  const { t } = useTranslation('experience')

  return (
    <Page>
      <PageHeader title={t('title')} description={t('description')} />

      <p
        role="note"
        className="mt-6 max-w-3xl rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
      >
        {t('notice')}
      </p>

      <ol className="mt-10">
        {experience.map((item, index) => (
          <ExperienceTimelineItem
            key={item.id}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </ol>
    </Page>
  )
}
