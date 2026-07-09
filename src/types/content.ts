export interface Project {
  slug: string
  name: string
  status: 'LIVE' | 'IN DEVELOPMENT' | 'CASE STUDY'
  summary: string
  stack: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  points: string[]
}

export interface SkillGroup {
  field: string
  label: string
  items: string[]
}
