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
  const [currentSection, setCurrentSection] = useState(activeSection)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-hero-section]')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        // Account for header height (80px) when determining sticky state
        setIsSticky(heroBottom <= 80)
      }
      
      // Check which section is currently in view
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section.toLowerCase().replace(/\s+/g, '-'))
      })).filter(item => item.element)
      
      if (sectionElements.length > 0) {
        // Find the section that is currently in the viewport
        // We'll consider a section in view if its top is within the viewport
        const viewportHeight = window.innerHeight
        const headerOffset = 120 // Header + sticky nav height
        
        // Find the section closest to the top of the viewport
        let closestSection = sectionElements[0].id
        let closestDistance = Infinity
        
        sectionElements.forEach(({ id, element }) => {
          const rect = element?.getBoundingClientRect()
          const newRect  = rect?.top || 0;
          const distanceFromTop = Math.abs(newRect - headerOffset)
          
          if (distanceFromTop < closestDistance) {
            closestDistance = distanceFromTop
            closestSection = id
          }
        })
        
        if (closestSection !== currentSection) {
          setCurrentSection(closestSection)
          onSectionChange?.(closestSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, currentSection, onSectionChange])

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setCurrentSection(section)
    onSectionChange?.(section)
  }

  return (
    <div className={`bg-gray-100 border-b border-gray-200 transition-all duration-300 ${isSticky ? 'sticky top-[80px] z-40 shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center space-x-8 py-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                currentSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
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