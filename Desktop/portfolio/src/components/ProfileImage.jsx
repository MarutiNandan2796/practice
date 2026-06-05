import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ProfileImage = () => {
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
  }

  const getImage = () => {
    return '/profile.png'
  }

  useEffect(() => {
    const img = getImage()
    setImageError(false)
  }, [])

  return (
    <motion.div
      className="relative w-full max-w-md h-auto flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Outer Glow Layer 1 - Large Blur */}
      <motion.div
        className="absolute -inset-12 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary blur-3xl opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer Glow Layer 2 - Medium Blur */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      {/* Neon Ring Border - Sharp Circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-300 to-primary p-1"
        animate={{
          boxShadow: [
            '0 0 40px rgba(0, 217, 255, 0.5), inset 0 0 40px rgba(0, 217, 255, 0.1)',
            '0 0 60px rgba(0, 217, 255, 0.8), inset 0 0 60px rgba(0, 217, 255, 0.2)',
            '0 0 40px rgba(0, 217, 255, 0.5), inset 0 0 40px rgba(0, 217, 255, 0.1)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          WebkitMaskImage: 'radial-gradient(circle, transparent 88%, black 95%)',
          maskImage: 'radial-gradient(circle, transparent 88%, black 95%)',
        }}
      />

      {/* Inner Dark Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 pointer-events-none" />

      {/* Image Container - Circle */}
      <motion.div
        className={`relative w-full max-w-md aspect-square rounded-full overflow-hidden cursor-pointer transition-all ${
          dragOver ? 'scale-105' : ''
        }`}
        whileHover={{ scale: 1.03 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {true ? (
          <>
            {/* Circular Image */}
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>

            {/* Overlay Gradient - Subtle */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none rounded-full" />

            {/* Animated Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full"
              animate={{
                x: [-150, 150],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              pointerEvents="none"
            />
          </>
        ) : !imageError ? (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-white font-semibold mb-2 text-sm">Drag Your Photo</p>
            <p className="text-xs text-gray-200">or save to public/images/</p>
          </div>
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">⚠️</div>
            <p className="text-white text-center px-4 text-xs">Error loading</p>
          </div>
        )}
      </motion.div>

      {/* Floating Particles - More visible */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          pointerEvents="none"
        />
      ))}
    </motion.div>
  )
}

export default ProfileImage
