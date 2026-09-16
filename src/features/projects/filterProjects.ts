import type { Project } from '@/types/portfolio'

export const PROJECT_FILTERS = [
  'all',
  'web',
  'mobile',
  'react',
  'react-native',
  'ai',
] as const

export type ProjectFilter = (typeof PROJECT_FILTERS)[number]

export function isProjectFilter(value: string | null): value is ProjectFilter {
  return (
    typeof value === 'string' &&
    (PROJECT_FILTERS as readonly string[]).includes(value)
  )
}

function hasTechnology(project: Project, technology: string): boolean {
  return project.technologies.some(
    (entry) => entry.toLowerCase() === technology.toLowerCase(),
  )
}

function hasTag(project: Project, tag: string): boolean {
  return (project.tags ?? []).some(
    (entry) => entry.toLowerCase() === tag.toLowerCase(),
  )
}

export function matchesProjectFilter(
  project: Project,
  filter: ProjectFilter,
): boolean {
  switch (filter) {
    case 'all':
      return true
    case 'web':
      return project.category === 'web'
    case 'mobile':
      return project.category === 'mobile'
    case 'react':
      return hasTechnology(project, 'React') || hasTag(project, 'React')
    case 'react-native':
      return (
        hasTechnology(project, 'React Native') ||
        hasTag(project, 'React Native')
      )
    case 'ai':
      return (
        project.category === 'ai' ||
        hasTag(project, 'AI') ||
        hasTechnology(project, 'AI coding agents')
      )
    default:
      return true
  }
}

export function filterProjects(
  items: Project[],
  filter: ProjectFilter,
): Project[] {
  return items.filter((project) => matchesProjectFilter(project, filter))
}
