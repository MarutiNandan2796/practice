import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'HTML', 'JavaScript', 'C', 'PHP', 'Java'],
      icon: '💻',
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Frameworks',
      skills: ['Next.js', 'Vue.js', 'React.js', 'Bootstrap', 'Node.js'],
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Tools & Platforms',
      skills: ['MySQL', 'MongoDB', 'Figma', 'XAMPP', 'Visual Studio Code'],
      icon: '🛠️',
      color: 'from-pink-500 to-pink-600',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Player', 'Adaptability', 'Quick Learner'],
      icon: '🎯',
      color: 'from-green-500 to-green-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="p-6 bg-gradient-to-br from-darkCard/50 to-slate-900/50 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-secondary/50 smooth-transition"
              whileHover={{
                borderColor: 'rgba(236, 72, 153, 0.5)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{cat.category}</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-full text-gray-200 font-semibold cursor-pointer hover:border-secondary smooth-transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: '8', label: 'Projects Completed' },
            { number: '1+', label: 'Years Experience' },
            { number: '2+', label: 'Clients Served' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg text-center hover:border-secondary/50 smooth-transition group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400 font-semibold group-hover:text-gray-300 smooth-transition">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
