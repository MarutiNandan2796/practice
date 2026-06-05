import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaDatabase, FaServer, FaCode } from 'react-icons/fa'

const ExpertiseShowcase = () => {
  const expertise = [
    {
      icon: FaReact,
      title: 'Frontend Development',
      description: 'Building responsive, interactive UIs with React, Vue.js, and Next.js. Expertise in modern CSS frameworks and animations.',
      technologies: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderGlow: 'group-hover:border-cyan-400/50',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and PHP. Designing RESTful APIs and microservices.',
      technologies: ['Node.js', 'Express.js', 'PHP', 'JWT Auth', 'REST APIs'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGlow: 'group-hover:border-blue-400/50',
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Designing and optimizing databases with MongoDB and MySQL. Ensuring data integrity and optimal query performance.',
      technologies: ['MongoDB', 'MySQL', 'XAMPP', 'Mongoose', 'Indexing'],
      gradient: 'from-cyan-400/20 to-teal-500/20',
      borderGlow: 'group-hover:border-cyan-400/50',
    },
    {
      icon: FaCode,
      title: 'Full Stack Architecture',
      description: 'Designing scalable application architecture with efficient database design, secure APIs, and cloud-ready deployments.',
      technologies: ['MERN Stack', 'System Design', 'REST APIs', 'Cloud Deployment', 'DevOps'],
      gradient: 'from-teal-500/20 to-cyan-400/20',
      borderGlow: 'group-hover:border-teal-400/50',
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1, delay: 0.5 },
    },
  }

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Orb */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, 80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Bottom Right Orb */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Center Point Light */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'linear-gradient(45deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Expertise
            </span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-6"
          >
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
          </motion.h2>

          {/* Underline Animation */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive expertise across modern web technologies, from pixel-perfect frontends to robust backend architecture. 
            Every project is crafted with precision and innovation at its core.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {expertise.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -12 }}
                className="group relative h-full perspective"
              >
                {/* Premium Card Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${exp.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500`}
                  animate={{ 
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-20 group-hover:opacity-30 transition duration-300`} />

                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-slate-600/80 rounded-2xl p-8 transition duration-300 flex flex-col overflow-hidden">
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ pointerEvents: 'none' }}
                  />

                  {/* Number Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm"
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/40 transition duration-300"
                  >
                    <Icon className="text-2xl text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition duration-300">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-semibold">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08, y: -2 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs rounded-lg border border-primary/30 group-hover:border-primary/50 group-hover:from-primary/20 group-hover:to-secondary/20 transition duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ExpertiseShowcase
