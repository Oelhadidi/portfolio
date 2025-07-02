/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
    unoptimized: true, // Nécessaire pour l'export statique
  },
  // Les en-têtes personnalisés ne sont pas supportés avec l'export statique
  // Ils peuvent être configurés directement sur le serveur web (Apache/Nginx)
  trailingSlash: true, // Améliore la compatibilité avec les serveurs statiques
}

module.exports = nextConfig
