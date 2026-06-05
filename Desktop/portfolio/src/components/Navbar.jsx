import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import { Link as ScrollLink, useActiveSection } from 'react-scroll'
import { useDarkMode } from '../context/DarkModeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Coding Platforms', to: 'coding-platforms' },
    { name: 'Contact', to: 'contact' },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-dark/80 dark:bg-white/90 border-b border-primary/20 dark:border-primary/10 transition-colors duration-300"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer smooth-transition relative group font-medium ${
                    activeSection === item.to
                      ? 'text-primary dark:text-primary'
                      : 'text-gray-300 dark:text-gray-700 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary smooth-transition ${
                    activeSection === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          {/* Dark Mode Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <BsMoon className="text-primary text-lg" />
                ) : (
                  <BsSun className="text-primary text-lg" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-primary text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}
                onSetActive={() => setActiveSection(item.to)}
                className={`block px-3 py-2 rounded-md cursor-pointer smooth-transition font-medium ${
                  activeSection === item.to
                    ? 'text-primary bg-primary/10 dark:bg-primary/20'
                    : 'text-gray-300 dark:text-gray-700 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
