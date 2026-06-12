import type { ResumeData } from '../../types/resume'
import { formatDate } from '../../types/resume'

interface ResumeTemplateProps {
  data: ResumeData
}

export function ModernTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects, certifications } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm leading-relaxed font-sans">
      <div className="flex">
        <aside className="w-[35%] bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8">
          {personal.profileImage && (
            <div className="mb-6 flex justify-center">
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight">{personal.fullName || 'Your Name'}</h1>
          <p className="text-blue-300 mt-2 font-semibold text-sm">{personal.title || 'Job Title'}</p>

          <div className="mt-8 space-y-2 text-xs border-t border-slate-700 pt-6">
            {personal.email && <p>{personal.email}</p>}
            {personal.phone && <p>{personal.phone}</p>}
            {personal.location && <p>{personal.location}</p>}
            {personal.website && <p>{personal.website}</p>}
            {personal.linkedin && <p>{personal.linkedin}</p>}
            {personal.github && <p>{personal.github}</p>}
          </div>

          {skills.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Skills</h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-1.5 bg-indigo-400/40 rounded-full">
                      <div className="h-full bg-white rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Certifications</h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 text-xs">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-indigo-200">{cert.issuer} · {formatDate(cert.date)}</p>
                </div>
              ))}
            </div>
          )}
        </aside>

        <main className="flex-1 p-8">
          {personal.summary && (
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-slate-300 pb-2 mb-3">Professional Summary</h2>
              <p className="text-gray-700">{personal.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-slate-300 pb-2 mb-4">Experience</h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-5 pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-base text-slate-800">{exp.position}</h3>
                      <p className="text-slate-600 font-semibold text-xs">{exp.company}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-slate-300 pb-2 mb-4">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                  <p className="text-gray-600">{edu.institution} · {formatDate(edu.startDate)} – {formatDate(edu.endDate)}</p>
                  {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-slate-300 pb-2 mb-4">Projects</h2>
              {projects.map((project) => (
                <div key={project.id} className="mb-3">
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  {project.technologies && <p className="text-xs text-gray-500 mt-1">{project.technologies}</p>}
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export function ClassicTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects, certifications } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg p-10 text-sm">
      <header className="text-center border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{personal.fullName || 'Your Name'}</h1>
        <p className="text-xl text-blue-600 font-semibold mt-2">{personal.title || 'Job Title'}</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-xs text-slate-600">
          {personal.email && <span className="font-medium">{personal.email}</span>}
          {personal.phone && <span className="font-medium">{personal.phone}</span>}
          {personal.location && <span className="font-medium">{personal.location}</span>}
          {personal.linkedin && <span className="font-medium">{personal.linkedin}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5 pb-5 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{exp.position}</h3>
                  <p className="text-slate-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs text-slate-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{exp.location}</p>
              <p className="mt-2 text-gray-700 whitespace-pre-line text-xs">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4 pb-4 border-b border-gray-100 last:border-b-0">
              <h3 className="font-bold text-slate-900">{edu.degree} in {edu.field}</h3>
              <p className="text-slate-600 font-medium text-sm">{edu.institution}</p>
              <p className="text-xs text-slate-500">{formatDate(edu.endDate)}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Skills</h2>
          <p className="text-gray-700 leading-relaxed">{skills.map((s) => s.name).join(' • ')}</p>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4 pb-4 border-b border-gray-100 last:border-b-0">
              <h3 className="font-bold text-slate-900">{project.name}</h3>
              <p className="text-gray-700 text-xs mt-1">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {certifications.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Certifications</h2>
          {certifications.map((cert) => (
            <p key={cert.id} className="text-gray-700 text-xs mb-2">{cert.name} — {cert.issuer} ({formatDate(cert.date)})</p>
          ))}
        </section>
      )}
    </div>
  )
}

export function CreativeTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm overflow-hidden">
      <header className="bg-gradient-to-r from-rose-500 via-orange-500 to-orange-600 text-white p-10">
        <div className="flex items-end gap-8">
          {personal.profileImage && (
            <img
              src={personal.profileImage}
              alt={personal.fullName}
              className="w-28 h-28 rounded-xl object-cover border-4 border-white shadow-xl"
            />
          )}
          <div className="flex-1 pb-2">
            <h1 className="text-5xl font-bold tracking-tight">{personal.fullName || 'Your Name'}</h1>
            <p className="text-2xl font-semibold mt-2 text-white opacity-95">{personal.title || 'Job Title'}</p>
            <div className="flex flex-wrap gap-6 mt-5 text-sm font-medium">
              {personal.email && <span>📧 {personal.email}</span>}
              {personal.phone && <span>📞 {personal.phone}</span>}
              {personal.location && <span>📍 {personal.location}</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="p-10">
        {personal.summary && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b-2 border-rose-300 pb-3 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b-2 border-rose-300 pb-3 mb-4">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-5 pb-5 border-l-4 border-orange-400 pl-5 border-b border-gray-100 last:border-b-0">
                <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                <p className="text-orange-600 font-semibold text-sm">{exp.company}</p>
                <p className="text-xs text-slate-500 mt-1">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)} • {exp.location}</p>
                <p className="mt-3 text-gray-700 whitespace-pre-line text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b-2 border-rose-300 pb-3 mb-4">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium text-sm">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.field} • {formatDate(edu.endDate)}</p>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b-2 border-rose-300 pb-3 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 rounded-full text-xs font-semibold">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {projects.length > 0 && (
          <section className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b-2 border-rose-300 pb-3 mb-4">Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                <h3 className="font-bold text-slate-900">{project.name}</h3>
                <p className="text-gray-700 text-xs mt-2 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

export function MinimalTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg p-12 text-sm">
      <header className="mb-10 pb-8 border-b-2 border-slate-200">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{personal.fullName || 'Your Name'}</h1>
        <p className="text-slate-600 font-medium mt-2 text-lg">{personal.title || 'Job Title'}</p>
        <div className="flex flex-wrap gap-6 mt-5 text-xs text-slate-600 font-medium">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mb-9">
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-9">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-5">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-6 pb-6 border-b border-slate-100 last:border-b-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-base text-slate-900">{exp.position}</h3>
                <span className="text-xs text-slate-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <p className="text-slate-600 font-medium text-sm mt-1">{exp.company}</p>
              <p className="text-xs text-slate-500 mt-1">{exp.location}</p>
              <p className="mt-3 text-gray-700 whitespace-pre-line text-xs leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-9">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-5">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-5 pb-5 border-b border-slate-100 last:border-b-0">
              <h3 className="font-semibold text-slate-900">{edu.degree} in {edu.field}</h3>
              <p className="text-slate-600 font-medium text-sm mt-1">{edu.institution}</p>
              <p className="text-xs text-slate-500 mt-1">{formatDate(edu.endDate)}{edu.gpa && ` • GPA: ${edu.gpa}`}</p>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-9">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-5">Skills</h2>
          <p className="text-gray-700 leading-relaxed">{skills.map((s) => s.name).join(' • ')}</p>
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-5">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-5 pb-5 border-b border-slate-100 last:border-b-0">
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <p className="text-gray-700 text-xs mt-2 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export function ExecutiveTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects, certifications } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm">
      <header className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-12 py-10">
        <h1 className="text-4xl font-bold tracking-tight">{personal.fullName || 'Your Name'}</h1>
        <p className="text-blue-200 text-xl font-semibold mt-2">{personal.title || 'Job Title'}</p>
        <div className="grid grid-cols-2 gap-3 mt-5 text-xs font-medium">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
          {personal.linkedin && <span>💼 {personal.linkedin}</span>}
        </div>
      </header>

      <div className="p-10">
        {personal.summary && (
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Professional Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{exp.position}</h3>
                    <p className="text-blue-600 font-semibold text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
                </div>
                <p className="text-xs text-slate-600 mt-2">{exp.location}</p>
                <p className="mt-3 text-gray-700 whitespace-pre-line text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium text-sm mt-1">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.field} • {formatDate(edu.endDate)}</p>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Core Competencies</h2>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill.id} className="text-gray-700 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {projects.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Key Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-4 pb-4 border-b border-gray-100 last:border-b-0">
                <h3 className="font-bold text-slate-900">{project.name}</h3>
                <p className="text-gray-700 text-xs mt-2 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {certifications.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-blue-500 pb-3 mb-4">Certifications</h2>
            {certifications.map((cert) => (
              <p key={cert.id} className="text-gray-700 text-xs mb-2">✓ {cert.name} — {cert.issuer}</p>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

export function TimelineTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm">
      {/* Diagonal top accent */}
      <div className="relative h-32 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="absolute top-0 right-0 w-40 h-32 bg-blue-600 transform skew-x-12" />
        <div className="absolute top-0 left-1/2 w-32 h-24 bg-gradient-to-r from-blue-400 to-blue-200 transform skew-x-12" />
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
          <div className="relative -mt-20 mb-6 flex justify-center">
            {personal.profileImage ? (
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white shadow-lg" />
            )}
          </div>

          <h1 className="text-2xl font-bold text-center text-gray-900">{personal.fullName || 'Your Name'}</h1>
          <p className="text-center text-gray-600 font-medium mt-1">{personal.title || 'Job Title'}</p>

          {/* About Me */}
          {personal.summary && (
            <div className="mt-6 pb-6 border-b border-gray-300">
              <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                <span className="text-lg">👤</span> About Me
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">{personal.summary}</p>
            </div>
          )}

          {/* Contact */}
          <div className="mt-6 pb-6 border-b border-gray-300">
            <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
              <span className="text-lg">📋</span> Contact
            </h2>
            <div className="space-y-2 text-xs text-gray-600">
              {personal.phone && <p>📞 {personal.phone}</p>}
              {personal.email && <p>✉️ {personal.email}</p>}
              {personal.location && <p>📍 {personal.location}</p>}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-6 pb-6 border-b border-gray-300">
              <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                <span className="text-lg">💡</span> Skills
              </h2>
              <ul className="space-y-1 text-xs text-gray-600">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-1">
                    • {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Right Content */}
        <main className="flex-1 p-8">
          {/* Education Timeline */}
          {education.length > 0 && (
            <section className="mb-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                <span>🎓</span> Education
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400" />
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative mb-6 pb-6">
                    <div className="absolute -left-3.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md top-1" />
                    <p className="font-bold text-gray-900">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    {edu.gpa && <p className="text-xs text-gray-500 mt-1">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Experience Timeline */}
          {experience.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                <span>💼</span> Experience
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-400" />
                {experience.map((exp) => (
                  <div key={exp.id} className="relative mb-6 pb-6">
                    <div className="absolute -left-3.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md top-1" />
                    <p className="font-bold text-gray-900">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </p>
                    <h3 className="font-bold text-gray-900 uppercase">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-xs text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Diagonal bottom accent */}
      <div className="relative h-8 bg-gradient-to-r from-blue-900 to-blue-800 mt-8 transform -skew-x-12" />
    </div>
  )
}

export function ProfessionalTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm overflow-hidden relative">
      {/* Orange decorative circles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-orange-400 opacity-70" />
      <div className="absolute top-0 right-20 w-32 h-32 rounded-full bg-orange-300 opacity-50" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-orange-400 opacity-60" />

      {/* Header with profile image and title */}
      <div className="flex items-start gap-8 p-10 pb-8 border-b-4 border-orange-600 bg-gradient-to-r from-slate-50 to-white">
        <div className="relative">
          {personal.profileImage ? (
            <img
              src={personal.profileImage}
              alt={personal.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-500 shadow-xl"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-orange-400 shadow-lg flex items-center justify-center text-gray-600 font-semibold">
              Photo
            </div>
          )}
        </div>

        <div className="flex-1 pt-2">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{personal.fullName || 'Your Name'}</h1>
          <p className="text-2xl font-bold text-orange-600 mt-2">{personal.title || 'Job Title'}</p>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-1/3 bg-slate-50 p-8 space-y-8 border-r-2 border-orange-200">
          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Contact Info</h2>
            <div className="space-y-2 text-xs text-gray-700">
              {personal.phone && <p className="font-medium\">📞 {personal.phone}</p>}
              {personal.email && <p className="font-medium\">✉️ {personal.email}</p>}
              {personal.location && <p className="font-medium\">📍 {personal.location}</p>}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Languages</h2>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• English</li>
              <li>• Spanish</li>
            </ul>
          </div>

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4 text-xs pb-4 border-b border-gray-200 last:border-b-0\">
                  <p className="font-bold text-slate-900\">{edu.degree}</p>
                  <p className="text-gray-600 font-semibold\">{edu.institution}</p>
                  <p className="text-gray-500 mt-1\">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                  {edu.gpa && <p className="text-gray-500 mt-1\">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Right Content */}
        <main className="flex-1 p-8 space-y-8">
          {/* Profile */}
          {personal.summary && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Profile</h2>
              <p className="text-xs text-gray-700 leading-relaxed">{personal.summary}</p>
            </section>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Skills</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {skills.map((skill) => (
                  <p key={skill.id} className="text-xs text-gray-700">• {skill.name}</p>
                ))}
              </div>
            </section>
          )}

          {/* Work Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3">Work Experience</h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-5 pb-5 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-0.5">▸</span>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">{exp.position}</p>
                      <p className="text-slate-600 font-semibold text-xs">{exp.company}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</p>
                        <ul className="text-xs text-gray-700 mt-2 space-y-1 ml-2">
                        {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                          <li key={idx}>• {line.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* References */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b-2 border-orange-500 pb-2 mb-3\">References</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-50 p-3 rounded\">
                <p className="font-bold text-slate-900">Studio Shodwe</p>
                <p className="text-gray-600 text-xs">CEO</p>
                <p className="text-gray-600\">123-456-7890</p>
              </div>
              <div className="bg-gray-50 p-3 rounded\">
                <p className="font-bold text-slate-900\">Warner & Spencer</p>
                <p className="text-gray-600 text-xs\">Manager</p>
                <p className="text-gray-600\">123-456-7890</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
