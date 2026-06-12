import type { ResumeData } from '../../types/resume'
import { formatDate } from '../../types/resume'

interface ResumeTemplateProps {
  data: ResumeData
}

export function ModernTemplate({ data }: ResumeTemplateProps) {
  const { personal, experience, education, skills, projects, certifications } = data

  return (
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg text-sm leading-relaxed">
      <div className="flex">
        <aside className="w-[35%] bg-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold">{personal.fullName || 'Your Name'}</h1>
          <p className="text-indigo-200 mt-1">{personal.title || 'Job Title'}</p>

          <div className="mt-6 space-y-3 text-xs">
            {personal.email && <p>{personal.email}</p>}
            {personal.phone && <p>{personal.phone}</p>}
            {personal.location && <p>{personal.location}</p>}
            {personal.website && <p>{personal.website}</p>}
            {personal.linkedin && <p>{personal.linkedin}</p>}
            {personal.github && <p>{personal.github}</p>}
          </div>

          {skills.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-indigo-400 pb-1 mb-3">Skills</h2>
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
            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-indigo-400 pb-1 mb-3">Certifications</h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 text-xs">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-indigo-200">{cert.issuer} · {formatDate(cert.date)}</p>
                </div>
              ))}
            </div>
          )}
        </aside>

        <main className="flex-1 p-6">
          {personal.summary && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-2">Summary</h2>
              <p className="text-gray-700">{personal.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">Experience</h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company} · {exp.location}</p>
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
            <section className="mb-6">
              <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">Education</h2>
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
              <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">Projects</h2>
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
      <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide uppercase">{personal.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 mt-1">{personal.title || 'Job Title'}</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-xs text-gray-600">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">Professional Summary</h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-3">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.position}</h3>
                <span className="text-xs text-gray-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <p className="text-gray-600 italic">{exp.company}, {exp.location}</p>
              <p className="mt-1 text-gray-700 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
              <p className="text-gray-600">{edu.institution} · {formatDate(edu.endDate)}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">Skills</h2>
          <p className="text-gray-700">{skills.map((s) => s.name).join(' · ')}</p>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-3">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-2">
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {certifications.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">Certifications</h2>
          {certifications.map((cert) => (
            <p key={cert.id} className="text-gray-700">{cert.name} — {cert.issuer} ({formatDate(cert.date)})</p>
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
      <header className="bg-gradient-to-r from-rose-500 to-orange-500 text-white p-8">
        <h1 className="text-4xl font-extrabold">{personal.fullName || 'Your Name'}</h1>
        <p className="text-xl mt-1 opacity-90">{personal.title || 'Job Title'}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-90">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </header>

      <div className="p-8">
        {personal.summary && (
          <section className="mb-6">
            <h2 className="text-rose-500 font-bold text-lg mb-2">About Me</h2>
            <p className="text-gray-700">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-rose-500 font-bold text-lg mb-3">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 pl-4 border-l-4 border-orange-400">
                <h3 className="font-bold text-base">{exp.position}</h3>
                <p className="text-orange-600 font-medium">{exp.company}</p>
                <p className="text-xs text-gray-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</p>
                <p className="mt-1 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="grid grid-cols-2 gap-6">
          {education.length > 0 && (
            <section>
              <h2 className="text-rose-500 font-bold text-lg mb-3">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.field} · {formatDate(edu.endDate)}</p>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-rose-500 font-bold text-lg mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {projects.length > 0 && (
          <section className="mt-6">
            <h2 className="text-rose-500 font-bold text-lg mb-3">Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-3 p-3 bg-orange-50 rounded-lg">
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
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
    <div id="resume-preview" className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto shadow-lg p-12 text-sm font-light">
      <header className="mb-10">
        <h1 className="text-3xl font-light tracking-tight">{personal.fullName || 'Your Name'}</h1>
        <p className="text-gray-500 mt-1">{personal.title || 'Job Title'}</p>
        <div className="flex flex-wrap gap-6 mt-4 text-xs text-gray-400">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mb-8">
          <p className="text-gray-600 leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-normal text-base">{exp.position}</h3>
                <span className="text-xs text-gray-400">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <p className="text-gray-500 text-sm">{exp.company}</p>
              <p className="mt-2 text-gray-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h3 className="font-normal">{edu.degree}, {edu.field}</h3>
              <p className="text-gray-500 text-sm">{edu.institution} · {formatDate(edu.endDate)}</p>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Skills</h2>
          <p className="text-gray-600">{skills.map((s) => s.name).join(', ')}</p>
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="font-normal">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
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
      <header className="bg-emerald-800 text-white px-10 py-8">
        <h1 className="text-3xl font-bold">{personal.fullName || 'Your Name'}</h1>
        <p className="text-emerald-200 text-lg mt-1">{personal.title || 'Job Title'}</p>
        <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-emerald-100">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </header>

      <div className="p-10">
        {personal.summary && (
          <section className="mb-6">
            <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-2">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-3">Professional Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-base">{exp.position}</h3>
                    <p className="text-emerald-700 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
                </div>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-3">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.field} · {formatDate(edu.endDate)}</p>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-3">Core Competencies</h2>
              <ul className="grid grid-cols-2 gap-1">
                {skills.map((skill) => (
                  <li key={skill.id} className="text-gray-700 text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {projects.length > 0 && (
          <section className="mt-6">
            <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-3">Key Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-3">
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {certifications.length > 0 && (
          <section className="mt-6">
            <h2 className="text-emerald-800 font-bold uppercase text-xs tracking-wider mb-2">Certifications</h2>
            {certifications.map((cert) => (
              <p key={cert.id} className="text-gray-700 text-sm">{cert.name} — {cert.issuer}</p>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
