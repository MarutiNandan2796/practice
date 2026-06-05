import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaTimes, FaAward, FaBuilding } from 'react-icons/fa'

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false)
  const [certificateType, setCertificateType] = useState(null)

  const experiences = [
    {
      type: 'internship',
      title: 'Internship – CMS & E-commerce Development',
      company: 'WorldWin Coder Pvt. Ltd',
      duration: 'May 20, 2025 – July 16, 2025',
      description: 'Completed an internship focused on Content Management Systems (CMS) and E-commerce Development. Demonstrated exceptional dedication, enthusiasm, and professionalism while actively engaging in real-world projects and contributing meaningfully to the team.',
      skills: ['CMS', 'E-commerce', 'Web Development', 'Content Management'],
      icon: FaBriefcase,
      hasCertificate: true,
    },
    {
      type: 'training',
      title: 'MERN Stack Training Program',
      company: 'Cipher School',
      duration: 'Self-Paced Learning',
      description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js (MERN Stack). Mastered full-stack development with modern JavaScript frameworks, backend API development, and database management.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'Full-Stack Development'],
      icon: FaGraduationCap,
      hasCertificate: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const certificateContent = {
    internship: {
      certificatePath: '/internship-certificate.pdf',
    },
    training: {
      certificatePath: '/mern-stack.pdf',
    },
  }

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Training
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-14 md:p-16 bg-gradient-to-br from-slate-700/30 to-slate-900/30 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-secondary/50 transition-all duration-300"
                whileHover={{ y: -5, borderColor: 'rgba(236, 72, 153, 0.5)' }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-300 -z-10"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon */}
                    <motion.div
                      className="p-3 bg-primary/20 rounded-lg text-primary text-lg flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent />
                    </motion.div>

                    {/* Title Section */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <FaBuilding className="text-primary text-sm" />
                        <p className="text-primary font-semibold text-sm md:text-base">{exp.company}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-2">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 whitespace-normal break-words">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 bg-primary/10 text-primary text-xs md:text-sm rounded-full border border-primary/30 hover:border-primary/60 transition"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 217, 255, 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Certificate Button */}
                  {exp.hasCertificate && (
                    <motion.button
                      onClick={() => {
                        setCertificateType(exp.type)
                        setShowCertificate(true)
                      }}
                      className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-slate-900 font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaAward className="text-lg" />
                      View Certificate
                    </motion.button>
                  )}

                  {/* Animated Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {showCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
              onClick={() => setShowCertificate(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-primary/30 rounded-lg p-2 md:p-4 w-full h-[95vh] md:h-[90vh] max-w-7xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with Close Button */}
                <div className="flex items-center justify-between mb-3 px-3 py-2">
                  <h2 className="text-xl md:text-2xl font-bold text-primary">
                    {certificateType === 'internship' ? 'Internship Certificate' : 'MERN Stack Certificate'}
                  </h2>
                  <motion.button
                    onClick={() => setShowCertificate(false)}
                    className="p-2 bg-primary/20 hover:bg-primary/40 rounded-full text-primary transition flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTimes className="text-lg md:text-xl" />
                  </motion.button>
                </div>

                {/* PDF Viewer - Full Size */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 rounded-lg overflow-hidden bg-slate-900 border border-primary/20 min-h-0"
                >
                  <iframe
                    src={certificateType && certificateContent[certificateType].certificatePath}
                    title={certificateType === 'internship' ? 'Internship Certificate' : 'MERN Stack Certificate'}
                    className="w-full h-full border-none rounded-lg"
                  />
                </motion.div>

                {/* Footer Actions */}
                <div className="flex gap-2 md:gap-4 mt-3 justify-center px-3 py-2 flex-wrap">
                  <motion.a
                    href={certificateType && certificateContent[certificateType].certificatePath}
                    download={certificateType === 'internship' ? 'Internship-Certificate.pdf' : 'MERN-Stack-Certificate.pdf'}
                    className="px-4 md:px-6 py-2 bg-gradient-to-r from-primary to-secondary text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📥 Download
                  </motion.a>
                  <motion.button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 md:px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Experience
