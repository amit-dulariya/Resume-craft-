import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { TEMPLATES } from '../types/resume'
import { useResume } from '../context/ResumeContext'

export default function TemplatesPage() {
  const { template, setTemplate } = useResume()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Resume Templates</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Pick a template that matches your style and industry
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((t) => (
          <div
            key={t.id}
            className={`card overflow-hidden transition-all hover:shadow-xl ${
              template === t.id ? 'ring-2 ring-brand-500' : ''
            }`}
          >
            <div className={`h-48 ${t.preview} relative p-6`}>
              <div className="h-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-900">
                <div className="flex gap-3">
                  <div className="h-16 w-16 shrink-0 rounded-lg" style={{ backgroundColor: t.accent }} />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-24 rounded bg-gray-300 dark:bg-gray-600" />
                    <div className="h-2 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-2 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-2 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="mt-4 h-2 w-20 rounded" style={{ backgroundColor: t.accent }} />
                <div className="mt-2 space-y-1.5">
                  <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-2 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>
              {template === t.id && (
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg">
                  <Check className="h-5 w-5" />
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
              <button
                onClick={() => setTemplate(t.id)}
                className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition-all ${
                  template === t.id
                    ? 'bg-brand-600 text-white'
                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                {template === t.id ? 'Selected' : 'Use This Template'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/builder" className="btn-primary text-base px-8 py-3">
          Continue to Builder
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
