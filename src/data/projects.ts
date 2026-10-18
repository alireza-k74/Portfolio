import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'togething',
    title: 'Togething',
    description:
      'Social React Native app for small wins, goal storylines, community support, and coaching — on the App Store and Google Play.',
    longDescription:
      'Togething is a community built to help people change their story through small steps and celebrated wins. Users create storylines, share steps, support each other, find accountability partners, and request coaching. Basic features are permanently free with no ads.',
    category: 'mobile',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux',
      'Zustand',
      'SignalR',
      'In-App Purchase',
    ],
    featured: true,
    status: 'completed',
    tags: ['React Native', 'Mobile', 'Social'],
    image: '/projects/mobile.svg',
    liveUrl: 'https://apps.apple.com/us/app/togething/id6476815844',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/togething/id6476815844',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.togething',
      },
    ],
    features: [
      'Storylines for life changes and intentions',
      'Steps sharing with positive social reinforcement',
      'Accountability partner matching',
      'Real-time chat and community support',
      '1:1 coaching with in-app subscriptions',
      'Watching, groups, and daily steps flows',
      'Notifications and watcher invites',
    ],
    results: [
      'Published on the App Store and Google Play',
      'Improved screen load speed and reduced loading time by ~35%',
    ],
  },
  {
    id: 'damdast',
    title: 'Damdast | دم‌دست',
    description:
      'Offline-first everyday utility app for Android and iOS, built with React Native and TypeScript.',
    longDescription:
      'A multi-purpose daily utility app focused on UX, performance, and offline-first architecture. Published on Iranian app stores.',
    category: 'mobile',
    technologies: [
      'React Native',
      'TypeScript',
      'New Architecture',
      'Zustand',
      'UniStyles',
      'MMKV',
      'Reanimated',
      'i18next',
      'Notifee',
      'Keychain',
    ],
    featured: true,
    status: 'completed',
    tags: ['React Native', 'Mobile', 'TypeScript'],
    image: '/projects/mobile.svg',
    liveUrl: 'https://cafebazaar.ir/app/com.damdast.app',
    links: [
      {
        label: 'Cafe Bazaar',
        url: 'https://cafebazaar.ir/app/com.damdast.app',
      },
      {
        label: 'SibApp',
        url: 'https://sibapp.com/applications/damdast',
      },
    ],
    features: [
      'Personalized home screen',
      'Calculator, unit converter, and daily tools',
      'Scanner',
      'Installment and payment reminders',
      'Work hours tracking with Excel export',
      'Timer, countdown, and stopwatch',
      'Photo, video, and audio compression',
      'Offline games (2048, Minesweeper, Sudoku)',
      'Music and offline playback',
      'Theme system and UI customization',
      'Persian and English with RTL/LTR',
      'Onboarding, app lock, backup and export',
      'Gamification and XP system',
      'Responsive mobile and tablet layout',
    ],
    results: ['Published on Cafe Bazaar and SibApp'],
  },
  {
    id: 'portfolio-website',
    title: 'Web Portfolio',
    description:
      'Personal resume and portfolio website built with React, TypeScript, and Vite.',
    longDescription:
      'Professional personal site showcasing experience, skills, and projects with modern React tooling.',
    category: 'web',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'shadcn/ui',
      'React Hook Form',
      'Zod',
      'i18next',
      'Capacitor',
    ],
    featured: true,
    status: 'in-progress',
    githubUrl: 'https://github.com/alireza-k74/Portfolio',
    tags: ['React', 'Web', 'TypeScript'],
    image: '/projects/portfolio.svg',
    screenshots: ['/projects/portfolio.svg', '/projects/portfolio.svg'],
    problem:
      'Need a maintainable personal portfolio that reflects senior frontend and mobile engineering experience.',
    solution:
      'Build a feature-oriented React application with typed content models, i18n, and a shared design system.',
    features: [
      'Responsive layout for mobile, tablet, and desktop',
      'Component-based reusable UI',
      'About, resume, skills, and projects pages',
      'Dark and light theme',
      'Multilingual support',
      'Validated forms',
      'Capacitor-ready for mobile packaging',
    ],
    architecture:
      'Feature folders, typed data models, shared UI primitives, and route-level code splitting.',
    challenges: [
      'Supporting RTL and LTR without layout regressions',
      'Keeping architecture simple while remaining extensible',
    ],
  },
]

export function getProjectById(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
