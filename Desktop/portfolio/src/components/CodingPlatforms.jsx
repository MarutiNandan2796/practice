import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

const CodingPlatforms = () => {
  const codingPlatforms = [
    {
      name: 'LeetCode',
      description: 'Solved 100+ DSA Problems',
      url: 'https://leetcode.com/u/Q0I8FMgdIB/',
    },
    {
      name: 'HackerRank',
      description: '5-Star Rating (C++, DSA, C, Java)',
      url: 'https://www.hackerrank.com/profile/marutinandan8851',
    },
    {
      name: 'GeeksforGeeks',
      description: 'DSA & CS Concepts Practice',
      url: 'https://www.geeksforgeeks.org/profile/marutinandzn4j?tab=activity',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="coding-platforms" className="py-20 px-4 relative overflow-hidden">
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
              Coding Platforms
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Coding Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {codingPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative p-8 bg-gradient-to-br from-darkCard/80 to-slate-900/80 backdrop-blur-sm border border-secondary/30 rounded-xl hover:border-secondary/50 smooth-transition overflow-hidden"
              whileHover={{ y: -10, borderColor: 'rgba(236, 72, 153, 0.5)' }}
            >
              {/* Card Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl group-hover:rotate-12 transition duration-300">💻</div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-secondary transition flex-1">{platform.name}</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{platform.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingPlatforms
