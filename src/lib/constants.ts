export const SITE_NAME = 'Alireza Karami'
export const SITE_TITLE = 'Alireza Karami | Senior Mobile & Frontend Engineer'

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  experience: '/experience',
  skills: '/skills',
  projects: '/projects',
  projectDetails: '/projects/:projectId',
  resume: '/resume',
  contact: '/contact',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]

export function projectDetailsPath(projectId: string): string {
  return `/projects/${projectId}`
}

export const NAV_ITEMS = [
  { labelKey: 'nav.home', to: ROUTES.home },
  { labelKey: 'nav.about', to: ROUTES.about },
  { labelKey: 'nav.experience', to: ROUTES.experience },
  { labelKey: 'nav.skills', to: ROUTES.skills },
  { labelKey: 'nav.projects', to: ROUTES.projects },
  { labelKey: 'nav.resume', to: ROUTES.resume },
  { labelKey: 'nav.contact', to: ROUTES.contact },
] as const
