import { Suspense, lazy, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { PageLoader } from '@/components/common/PageLoader'
import { AppLayout } from '@/components/layout/AppLayout'
import { HomePage } from '@/features/home/HomePage'
import { NotFoundPage } from '@/features/not-found/NotFoundPage'
import { ROUTES } from '@/lib/constants'

const AboutPage = lazy(async () => {
  const module = await import('@/features/about/AboutPage')
  return { default: module.AboutPage }
})

const ExperiencePage = lazy(async () => {
  const module = await import('@/features/experience/ExperiencePage')
  return { default: module.ExperiencePage }
})

const SkillsPage = lazy(async () => {
  const module = await import('@/features/skills/SkillsPage')
  return { default: module.SkillsPage }
})

const ProjectsPage = lazy(async () => {
  const module = await import('@/features/projects/ProjectsPage')
  return { default: module.ProjectsPage }
})

const ProjectDetailsPage = lazy(async () => {
  const module = await import('@/features/projects/ProjectDetailsPage')
  return { default: module.ProjectDetailsPage }
})

const ResumePage = lazy(async () => {
  const module = await import('@/features/resume/ResumePage')
  return { default: module.ResumePage }
})

const ContactPage = lazy(async () => {
  const module = await import('@/features/contact/ContactPage')
  return { default: module.ContactPage }
})

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: withSuspense(<AboutPage />),
      },
      {
        path: 'experience',
        element: withSuspense(<ExperiencePage />),
      },
      {
        path: 'skills',
        element: withSuspense(<SkillsPage />),
      },
      {
        path: 'projects',
        element: withSuspense(<ProjectsPage />),
      },
      {
        path: 'projects/:projectId',
        element: withSuspense(<ProjectDetailsPage />),
      },
      {
        path: 'resume',
        element: withSuspense(<ResumePage />),
      },
      {
        path: 'contact',
        element: withSuspense(<ContactPage />),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
