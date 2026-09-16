# Alireza Karami — Portfolio

Personal portfolio website for **Alireza Karami**, Senior Mobile & Frontend Engineer. Built with React, TypeScript, and Vite — bilingual (English / فارسی), themeable, and structured for real production use.

**Live repo:** [github.com/alireza-k74/Portfolio](https://github.com/alireza-k74/Portfolio)

---

## Features

- **Multilingual UI** — English and Persian (RTL) via `i18next` / `react-i18next`
- **Light & dark theme** — system-aware theme switcher
- **Feature-oriented architecture** — pages under `src/features`, shared UI under `src/components`
- **Typed content models** — profile, projects, skills, and experience as TypeScript data
- **Routing** — React Router with lazy-loaded pages and a shared layout
- **Accessible UI** — shadcn/ui + Radix primitives, Tailwind CSS v4
- **Forms** — contact form with React Hook Form + Zod validation
- **Tooling** — ESLint, Prettier, strict TypeScript, path aliases (`@/`)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, stats, featured projects, skills & experience previews |
| `/about` | About |
| `/experience` | Work experience timeline |
| `/skills` | Skills by category |
| `/projects` | Project list with filters |
| `/projects/:projectId` | Project detail |
| `/resume` | Resume / education |
| `/contact` | Contact |

## Tech stack

| Area | Stack |
| --- | --- |
| UI | React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Radix UI, Lucide |
| Routing | React Router 7 |
| i18n | i18next, react-i18next |
| Forms | React Hook Form, Zod, `@hookform/resolvers` |
| Fonts | Geist Variable, Vazirmatn Variable |
| Build | Vite 8 |
| Quality | ESLint, Prettier, `tsc` |

## Project structure

```text
src/
├── app/                 # App shell, providers, router
├── components/
│   ├── common/          # Shared app components
│   ├── layout/          # Header, footer, nav, containers
│   └── ui/              # shadcn/ui primitives
├── data/                # Typed content (profile, projects, skills, …)
├── features/            # Page-level feature modules
├── hooks/               # Theme, locale, etc.
├── i18n/                # i18n setup + en/fa locale JSON
├── lib/                 # Constants, theme, utils
├── styles/              # Global styles
└── types/               # Shared TypeScript types
```

## Getting started

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Install

```bash
git clone https://github.com/alireza-k74/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Run TypeScript project build check |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with autofix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier formatting |

## Customization

Content is data-driven. Edit these files to personalize the site:

| File | What to update |
| --- | --- |
| `src/data/profile.ts` | Name, title, summary, links, email |
| `src/data/projects.ts` | Projects list and details |
| `src/data/experience.ts` | Work history |
| `src/data/skills.ts` | Skills and categories |
| `src/data/education.ts` | Education / resume-related data |
| `src/i18n/locales/en/*.json` | English copy |
| `src/i18n/locales/fa/*.json` | Persian copy |
| `src/lib/constants.ts` | Site title, routes, nav items |
| `public/` | Static assets (resume PDF, project images) |

Path alias `@/` maps to `src/` (see `vite.config.ts` and `tsconfig`).

## License

Private / personal portfolio. All rights reserved unless otherwise stated.
