import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const codeLines = ['<portfolio>', 'compiling...', '</portfolio>']
  const [displayText, setDisplayText] = useState('')
  const fullText = 'building your awesome portfolio...'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  // Generate animated particles
  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 2,
  }))

  // Generate floating symbols
  const floatingSymbols = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    symbol: ['✦', '◈', '✧', '●', '○', '■', '□', '◆', '◇', '▲', '△', '✪', '⬢', '⬡', '★'][i % 15],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 3,
  }))

  // Generate wave lines
  const waveLines = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    initialY: (i - 2) * 30,
    delay: i * 0.2,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, type: 'spring', stiffness: 120 },
    },
  }

  const dotVariants = {
    initial: { opacity: 0.2, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  }

  // Matrix-like falling code
  const fallingCodes = Array.from({ length: 25 }).map((_, i) => 
    ['const', 'let', 'var', 'async', 'await', 'function', 'return', 'import', 'export', 'class', 'interface', 'type', 'enum', 'async', 'await'][Math.floor(Math.random() * 15)]
  )

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Ultra Glow Orbs - Background Layer */}
      <motion.div
        className="absolute w-screen h-screen top-0 left-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.08) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Symbols - New Animation Layer */}
      {floatingSymbols.map((symbol) => (
        <motion.div
          key={`symbol-${symbol.id}`}
          className="absolute text-primary/40 font-bold text-xl"
          animate={{
            y: [symbol.y - 50, symbol.y + 100, symbol.y - 50],
            x: [symbol.x - 30, symbol.x + 30, symbol.x - 30],
            opacity: [0, 0.6, 0],
            rotate: [0, 360, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            textShadow: '0 0 15px rgba(0, 217, 255, 0.5)',
          }}
        >
          {symbol.symbol}
        </motion.div>
      ))}

      {/* Animated Particles - New Enhanced */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 217, 255, 0.8)`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.cos(particle.id) * 50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Scanning Beams - New */}
      {[0, 1].map((i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            y: ['-50%', '150%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Wave Lines - New */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        {waveLines.map((wave) => (
          <motion.path
            key={`wave-${wave.id}`}
            d={`M 0 ${200 + wave.initialY} Q 250 ${200 + wave.initialY - 20}, 500 ${200 + wave.initialY} T 1000 ${200 + wave.initialY} T 1500 ${200 + wave.initialY} T 2000 ${200 + wave.initialY}`}
            stroke="rgba(0, 217, 255, 0.3)"
            strokeWidth="2"
            fill="none"
            animate={{
              strokeDashoffset: [0, -2000],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + wave.delay * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: wave.delay,
            }}
            style={{
              strokeDasharray: '2000',
            }}
          />
        ))}
      </svg>

      {/* Pulsing Energy Waves - New */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 3 + i * 0.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 0.4,
          }}
          style={{
            width: '100px',
            height: '100px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 30px rgba(0, 217, 255, ${0.5 - i * 0.1})`,
          }}
        />
      ))}

      {/* Animated Floating Orbs - Additional */}
      <motion.div
        className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 0.9, 1.2, 1],
          opacity: [0.15, 0.5, 0.2, 0.6, 0.2],
          x: [0, 120, -60, 80, 0],
          y: [0, 80, -60, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-20%', left: '-15%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          scale: [1.4, 0.9, 1.2, 1, 1.3],
          opacity: [0.15, 0.2, 0.6, 0.3, 0.2],
          x: [-120, 60, 80, -40, 0],
          y: [-80, 60, 40, -60, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
        style={{ bottom: '-20%', right: '-15%' }}
      />

      {/* Extra Animated Orbs - New */}
      <motion.div
        className="absolute w-72 h-72 bg-cyan-400/25 rounded-full blur-3xl"
        animate={{ 
          scale: [0.9, 1.3, 0.8, 1.1],
          opacity: [0.2, 0.5, 0.1, 0.4],
          x: [-100, 100, -50],
          y: [50, -50, 50]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ top: '20%', right: '20%' }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 0.8, 1.2, 0.9],
          opacity: [0.1, 0.4, 0.2, 0.3],
          x: [80, -80, 40],
          y: [-60, 60, -30]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        style={{ bottom: '25%', left: '15%' }}
      />

      {/* Extra Pink Glow */}
      <motion.div
        className="absolute w-80 h-80 bg-pink-500/25 rounded-full blur-3xl"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.4, 0.1],
          x: [50, -50, 50]
        }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{ top: '25%', right: '15%' }}
      />

      {/* Cyberpunk Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '40px 40px',
        }}
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Scanlines Effect */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 217, 255, 0.3) 0px, rgba(0, 217, 255, 0.3) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 4px',
        }}
        animate={{ opacity: [0.03, 0.12, 0.03] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Enhanced Rotating Geometric Shapes */}
      <motion.div
        className="absolute w-96 h-96"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl"
          style={{
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.5), inset 0 0 30px rgba(0, 217, 255, 0.1)'
          }}
        />
      </motion.div>

      <motion.div
        className="absolute w-80 h-80"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="absolute inset-0 border-2 border-secondary/25 rounded-full"
          style={{
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.4)'
          }}
        />
      </motion.div>

      {/* Animated Light Orbs - Enhanced */}
      <motion.div
        className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 0.9, 1.2, 1],
          opacity: [0.15, 0.5, 0.2, 0.6, 0.2],
          x: [0, 120, -60, 80, 0],
          y: [0, 80, -60, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-20%', left: '-15%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          scale: [1.4, 0.9, 1.2, 1, 1.3],
          opacity: [0.15, 0.2, 0.6, 0.3, 0.2],
          x: [-120, 60, 80, -40, 0],
          y: [-80, 60, 40, -60, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
        style={{ bottom: '-20%', right: '-15%' }}
      />

      {/* Extra Pink Glow */}
      <motion.div
        className="absolute w-80 h-80 bg-pink-500/25 rounded-full blur-3xl"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.4, 0.1],
          x: [50, -50, 50]
        }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{ top: '25%', right: '15%' }}
      />

      {/* Animated Circuit Paths - New */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`circuit-${i}`}
            d={`M 0 ${100 + i * 100} Q ${window.innerWidth / 2} ${50 + i * 80}, ${window.innerWidth} ${150 + i * 100}`}
            stroke="rgba(0, 217, 255, 0.4)"
            strokeWidth="2"
            fill="none"
            animate={{
              strokeDashoffset: [0, -3000],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              filterShadow: '0 0 10px rgba(0, 217, 255, 0.8)',
              strokeDasharray: '2000',
            }}
          />
        ))}
      </svg>

      {/* Falling Code (Matrix Effect) - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => {
          const codes = ['const', 'let', 'var', 'async', 'await', 'function', 'return', 'import', 'export', 'class', 'interface', 'type', 'enum', 'null', 'true']
          return (
            <motion.div
              key={i}
              className="absolute font-mono text-primary/50 text-xs md:text-sm font-semibold"
              animate={{ 
                y: ['-15%', '120%'],
                opacity: [0, 0.7, 0.3, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeIn',
                delay: Math.random() * 4,
              }}
              style={{
                left: `${(i * (100 / 25))}%`,
                top: '-15%',
                textShadow: '0 0 15px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 217, 255, 0.4)',
              }}
            >
              {codes[i % codes.length]}
            </motion.div>
          )
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Rotating Rings - Enhanced */}
        <motion.div
          className="absolute -inset-40 border-2 border-primary/50 rounded-full"
          animate={{ 
            rotate: 360, 
            borderColor: ['rgba(0, 217, 255, 0.5)', 'rgba(236, 72, 153, 0.5)', 'rgba(0, 217, 255, 0.5)'],
            boxShadow: ['0 0 20px rgba(0, 217, 255, 0.4)', '0 0 50px rgba(236, 72, 153, 0.5)', '0 0 20px rgba(0, 217, 255, 0.4)', '0 0 80px rgba(0, 217, 255, 0.6)']
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        <motion.div
          className="absolute -inset-56 border-2 border-secondary/40 rounded-full"
          animate={{ 
            rotate: -360, 
            borderColor: ['rgba(236, 72, 153, 0.4)', 'rgba(0, 217, 255, 0.4)', 'rgba(236, 72, 153, 0.4)'],
            boxShadow: ['0 0 30px rgba(236, 72, 153, 0.3)', '0 0 60px rgba(0, 217, 255, 0.4)', '0 0 40px rgba(236, 72, 153, 0.5)']
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Extra Rotating Rings - New */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-primary/20"
            animate={{ 
              rotate: i % 2 === 0 ? 360 : -360,
              opacity: [0.2, 0.5, 0.2],
              borderColor: i % 2 === 0 
                ? ['rgba(0, 217, 255, 0.2)', 'rgba(236, 72, 153, 0.3)', 'rgba(0, 217, 255, 0.2)']
                : ['rgba(236, 72, 153, 0.2)', 'rgba(0, 217, 255, 0.3)', 'rgba(236, 72, 153, 0.2)'],
            }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
            style={{ 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: `${280 + i * 80}px`,
              height: `${280 + i * 80}px`,
            }}
          />
        ))}

        {/* Extra Rotating Ring - New */}
        <motion.div
          className="absolute -inset-72 border border-primary/20 rounded-full"
          animate={{ 
            rotate: 360,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Pulsing Core Circle - New */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-primary/40 blur-lg"
          animate={{ 
            scale: [0.8, 1.4, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' }}
        />

        {/* Rotating Gradient Rings - New */}
        <motion.div
          className="absolute -inset-32 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'conic-gradient(from 0deg, rgba(0, 217, 255, 0.1), rgba(236, 72, 153, 0.1), rgba(0, 217, 255, 0.1))',
            opacity: 0.5,
          }}
        />

        {/* Code Block Container - Enhanced */}
        <motion.div
          className="font-mono text-base md:text-xl text-primary relative px-10 py-8 border-2 border-primary/70 rounded-lg bg-gradient-to-br from-slate-900/95 to-slate-950/98 backdrop-blur-xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.7, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 90 }}
          whileHover={{ 
            borderColor: 'rgba(236, 72, 153, 1)',
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 40px rgba(0, 217, 255, 0.1)'
          }}
        >
          {/* Animated Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-lg blur-2xl opacity-0 -z-10"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Animated Pulse Border - New */}
          <motion.div
            className="absolute inset-0 border border-primary/30 rounded-lg pointer-events-none"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(0, 217, 255, 0.5)',
                '0 0 30px 10px rgba(0, 217, 255, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Flowing Light Effect - New */}
          <motion.div
            className="absolute -inset-1 rounded-lg opacity-0 -z-10"
            animate={{
              boxShadow: [
                'inset 0 0 0 1px rgba(0, 217, 255, 0), inset -100px 0 0 -50px rgba(0, 217, 255, 0.1)',
                'inset 0 0 0 1px rgba(0, 217, 255, 0), inset 100px 0 0 -50px rgba(0, 217, 255, 0.1)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Corner Bracket Accents */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/60"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/60"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-secondary/60"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-secondary/60"></div>

          {/* Terminal Header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-primary/30">
            <motion.span
              className="text-secondary text-xl font-bold"
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.8)' }}
            >
              ⚙️
            </motion.span>
            <motion.span
              className="text-primary text-sm font-bold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              $ 
            </motion.span>
            <span className="text-primary/70 font-semibold">compile</span>
            {/* Animated Dots */}
            <motion.div className="flex gap-1.5 ml-auto">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="text-primary text-2xl font-bold"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  style={{ textShadow: '0 0 8px rgba(0, 217, 255, 0.8)' }}
                >
                  •
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Code Lines with Enhanced Animations */}
          <div className="space-y-3">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                variants={lineVariants}
                className="flex items-center gap-2 relative group"
              >
                <span className="text-secondary/60 text-xs font-bold select-none w-6">{String(index + 1).padStart(2, '0')}</span>
                <motion.span
                  className="text-primary/60 text-lg"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  ║
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  transition={{ duration: 0.9, delay: index * 0.25 }}
                >
                  <motion.span
                    className="inline-block font-semibold"
                    animate={{ color: ['#00d9ff', '#ec4899', '#00d9ff'] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      textShadow: '0 0 12px currentColor'
                    }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
                {index === 1 && (
                  <motion.span
                    className="text-secondary text-2xl ml-2 font-bold"
                    animate={{ opacity: [0, 1, 0], x: [0, 6, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ textShadow: '0 0 8px rgba(236, 72, 153, 0.8)' }}
                  >
                    █
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Loading Bar - Enhanced */}
        <motion.div
          className="w-80 h-2.5 bg-slate-700/40 rounded-full overflow-hidden mx-auto relative border-2 border-primary/50 mt-10 shadow-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ 
              x: ['-100%', '100%'],
              boxShadow: ['0 0 0 0 rgba(0, 217, 255, 0)', '0 0 40px 5px rgba(0, 217, 255, 0.8)']
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* Inner Glow */}
          <motion.div
            className="absolute inset-0 h-full bg-gradient-to-r from-primary/30 to-secondary/30"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Animated Underline Pulse - New */}
        <motion.div
          className="absolute w-80 h-1 mx-auto rounded-full mt-14"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.6), transparent)',
          }}
          animate={{
            scaleX: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Status Text - Typewriter Effect */}
        <motion.div
          className="text-gray-400 text-xs md:text-sm mt-8 font-mono tracking-widest h-6 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-primary font-bold">{'<'}</span>
          <motion.span
            className="text-primary font-semibold ml-1"
            style={{
              textShadow: '0 0 10px rgba(0, 217, 255, 0.9)'
            }}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="text-primary font-bold ml-1"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            █
          </motion.span>
          <span className="text-primary font-bold">{'/>'}</span>
        </motion.div>

        {/* Percentage Counter */}
        <motion.div
          className="text-5xl md:text-6xl font-black text-primary mt-8 font-mono tracking-wider"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
          style={{
            textShadow: '0 0 30px rgba(0, 217, 255, 0.9), 0 0 60px rgba(0, 217, 255, 0.5)'
          }}
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7], textShadow: ['0 0 20px rgba(0, 217, 255, 0.5)', '0 0 40px rgba(0, 217, 255, 0.9)', '0 0 20px rgba(0, 217, 255, 0.5)'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            [
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0.8, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            100%
          </motion.span>
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7], textShadow: ['0 0 20px rgba(0, 217, 255, 0.5)', '0 0 40px rgba(236, 72, 153, 0.9)', '0 0 20px rgba(0, 217, 255, 0.5)'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            ]
          </motion.span>
        </motion.div>

        {/* Floating Tech Tags - Enhanced */}
        {['<React/>', '<Vite/>', '<Tailwind/>', '<Framer/>', '<JS/>', '<CSS/>'].map((tech, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/60 font-mono text-xs md:text-sm font-bold"
            animate={{
              y: [0, -60, -10],
              opacity: [0, 0.9, 0],
              x: Math.sin(i * 1.5) * 60,
              scale: [1, 1.15, 0.9],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.35,
              ease: 'easeInOut'
            }}
            style={{
              left: `${12 + i * 14}%`,
              bottom: '-15%',
              textShadow: '0 0 12px rgba(0, 217, 255, 0.7)'
            }}
          >
            {tech}
          </motion.div>
        ))}

        {/* Data Stream Lines - Enhanced */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute text-primary/40 font-mono text-sm font-bold"
            animate={{
              x: [0, 40, -20, 0],
              opacity: [0, 0.7, 0],
              y: [-120, 0],
              scale: [1, 1.3, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${22 + i * 20}%`,
              top: '5%',
              textShadow: '0 0 10px rgba(0, 217, 255, 0.8)'
            }}
          >
            ▲
          </motion.div>
        ))}

        {/* Additional Animated Corner Elements - New */}
        {[
          { icon: '◆', top: '-8%', left: '5%', duration: 5 },
          { icon: '◇', top: '-8%', right: '5%', duration: 6 },
          { icon: '■', bottom: '-8%', left: '5%', duration: 7 },
          { icon: '□', bottom: '-8%', right: '5%', duration: 8 },
        ].map((elem, i) => (
          <motion.div
            key={`corner-${i}`}
            className="absolute text-primary/50 text-2xl"
            animate={{
              rotate: 360,
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: elem.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              top: elem.top,
              bottom: elem.bottom,
              left: elem.left,
              right: elem.right,
              textShadow: '0 0 15px rgba(0, 217, 255, 0.6)',
            }}
          >
            {elem.icon}
          </motion.div>
        ))}

        {/* Dancing Lines - New Animation */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              width: '100px',
              top: `${30 + i * 15}%`,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Loader
