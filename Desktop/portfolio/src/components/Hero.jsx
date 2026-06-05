import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { MdVerified } from 'react-icons/md'
import { MdDownload, MdReadMore } from 'react-icons/md'
import { scroller } from 'react-scroll'
import ProfileImage from './ProfileImage'
import AnimatedText from './AnimatedText'

const Hero = () => {
  const handleScrollDown = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  }

  const socials = [
    { icon: FaGithub, link: 'https://github.com/MarutiNandan2796', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/maruti-nandan-4t/', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://x.com/MNandan84453', label: 'Twitter' },
    { icon: FaInstagram, link: 'https://www.instagram.com/arnav_singh_1415/', label: 'Instagram' },
    { icon: FaEnvelope, link: 'mailto:marutinandan885817@gmail.com', label: 'Email' },
  ]

  const achievements = [
    { number: '2+', label: 'Projects' },
    { number: '100+', label: 'DSA Problems' },
    { number: '4', label: 'Certifications' },
  ]

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-12 pb-12 px-4 overflow-hidden relative"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Text Content */}
          <div className="flex-1 w-full max-w-2xl">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-2">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium uppercase tracking-widest">Hi! I Am</p>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-1 block text-primary"
            >
              Maruti Nandan
            </motion.h1>

            {/* Main Title - Large Cyan */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight text-primary"
            >
              Full Stack Developer.
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 max-w-lg leading-relaxed"
            >
              B.Tech CSE student at LPU specializing in Full Stack Web Development. Building scalable web applications using MERN stack with expertise in responsive design and clean code.
            </motion.p>

            {/* Animated Description */}
            <motion.div variants={itemVariants} className="mb-6">
              <AnimatedText />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8 items-start flex-wrap"
            >
              <motion.button
                onClick={() => {
                  scroller.scrollTo('contact', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                  })
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0, 217, 255, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition relative overflow-hidden text-sm cursor-pointer"
              >
                Hire Me
              </motion.button>

              <motion.button
                onClick={() => {
                  window.open('/resume.pdf', '_blank')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>View Resume</span>
                <MdReadMore className="text-base" />
              </motion.button>

              <motion.button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.setAttribute('download', 'Maruti_Nandan_Resume.pdf')
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Download</span>
                <MdDownload className="text-base" />
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:text-white transition"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(0, 217, 255, 0.2)',
                    borderColor: 'rgb(0, 217, 255)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div 
            variants={floatingVariants}
            className="hidden lg:flex flex-1 justify-center items-center relative w-full max-w-sm"
          >
            {/* Floating Background Elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 text-center"
            >
              <ProfileImage />
            </motion.div>

            {/* Floating Elements */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="hidden lg:flex absolute w-16 h-16 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center text-2xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${-60 + i * 20}%`,
                }}
              >
                {['💻', '🚀', '⚡', '🎨'][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-75 transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 hover:border-secondary transition">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
