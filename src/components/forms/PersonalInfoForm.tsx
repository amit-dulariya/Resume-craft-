import { useResume } from '../../context/ResumeContext'

export default function PersonalInfoForm() {
  const { resume, updatePersonal } = useResume()
  const { personal } = resume

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-text">Full Name *</label>
          <input
            className="input-field"
            value={personal.fullName}
            onChange={(e) => updatePersonal({ fullName: e.target.value })}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="label-text">Job Title *</label>
          <input
            className="input-field"
            value={personal.title}
            onChange={(e) => updatePersonal({ title: e.target.value })}
            placeholder="Software Engineer"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-text">Email *</label>
          <input
            className="input-field"
            type="email"
            value={personal.email}
            onChange={(e) => updatePersonal({ email: e.target.value })}
            placeholder="john@email.com"
          />
        </div>
        <div>
          <label className="label-text">Phone</label>
          <input
            className="input-field"
            value={personal.phone}
            onChange={(e) => updatePersonal({ phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="label-text">Location</label>
        <input
          className="input-field"
          value={personal.location}
          onChange={(e) => updatePersonal({ location: e.target.value })}
          placeholder="City, State"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label-text">Website</label>
          <input
            className="input-field"
            value={personal.website}
            onChange={(e) => updatePersonal({ website: e.target.value })}
            placeholder="yourwebsite.com"
          />
        </div>
        <div>
          <label className="label-text">LinkedIn</label>
          <input
            className="input-field"
            value={personal.linkedin}
            onChange={(e) => updatePersonal({ linkedin: e.target.value })}
            placeholder="linkedin.com/in/you"
          />
        </div>
        <div>
          <label className="label-text">GitHub</label>
          <input
            className="input-field"
            value={personal.github}
            onChange={(e) => updatePersonal({ github: e.target.value })}
            placeholder="github.com/you"
          />
        </div>
      </div>

      <div>
        <label className="label-text">Professional Summary</label>
        <textarea
          className="input-field min-h-[120px] resize-y"
          value={personal.summary}
          onChange={(e) => updatePersonal({ summary: e.target.value })}
          placeholder="Brief overview of your experience, skills, and career goals..."
        />
      </div>
    </div>
  )
}
