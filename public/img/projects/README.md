# Guide pour ajouter des previews de projets

## 📁 Structure des fichiers

Placez vos images de preview dans le dossier :
```
public/img/projects/
```

## 🖼️ Formats supportés

- **Recommandé** : JPG/JPEG (optimisé pour le web)
- **Alternatif** : PNG, WebP, SVG

## 📏 Dimensions recommandées

- **Largeur** : 800px minimum
- **Hauteur** : 480px minimum  
- **Ratio** : 5:3 (comme 800x480, 1000x600, etc.)
- **Poids** : < 500KB pour optimiser le chargement

## 📝 Convention de nommage

Le nom du fichier doit correspondre au nom du repository GitHub :
```
nom-du-repo-preview.jpg
```

Exemples :
- `portfolio-nextjs-preview.jpg`
- `vue-task-manager-preview.jpg`
- `symfony-ecommerce-preview.jpg`

## ⚙️ Configuration

1. **Ajoutez votre image** dans `public/img/projects/`

2. **Mettez à jour la configuration** dans `Projects.tsx` :
```typescript
const projectPreviews: { [key: string]: string } = {
  'nom-du-repo': '/img/projects/nom-du-repo-preview.jpg',
  // Ajoutez vos projets ici
}
```

## 🎨 Conseils pour de belles previews

### Pour les sites web :
- Capture d'écran de la page d'accueil
- Résolution desktop (1920x1080 puis redimensionné)
- Évitez les captures trop chargées

### Pour les applications :
- Interface principale ou dashboard
- Fonctionnalité clé mise en avant
- UI claire et lisible

### Pour les APIs/Backend :
- Schéma d'architecture
- Documentation Swagger/Postman
- Diagramme de base de données

## 🔧 Optimisation

### Compression d'images :
- Utilisez des outils comme TinyPNG, ImageOptim
- Qualité JPEG : 80-85%
- Activez la compression WebP si possible

### Chargement performant :
- Next.js Image component optimise automatiquement
- Lazy loading intégré
- Responsive sizing automatique

## 🎯 Fallback

Si aucune image n'est trouvée, le système utilise automatiquement `default-preview.svg` avec un design cyberpunk cohérent avec votre thème.

## 📋 Checklist avant ajout

- [ ] Image aux bonnes dimensions (ratio 5:3)
- [ ] Fichier < 500KB
- [ ] Nom correspondant au repo GitHub
- [ ] Preview attractive et représentative
- [ ] Configuration mise à jour dans le code
- [ ] Test du chargement local

## 🚀 Exemples de previews réussies

1. **Portfolio** : Page d'accueil avec navigation visible
2. **E-commerce** : Grille de produits ou page produit
3. **Dashboard** : Vue d'ensemble avec graphiques
4. **Mobile App** : Écran principal avec UI claire
5. **API** : Documentation ou diagramme d'architecture

---

💡 **Astuce** : Pour des previews homogènes, gardez le même style de capture (même navigateur, même zoom, même thème).
