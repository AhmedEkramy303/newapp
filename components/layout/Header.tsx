'use client'

import { useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="header bg-background-light dark:bg-background-dark">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="navbar-brand">
          <span className="logo text-2xl font-bold">🚀 ViralyticsPro</span>
        </div>

        <div className={`navbar-menu flex space-x-6 ${menuOpen ? 'block' : 'hidden'} md:flex`} id="navbarMenu">
          <a href="#" className="nav-link text-gray-700 dark:text-gray-200">Home</a>
          <a href="#features" className="nav-link text-gray-700 dark:text-gray-200">Features</a>
          <a href="#pricing" className="nav-link text-gray-700 dark:text-gray-200">Pricing</a>
          <a href="#faq" className="nav-link text-gray-700 dark:text-gray-200">FAQ</a>
        </div>

        <div className="navbar-actions flex items-center space-x-4">
          <button
            className="theme-toggle text-xl"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className="btn btn--outline btn--sm"
            onClick={() => router.push('/auth/signin')}
          >
            Sign In
          </button>
          <button
            className="btn btn--primary btn--sm"
            onClick={() => router.push('/auth/signup')}
          >
            Sign Up
          </button>

          <button
            className="mobile-menu-toggle md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
