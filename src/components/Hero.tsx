'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Ouvrir le CV PDF dans un nouvel onglet
    window.open('/cv.pdf', '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-secondary font-mono text-lg">Salut, je suis</p>
              <h1 className="text-5xl lg:text-7xl font-cyber font-bold glow-text text-primary">
                Omar
                <br />
                <span className="text-accent">ELHADIDI</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-3xl font-mono text-text-muted">
                Développeur Web Full Stack
              </h2>
              <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                Étudiant en M2 Ingénierie du Web en alternance chez{' '}
                <span className="text-primary font-semibold">Appymakers</span>. 
                Passionné par les technologies modernes et le développement d&apos;applications 
                web innovantes avec React, Next.js, Vue.js et bien plus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-cyber"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Me Contacter
              </motion.button>
              <motion.button
                onClick={downloadCV}
                className="btn-cyber border-accent text-accent hover:text-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end p-4"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Cyberpunk frame effect */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl transform -rotate-6"></div>
                
                {/* Profile image */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden cyber-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-transparent"></div>
                  
                  {!imageError ? (
                    <img
                      src="/img/profile.jpg"
                      alt="Omar ELHADIDI - Développeur Web Full Stack"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-6xl lg:text-8xl font-cyber text-primary/80 font-bold">
                      OE
                    </div>
                  )}
                  
                  {/* Glow effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-primary hover:text-accent transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
