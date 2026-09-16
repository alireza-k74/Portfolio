import type { Project } from '@/types/portfolio'

/**
 * Placeholder projects for architecture, filtering, and routing.
 * Replace with real project details before production.
 */
export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description:
      'A multilingual React + TypeScript portfolio with theming, routing, and accessible UI.',
    longDescription:
      'This website showcases professional experience, skills, and selected projects with a clean architecture and production-ready tooling.',
    category: 'web',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
    ],
    featured: true,
    status: 'in-progress',
    githubUrl: 'https://github.com/',
    tags: ['React', 'Web'],
    image: '/projects/portfolio.svg',
    screenshots: ['/projects/portfolio.svg', '/projects/portfolio.svg'],
    problem:
      'Need a maintainable personal portfolio that reflects senior frontend engineering standards.',
    solution:
      'Build a feature-oriented React application with typed content models, i18n, and a shared design system.',
    features: [
      'Responsive page layout',
      'Project listing and detail routes',
      'Theme and language foundations',
    ],
    architecture:
      'Feature folders, typed data models, shared UI primitives, and route-level code splitting.',
    challenges: [
      'Keeping the architecture simple while remaining extensible',
      'Supporting RTL and LTR without layout regressions',
    ],
  },
  {
    id: 'mobile-app-placeholder',
    title: 'Mobile App Placeholder',
    description:
      'Placeholder React Native project entry for portfolio structure and filtering.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Reanimated'],
    featured: false,
    status: 'completed',
    tags: ['React Native', 'Mobile'],
    image: '/projects/mobile.svg',
    githubUrl: 'https://github.com/',
  },
  {
    id: 'ai-workflow-placeholder',
    title: 'AI Workflow Assistant',
    description:
      'Placeholder AI-assisted development tooling concept for filtering and project detail structure.',
    category: 'ai',
    technologies: ['React', 'TypeScript', 'AI coding agents'],
    featured: false,
    status: 'archived',
    tags: ['AI', 'React'],
    image: '/projects/ai.svg',
  },
]

export function getProjectById(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
