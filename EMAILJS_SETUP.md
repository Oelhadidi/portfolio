# Configuration EmailJS pour le Formulaire de Contact

## 📧 Mise en place EmailJS

### 1. Créer un compte EmailJS
- Allez sur [EmailJS](https://www.emailjs.com/)
- Créez un compte gratuit
- Vérifiez votre email

### 2. Configurer le service email
1. Dans le dashboard EmailJS, cliquez sur "Add New Service"
2. Choisissez votre fournisseur d'email (Gmail recommandé)
3. Suivez les instructions pour connecter votre compte
4. Notez votre **Service ID**

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce contenu pour votre template :

**Subject:** Nouveau message depuis votre portfolio - {{subject}}

**Content:**
```
Bonjour Omar,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Notez votre **Template ID**

### 4. Récupérer la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à jour les variables d'environnement
Modifiez le fichier `.env.local` avec vos vraies clés :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Redémarrer le serveur
```bash
npm run dev
```

## ✨ Fonctionnalités
- ✅ Envoi d'emails réels
- ✅ Validation des champs
- ✅ Messages de statut
- ✅ Interface responsive
- ✅ Animations fluides

## 🎯 Test
Une fois configuré, testez en remplissant le formulaire sur votre portfolio. Vous devriez recevoir l'email dans votre boîte mail !

## 📊 Limites gratuites EmailJS
- 200 emails/mois
- Parfait pour un portfolio personnel
