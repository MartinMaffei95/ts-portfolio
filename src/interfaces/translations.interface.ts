type Stats = {
  years: {
    main: string
    auxiliar: string
  }
  clients: string
  projects: string
}
type ExtendedText = {
  text: string
  colored: string
  focus: string
}

interface Section {
  title: {
    title: string
    badge?: string
  }
  text?: string
}

interface Form {
  name: string
  mail: string
  subject: string
  message: string
  send: string
}
export interface langConfig {
  header: {
    contact: string
  }
  heroSection: Section & { stats: Stats }
  experienceSection: Section
  skillsSection: Pick<Section, 'title'> & {
    paragraph1: ExtendedText
    paragraph2: ExtendedText
    paragraph3: ExtendedText
  }
  lastWorkSection: Section & { tasks: string }
  contactSection: Section & { form: Form }
}

export type Language = 'es' | 'en'
