import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { emptyResume, sampleResume, type ResumeData, type TemplateId } from '../types/resume'

interface ResumeContextType {
  resume: ResumeData
  template: TemplateId
  setTemplate: (id: TemplateId) => void
  updatePersonal: (data: Partial<ResumeData['personal']>) => void
  updateResume: (data: ResumeData) => void
  loadSample: () => void
  resetResume: () => void
  isDark: boolean
  toggleTheme: () => void
}

const ResumeContext = createContext<ResumeContextType | null>(null)

const STORAGE_KEY = 'resumecraft-data'
const TEMPLATE_KEY = 'resumecraft-template'
const THEME_KEY = 'resumecraft-theme'

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resume, setResume] = useState<ResumeData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : emptyResume
  })

  const [template, setTemplateState] = useState<TemplateId>(() => {
    return (localStorage.getItem(TEMPLATE_KEY) as TemplateId) || 'modern'
  })

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resume))
  }, [resume])

  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, template)
  }, [template])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const updatePersonal = useCallback((data: Partial<ResumeData['personal']>) => {
    setResume((prev) => ({ ...prev, personal: { ...prev.personal, ...data } }))
  }, [])

  const updateResume = useCallback((data: ResumeData) => {
    setResume(data)
  }, [])

  const setTemplate = useCallback((id: TemplateId) => {
    setTemplateState(id)
  }, [])

  const loadSample = useCallback(() => {
    setResume(sampleResume)
  }, [])

  const resetResume = useCallback(() => {
    setResume(emptyResume)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev)
  }, [])

  return (
    <ResumeContext.Provider
      value={{
        resume,
        template,
        setTemplate,
        updatePersonal,
        updateResume,
        loadSample,
        resetResume,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const ctx = useContext(ResumeContext)
  if (!ctx) throw new Error('useResume must be used within ResumeProvider')
  return ctx
}
