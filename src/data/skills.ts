import type { SkillCategory } from '@/types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    skills: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    skills: ['React Native', 'Reanimated'],
  },
  {
    id: 'state',
    skills: ['Redux Toolkit', 'Zustand', 'React Query'],
  },
  {
    id: 'data',
    skills: ['REST', 'GraphQL', 'Firebase'],
  },
  {
    id: 'testing',
    skills: ['Testing Library', 'Playwright', 'Vitest'],
  },
  {
    id: 'tools',
    skills: ['Git', 'ESLint', 'Prettier'],
  },
  {
    id: 'ai',
    skills: ['AI coding agents'],
  },
]
