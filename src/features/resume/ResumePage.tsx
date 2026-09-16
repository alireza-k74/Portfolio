import { useMemo, type ReactNode } from 'react'
import { Printer } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Heading } from '@/components/common/Heading'
import { Page, PageHeader } from '@/components/common/Page'
import { ResumeDownloadButtons } from '@/components/common/ResumeDownloadButtons'
import { SkillBadge } from '@/components/common/SkillBadge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'

function ResumeSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section aria-labelledby={id} className="space-y-3">
      <Heading
        id={id}
        as="h2"
        size="sm"
        className="border-b border-border pb-2 print:border-black/20"
      >
        {title}
      </Heading>
      {children}
    </section>
  )
}

function readStringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.filter((item): item is string => typeof item === 'string')
}

type LanguageEntry = {
  name: string
  level: string
}

function readLanguageList(value: unknown): LanguageEntry[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.flatMap((item) => {
    if (
      typeof item === 'object' &&
      item !== null &&
      'name' in item &&
      'level' in item &&
      typeof item.name === 'string' &&
      typeof item.level === 'string'
    ) {
      return [{ name: item.name, level: item.level }]
    }

    return []
  })
}

export function ResumePage() {
  const { t } = useTranslation([
    'resume',
    'experience',
    'skills',
    'projects',
    'common',
    'home',
  ])

  const summaryParts = useMemo(
    () => readStringList(t('resume:summaryParts', { returnObjects: true })),
    [t],
  )
  const achievements = useMemo(
    () => readStringList(t('resume:achievementsList', { returnObjects: true })),
    [t],
  )
  const softSkills = useMemo(
    () => readStringList(t('resume:softSkillsList', { returnObjects: true })),
    [t],
  )
  const languages = useMemo(
    () => readLanguageList(t('resume:languagesList', { returnObjects: true })),
    [t],
  )
  const resumeNotice = t('resume:notice')

  const handlePrint = () => {
    window.print()
  }

  return (
    <Page containerSize="narrow">
      <div className="print:hidden">
        <PageHeader
          title={t('resume:title')}
          description={t('resume:description')}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <ResumeDownloadButtons />
          <Button type="button" variant="outline" onClick={handlePrint}>
            <Printer data-icon="inline-start" />
            {t('resume:print')}
          </Button>
        </div>
        {resumeNotice ? (
          <p className="mt-4 text-sm text-muted-foreground">{resumeNotice}</p>
        ) : null}
      </div>

      <article
        id="resume-document"
        className="mt-8 rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm sm:p-8 print:mt-0 print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none print:text-black"
      >
        <header className="space-y-3">
          <div className="space-y-1">
            <h1 className="font-heading text-3xl font-semibold tracking-tight print:text-black">
              {t('home:name')}
            </h1>
            <p className="text-base text-muted-foreground print:text-neutral-700">
              {t('home:title')}
            </p>
          </div>

          <ul className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1 print:text-neutral-700">
            <li>
              <span className="font-medium text-foreground print:text-black">
                {t('resume:contact.email')}:
              </span>{' '}
              <a
                href={`mailto:${profile.email}`}
                className="underline-offset-2 hover:underline print:text-black print:no-underline"
              >
                {profile.email}
              </a>
            </li>
            {profile.phone ? (
              <li>
                <span className="font-medium text-foreground print:text-black">
                  {t('resume:contact.phone')}:
                </span>{' '}
                <a
                  href={`tel:${profile.phone}`}
                  className="underline-offset-2 hover:underline print:text-black print:no-underline"
                >
                  {profile.phone}
                </a>
              </li>
            ) : null}
            <li>
              <span className="font-medium text-foreground print:text-black">
                {t('resume:contact.location')}:
              </span>{' '}
              {t('resume:locationValue', { defaultValue: profile.location })}
            </li>
            <li>
              <span className="font-medium text-foreground print:text-black">
                {t('resume:contact.github')}:
              </span>{' '}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline print:text-black print:no-underline"
              >
                {profile.github.replace(/^https?:\/\//, '')}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground print:text-black">
                {t('resume:contact.linkedin')}:
              </span>{' '}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline print:text-black print:no-underline"
              >
                {profile.linkedin.replace(/^https?:\/\//, '')}
              </a>
            </li>
          </ul>
        </header>

        <Separator className="my-6 print:bg-black/20" />

        <div className="space-y-8">
          <ResumeSection
            id="resume-summary"
            title={t('resume:sections.summary')}
          >
            {summaryParts.length > 0 ? (
              <div className="space-y-3">
                {summaryParts.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted-foreground print:text-neutral-800"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground print:text-neutral-800">
                {t('resume:summary')}
              </p>
            )}
          </ResumeSection>

          <ResumeSection
            id="resume-experience"
            title={t('resume:sections.experience')}
          >
            <ul className="space-y-5">
              {experience.map((item) => (
                <li key={item.id} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-heading text-base font-medium print:text-black">
                        {t(`experience:items.${item.id}.role`, {
                          defaultValue: item.role,
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground print:text-neutral-700">
                        {t(`experience:items.${item.id}.company`, {
                          defaultValue: item.company,
                        })}{' '}
                        · {t(`experience:workMode.${item.workMode}`)}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground print:text-neutral-700">
                      {item.startDate} – {item.endDate ?? t('common:present')}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground print:text-neutral-800">
                    {t(`experience:items.${item.id}.description`, {
                      defaultValue: item.description,
                    })}
                  </p>
                  {item.responsibilities.length > 0 ? (
                    <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground print:text-neutral-800">
                      {item.responsibilities.map((responsibility, index) => (
                        <li key={`${item.id}-${index}`}>
                          {t(
                            `experience:items.${item.id}.responsibilities.${index}`,
                            { defaultValue: responsibility },
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {(() => {
                    const projectNote = t(
                      `experience:items.${item.id}.projectNote`,
                      { defaultValue: '' },
                    )
                    return projectNote ? (
                      <p className="text-sm italic text-muted-foreground print:text-neutral-700">
                        {projectNote}
                      </p>
                    ) : null
                  })()}
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection id="resume-skills" title={t('resume:sections.skills')}>
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div key={category.id} className="space-y-2">
                  <h3 className="text-sm font-medium print:text-black">
                    {t(`skills:categories.${category.id}`)}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <SkillBadge className="print:border-neutral-400 print:bg-transparent print:text-black">
                          {skill}
                        </SkillBadge>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            id="resume-projects"
            title={t('resume:sections.projects')}
          >
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.id} className="space-y-1">
                  <h3 className="font-heading text-base font-medium print:text-black">
                    {t(`projects:items.${project.id}.title`, {
                      defaultValue: project.title,
                    })}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground print:text-neutral-800">
                    {t(`projects:items.${project.id}.description`, {
                      defaultValue: project.description,
                    })}
                  </p>
                  <p className="text-xs text-muted-foreground print:text-neutral-600">
                    {project.technologies.join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </ResumeSection>

          {education.length > 0 ? (
            <ResumeSection
              id="resume-education"
              title={t('resume:sections.education')}
            >
              <ul className="space-y-3">
                {education.map((item) => (
                  <li key={item.id} className="space-y-1">
                    <h3 className="font-heading text-base font-medium print:text-black">
                      {t(`resume:educationItems.${item.id}.degree`, {
                        defaultValue: `${item.degree}${item.field ? ` · ${item.field}` : ''}`,
                      })}
                    </h3>
                    <p className="text-sm text-muted-foreground print:text-neutral-700">
                      {t(`resume:educationItems.${item.id}.institution`, {
                        defaultValue: item.institution,
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground print:text-neutral-700">
                      {t(`resume:educationItems.${item.id}.dates`, {
                        defaultValue: [item.startDate, item.endDate]
                          .filter(Boolean)
                          .join(' – '),
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}

          {achievements.length > 0 ? (
            <ResumeSection
              id="resume-achievements"
              title={t('resume:sections.achievements')}
            >
              <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground print:text-neutral-800">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}

          {softSkills.length > 0 ? (
            <ResumeSection
              id="resume-soft-skills"
              title={t('resume:sections.softSkills')}
            >
              <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground print:text-neutral-800">
                {softSkills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}

          {languages.length > 0 ? (
            <ResumeSection
              id="resume-languages"
              title={t('resume:sections.languages')}
            >
              <ul className="space-y-1 text-sm text-muted-foreground print:text-neutral-800">
                {languages.map((language) => (
                  <li key={language.name}>
                    <span className="font-medium text-foreground print:text-black">
                      {language.name}:
                    </span>{' '}
                    {language.level}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}

          <ResumeSection
            id="resume-contact"
            title={t('resume:sections.contact')}
          >
            <ul className="space-y-1 text-sm text-muted-foreground print:text-neutral-800">
              <li>
                {t('resume:contact.email')}: {profile.email}
              </li>
              {profile.phone ? (
                <li>
                  {t('resume:contact.phone')}: {profile.phone}
                </li>
              ) : null}
              <li>
                {t('resume:contact.location')}:{' '}
                {t('resume:locationValue', { defaultValue: profile.location })}
              </li>
              <li>
                {t('resume:contact.github')}: {profile.github}
              </li>
              <li>
                {t('resume:contact.linkedin')}: {profile.linkedin}
              </li>
            </ul>
          </ResumeSection>
        </div>
      </article>
    </Page>
  )
}
