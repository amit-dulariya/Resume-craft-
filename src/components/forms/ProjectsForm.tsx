import { Plus, Trash2 } from 'lucide-react'
import { useResume } from '../../context/ResumeContext'
import { generateId, type Project, type Certification } from '../../types/resume'

export default function ProjectsForm() {
  const { resume, updateResume } = useResume()

  const addProject = () => {
    const newProject: Project = {
      id: generateId(),
      name: '',
      description: '',
      technologies: '',
      link: '',
    }
    updateResume({ ...resume, projects: [...resume.projects, newProject] })
  }

  const updateProject = (id: string, data: Partial<Project>) => {
    updateResume({
      ...resume,
      projects: resume.projects.map((p) => (p.id === id ? { ...p, ...data } : p)),
    })
  }

  const removeProject = (id: string) => {
    updateResume({
      ...resume,
      projects: resume.projects.filter((p) => p.id !== id),
    })
  }

  const addCertification = () => {
    const newCert: Certification = {
      id: generateId(),
      name: '',
      issuer: '',
      date: '',
    }
    updateResume({ ...resume, certifications: [...resume.certifications, newCert] })
  }

  const updateCertification = (id: string, data: Partial<Certification>) => {
    updateResume({
      ...resume,
      certifications: resume.certifications.map((c) =>
        c.id === id ? { ...c, ...data } : c
      ),
    })
  }

  const removeCertification = (id: string) => {
    updateResume({
      ...resume,
      certifications: resume.certifications.filter((c) => c.id !== id),
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h4 className="section-title mb-4">Projects</h4>
        <div className="space-y-4">
          {resume.projects.map((project, index) => (
            <div key={project.id} className="card p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Project #{index + 1}</span>
                <button onClick={() => removeProject(project.id)} className="btn-ghost p-2 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <input
                className="input-field"
                value={project.name}
                onChange={(e) => updateProject(project.id, { name: e.target.value })}
                placeholder="Project name"
              />
              <textarea
                className="input-field min-h-[80px]"
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                placeholder="Description"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="input-field"
                  value={project.technologies}
                  onChange={(e) => updateProject(project.id, { technologies: e.target.value })}
                  placeholder="Technologies used"
                />
                <input
                  className="input-field"
                  value={project.link}
                  onChange={(e) => updateProject(project.id, { link: e.target.value })}
                  placeholder="Project link"
                />
              </div>
            </div>
          ))}
          <button onClick={addProject} className="btn-secondary w-full">
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        </div>
      </div>

      <div>
        <h4 className="section-title mb-4">Certifications</h4>
        <div className="space-y-4">
          {resume.certifications.map((cert, index) => (
            <div key={cert.id} className="card p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Certification #{index + 1}</span>
                <button onClick={() => removeCertification(cert.id)} className="btn-ghost p-2 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  className="input-field"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                  placeholder="Certification name"
                />
                <input
                  className="input-field"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                  placeholder="Issuer"
                />
                <input
                  className="input-field"
                  type="month"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                />
              </div>
            </div>
          ))}
          <button onClick={addCertification} className="btn-secondary w-full">
            <Plus className="h-4 w-4" />
            Add Certification
          </button>
        </div>
      </div>
    </div>
  )
}
