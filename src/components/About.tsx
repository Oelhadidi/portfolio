'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'
import Image from 'next/image'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const timeline = [
    {
      icon: GraduationCap,
      title: "Formation Actuelle",
      subtitle: "M2 Ingénierie du Web - ESGI (École supérieure d'ingénierie informatique) Lyon",
      description: "Master spécialisé en développement web moderne, architecture logicielle et technologies émergentes.",
      year: "2024-2025",
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Alternance",
      subtitle: "Développeur chez AppyMakers",
      description: "Développement d'applications web et mobiles innovantes en utilisant les dernières technologies (JS).",
      year: "2023-Présent",
      color: "accent"
    },
    {
      icon: Code,
      title: "Passion",
      subtitle: "Développement Full Stack",
      description: "Spécialisé dans la création d'expériences utilisateur exceptionnelles avec des technologies modernes.",
      year: "Depuis 2022",
      color: "secondary"
    }
  ]

  const stats = [
    { number: "3+", label: "Années d'expérience" },
    { number: "15+", label: "Technologies maîtrisées" },
    { number: "10+", label: "Projets réalisés" },
    { number: "100%", label: "Passion" }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold glow-text">
              À propos de <span className="text-accent">moi</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Découvrez mon parcours, mes passions et ce qui me motive dans le développement web
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl lg:text-5xl font-cyber font-bold text-primary glow-text">
                  {stat.number}
                </div>
                <div className="text-text-muted font-mono text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-cyber font-bold text-center">
              Mon <span className="text-secondary">Parcours</span>
            </h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="card-cyber"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6">
                    <div className={`p-4 rounded-xl bg-${item.color}/10 border border-${item.color}/20`}>
                      <item.icon className={`w-8 h-8 text-${item.color}`} />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between">
                        <h4 className="text-xl font-cyber font-bold text-center lg:text-left">{item.title}</h4>
                        <span className={`text-${item.color} font-mono text-sm px-2 py-1 mt-1 lg:mt-0 rounded-full bg-${item.color}/10 border border-${item.color}/20 inline-block w-fit`}>
                          {item.year}
                        </span>
                      </div>
                      <h5 className="text-lg text-text-muted font-mono text-center lg:text-left">{item.subtitle}</h5>
                      <p className="text-text-muted leading-relaxed text-center lg:text-left">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="card-cyber max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-background" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-cyber font-bold">Philosophie de Développement</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                Je crois fermement que le code doit être élégant, maintenable et orienté utilisateur. 
                Mon approche combine créativité et rigueur technique pour créer des solutions web 
                innovantes qui répondent aux besoins réels des utilisateurs. Chaque projet est une 
                opportunité d&apos;apprendre et de repousser les limites de ce qui est possible.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
