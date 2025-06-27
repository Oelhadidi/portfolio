'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Oelhadidi',
      label: 'GitHub',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/omar-elhadidi/',
      label: 'LinkedIn',
      color: 'hover:text-secondary'
    },
    {
      icon: Mail,
      href: 'mailto:omar.elhadidi@example.com',
      label: 'Email',
      color: 'hover:text-accent'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-20 px-6 border-t border-primary/20 bg-background-card/30">
      {/* Background Effect */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-cyber font-bold glow-text">
              Omar<span className="text-accent">.</span>dev
            </div>
            <p className="text-text-muted leading-relaxed">
              Développeur web passionné, créant des expériences digitales 
              innovantes avec les technologies modernes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-muted ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-cyber font-bold">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-primary transition-colors duration-300 font-mono text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-cyber font-bold">Services</h3>
            <ul className="space-y-2 text-text-muted font-mono text-sm">
              <li>Développement Frontend</li>
              <li>Développement Backend</li>
              <li>Applications Web</li>
              <li>UI/UX Design</li>
              <li>Consultation Technique</li>
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-cyber font-bold">Technologies</h3>
            <ul className="space-y-2 text-text-muted font-mono text-sm">
              <li>React / Next.js</li>
              <li>Vue.js / Nuxt.js</li>
              <li>TypeScript</li>
              <li>Node.js / PHP</li>
              <li>MongoDB / MySQL</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-muted font-mono text-sm flex items-center gap-2"
          >
            © {currentYear} Omar ELHADIDI. Développé avec
            <motion.span
              className="text-accent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            et Next.js
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="text-text-muted font-mono text-sm">
              Étudiant à Appymakers
            </div>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-primary/10 border border-primary/20 rounded-full text-primary hover:bg-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50"
          style={{
            scaleX: 0,
            transformOrigin: '0%'
          }}
          whileInView={{
            scaleX: 1,
            transition: { duration: 0.5 }
          }}
        />
      </div>
    </footer>
  )
}
