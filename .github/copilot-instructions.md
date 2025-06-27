<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instructions Copilot pour le Portfolio Omar ELHADIDI

## Contexte du projet
Ce projet est un portfolio personnel développé avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion. Il présente les compétences, projets et expériences de Omar ELHADIDI, étudiant en M2 Ingénierie du Web en alternance chez Appymakers.

## Stack technique
- **Framework** : Next.js 14 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS avec thème cyberpunk personnalisé
- **Animations** : Framer Motion
- **Icônes** : React Icons + Lucide React
- **API** : GitHub API pour récupérer les projets

## Palette de couleurs
- Primary: #00ff88 (vert cyber)
- Accent: #ff006e (rose cyber)  
- Secondary: #00d4ff (bleu cyber)
- Background: #0a0a0a (noir profond)
- Neutral: #333333 (gris foncé)

## Conventions de code
1. **Composants** : Utiliser 'use client' pour les composants interactifs
2. **Animations** : Privilégier Framer Motion avec des transitions fluides
3. **Styles** : Utiliser les classes Tailwind avec les variables de couleur personnalisées
4. **Accessibilité** : Inclure les attributs aria-label et la navigation au clavier
5. **SEO** : Optimiser les métadonnées et la structure sémantique

## Architecture
- `/src/app/` : Pages et layout principal
- `/src/components/` : Composants réutilisables
- `/src/components/providers/` : Providers React (ThemeProvider)

## Fonctionnalités spécifiques
- Toggle dark/light mode avec persistance localStorage
- Carousels auto-scroll avec contrôles manuels
- Intégration GitHub API avec fallback
- Animations cyberpunk avec effets de glow
- Design responsive mobile-first

## Guidelines pour les suggestions
- Maintenir le thème cyberpunk/futuriste
- Prioriser les performances et l'UX
- Utiliser TypeScript strict
- Respecter les pratiques Next.js 14
- Garder l'accessibilité en priorité
