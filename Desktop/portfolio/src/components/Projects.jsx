import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Plant & Disease Identification',
      description: 'CNN-based deep learning pipeline for automated plant species classification and disease detection using image data.',
      tech: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'PHP', 'XAMPP'],
      image: '🌱',
      date: 'Oct 2025 – Nov 2025',
      features: ['Plant Classification', 'Disease Detection', 'RESTful APIs', 'Plant Encyclopedia'],
      link: 'https://github.com/MarutiNandan2796',
      github: 'https://github.com/MarutiNandan2796',
    },
    {
      title: 'Job Application Tracker',
      description: 'Full-stack MERN application for managing job applications with analytics dashboards and automated reminders.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: '📊',
      date: 'Jun 2025 – Jul 2025',
      features: ['Status Management', 'Document Upload', 'Analytics Dashboard', 'Smart Search'],
      link: 'https://github.com/MarutiNandan2796',
      github: 'https://github.com/MarutiNandan2796',
    },
    {
      title: 'Real Library Seat Management System',
      description: 'Real-time library seat reservation and management system allowing users to book and manage study seat availability.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: '📚',
      date: 'Sep 2024 – Nov 2024',
      features: ['Seat Reservation', 'Real-time Updates', 'User Dashboard', 'Availability Tracking'],
      link: 'https://github.com/MarutiNandan2796/Real-Library-Seat-Management-',
      github: 'https://github.com/MarutiNandan2796/Real-Library-Seat-Management-',
    },
    {
      title: 'Family Health Tracker',
      description: 'Comprehensive family health management application for tracking medical records, appointments, and health metrics for multiple family members.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: '❤️',
      date: 'Jul 2024 – Sep 2024',
      features: ['Medical Records', 'Appointment Scheduling', 'Health Metrics', 'Family Dashboard'],
      link: 'https://github.com/MarutiNandan2796/FamilyHealthTracker',
      github: 'https://github.com/MarutiNandan2796/FamilyHealthTracker',
    },
    {
      title: 'Password Generator',
      description: 'Secure password generator tool with customizable options for creating strong, random passwords with various character types.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '🔐',
      date: 'Apr 2024 – May 2024',
      features: ['Secure Generation', 'Customizable Length', 'Copy to Clipboard', 'Character Options'],
      link: 'https://github.com/MarutiNandan2796/Password-Generator-',
      github: 'https://github.com/MarutiNandan2796/Password-Generator-',
    },
    {
      title: 'LogiCalc',
      description: 'Advanced calculator application with logical operations and mathematical functions for complex calculations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '🧮',
      date: 'Feb 2024 – Mar 2024',
      features: ['Logical Operations', 'Mathematical Functions', 'Memory Functions', 'History Tracking'],
      link: 'https://github.com/MarutiNandan2796/LogiCalc-',
      github: 'https://github.com/MarutiNandan2796/LogiCalc-',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 smooth-transition"
                layoutId={`glow-${index}`}
              />

              {/* Card */}
              <motion.div
                className="relative bg-gradient-to-br from-darkCard/80 to-slate-900/80 backdrop-blur-sm border border-primary/30 rounded-lg p-6 h-full flex flex-col hover:border-secondary/50 smooth-transition overflow-hidden"
                whileHover={{
                  borderColor: 'rgba(236, 72, 153, 0.5)',
                }}
              >
                {/* Project Icon */}
                <div className="text-5xl mb-4">{project.image}</div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-primary/20">
                  <motion.a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary smooth-transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary smooth-transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
