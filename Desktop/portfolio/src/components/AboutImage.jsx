import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AboutImage = () => {
  const [imageExists, setImageExists] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Try to load the about image
    const img = new Image()
    img.onload = () => {
      setImageExists(true)
      setIsLoading(false)
    }
    img.onerror = () => {
      setImageExists(true) // Still show the image even if preload fails
      setIsLoading(false)
    }
    img.src = '/profile.png'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Animated Background Blur */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main Image Container */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-700/50 to-slate-900/50 rounded-lg p-2 border-2 border-primary/40 backdrop-blur-sm overflow-hidden"
        whileHover={{ borderColor: '#ec4899' }}
        transition={{ duration: 0.3 }}
      >
        {/* Image or Placeholder */}
        <div className="relative rounded-lg overflow-hidden aspect-square bg-gradient-to-br from-primary/20 to-secondary/20">
          {!isLoading && imageExists ? (
            // Actual Image
            <motion.img
              src="/profile.png"
              alt="About Me"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            // Placeholder with Instructions
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center text-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-6xl mb-4">📸</div>
              <p className="text-white font-semibold mb-3 text-sm">Add Your Photo</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Save your photo as <span className="text-primary font-bold">about.jpg</span> to the <span className="text-primary font-bold">public/images/</span> folder
              </p>
            </motion.div>
          )}

          {/* Overlay Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/0 to-transparent opacity-0 hover:opacity-30 transition duration-300"
            initial={false}
          />
        </div>

        {/* Neon Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-lg pointer-events-none"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}

export default AboutImage
