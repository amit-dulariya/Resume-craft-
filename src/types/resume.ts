export interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  summary: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string
  link: string
}

export interface Skill {
  id: string
  name: string
  level: number
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
}

export interface ResumeData {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  certifications: Certification[]
}

export type TemplateId = 'modern' | 'classic' | 'creative' | 'minimal' | 'executive'

export interface Template {
  id: TemplateId
  name: string
  description: string
  preview: string
  accent: string
}

export const TEMPLATES: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean two-column layout with accent sidebar',
    preview: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    accent: '#6366f1',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional single-column professional format',
    preview: 'bg-gradient-to-br from-slate-700 to-slate-900',
    accent: '#334155',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold colors and unique typography for designers',
    preview: 'bg-gradient-to-br from-rose-500 to-orange-500',
    accent: '#f43f5e',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Ultra-clean whitespace-focused design',
    preview: 'bg-gradient-to-br from-gray-400 to-gray-600',
    accent: '#6b7280',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Premium layout for senior professionals',
    preview: 'bg-gradient-to-br from-emerald-600 to-teal-700',
    accent: '#059669',
  },
]

export const emptyResume: ResumeData = {
  personal: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
}

export const sampleResume: ResumeData = {
  personal: {
    fullName: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexjohnson.dev',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    summary:
      'Passionate software engineer with 6+ years of experience building scalable web applications. Expert in React, Node.js, and cloud architecture. Led teams of 5+ developers and delivered products used by millions of users.',
  },
  experience: [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: '',
      current: true,
      description:
        'Led development of microservices architecture serving 2M+ daily users. Reduced API response time by 40% through caching optimization. Mentored 3 junior developers and established code review standards.',
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      location: 'Remote',
      startDate: '2018-06',
      endDate: '2021-02',
      current: false,
      description:
        'Built the core product from MVP to Series A. Implemented CI/CD pipeline reducing deployment time by 80%. Designed RESTful APIs and React frontend with 99.9% uptime.',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2014-09',
      endDate: '2018-05',
      gpa: '3.8',
    },
  ],
  skills: [
    { id: '1', name: 'React / Next.js', level: 95 },
    { id: '2', name: 'TypeScript', level: 90 },
    { id: '3', name: 'Node.js', level: 85 },
    { id: '4', name: 'Python', level: 80 },
    { id: '5', name: 'AWS / Cloud', level: 75 },
    { id: '6', name: 'PostgreSQL', level: 85 },
  ],
  projects: [
    {
      id: '1',
      name: 'OpenSource Analytics Platform',
      description: 'Real-time analytics dashboard with 10K+ GitHub stars. Built with React, D3.js, and WebSocket streaming.',
      technologies: 'React, D3.js, Node.js, Redis',
      link: 'github.com/alexjohnson/analytics',
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-06',
    },
  ],
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return 'Present'
  const [year, month] = dateStr.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}
