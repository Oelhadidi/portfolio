'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react'
import Image from 'next/image'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string | null
  topics: string[]
  updated_at: string
  created_at: string
}

// Configuration des images de preview pour les projets
const projectPreviews: { [key: string]: string } = {
  'portfolio-nextjs': '/img/projects/portfolio-preview.svg',
  'symfony-ecommerce': '/img/projects/symfony-ecommerce-preview.svg',
  'BikeStore': '/img/projects/BikeStore-preview.jpg',
  'GameVite': '/img/projects/GameVite-preview.jpg',
  'pokedex': '/img/projects/pokedex-preview.jpg',
  'services-ceo': '/img/projects/services-ceo-preview.jpg',
  // Ajoutez vos vraies images de projets ici
}

// Fonction pour obtenir l'image de preview d'un projet
const getProjectPreview = (repoName: string): string => {
  return projectPreviews[repoName] || '/img/projects/default-preview.svg'
}

// Projets de fallback si l'API GitHub ne fonctionne pas
const fallbackProjects: GitHubRepo[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "Portfolio personnel développé avec Next.js, Tailwind CSS et Framer Motion",
    html_url: "https://github.com/Oelhadidi/portfolio",
    homepage: "https://omar-portfolio.dev",
    stargazers_count: 5,
    forks_count: 2,
    watchers_count: 3,
    language: "NextJs",
    topics: ["nextjs", "portfolio", "tailwindcss", "framer-motion"],
    updated_at: "2025-05-01T00:00:00Z",
    created_at: "2025-05-01T00:00:00Z"
  },
  {
    id: 2,
    name: "services-ceo",
    description: "Site vitrine professionnel pour services CEO avec design élégant et moderne",
    html_url: "https://github.com/Oelhadidi/services-ceo",
    homepage: "https://services-ceo.omar.dev",
    stargazers_count: 11,
    forks_count: 3,
    watchers_count: 7,
    language: "NextJS",
    topics: ["business", "ceo-services", "Ai integrations", "professional"],
    updated_at: "2025-06-25T00:00:00Z",
    created_at: "2025-06-25T00:00:00Z"
  },
  {
    id: 3,
    name: "BikeStore",
    description: "Application e-commerce moderne pour la vente de vélos avec panier et gestion des commandes",
    html_url: "https://github.com/Oelhadidi/BikeStore",
    homepage: "https://bikestore-demo.omar.dev",
    stargazers_count: 18,
    forks_count: 7,
    watchers_count: 12,
    language: "JavaScript",
    topics: ["ecommerce", "javascript", "bike-store", "shopping-cart"],
    updated_at: "2025-02-15T00:00:00Z",
    created_at: "2025-02-15T00:00:00Z"
  },
  {
    id: 4,
    name: "GameVite",
    description: "Plateforme de jeux interactifs développée avec Vite et technologies modernes",
    html_url: "https://github.com/Oelhadidi/GameVite",
    homepage: "https://gamevite-demo.omar.dev",
    stargazers_count: 14,
    forks_count: 5,
    watchers_count: 9,
    language: "VueJS + React",
    topics: ["vite", "games", "interactive", "VueJS", "React"],
    updated_at: "2025-01-20T00:00:00Z",
    created_at: "2025-01-20T00:00:00Z"
  },
  {
    id: 5,
    name: "pokedex",
    description: "Pokédex interactif avec API Pokémon, recherche avancée et design moderne",
    html_url: "https://github.com/Oelhadidi/pokedex",
    homepage: "https://pokedex-demo.omar.dev",
    stargazers_count: 22,
    forks_count: 8,
    watchers_count: 15,
    language: "Angular",
    topics: ["pokemon", "api", "angular", "pokedex"],
    updated_at: "2024-12-10T00:00:00Z",
    created_at: "2024-12-10T00:00:00Z"
  },
  {
    id: 6,
    name: "symfony-ecommerce",
    description: "Plateforme e-commerce complète avec Symfony et Doctrine",
    html_url: "https://github.com/Oelhadidi/symfony-ecommerce",
    homepage: null,
    stargazers_count: 12,
    forks_count: 6,
    watchers_count: 8,
    language: "PHP",
    topics: ["symfony", "ecommerce", "php", "doctrine"],
    updated_at: "2024-11-29T00:00:00Z",
    created_at: "2024-11-29T00:00:00Z"
  }
]

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackProjects)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/Oelhadidi/repos?sort=updated&per_page=10')
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des repositories')
        }
        
        const data: GitHubRepo[] = await response.json()
        
        // Filtrer et trier les repos les plus intéressants
        const filteredRepos = data
          .filter(repo => !repo.name.includes('config') && !repo.name.includes('dotfiles'))
          .sort((a, b) => {
            // Prioriser les repos avec plus d'étoiles et plus récents
            const scoreA = a.stargazers_count * 2 + a.forks_count + (new Date(a.updated_at).getTime() / 1000000000)
            const scoreB = b.stargazers_count * 2 + b.forks_count + (new Date(b.updated_at).getTime() / 1000000000)
            return scoreB - scoreA
          })
          .slice(0, 6)
        
        if (filteredRepos.length > 0) {
          setRepos(filteredRepos)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue')
        // Garde les projets fallback qui sont déjà définis
      } finally {
        setLoading(false)
      }
    }

    // Temporairement désactivé pour les tests
    // fetchGitHubRepos()
  }, [])

  const projectsPerView = 3
  const totalSlides = Math.ceil(repos.length / projectsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178C6',
      'JavaScript': '#F7DF1E',
      'Vue': '#4FC08D',
      'React': '#61DAFB',
      'PHP': '#777BB4',
      'Python': '#3776AB',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'Rust': '#000000',
      'Go': '#00ADD8',
      'Dart': '#0175C2'
    }
    return colors[language || ''] || '#888888'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto"
            />
            <p className="mt-4 text-text-muted font-mono">Chargement des projets...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-6">
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
              Mes <span className="text-accent">Projets</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Découvrez mes derniers projets développés avec passion et les technologies modernes
            </p>
            {error && (
              <p className="text-accent text-sm">
                {error} - Affichage des projets de démonstration
              </p>
            )}
          </motion.div>

          {/* Projects Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {repos.length > 0 ? (
              <>
                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                          {repos
                            .slice(slideIndex * projectsPerView, (slideIndex + 1) * projectsPerView)
                            .map((repo) => (
                              <motion.div
                                key={repo.id}
                                className="group card-cyber"
                                whileHover={{ y: -10, rotateY: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {/* Project Image Preview */}
                                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-6 group">
                                  {/* Image de preview */}
                                  <Image
                                    src={getProjectPreview(repo.name)}
                                    alt={`Preview de ${repo.name}`}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                      // Fallback si l'image n'existe pas
                                      const target = e.target as HTMLImageElement
                                      target.src = '/img/projects/default-preview.svg'
                                    }}
                                  />
                                  
                                  {/* Overlay avec gradient et effects cyberpunk */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  
                                  {/* Badge de langage */}
                                  <div className="absolute top-4 right-4">
                                    {repo.language && (
                                      <span className="px-2 py-1 bg-background/80 backdrop-blur-sm border border-primary/30 rounded text-primary text-xs font-mono">
                                        {repo.language}
                                      </span>
                                    )}
                                  </div>
                                  
                                  {/* Language indicator en bas */}
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 text-sm">
                                      {repo.language && (
                                        <span
                                          className="w-3 h-3 rounded-full border border-background/30"
                                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                                        />
                                      )}
                                      <span className="text-white/90 font-mono text-xs drop-shadow-lg">
                                        {repo.language || 'Multiple'}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {/* Cyberpunk grid overlay */}
                                  <div className="absolute inset-0 cyber-grid opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                  
                                  {/* Glow effect au hover */}
                                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300" />
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="text-xl font-cyber font-bold group-hover:text-primary transition-colors duration-300">
                                      {repo.name}
                                    </h3>
                                    <p className="text-text-muted text-sm mt-2 leading-relaxed">
                                      {repo.description || 'Aucune description disponible'}
                                    </p>
                                  </div>

                                  {/* Technologies */}
                                  {repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                      {repo.topics.slice(0, 3).map((topic) => (
                                        <span
                                          key={topic}
                                          className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-mono"
                                        >
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  )}

                                  {/* Stats */}
                                  <div className="flex items-center gap-4 text-sm text-text-muted">
                                    <div className="flex items-center gap-1">
                                      <Star size={14} />
                                      <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <GitFork size={14} />
                                      <span>{repo.forks_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Eye size={14} />
                                      <span>{repo.watchers_count}</span>
                                    </div>
                                  </div>

                                  {/* Date */}
                                  <p className="text-text-muted text-xs font-mono">
                                    Mis à jour le {formatDate(repo.updated_at)}
                                  </p>

                                  {/* Links */}
                                  <div className="flex gap-4 pt-4 border-t border-primary/20">
                                    <motion.a
                                      href={repo.html_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <Github size={16} />
                                      <span className="text-sm font-mono">Code</span>
                                    </motion.a>
                                    {repo.homepage && (
                                      <motion.a
                                        href={repo.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        <ExternalLink size={16} />
                                        <span className="text-sm font-mono">Demo</span>
                                      </motion.a>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Controls */}
                {totalSlides > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <motion.button
                      onClick={prevSlide}
                      className="p-3 bg-background-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>

                    <div className="flex gap-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-primary border-primary scale-125'
                              : 'bg-primary/30 border-primary/50 hover:bg-primary/50 hover:border-primary/70'
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      onClick={nextSlide}
                      className="p-3 bg-background-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-muted font-mono">Aucun projet disponible pour le moment</p>
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="https://github.com/Oelhadidi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Voir tous mes projets sur GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
