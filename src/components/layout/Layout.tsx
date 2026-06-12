import { Outlet, Link, useLocation } from 'react-router-dom'
import { FileText, Moon, Sun, Menu, X } from 'lucide-react'
import { useResume } from '../../context/ResumeContext'
import { useState } from 'react'

export default function Layout() {
  const { isDark, toggleTheme } = useResume()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/templates', label: 'Templates' },
    { to: '/builder', label: 'Builder' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
              <FileText className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Resume<span className="text-brand-600">Craft</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn-ghost rounded-xl p-2.5"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link to="/builder" className="btn-primary hidden sm:inline-flex text-sm">
              Start Building
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-ghost rounded-xl p-2.5 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-gray-200 bg-white px-4 py-3 md:hidden dark:border-gray-800 dark:bg-gray-950">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium ${
                  isActive(link.to)
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/builder"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 w-full text-sm"
            >
              Start Building
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand-600" />
              <span className="font-display font-semibold">ResumeCraft</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built as a capstone project. Create professional resumes in minutes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
