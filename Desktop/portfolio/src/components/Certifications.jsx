import React from 'react'
import { motion } from 'framer-motion' 
import { FaAward } from 'react-icons/fa'

const Certifications = () => {
  const certificates = [
    { name: 'AI Foundations Associate', issuer: 'ORACLE', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1JIZpHvV_deIx6OLOa7i8GhTsUR7nBnB2/view' },
    { name: 'Git and GitHub', issuer: 'CIPHERSCHOOL', date: 'Jun 2025', link: 'https://drive.google.com/file/d/1DO0lCmSKXm3Aj19eJAyA-0apmVEK2GMJ/view' },
    { name: 'Cloud Computing', issuer: 'NPTEL', date: 'Apr 2025', link: 'https://drive.google.com/file/d/1jyHVENvO90egSo0Nk7nNqWi3MYo-bJ0p/view' },
    { name: 'Generative AI', issuer: 'NASSCOM', date: 'Jun 2024', link: 'https://drive.google.com/file/d/1DXD9O5jRn6CDFGE-zNL13EVAhyh9vPFt/view?usp=sharing' },
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
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
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
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative p-8 bg-gradient-to-br from-darkCard/80 to-slate-900/80 backdrop-blur-sm border border-primary/30 rounded-xl hover:border-secondary/50 smooth-transition overflow-hidden cursor-pointer block"
              whileHover={{ y: -10, borderColor: 'rgba(236, 72, 153, 0.5)' }}
            >
              {/* Card Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎓</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition">{cert.name}</h4>
                    <p className="text-secondary text-base font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
