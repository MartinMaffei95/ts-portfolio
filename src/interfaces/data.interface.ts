import { Language } from './'

export type category = {
  name: string
  src: string
}

export type Course = {
  id: string
  title: string
  subtitle: string
  skills_learned: string[]
  professor: string | null
  hours: number | null
  image: string
  tags: string[]
  certification: string
  url_certification: string
  coursed_in: string
}

export type Project = {
  name: string
  shortName: string
  type: string
  description: string
  stack_used: string[]
  other_used: string[] | null
  url_deploy: string
  url_repository: string
  img_card: string
  img_desktop?: string
  img_responsiveMobile?: string
  img_responsiveTablet?: string
}

export type ExperienceData = {
  position: string
  company_name: string
  init_date: string
  end_date: string
  description?: string
  job_tasks: string[]
}

export type Experience = {
  [language in Language]: ExperienceData[]
}

export interface WorkData {
  title: string
  description: string
  task_realized: string[]
  portrait: string
  images: string[]
}

export type Work = {
  [language in Language]: WorkData[]
}
