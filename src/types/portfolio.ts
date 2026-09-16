export type SocialPlatform =
  'github' | 'linkedin' | 'email' | 'twitter' | 'website'

export type SocialLink = {
  platform: SocialPlatform
  label: string
  url: string
}

export type Profile = {
  name: string
  title: string
  summary: string
  location: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
  socialLinks: SocialLink[]
}

export type EmploymentType =
  'full-time' | 'contract' | 'freelance' | 'part-time'

export type WorkMode = 'remote' | 'hybrid' | 'on-site'

export type ExperienceItem = {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | null
  location: string
  employmentType: EmploymentType
  workMode: WorkMode
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
}

export type SkillCategoryId =
  'frontend' | 'mobile' | 'state' | 'data' | 'testing' | 'tools' | 'ai'

export type SkillCategory = {
  id: SkillCategoryId
  skills: string[]
}

export type EducationItem = {
  id: string
  institution: string
  degree: string
  field?: string
  startDate?: string
  endDate?: string | null
  location?: string
}

export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'other'

export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  category: ProjectCategory
  technologies: string[]
  image?: string
  screenshots?: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  status: ProjectStatus
  problem?: string
  solution?: string
  features?: string[]
  architecture?: string
  challenges?: string[]
  results?: string[]
  tags?: string[]
}
