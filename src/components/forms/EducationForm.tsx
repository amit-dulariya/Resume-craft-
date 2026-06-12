import { Plus, Trash2 } from 'lucide-react'
import { useResume } from '../../context/ResumeContext'
import { generateId, type Education } from '../../types/resume'

export default function EducationForm() {
  const { resume, updateResume } = useResume()

  const addEducation = () => {
    const newEdu: Education = {
      id: generateId(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
    }
    updateResume({ ...resume, education: [...resume.education, newEdu] })
  }

  const updateEducation = (id: string, data: Partial<Education>) => {
    updateResume({
      ...resume,
      education: resume.education.map((edu) =>
        edu.id === id ? { ...edu, ...data } : edu
      ),
    })
  }

  const removeEducation = (id: string) => {
    updateResume({
      ...resume,
      education: resume.education.filter((edu) => edu.id !== id),
    })
  }

  return (
    <div className="space-y-6">
      {resume.education.map((edu, index) => (
        <div key={edu.id} className="card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Education #{index + 1}</h4>
            <button
              onClick={() => removeEducation(edu.id)}
              className="btn-ghost p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label-text">Institution</label>
              <input
                className="input-field"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="label-text">Degree</label>
              <input
                className="input-field"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                placeholder="Bachelor of Science"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="label-text">Field of Study</label>
              <input
                className="input-field"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label className="label-text">Start Date</label>
              <input
                className="input-field"
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
              />
            </div>
            <div>
              <label className="label-text">End Date</label>
              <input
                className="input-field"
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="label-text">GPA (optional)</label>
            <input
              className="input-field max-w-xs"
              value={edu.gpa}
              onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
              placeholder="3.8"
            />
          </div>
        </div>
      ))}

      <button onClick={addEducation} className="btn-secondary w-full">
        <Plus className="h-4 w-4" />
        Add Education
      </button>
    </div>
  )
}
