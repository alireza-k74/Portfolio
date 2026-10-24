import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'togething',
    title: 'Togething',
    description:
      'Social & habit-building platform focused on goal setting, positive habit formation, and community engagement.',
    longDescription:
      'Developed and maintained a social platform focused on goal setting, positive habit formation, and community engagement. Worked on real-time synchronization, subscription flows, media caching, API integration, and production performance improvements.',
    category: 'ai',
    technologies: [
      'React Native',
      'TypeScript',
      'GraphQL',
      'React Query',
      'SignalR',
      'Zustand',
    ],
    featured: true,
    status: 'completed',
    tags: ['React Native', 'Mobile', 'Social', 'AI-built', 'Cursor'],
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
      'Personal productivity & utility app designed around offline-first functionality, performance, and everyday productivity.',
    longDescription:
      'A multi-purpose mobile application designed around offline-first functionality, performance, and everyday productivity. Includes calculations, unit conversion, scanning, reminders, installment management, work-hour tracking with Excel export, media compression, offline games, timers, Persian/English localization with RTL/LTR, themes, app locking, backup/export, and gamification. Published on Iranian Android and iOS app marketplaces.',
    category: 'ai',
    technologies: [
      'React Native',
      'TypeScript',
      'Zustand',
      'MMKV',
      'Reanimated',
    ],
    featured: true,
    status: 'completed',
    tags: ['React Native', 'Mobile', 'TypeScript', 'AI-built', 'Cursor'],
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
      'Native Android media compression app focused on image and video compression.',
    longDescription:
      'A native Android application focused on image and video compression. Built the user interface with Jetpack Compose, worked with Android media APIs and MediaCodec for media processing, implemented background processing with foreground services, and focused on compression quality, processing reliability, and user experience.',
    category: 'ai',
    technologies: ['Kotlin', 'Jetpack Compose', 'MediaCodec'],
    featured: false,
    status: 'in-progress',
    githubUrl: 'https://github.com/alireza-k74/Compressa',
    tags: ['Kotlin', 'Android', 'Mobile', 'AI-built', 'Cursor'],
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
    title: 'NoteApp',
    description:
      'Full-stack note management web app with ASP.NET Core backend and React frontend.',
    longDescription:
      'A full-stack web application for creating, managing, and organizing personal notes, built with ASP.NET Core for the backend and React for the frontend. Applied separation of concerns between the frontend and backend to maintain a clean and maintainable codebase, and practiced full-stack development, API integration, and database-driven application design.',
    category: 'ai',
    technologies: [
      'C#',
      'ASP.NET Core',
      'React',
      'TypeScript',
      'JavaScript',
      'MySQL',
    ],
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/alireza-k74/NoteApp-ASP.NET',
    tags: ['ASP.NET', 'React', 'Full-stack', 'AI-built', 'Cursor'],
    image: '/projects/portfolio.svg',
    features: [
      'Backend note management with C# and ASP.NET Core',
      'Responsive React web interface',
      'Frontend–backend API integration',
      'Separation of concerns for maintainability',
      'Database-driven application design with MySQL',
    ],
    architecture:
      'ASP.NET Core backend with React frontend and clear separation between API and UI layers.',
  },
  {
    id: 'scanfa',
    title: 'Scanfa',
    description:
      'OCR & document scanning app published on Iranian app marketplaces.',
    longDescription:
      'A document scanning and text extraction application published on Iranian app marketplaces. Developed as a practical document-processing application for mobile users and published on SibApp.',
    category: 'mobile',
    technologies: ['Mobile Application', 'OCR'],
    featured: false,
    status: 'completed',
    tags: ['Mobile', 'OCR', 'Published'],
    image: '/projects/mobile.svg',
    features: [
      'Document scanning and text extraction',
      'Practical document-processing for mobile users',
      'Published on SibApp',
    ],
    results: ['Published on SibApp'],
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere',
    description:
      'Full-stack e-commerce platform with React frontend and ASP.NET Core backend.',
    longDescription:
      'A full-stack e-commerce platform designed to provide a smooth online shopping experience, with a React-based frontend and an ASP.NET Core backend. Focused on maintainable architecture, reusable components, and clear separation between frontend and backend. Used AI-assisted development tools to accelerate implementation, debugging, refactoring, and documentation.',
    category: 'ai',
    technologies: [
      'React',
      'TypeScript',
      'ASP.NET Core',
      'C#',
      'REST APIs',
      'MySQL',
    ],
    featured: false,
    status: 'completed',
    tags: ['React', 'ASP.NET', 'E-commerce', 'Full-stack', 'AI-built'],
    image: '/projects/portfolio.svg',
    features: [
      'Responsive shopping interface with React and TypeScript',
      'Backend services with C# and ASP.NET Core',
      'REST API integration for product and application data',
      'Maintainable architecture with reusable components',
      'AI-assisted implementation, debugging, and documentation',
    ],
    architecture:
      'React/TypeScript frontend with ASP.NET Core REST APIs and MySQL.',
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
    title: 'Portfolio',
    description:
      'Responsive personal portfolio presenting professional experience, technical skills, and projects.',
    longDescription:
      'A responsive personal portfolio presenting professional experience, technical skills, and projects. Built reusable UI components and responsive layouts, added project filtering, multilingual support, and dark/light themes, documented project architecture and the role of AI-assisted development, and deployed the website on Vercel.',
    category: 'ai',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'shadcn/ui',
      'i18next',
    ],
    featured: false,
    status: 'in-progress',
    githubUrl: 'https://github.com/alireza-k74/Portfolio',
    tags: ['React', 'Web', 'TypeScript', 'AI-built', 'Cursor'],
    image: '/projects/portfolio.svg',
    screenshots: ['/projects/portfolio.svg', '/projects/portfolio.svg'],
    problem:
      'Need a maintainable personal portfolio that reflects senior frontend and mobile engineering experience.',
    solution:
      'Build a feature-oriented React application with typed content models, i18n, and a shared design system — implemented with Cursor AI under human-owned architecture.',
    features: [
      'Reusable UI components and responsive layouts',
      'Project filtering, multilingual support, and dark/light themes',
      'Documented architecture and AI-assisted development role',
      'Deployed on Vercel',
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
