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
    liveUrl: 'https://play.google.com/store/apps/dev?id=5887758085440706718',
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
    featured: false,
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
    category: 'aspnet',
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
    id: 'gridwatch',
    title: 'GridWatch',
    description:
      'Enterprise NestJS backend for multi-plant power monitoring with PostgreSQL, Redis, and BullMQ.',
    longDescription:
      'Production-oriented monitoring backend for power plants. Supports multi-plant management, scheduled data collection with retries, RBAC, transactional writes, and a path toward dashboards, alerting, and analytics.',
    category: 'other',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'BullMQ',
      'Docker',
      'Swagger',
    ],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/GridWatch',
    tags: ['NestJS', 'Backend', 'TypeScript'],
    image: '/projects/portfolio.svg',
    features: [
      'Multi-plant management with configurable protocols',
      'Scheduled polling via BullMQ with retries and backoff',
      'Role-based access control',
      'Transactional writes with idempotency and checksums',
      'Dockerized deployment with Prisma migrations',
    ],
    architecture:
      'NestJS modular backend with Prisma/PostgreSQL, Redis queues, JWT auth, and Swagger.',
  },
  {
    id: 'react-nextjs-boilerplate',
    title: 'React Next.js Boilerplate',
    description:
      'Enterprise Next.js starter for SaaS and dashboards with App Router, next-intl RTL, and strict TypeScript.',
    longDescription:
      'Production-ready multilingual Next.js boilerplate with Tailwind v4, shadcn-style UI, protected routes, Axios + TanStack Query, Zustand, React Hook Form, Firebase SDK wrappers, and Husky pre-commit hooks.',
    category: 'web',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'next-intl',
      'TanStack Query',
      'Zustand',
      'Firebase',
      'Axios',
      'React Hook Form',
    ],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/react-nextjs-boilerplate',
    tags: ['Next.js', 'React', 'Web'],
    image: '/projects/portfolio.svg',
    features: [
      'App Router with strict TypeScript',
      'EN/FA localization with RTL support',
      'Auth, users, and feature-first structure',
      'Axios client, TanStack Query, and Zustand stores',
      'Firebase modular wrappers and Husky hooks',
    ],
    architecture:
      'Feature-first Next.js App Router with shared UI, data-fetching, and auth building blocks.',
  },
  {
    id: 'rn-collapsible-header-tabs',
    title: 'RN Collapsible Header Tabs',
    description:
      'High-performance React Native tab view with collapsible header, FlatList, FlashList, and RecyclerListView.',
    longDescription:
      'Open-source React Native library for tabbed screens with smooth collapsible headers. Supports multiple list backends, pull-to-refresh, infinite scroll, and TypeScript.',
    category: 'mobile',
    technologies: [
      'React Native',
      'TypeScript',
      'FlashList',
      'RecyclerListView',
    ],
    featured: false,
    status: 'completed',
    githubUrl:
      'https://github.com/alireza-k74/react-native-collapsible-header-tabs',
    liveUrl:
      'https://www.npmjs.com/package/react-native-collapsible-header-tabs',
    tags: ['React Native', 'Library', 'npm'],
    image: '/projects/mobile.svg',
    features: [
      'Collapsible header with smooth animations',
      'FlatList, FlashList, and RecyclerListView adapters',
      'Customizable tab bar and header',
      'Pull-to-refresh and infinite scrolling',
      'Published on npm with TypeScript types',
    ],
    results: ['3 GitHub stars', 'Available on npm'],
  },
  {
    id: 'my-react-native-app',
    title: 'My React Native App',
    description:
      'Expo + React Native app that lists DummyJSON users and suggests simple matches.',
    longDescription:
      'Small Expo SDK app focused on fetching and displaying users from DummyJSON, with a lightweight matching flow for suggested connections.',
    category: 'mobile',
    technologies: ['Expo', 'React Native', 'TypeScript'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/my-react-native-app',
    tags: ['Expo', 'React Native', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'User list from DummyJSON API',
      'Simple suggested-match flow',
      'Expo Go / simulator workflow',
    ],
  },
  {
    id: 'shopy',
    title: 'Shopy',
    description:
      'Next.js e-commerce storefront with a companion API folder and Tailwind styling.',
    longDescription:
      'Shopping web app bootstrapped with Next.js, including pages/app routes, Tailwind CSS, and a nested shopy-api area for backend endpoints.',
    category: 'web',
    technologies: [
      'Next.js',
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
    ],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/shopy',
    tags: ['Next.js', 'E-commerce', 'Web'],
    image: '/projects/portfolio.svg',
    features: [
      'Next.js storefront pages',
      'Tailwind-based UI',
      'Companion API under shopy-api',
    ],
  },
  {
    id: 'shop-flutter',
    title: 'Shop Flutter',
    description:
      'Flutter shopping app targeting Android, iOS, and desktop platforms.',
    longDescription:
      'Cross-platform Flutter shop starter with Dart UI and platform runners for mobile and desktop.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/Shop_Flutter',
    tags: ['Flutter', 'Mobile', 'Shop'],
    image: '/projects/mobile.svg',
    features: [
      'Flutter multi-platform project structure',
      'Shop-oriented mobile UI foundation',
    ],
  },
  {
    id: 'weather-app-flutter',
    title: 'Weather App Flutter',
    description: 'Flutter weather application for mobile platforms.',
    longDescription:
      'Flutter weather client built with Dart, structured as a multi-platform Flutter project.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/WeatherApp_Flutter',
    tags: ['Flutter', 'Weather', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'Weather UI built with Flutter',
      'Multi-platform Flutter runners',
    ],
  },
  {
    id: 'todo-app-flutter',
    title: 'ToDo App Flutter',
    description: 'Flutter to-do application for managing daily tasks.',
    longDescription:
      'Task management app built with Flutter and Dart across mobile platform targets.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/ToDoApp_Flutter',
    tags: ['Flutter', 'ToDo', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'Task list UI with Flutter',
      'Multi-platform Flutter project setup',
    ],
  },
  {
    id: 'weather-app-react-native',
    title: 'Weather App React Native',
    description: 'React Native weather app for Android and iOS.',
    longDescription:
      'Mobile weather client built with React Native for viewing forecast-style information on device.',
    category: 'mobile',
    technologies: ['React Native'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/WeatherApp_React-native',
    tags: ['React Native', 'Weather', 'Mobile'],
    image: '/projects/mobile.svg',
    features: ['Weather app shell for React Native', 'Mobile-first layout'],
  },
  {
    id: 'todo-app-react-native',
    title: 'ToDo App React Native',
    description: 'React Native CLI to-do app bootstrapped with TypeScript.',
    longDescription:
      'Task management mobile app created with the React Native community CLI and TypeScript.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/ToDoApp_React-native',
    tags: ['React Native', 'ToDo', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'React Native CLI project structure',
      'TypeScript-based mobile screens',
    ],
  },
  {
    id: 'todo-app',
    title: 'ToDo App',
    description:
      'Cross-platform to-do application for Android and iOS with React Native.',
    longDescription:
      'React Native to-do app targeting Android and iOS, implemented primarily in TypeScript.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript'],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/ToDo-App',
    tags: ['React Native', 'ToDo', 'Mobile'],
    image: '/projects/mobile.svg',
    features: [
      'Task management for Android and iOS',
      'React Native + TypeScript codebase',
    ],
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
    featured: false,
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
