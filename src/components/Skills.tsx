'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiPhp,
  SiSymfony,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiRust,
  SiLinux,
  SiMysql,
  SiJquery,
  SiFigma,
  SiDocker,
  SiGithub,
  SiTypescript
} from 'react-icons/si'

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend' },
    { name: 'Symfony', icon: SiSymfony, color: '#000000', category: 'Backend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
    { name: 'Rust', icon: SiRust, color: '#000000', category: 'System' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'System' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'DevOps' },
  ]

  const skillsPerView = 5
  const totalSlides = Math.ceil(skills.length / skillsPerView)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  const getCurrentSkills = () => {
    const startIndex = currentIndex * skillsPerView
    return skills.slice(startIndex, startIndex + skillsPerView)
  }

  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <section id="skills" className="py-20 px-6 bg-background-card/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold glow-text">
              Mes <span className="text-accent">Compétences</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions web modernes
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-sm"
              >
                {category}
              </span>
            ))}
          </motion.div>

          {/* Skills Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl cyber-border">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
                      {skills
                        .slice(slideIndex * skillsPerView, (slideIndex + 1) * skillsPerView)
                        .map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="group relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="card-cyber text-center space-y-4 h-32 flex flex-col items-center justify-center">
                              <skill.icon 
                                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" 
                                style={{ color: skill.color }}
                              />
                              <span className="text-sm font-mono text-text-muted group-hover:text-primary transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                            
                            {/* Glow effect on hover */}
                            <div 
                              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                              style={{ backgroundColor: skill.color }}
                            />
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevSlide}
                className="p-3 bg-background-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={toggleAutoPlay}
                className="p-3 bg-background-card border border-accent/20 rounded-full text-accent hover:bg-accent/10 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="p-3 bg-background-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* All Skills Grid (Mobile Alternative) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group card-cyber text-center space-y-2 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon 
                  className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" 
                  style={{ color: skill.color }}
                />
                <span className="text-xs font-mono text-text-muted group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
