import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const RobotFollower = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const robotRef = React.useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect()
        const robotCenterX = rect.left + rect.width / 2
        const robotCenterY = rect.top + rect.height / 2

        const angle = Math.atan2(e.clientY - robotCenterY, e.clientX - robotCenterX)
        const rotationDeg = (angle * 180) / Math.PI + 90

        const distance = Math.sqrt(
          Math.pow(e.clientX - robotCenterX, 2) + 
          Math.pow(e.clientY - robotCenterY, 2)
        )
        const maxDistance = 500
        const depth = Math.min(distance / maxDistance, 1) * 20

        setRotation({
          y: rotationDeg,
          x: depth - 10,
        })

        // Create particles
        if (Math.random() > 0.7) {
          const newParticle = {
            id: Math.random(),
            x: (Math.random() - 0.5) * 30,
            y: (Math.random() - 0.5) * 30,
          }
          setParticles(prev => [...prev, newParticle])
          setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== newParticle.id))
          }, 1000)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={robotRef}
      className="relative w-56 h-64 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Particle Effects */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: 1,
            scale: 1
          }}
          animate={{ 
            x: particle.x + (Math.random() - 0.5) * 40,
            y: particle.y - 30,
            opacity: 0,
            scale: 0
          }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Inner Glow Ring */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-purple-400/30"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
      />

      <motion.div
        className="relative w-full h-full"
        style={{
          perspective: '1000px',
        }}
        animate={{
          rotationY: rotation.y,
          rotationX: rotation.x,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* Robot Head */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-lg shadow-xl relative overflow-hidden"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {/* Head Glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-lg"></div>

          {/* Top Antenna Left */}
          <motion.div 
            className="absolute -top-10 left-3 w-1.5 h-10 bg-gradient-to-t from-cyan-400 via-blue-400 to-purple-500 rounded-full shadow-lg"
            animate={{
              rotate: [-45, -35, -45],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Top Antenna Right */}
          <motion.div 
            className="absolute -top-10 right-3 w-1.5 h-10 bg-gradient-to-t from-cyan-400 via-blue-400 to-purple-500 rounded-full shadow-lg"
            animate={{
              rotate: [45, 35, 45],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1,
            }}
          />

          {/* Left Eye */}
          <motion.div
            className="absolute top-6 left-5 w-5 h-5 bg-cyan-300 rounded-full shadow-xl border-2 border-cyan-200 relative overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.4)',
                '0 0 20px rgba(34, 211, 238, 1), inset 0 0 12px rgba(34, 211, 238, 0.6)',
                '0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.4)'
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <motion.div 
              className="absolute inset-1 bg-blue-900 rounded-full"
              animate={{
                scale: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Right Eye */}
          <motion.div
            className="absolute top-6 right-5 w-5 h-5 bg-cyan-300 rounded-full shadow-xl border-2 border-cyan-200 relative overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.4)',
                '0 0 20px rgba(34, 211, 238, 1), inset 0 0 12px rgba(34, 211, 238, 0.6)',
                '0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.4)'
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2,
            }}
          >
            <motion.div 
              className="absolute inset-1 bg-blue-900 rounded-full"
              animate={{
                scale: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.2,
              }}
            />
          </motion.div>

          {/* Mouth */}
          <motion.div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full shadow-lg"
            animate={{
              scaleX: [0.8, 1, 0.8],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Robot Body */}
        <motion.div
          className="absolute top-28 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 rounded-xl shadow-xl relative overflow-hidden"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.2,
          }}
        >
          {/* Body Glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg"></div>

          {/* Tech Lines */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50"></div>

          {/* Left Button */}
          <motion.div
            className="absolute top-5 left-5 w-4 h-4 bg-red-500 rounded-full shadow-lg border-2 border-red-300 cursor-pointer"
            whileHover={{ scale: 1.3 }}
            animate={{
              boxShadow: [
                '0 0 8px rgba(239, 68, 68, 0.6), inset 0 0 4px rgba(239, 68, 68, 0.3)',
                '0 0 15px rgba(239, 68, 68, 1), inset 0 0 8px rgba(239, 68, 68, 0.5)',
                '0 0 8px rgba(239, 68, 68, 0.6), inset 0 0 4px rgba(239, 68, 68, 0.3)'
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            }}
          />

          {/* Center Button */}
          <motion.div
            className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg border-2 border-yellow-200 cursor-pointer"
            whileHover={{ scale: 1.3 }}
            animate={{
              boxShadow: [
                '0 0 8px rgba(250, 204, 21, 0.6), inset 0 0 4px rgba(250, 204, 21, 0.3)',
                '0 0 15px rgba(250, 204, 21, 1), inset 0 0 8px rgba(250, 204, 21, 0.5)',
                '0 0 8px rgba(250, 204, 21, 0.6), inset 0 0 4px rgba(250, 204, 21, 0.3)'
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1,
            }}
          />

          {/* Right Button */}
          <motion.div
            className="absolute top-5 right-5 w-4 h-4 bg-green-500 rounded-full shadow-lg border-2 border-green-300 cursor-pointer"
            whileHover={{ scale: 1.3 }}
            animate={{
              boxShadow: [
                '0 0 8px rgba(34, 197, 94, 0.6), inset 0 0 4px rgba(34, 197, 94, 0.3)',
                '0 0 15px rgba(34, 197, 94, 1), inset 0 0 8px rgba(34, 197, 94, 0.5)',
                '0 0 8px rgba(34, 197, 94, 0.6), inset 0 0 4px rgba(34, 197, 94, 0.3)'
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
            }}
          />

          {/* Display Screen */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-lg border-2 border-cyan-400 overflow-hidden shadow-lg">
            <motion.div 
              className="w-full h-full flex items-center justify-center text-xs text-cyan-300 font-mono font-bold"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              ✦ AI ✦
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/10 to-transparent"></div>
          </div>
        </motion.div>

        {/* Left Arm */}
        <motion.div
          className="absolute top-32 -left-14 w-12 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
          animate={{
            x: [-8, 8, -8],
            rotate: [-18, 8, -18],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <motion.div
            className="absolute -left-7 top-0 w-7 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg"
            animate={{
              rotate: [-25, 35, -25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="absolute -left-4 top-1 w-4 h-3 bg-gradient-to-r from-cyan-400 to-blue-700 rounded-full shadow-lg"></div>
          </motion.div>
        </motion.div>

        {/* Right Arm */}
        <motion.div
          className="absolute top-32 -right-14 w-12 h-5 bg-gradient-to-l from-blue-500 to-blue-600 rounded-full shadow-lg"
          animate={{
            x: [8, -8, 8],
            rotate: [18, -8, 18],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.3,
          }}
        >
          <motion.div
            className="absolute -right-7 top-0 w-7 h-5 bg-gradient-to-l from-blue-600 to-blue-700 rounded-full shadow-lg"
            animate={{
              rotate: [25, -35, 25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.3,
            }}
          >
            <div className="absolute -right-4 top-1 w-4 h-3 bg-gradient-to-l from-cyan-400 to-blue-700 rounded-full shadow-lg"></div>
          </motion.div>
        </motion.div>

        {/* Left Leg */}
        <motion.div
          className="absolute -bottom-2 left-6 w-4 h-10 bg-gradient-to-b from-blue-600 to-blue-900 rounded-sm shadow-lg"
          animate={{
            y: [0, 4, 0],
            scaleY: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.1,
          }}
        >
          <motion.div 
            className="absolute -bottom-3 left-0 w-8 h-3 bg-gradient-to-b from-blue-900 to-cyan-900 rounded-full shadow-lg border border-cyan-400/50"
            animate={{
              scaleX: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1,
            }}
          />
        </motion.div>

        {/* Right Leg */}
        <motion.div
          className="absolute -bottom-2 right-6 w-4 h-10 bg-gradient-to-b from-blue-600 to-blue-900 rounded-sm shadow-lg"
          animate={{
            y: [0, 4, 0],
            scaleY: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.3,
          }}
        >
          <motion.div 
            className="absolute -bottom-3 right-0 w-8 h-3 bg-gradient-to-b from-blue-900 to-cyan-900 rounded-full shadow-lg border border-cyan-400/50"
            animate={{
              scaleX: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl -z-10 animate-pulse"></div>
      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 blur-3xl -z-10"></div>
    </motion.div>
  )
}

export default RobotFollower
