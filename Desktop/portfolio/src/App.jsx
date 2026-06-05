import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExpertiseShowcase from './components/ExpertiseShowcase'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import CodingPlatforms from './components/CodingPlatforms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'

function AppContent() {
  const { isDarkMode } = useDarkMode()

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1a1f35 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        color: isDarkMode ? '#e2e8f0' : '#1a1a1a'
      }}
    >
      <Navbar />
      <Hero />
      <ExpertiseShowcase />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <CodingPlatforms />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Lock body scroll during loading
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'unset'
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <DarkModeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      {!isLoading && <AppContent />}
    </DarkModeProvider>
  )
}

export default App
