import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AboutProfileImage = () => {
  const [imageError, setImageError] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    if (files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('profileImage', event.target.result)
          window.location.reload()
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  const getImage = () => {
    if (typeof window !== 'undefined' && localStorage.getItem('profileImage')) {
      return localStorage.getItem('profileImage')
    }
    return '/profile.png'
  }

  const image = getImage()

  return (
    <motion.div
      className="relative w-full max-w-md h-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Outer Glow Layer - Rectangle */}
      <motion.div
        className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary blur-2xl opacity-30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Container with Neon Border */}
      <motion.div
        className="relative rounded-lg overflow-hidden border-2 border-primary/60 backdrop-blur-sm bg-gradient-to-br from-slate-800/30 to-slate-900/30"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 217, 255, 0.3)',
            '0 0 40px rgba(0, 217, 255, 0.5)',
            '0 0 20px rgba(0, 217, 255, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Image Container - Rectangular */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
          {image && !imageError ? (
            <motion.img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              onError={() => setImageError(true)}
            />
          ) : (
            <motion.div
              className={`w-full h-full flex flex-col items-center justify-center transition-colors ${
                dragOver ? 'bg-primary/20' : 'bg-transparent'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-3">📸</div>
              <p className="text-white font-semibold text-sm mb-2">Add Your Photo</p>
              <p className="text-xs text-gray-300">Drag & drop here</p>
            </motion.div>
          )}

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/0 via-transparent to-transparent opacity-0 hover:opacity-20 transition duration-300"
            initial={false}
          />
        </div>
      </motion.div>

      {/* Corner Accent 1 */}
      <motion.div
        className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-60"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Corner Accent 2 */}
      <motion.div
        className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg opacity-60"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  )
}

export default AboutProfileImage
