import personalImage from '@/assets/images/personal_image.png'
import type { Profile } from '@/types/portfolio'

export const profile: Profile = {
  name: 'Alireza Karami',
  title: 'Mobile & Frontend Engineer | React Native | React | TypeScript',
  summary:
    'Senior Mobile & Frontend Engineer with 7+ years of experience building and maintaining production mobile applications for iOS and Android using React Native, TypeScript, and JavaScript.',
  email: 'alirezakaram.k74@gmail.com',
  phone: '09120734656',
  github: 'https://github.com/alireza-k74',
  linkedin: 'https://www.linkedin.com/in/alirezak74/',
  image: personalImage,
  resumeUrls: {
    en: '/resume-en.pdf',
    fa: '/resume-fa.pdf',
  },
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/alireza-k74',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alirezak74/',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:alirezakaram.k74@gmail.com',
    },
  ],
}
