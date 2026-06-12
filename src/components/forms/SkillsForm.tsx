import { Plus, Trash2 } from 'lucide-react'
import { useResume } from '../../context/ResumeContext'
import { generateId, type Skill } from '../../types/resume'

export default function SkillsForm() {
  const { resume, updateResume } = useResume()

  const addSkill = () => {
    const newSkill: Skill = { id: generateId(), name: '', level: 80 }
    updateResume({ ...resume, skills: [...resume.skills, newSkill] })
  }

  const updateSkill = (id: string, data: Partial<Skill>) => {
    updateResume({
      ...resume,
      skills: resume.skills.map((s) => (s.id === id ? { ...s, ...data } : s)),
    })
  }

  const removeSkill = (id: string) => {
    updateResume({
      ...resume,
      skills: resume.skills.filter((s) => s.id !== id),
    })
  }

  return (
    <div className="space-y-4">
      {resume.skills.map((skill) => (
        <div key={skill.id} className="flex items-center gap-3">
          <input
            className="input-field flex-1"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
            placeholder="Skill name"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={skill.level}
            onChange={(e) => updateSkill(skill.id, { level: parseInt(e.target.value, 10) })}
            className="w-24 accent-brand-600"
          />
          <span className="w-10 text-sm text-gray-500">{skill.level}%</span>
          <button
            onClick={() => removeSkill(skill.id)}
            className="btn-ghost p-2 text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}

      <button onClick={addSkill} className="btn-secondary w-full">
        <Plus className="h-4 w-4" />
        Add Skill
      </button>
    </div>
  )
}
