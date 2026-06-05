import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('v7nF5eVGCr7BckigC')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_elkow7y',
        'template_bmfcdog',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'marutinandan885817@gmail.com',
          subject: formData.subject,
          message: formData.message,
        }
      )

      if (result.status === 200) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8858171312',
      link: 'tel:+918858171312',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'marutinandan885817@gmail.com',
      link: 'mailto:marutinandan885817@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Phagwara, Punjab',
      link: null,
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
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Let's discuss your next project</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div className="space-y-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                I'm open to full-time opportunities and freelance projects. Whether you need a Full Stack developer for your next project, want to collaborate, or just want to connect - feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-4 items-start ${info.link ? 'cursor-pointer' : ''}`}
                whileHover={{ x: 10 }}
                onClick={() => {
                  if (info.link) {
                    window.location.href = info.link
                  }
                }}
              >
                <motion.div
                  className="mt-1 p-3 bg-primary/20 rounded-lg text-primary text-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <info.icon />
                </motion.div>
                <div>
                  <h3 className="text-gray-900 dark:text-gray-200 font-semibold text-lg">{info.label}</h3>
                  <p className={`text-gray-600 dark:text-gray-400 ${info.link ? 'hover:text-primary transition' : ''}`}>{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div className="pt-4 border-t border-primary/30">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Follow me on social media:</p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { name: 'GitHub', url: 'https://github.com/MarutiNandan2796' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maruti-nandan-4t/' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary smooth-transition cursor-pointer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 bg-gradient-to-br from-darkCard/80 to-slate-900/80 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-secondary/50 smooth-transition"
              whileHover={{
                borderColor: 'rgba(236, 72, 153, 0.5)',
              }}
            >
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-primary/30 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-primary/30 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-primary/30 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                  placeholder="Subject"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-primary/30 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition resize-none"
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg smooth-transition disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Sending...' : isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
              >
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
