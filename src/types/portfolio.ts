export interface PersonalInfo {
  name: string
  title: string
  location: string
  summary: string
  email: string
  phone: string
  linkedin: string
  github?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  duration: string
  location: string
  tag?: string
  description: string
  highlights: string[]
  stack: string[]
  logoUrl?: string
  logoFallback?: string
  logoVariant?: 'square' | 'wide' | 'xwide'
}

export interface Skill {
  name: string
  description: string
  color: string
  icon: string
}

export interface Education {
  institution: string
  degree: string
  period: string
}

export interface Language {
  name: string
  level: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavItem {
  label: string
  href: string
}
