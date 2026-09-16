import { AboutPreview } from '@/features/home/AboutPreview'
import { ExperiencePreview } from '@/features/home/ExperiencePreview'
import { FeaturedProjects } from '@/features/home/FeaturedProjects'
import { HeroSection } from '@/features/home/HeroSection'
import { HomeCta } from '@/features/home/HomeCta'
import { SkillsPreview } from '@/features/home/SkillsPreview'
import { StatsSection } from '@/features/home/StatsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsPreview />
      <HomeCta />
    </>
  )
}
