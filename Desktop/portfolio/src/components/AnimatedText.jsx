import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedText = () => {
  const messages = [
    "I am a Full Stack Developer",
    "Hire me for your next project",
    "Building scalable web solutions",
    "React, Node.js, and beyond",
    "Crafting amazing user experiences",
    "From frontend to backend",
    "Let's create something great",
    "Passionate about clean code",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [messages.length])

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  if (!isLoaded) {
    return <div className="h-8 text-gray-700 dark:text-gray-300 font-semibold" />
  }

  return (
    <div className="relative min-h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-1"
        >
          {messages[currentIndex].split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-gray-700 dark:text-gray-300 text-lg font-semibold inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 3.8, ease: 'linear' }}
        key={`progress-${currentIndex}`}
      />
    </div>
  )
}

export default AnimatedText
