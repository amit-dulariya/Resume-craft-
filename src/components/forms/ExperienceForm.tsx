import { Plus, Trash2 } from 'lucide-react'
import { useResume } from '../../context/ResumeContext'
import { generateId, type Experience } from '../../types/resume'

export default function ExperienceForm() {
  const { resume, updateResume } = useResume()

  const addExperience = () => {
    const newExp: Experience = {
      id: generateId(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    }
    updateResume({ ...resume, experience: [...resume.experience, newExp] })
  }

  const updateExperience = (id: string, data: Partial<Experience>) => {
    updateResume({
      ...resume,
      experience: resume.experience.map((exp) =>
        exp.id === id ? { ...exp, ...data } : exp
      ),
    })
  }

  const removeExperience = (id: string) => {
    updateResume({
      ...resume,
      experience: resume.experience.filter((exp) => exp.id !== id),
    })
  }

  return (
    <div className="space-y-6">
      {resume.experience.map((exp, index) => (
        <div key={exp.id} className="card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900 dark:text-white">Experience #{index + 1}</h4>
            <button
              onClick={() => removeExperience(exp.id)}
              className="btn-ghost p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label-text">Company</label>
              <input
                className="input-field"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="label-text">Position</label>
              <input
                className="input-field"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                placeholder="Job Title"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="label-text">Location</label>
              <input
                className="input-field"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                placeholder="City, State"
              />
            </div>
            <div>
              <label className="label-text">Start Date</label>
              <input
                className="input-field"
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
              />
            </div>
            <div>
              <label className="label-text">End Date</label>
              <input
                className="input-field"
                type="month"
                value={exp.endDate}
                disabled={exp.current}
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={exp.current}
              onChange={(e) =>
                updateExperience(exp.id, { current: e.target.checked, endDate: e.target.checked ? '' : exp.endDate })
              }
              className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
            />
            I currently work here
          </label>

          <div>
            <label className="label-text">Description</label>
            <textarea
              className="input-field min-h-[100px] resize-y"
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}

      <button onClick={addExperience} className="btn-secondary w-full">
        <Plus className="h-4 w-4" />
        Add Experience
      </button>
    </div>
  )
}
