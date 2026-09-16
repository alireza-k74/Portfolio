import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import {
  DEFAULT_LOCALE,
  applyDocumentLocale,
  readStoredLocale,
} from '@/lib/locale'

import enAbout from '@/i18n/locales/en/about.json'
import enCommon from '@/i18n/locales/en/common.json'
import enContact from '@/i18n/locales/en/contact.json'
import enExperience from '@/i18n/locales/en/experience.json'
import enHome from '@/i18n/locales/en/home.json'
import enNotFound from '@/i18n/locales/en/notFound.json'
import enProjects from '@/i18n/locales/en/projects.json'
import enResume from '@/i18n/locales/en/resume.json'
import enSkills from '@/i18n/locales/en/skills.json'
import faAbout from '@/i18n/locales/fa/about.json'
import faCommon from '@/i18n/locales/fa/common.json'
import faContact from '@/i18n/locales/fa/contact.json'
import faExperience from '@/i18n/locales/fa/experience.json'
import faHome from '@/i18n/locales/fa/home.json'
import faNotFound from '@/i18n/locales/fa/notFound.json'
import faProjects from '@/i18n/locales/fa/projects.json'
import faResume from '@/i18n/locales/fa/resume.json'
import faSkills from '@/i18n/locales/fa/skills.json'

export const i18nNamespaces = [
  'common',
  'home',
  'about',
  'experience',
  'skills',
  'projects',
  'resume',
  'contact',
  'notFound',
] as const

const initialLocale = readStoredLocale()

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      experience: enExperience,
      skills: enSkills,
      projects: enProjects,
      resume: enResume,
      contact: enContact,
      notFound: enNotFound,
    },
    fa: {
      common: faCommon,
      home: faHome,
      about: faAbout,
      experience: faExperience,
      skills: faSkills,
      projects: faProjects,
      resume: faResume,
      contact: faContact,
      notFound: faNotFound,
    },
  },
  lng: initialLocale,
  fallbackLng: DEFAULT_LOCALE,
  defaultNS: 'common',
  ns: [...i18nNamespaces],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})

applyDocumentLocale(initialLocale)

export default i18n
