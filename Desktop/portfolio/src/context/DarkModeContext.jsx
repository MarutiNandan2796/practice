import React, { createContext, useState, useContext, useEffect } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check localStorage and system preference on mount
  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        setIsDarkMode(JSON.parse(savedMode))
      } else {
        // Default to dark mode
        setIsDarkMode(true)
      }
    }
  }, [])

  // Save to localStorage and update document
  useEffect(() => {
    if (typeof window !== 'undefined' && isClient) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
      
      if (isDarkMode) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    }
  }, [isDarkMode, isClient])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider')
  }
  return context
}
