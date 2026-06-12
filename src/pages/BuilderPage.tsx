import { useState } from 'react'
import {
  User, Briefcase, GraduationCap, Wrench, FolderOpen,
  Download, Printer, RotateCcw, Sparkles, Palette, Eye,
} from 'lucide-react'
import { useResume } from '../context/ResumeContext'
import { TEMPLATES, type TemplateId } from '../types/resume'
import { exportToPDF, printResume } from '../utils/exportPdf'
import PersonalInfoForm from '../components/forms/PersonalInfoForm'
import ExperienceForm from '../components/forms/ExperienceForm'
import EducationForm from '../components/forms/EducationForm'
import SkillsForm from '../components/forms/SkillsForm'
import ProjectsForm from '../components/forms/ProjectsForm'
import {
  ModernTemplate,
  ClassicTemplate,
  CreativeTemplate,
  MinimalTemplate,
  ExecutiveTemplate,
  TimelineTemplate,
  ProfessionalTemplate,
} from '../components/templates/ResumeTemplates'

type Section = 'personal' | 'experience' | 'education' | 'skills' | 'projects'

const sections: { id: Section; label: string; icon: typeof User }[] = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects & Certs', icon: FolderOpen },
]

function TemplateRenderer({ templateId }: { templateId: TemplateId }) {
  const { resume } = useResume()

  switch (templateId) {
    case 'modern': return <ModernTemplate data={resume} />
    case 'classic': return <ClassicTemplate data={resume} />
    case 'creative': return <CreativeTemplate data={resume} />
    case 'minimal': return <MinimalTemplate data={resume} />
    case 'executive': return <ExecutiveTemplate data={resume} />
    case 'timeline': return <TimelineTemplate data={resume} />
    case 'professional': return <ProfessionalTemplate data={resume} />
    default: return <ModernTemplate data={resume} />
  }
}

export default function BuilderPage() {
  const { resume, template, setTemplate, loadSample, resetResume } = useResume()
  const [activeSection, setActiveSection] = useState<Section>('personal')
  const [showPreview, setShowPreview] = useState(false)
  const [exporting, setExporting] = useState(false)

  const handleExportPDF = async () => {
    setExporting(true)
    try {
      const name = resume.personal.fullName || 'resume'
      await exportToPDF('resume-preview', name.replace(/\s+/g, '_').toLowerCase())
    } catch {
      alert('Failed to export PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  const handlePrint = () => {
    printResume('resume-preview')
  }

  const renderForm = () => {
    switch (activeSection) {
      case 'personal': return <PersonalInfoForm />
      case 'experience': return <ExperienceForm />
      case 'education': return <EducationForm />
      case 'skills': return <SkillsForm />
      case 'projects': return <ProjectsForm />
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="font-display font-bold text-lg">Resume Builder</h2>
          <p className="text-xs text-gray-500 mt-1">Fill in each section</p>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
            >
              <section.icon className="h-4 w-4" />
              {section.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200 dark:border-gray-800 space-y-2">
          <div className="flex items-center gap-2 px-2">
            <Palette className="h-4 w-4 text-gray-400" />
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value as TemplateId)}
              className="input-field text-xs py-1.5"
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
          <button onClick={loadSample} className="btn-ghost w-full text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Load Sample Data
          </button>
          <button onClick={resetResume} className="btn-ghost w-full text-xs text-red-500">
            <RotateCcw className="h-3.5 w-3.5" />
            Reset All
          </button>
        </div>
      </aside>

      {/* Form Panel */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value as Section)}
            className="input-field text-sm py-1.5 flex-1 mr-2"
          >
            {sections.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
          <button onClick={() => setShowPreview(!showPreview)} className="btn-ghost p-2">
            <Eye className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-2xl">
            <h2 className="section-title mb-4 capitalize">
              {sections.find((s) => s.id === activeSection)?.label}
            </h2>
            {renderForm()}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
          <button onClick={handleExportPDF} disabled={exporting} className="btn-primary flex-1 sm:flex-none text-sm">
            <Download className="h-4 w-4" />
            {exporting ? 'Exporting...' : 'Download PDF'}
          </button>
          <button onClick={handlePrint} className="btn-secondary text-sm">
            <Printer className="h-4 w-4" />
            Print
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className={`${showPreview ? 'fixed inset-0 z-40 bg-black/50 lg:relative lg:bg-transparent' : 'hidden'} lg:block lg:w-[45%] xl:w-[50%]`}>
        <div className={`${showPreview ? 'absolute inset-4 lg:relative lg:inset-0' : ''} bg-gray-100 dark:bg-gray-900 overflow-y-auto`}>
          <div className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h3 className="font-semibold">Preview</h3>
              <button onClick={() => setShowPreview(false)} className="btn-ghost p-2">Close</button>
            </div>
            <div className="transform scale-[0.45] sm:scale-[0.55] lg:scale-[0.65] xl:scale-[0.75] origin-top-left w-[210mm]">
              <TemplateRenderer templateId={template} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
