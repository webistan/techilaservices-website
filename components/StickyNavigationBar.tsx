"use client"
import { useState, useEffect } from "react"

interface StickyNavigationBarProps {
  sections?: string[]
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export default function StickyNavigationBar({
  sections = ["Overview","Our Process", "Why Choose Us",  "FAQ"],
  activeSection = "Overview",
  onSectionChange
}: StickyNavigationBarProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-hero-section]')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        // Account for header height (80px) when determining sticky state
        setIsSticky(heroBottom <= 80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onSectionChange?.(section)
  }

  return (
    <div className={`bg-gray-100 border-b border-gray-200 transition-all duration-300 ${isSticky ? 'sticky top-[80px] z-50 shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center space-x-8 py-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
} 