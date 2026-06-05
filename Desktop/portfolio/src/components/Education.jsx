import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const educationQualifications = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      cgpa: '7.35',
      duration: 'Since Aug 2023',
      current: true,
    },
    {
      degree: 'Intermediate',
      field: 'General Studies',
      institution: "St. Xavier's High School",
      location: 'Aiwal, Azamgarh',
      percentage: '75%',
      duration: 'Apr 2020 – Mar 2021',
    },
    {
      degree: 'Matriculation',
      field: 'General Studies',
      institution: "St. Xavier's High School",
      location: 'Aiwal, Azamgarh',
      percentage: '81%',
      duration: 'Apr 2018 – Mar 2019',
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
    <section id="education" className="pt-40 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education & Qualifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Qualifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <FaGraduationCap /> Academic Qualifications
          </h3>
          <div className="space-y-6">
            {educationQualifications.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-darkCard/50 to-slate-900/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 smooth-transition"
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.5)', y: -5 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-100">{edu.degree}</h4>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-400">
                  <p>{edu.field}</p>
                  <p className="font-semibold text-secondary">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                  </p>
                </div>
                <p className="text-gray-500 text-xs mt-2">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
