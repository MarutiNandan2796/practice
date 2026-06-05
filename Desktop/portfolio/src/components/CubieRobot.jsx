import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ModernRobot = () => {
  const [rotation, setRotation] = useState({ x: -20, y: -25 })
  const [particles, setParticles] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const robotRef = React.useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect()
        const robotCenterX = rect.left + rect.width / 2
        const robotCenterY = rect.top + rect.height / 2

        const distX = (e.clientX - robotCenterX) / 100
        const distY = (e.clientY - robotCenterY) / 100

        setRotation({
          x: -20 + distY * 18,
          y: -25 + distX * 18,
        })

        if (Math.random() > 0.82) {
          const newParticle = {
            id: Math.random(),
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            color: ['cyan', 'purple', 'blue', 'pink'][Math.floor(Math.random() * 4)],
          }
          setParticles(prev => [...prev.slice(-12), newParticle])
          setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== newParticle.id))
          }, 2000)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const colorMap = {
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    blue: 'bg-blue-400',
    pink: 'bg-pink-400',
  }

  return (
    <div
      ref={robotRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        perspective: '1800px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Advanced Particle System */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className={`absolute w-2 h-2 ${colorMap[particle.color]} rounded-full pointer-events-none blur-sm`}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 120,
            y: particle.y - 100,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      ))}

      {/* Multi-layer Environmental Lighting */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 rounded-full blur-3xl"
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Robot 3D Container */}
      <motion.div
        className="relative flex flex-col items-center"
        animate={{
          rotationX: rotation.x,
          rotationY: rotation.y,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 12,
          mass: 1.4,
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1800px',
        }}
      >
        {/* ========== SLEEK HEAD ========== */}
        <motion.div
          className="relative w-32 h-40 rounded-3xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
            boxShadow: `
              0 50px 120px rgba(6, 182, 212, 0.4),
              inset -15px -15px 35px rgba(0, 0, 0, 0.5),
              inset 15px 15px 35px rgba(34, 211, 238, 0.15)
            `,
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Head Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-purple-400/10"></div>

          {/* Advanced Holographic Display */}
          <motion.div
            className="absolute inset-8 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #0c0e27 0%, #1a1f3a 50%, #0c0e27 100%)',
              boxShadow: 'inset 0 0 40px rgba(34, 211, 238, 0.3), 0 0 50px rgba(34, 211, 238, 0.5)',
              border: '2px solid rgba(34, 211, 238, 0.6)',
            }}
            animate={{
              boxShadow: [
                'inset 0 0 40px rgba(34, 211, 238, 0.3), 0 0 50px rgba(34, 211, 238, 0.5)',
                'inset 0 0 60px rgba(34, 211, 238, 0.5), 0 0 80px rgba(34, 211, 238, 0.8)',
                'inset 0 0 40px rgba(34, 211, 238, 0.3), 0 0 50px rgba(34, 211, 238, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            {/* Scan Line Animation */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)',
                backgroundSize: '100% 3px',
              }}
            />

            {/* LEFT CYBER EYE */}
            <motion.div
              className="absolute top-10 left-6 z-10"
              animate={{
                rotateZ: [0, 8, -8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="relative w-12 h-12 rounded-xl overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0.3))',
                  boxShadow: '0 0 40px rgba(34, 211, 238, 1), inset -5px -5px 15px rgba(0, 0, 0, 0.5), inset 5px 5px 15px rgba(34, 211, 238, 0.3)',
                  border: '2px solid rgba(34, 211, 238, 0.8)',
                }}
              >
                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-300/60 to-blue-500/30"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Pupil */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    x: [0, 3, -2, 0],
                    y: [0, 2, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-5 h-5 bg-slate-950 rounded-full border border-cyan-400/70"></div>
                  <motion.div
                    className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT CYBER EYE */}
            <motion.div
              className="absolute top-10 right-6 z-10"
              animate={{
                rotateZ: [0, -8, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 0.2,
              }}
            >
              <motion.div
                className="relative w-12 h-12 rounded-xl overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0.3))',
                  boxShadow: '0 0 40px rgba(34, 211, 238, 1), inset -5px -5px 15px rgba(0, 0, 0, 0.5), inset 5px 5px 15px rgba(34, 211, 238, 0.3)',
                  border: '2px solid rgba(34, 211, 238, 0.8)',
                }}
              >
                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-300/60 to-blue-500/30"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                />

                {/* Pupil */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    x: [-3, 2, 3, -3],
                    y: [-2, -3, 2, -2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                >
                  <div className="w-5 h-5 bg-slate-950 rounded-full border border-cyan-400/70"></div>
                  <motion.div
                    className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hologram Message */}
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="text-xl font-mono text-cyan-400 font-bold tracking-widest">
                AI
              </div>
            </motion.div>
          </motion.div>

          {/* Side Accent Panels */}
          <motion.div
            className="absolute top-12 -left-1 w-2 h-20 rounded-r-lg bg-gradient-to-b from-cyan-400 to-purple-500 shadow-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
              x: [0, 2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-12 -right-1 w-2 h-20 rounded-l-lg bg-gradient-to-b from-purple-500 to-cyan-400 shadow-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
              x: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1,
            }}
          />
        </motion.div>

        {/* ========== TORSO ========== */}
        <motion.div
          className="relative w-28 h-28 rounded-2xl mt-2"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
            boxShadow: `
              0 30px 80px rgba(6, 182, 212, 0.3),
              inset -10px -10px 25px rgba(0, 0, 0, 0.4),
              inset 10px 10px 25px rgba(34, 211, 238, 0.1)
            `,
          }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.1,
          }}
        >
          {/* Torso glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-2xl"></div>

          {/* Central Core Orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(34, 211, 238, 0.8), rgba(6, 182, 212, 0.2))',
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.8), inset -8px -8px 20px rgba(0, 0, 0, 0.4), inset 8px 8px 20px rgba(34, 211, 238, 0.3)',
            }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Inner Energy */}
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Side Detail Lines */}
          <div className="absolute left-3 top-1/4 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600" style={{ height: '40%' }}></div>
          <div className="absolute right-3 top-1/4 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600" style={{ height: '40%' }}></div>
        </motion.div>

        {/* ========== ARMS ========== */}
        <div className="relative flex gap-24 mt-3 items-start">
          {/* LEFT ARM */}
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{
              rotateZ: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="w-5 h-16 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                boxShadow: '0 15px 40px rgba(6, 182, 212, 0.3)',
              }}
            />

            <motion.div
              className="w-5 h-5 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0.3))',
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.7)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="w-4 h-14 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                boxShadow: '0 12px 35px rgba(6, 182, 212, 0.25)',
              }}
            />

            <motion.div
              className="w-9 h-9 rounded-lg flex items-center justify-center gap-1"
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
                border: '1.5px solid rgba(34, 211, 238, 0.5)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"
                  animate={{
                    scaleY: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT ARM - POWER POSE */}
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{
              rotateZ: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="w-5 h-16 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                boxShadow: '0 15px 40px rgba(6, 182, 212, 0.3)',
              }}
              animate={{
                rotateX: [-10, 10, -10],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="w-5 h-5 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.3))',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.7)',
              }}
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: 0.3,
              }}
            />

            <motion.div
              className="w-4 h-14 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                boxShadow: '0 12px 35px rgba(6, 182, 212, 0.25)',
              }}
              animate={{
                rotateX: [10, -10, 10],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: 0.3,
              }}
            />

            {/* POWER FIST */}
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), inset 0 0 20px rgba(168, 85, 247, 0.3)',
                border: '2px solid rgba(168, 85, 247, 0.8)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                rotateZ: [25, 35, 25],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            >
              <motion.div
                className="text-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ⚡
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ========== LEGS ========== */}
        <div className="relative flex gap-8 mt-2 items-start">
          {[0, 1].map((leg) => (
            <motion.div
              key={leg}
              className="flex flex-col items-center gap-1.5"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: leg * 0.15,
              }}
            >
              <div className="w-4 h-16 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  boxShadow: '0 12px 35px rgba(6, 182, 212, 0.2)',
                }}
              />
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.8), rgba(6, 182, 212, 0.2))',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: leg * 0.15,
                }}
              />
              <div className="w-4 h-14 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)',
                }}
              />
              <motion.div
                className="w-8 h-6 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  boxShadow: '0 0 25px rgba(34, 211, 238, 0.5)',
                  border: '1.5px solid rgba(34, 211, 238, 0.6)',
                }}
                animate={{
                  y: [0, 3, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: leg * 0.15,
                }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Massive Glow Background */}
      <motion.div
        className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/40 via-purple-500/30 to-pink-500/40 blur-3xl -z-10"
        animate={{
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Rotating Energy Field */}
      <motion.div
        className="absolute -inset-20 rounded-full -z-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'conic-gradient(from 0deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}

export default ModernRobot
