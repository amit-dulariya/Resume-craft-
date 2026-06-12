import { Link } from 'react-router-dom'
import { ArrowRight, Download, Eye, Layout, Sparkles, Zap } from 'lucide-react'
import { TEMPLATES } from '../types/resume'

const features = [
  {
    icon: Layout,
    title: '5 Professional Templates',
    description: 'Choose from Modern, Classic, Creative, Minimal, and Executive designs.',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your resume update in real-time as you type your details.',
  },
  {
    icon: Download,
    title: 'PDF Export',
    description: 'Download a print-ready PDF with one click.',
  },
  {
    icon: Zap,
    title: 'Auto-Save',
    description: 'Your progress is saved automatically in your browser.',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-brand-950 dark:via-gray-950 dark:to-purple-950" />
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
              <Sparkles className="h-4 w-4" />
              Capstone Project — Resume Builder
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Build Your Perfect{' '}
              <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                Resume
              </span>{' '}
              in Minutes
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Create a professional, ATS-friendly resume with beautiful templates.
              Fill in your details, preview live, and download as PDF — completely free.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/builder" className="btn-primary text-base px-8 py-3">
                Start Building
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/templates" className="btn-secondary text-base px-8 py-3">
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold">Everything You Need</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              A complete resume building experience with modern features
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold">Choose Your Style</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Five professionally designed templates for every career
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TEMPLATES.map((template) => (
              <Link
                key={template.id}
                to="/builder"
                className="group card overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`h-32 ${template.preview} relative`}>
                  <div className="absolute inset-4 rounded-lg bg-white/90 p-3 shadow-sm dark:bg-gray-900/90">
                    <div className="h-2 w-16 rounded bg-gray-300 dark:bg-gray-600" />
                    <div className="mt-2 h-1.5 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-1 h-1.5 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-3 h-1.5 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-1 h-1.5 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-brand-600 transition-colors">{template.name}</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{template.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            No sign-up required. Start building your resume right now.
          </p>
          <Link to="/builder" className="btn-primary mt-8 text-base px-8 py-3">
            Create My Resume
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
