import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Generate animated dots
  const dots = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
    x: (i - 3.5) * 60,
  }))

  return (
    <footer className="relative bg-gradient-to-b from-dark/30 via-dark/50 to-dark/80 border-t border-primary/30 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated Top Border Line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          animate={{
            y: [0, -100, 0],
            x: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '50%',
            boxShadow: '0 0 8px rgba(0, 217, 255, 0.6)',
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Top Section with Animated Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          {/* Animated Decorative Top Line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '200px' }}
          />

          {/* Brand */}
          <motion.div
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent relative"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Glow effect behind text */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-lg -z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Portfolio
          </motion.div>

          {/* Animated Decorative Bottom Line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent rounded-full"
            animate={{ scaleX: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            style={{ width: '200px' }}
          />
        </motion.div>

        {/* Animated Dot Pattern */}
        <motion.div className="flex justify-center gap-3 mb-8">
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="w-2 h-2 rounded-full bg-primary/50"
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut',
              }}
              style={{
                boxShadow: '0 0 8px rgba(0, 217, 255, 0.5)',
              }}
            />
          ))}
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          className="relative h-12 flex items-center justify-center my-6"
        >
          <motion.div
            className="absolute inset-0 flex items-center"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          </motion.div>
          
          {/* Center Accent */}
          <motion.div
            className="relative z-10 flex gap-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/60"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600 dark:text-gray-400 text-sm"
        >
          {/* Left - Copyright */}
          <motion.p
            className="relative"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.span
              className="absolute -left-3 top-0 text-primary/60"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'<'}
            </motion.span>
            <span className="ml-2">© {currentYear} Your Name. All rights reserved.</span>
            <motion.span
              className="absolute -right-3 top-0 text-primary/60"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>'}
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Bottom Animated Border */}
        <motion.div
          className="relative h-8 flex items-end mt-8"
        >
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent rounded-full"
            animate={{
              scaleX: [1, 0.8, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
