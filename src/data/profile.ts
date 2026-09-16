import type { Profile } from '@/types/portfolio'

export const profile: Profile = {
  name: 'Alireza Karami',
  title: 'Senior Mobile & Frontend Engineer',
  summary:
    'Senior engineer focused on React Native, React, and TypeScript, with a strong interest in AI-assisted development workflows.',
  location: 'Remote',
  email: 'hello@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumeUrl: '/resume.pdf',
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:hello@example.com',
    },
  ],
}
