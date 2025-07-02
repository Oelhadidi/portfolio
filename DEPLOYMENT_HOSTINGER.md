# Guide de déploiement sur Hostinger avec omarelhadidi.dev

## Prérequis
- Compte Hostinger avec hébergement web
- Domaine omarelhadidi.dev configuré
- Accès au panneau de contrôle Hostinger

## Étapes de déploiement

### 1. Build du projet

#### Build normal
```bash
npm run build
```

#### En cas d'erreur de permissions (Windows)
```powershell
# Nettoyer les fichiers temporaires
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue

# Relancer le build
npm run build
```

#### Alternative : Build en tant qu'administrateur
```powershell
# Ouvrir PowerShell en tant qu'administrateur puis :
npm run build
```

### 2. Configuration DNS sur Hostinger
1. Connectez-vous à votre panneau de contrôle Hostinger
2. Allez dans "Domains" > "DNS Zone Editor"
3. Configurez les enregistrements DNS :
   - Type A : @ -> [IP de votre serveur Hostinger]
   - Type A : www -> [IP de votre serveur Hostinger]
   - Type CNAME : www -> omarelhadidi.dev

### 3. Configuration SSL
1. Dans le panneau Hostinger, allez dans "SSL/TLS"
2. Activez le certificat SSL gratuit pour omarelhadidi.dev
3. Activez la redirection HTTPS

### 4. Upload des fichiers
1. Utilisez le gestionnaire de fichiers Hostinger ou FTP
2. Uploadez le contenu du dossier `.next/` et `public/` dans le dossier racine de votre domaine
3. Uploadez également `package.json` et les autres fichiers de configuration

### 5. Configuration du serveur (si applicable)
Si Hostinger supporte Node.js :
1. Configurez Node.js version 18+
2. Installez les dépendances : `npm install`
3. Démarrez l'application : `npm start`

### 6. Alternative : Export statique
Si Hostinger ne supporte que les sites statiques :
1. Modifiez `next.config.js` pour ajouter `output: 'export'`
2. Exécutez `npm run build`
3. **IMPORTANT** : Uploadez le **CONTENU** du dossier `out/` (pas le dossier lui-même) directement dans `public_html/`

### 7. Structure correcte sur Hostinger
Votre `public_html/` doit contenir directement :
```
public_html/
├── index.html
├── 404.html
├── CV.pdf
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── _next/
├── img/
└── .htaccess
```

**❌ INCORRECT** : Ne pas mettre les dossiers entiers (.next/, out/, public/)
**✅ CORRECT** : Seulement le contenu du dossier `out/`

## Vérifications post-déploiement
- [ ] Le site s'affiche sur https://omarelhadidi.dev
- [ ] Les redirections HTTPS fonctionnent
- [ ] Les images se chargent correctement
- [ ] Le formulaire de contact fonctionne
- [ ] Les animations Framer Motion sont fluides
- [ ] Le site est responsive sur mobile

## Optimisations recommandées
- Activez la compression Gzip/Brotli
- Configurez la mise en cache des ressources statiques
- Optimisez les images avec les outils Hostinger
- Configurez un CDN si disponible

## Contact GitHub API
Assurez-vous que l'API GitHub fonctionne depuis le serveur de production. Si nécessaire, configurez les en-têtes CORS appropriés.

## Monitoring
- Configurez Google Analytics
- Ajoutez Google Search Console
- Surveillez les performances avec les outils Hostinger

## Dépannage des problèmes courants

### Erreur EPERM (permissions Windows)
```
Error: EPERM: operation not permitted, open '.next\trace'
```
**Solutions :**
1. Fermer VS Code et tous les processus Node.js
2. Supprimer le dossier `.next` : `Remove-Item -Path ".next" -Recurse -Force`
3. Relancer le build : `npm run build`
4. Si le problème persiste, exécuter en tant qu'administrateur

### Avertissement Next.js Image
```
Warning: Using `<img>` could result in slower LCP
```
**Solution :** Remplacer les balises `<img>` par `<Image>` de Next.js pour de meilleures performances.

### Build qui reste bloqué
Si le build semble figé :
1. Annuler avec `Ctrl+C`
2. Nettoyer : `npm run clean` (si disponible) ou supprimer `.next`
3. Relancer : `npm run build`

### Problèmes de mémoire
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```
**Solution :** Augmenter la mémoire Node.js :
```powershell
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```
