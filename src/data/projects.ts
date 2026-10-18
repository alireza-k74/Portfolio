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
    id: 'hudu',
    title: 'HUDU',
    description:
      'AI-powered odd-job marketplace built with React Native — list projects, receive bids, chat, and pay through escrow.',
    longDescription:
      'HUDU is an AI-powered gig marketplace that connects Listers and local Doers. Users post projects, review competitive bids, chat in-app, and release escrowed payments when work is complete. Built and maintained as a large React Native application with performance-focused UI and API integrations.',
    category: 'mobile',
    technologies: [
      'React Native',
      'TypeScript',
      'REST',
      'GraphQL',
      'Reanimated',
    ],
    featured: true,
    status: 'completed',
    tags: ['React Native', 'Mobile', 'Marketplace'],
    image: '/projects/mobile.svg',
    liveUrl:
      'https://play.google.com/store/apps/dev?id=5887758085440706718',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/dev?id=5887758085440706718',
      },
    ],
    features: [
      'Project listings with photos and requirements',
      'Competitive bidding from local Doers',
      'In-app chat between Listers and Doers',
      'Escrowed payments released on completion',
      'Ratings, reviews, and Doer profiles',
      'AI-assisted listing and bidding support',
    ],
    results: ['Published on Google Play under the HUDU developer listing'],
  },
  {
    id: 'compressa',
    title: 'Compressa | فشرده‌یار',
    description:
      'Kotlin Android app for compressing images, video, and PDF with Jetpack Compose and clean architecture.',
    longDescription:
      'Compressa (فشرده‌یار) is an Android media compression app built with Kotlin and Jetpack Compose. It supports image, video, and PDF compression, multi-select queues with a foreground service, before/after results, history, duplicate scanning, and large-file scanning — with Persian/English and RTL/LTR.',
    category: 'mobile',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Media3',
      'DataStore',
      'SQLite',
    ],
    featured: true,
    status: 'in-progress',
    githubUrl: 'https://github.com/alireza-k74/Compressa',
    tags: ['Kotlin', 'Android', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'Image, video, and PDF compression engines',
      'Multi-item compression queue with foreground service',
      'Image crop/rotate, preview viewer, and size estimates',
      'Before/after results and local compression history',
      'Duplicate scanner and large-file scanner',
      'Persian and English with RTL/LTR and theming',
    ],
    architecture:
      'Clean feature modules with Compose UI, use cases, media engines, DataStore preferences, and SQLite history.',
  },
  {
    id: 'noteapp-aspnet',
    title: 'NoteApp ASP.NET',
    description:
      'ASP.NET Core Web API for personal notes with JWT auth, EF Core, and SQL Server.',
    longDescription:
      'A note-taking backend built with ASP.NET Core. It exposes Auth and Notes controllers, uses Entity Framework Core with SQL Server, JWT Bearer authentication, DTOs, and Swagger for API exploration.',
    category: 'other',
    technologies: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'JWT',
      'Swagger',
    ],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/NoteApp-ASP.NET',
    tags: ['ASP.NET', 'Backend', 'API'],
    image: '/projects/portfolio.svg',
    features: [
      'JWT authentication and authorization',
      'Notes CRUD via REST controllers',
      'EF Core data layer with migrations',
      'DTOs and service-layer auth',
      'Swagger UI with Bearer security scheme',
    ],
    architecture:
      'ASP.NET Core Web API with Controllers, Services, DTOs, Models, Data, and EF Core migrations.',
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
