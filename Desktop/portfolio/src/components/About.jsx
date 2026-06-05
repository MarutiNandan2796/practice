import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import AboutProfileImage from './AboutProfileImage'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-8 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The idea that technology can transform complex problems into simple, meaningful solutions drives my curiosity and continuous learning. I strive to build systems that are efficient, scalable, and user-focused.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I am <strong>Maruti Nandan Pratap Singh</strong>, currently pursuing a Bachelor of Technology in Computer Science and Engineering from Lovely Professional University. I enjoy solving challenges that require both logical thinking and creativity. For me, development is more than coding—it's about structuring ideas, optimizing performance, and creating solutions that make a real impact.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I focus on writing clean, efficient code and improving my approach through hands-on experience. I am a quick learner, adaptable to new technologies, and always eager to grow.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in consistency, discipline, and taking initiative. I am seeking opportunities to apply my skills, gain industry exposure, and contribute to innovative technology-driven solutions.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center"
          >
            <AboutProfileImage />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
