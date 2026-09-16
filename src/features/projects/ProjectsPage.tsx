import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Page, PageHeader } from '@/components/common/Page'
import { ProjectCard } from '@/components/common/ProjectCard'
import { ProjectFilters } from '@/features/projects/ProjectFilters'
import {
  filterProjects,
  isProjectFilter,
  type ProjectFilter,
} from '@/features/projects/filterProjects'
import { projects } from '@/data/projects'

const FILTER_PARAM = 'filter'

export function ProjectsPage() {
  const { t } = useTranslation('projects')
  const [searchParams, setSearchParams] = useSearchParams()

  const rawFilter = searchParams.get(FILTER_PARAM)
  const activeFilter: ProjectFilter = isProjectFilter(rawFilter)
    ? rawFilter
    : 'all'

  const filteredProjects = filterProjects(projects, activeFilter)

  const handleFilterChange = (filter: ProjectFilter) => {
    const nextParams = new URLSearchParams(searchParams)

    if (filter === 'all') {
      nextParams.delete(FILTER_PARAM)
    } else {
      nextParams.set(FILTER_PARAM, filter)
    }

    setSearchParams(nextParams, { replace: true })
  }

  return (
    <Page>
      <PageHeader title={t('title')} description={t('description')} />

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <ProjectFilters
          value={activeFilter}
          onChange={handleFilterChange}
          className="min-w-0 flex-1"
        />
        <p
          className="shrink-0 text-sm text-muted-foreground"
          aria-live="polite"
        >
          {t('results', { count: filteredProjects.length })}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="mt-8 rounded-xl border border-dashed border-border/80 bg-card/40 px-5 py-10 text-center"
        >
          <p className="font-heading text-base font-medium">
            {t('empty.title')}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t('empty.description')}
          </p>
        </div>
      )}
    </Page>
  )
}
