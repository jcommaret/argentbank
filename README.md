# Argent Bank

Application web de banking développée avec React et Vite.

## 🚀 Technologies utilisées

- **React 19.2** - Bibliothèque JavaScript pour la création d'interfaces utilisateur
- **Vite 7.3** - Outil de build moderne et rapide
- **React Router 7.9** - Gestion du routing
- **Sass** - Préprocesseur CSS
- **React 19** - Dernière version avec les nouvelles fonctionnalités

## 📋 Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## 🛠️ Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
cd argentbank
```

2. Installer les dépendances
```bash
npm install
```

## 💻 Scripts disponibles

### `npm run dev`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se recharge automatiquement lorsque vous effectuez des modifications.\
Profitez du Hot Module Replacement (HMR) ultra-rapide de Vite !

### `npm run build`

Compile l'application pour la production dans le dossier `build`.\
L'application est optimisée pour les meilleures performances.

Le build est minifié et les noms de fichiers incluent des hashes.\
Votre application est prête à être déployée !

### `npm run preview`

Prévisualise la version de production localement.\
Utile pour tester le build avant le déploiement.

## 🏗️ Structure du projet

```
argentbank/
├── public/              # Fichiers statiques
├── src/
│   ├── assets/         # Images et ressources
│   ├── components/     # Composants React réutilisables
│   ├── pages/          # Pages de l'application
│   ├── routes/         # Configuration du routing
│   └── index.jsx       # Point d'entrée de l'application
├── vite.config.js      # Configuration Vite
└── package.json        # Dépendances et scripts
```

## 🎨 Composants principaux

- **Header** - En-tête de navigation
- **Footer** - Pied de page
- **Hero** - Bannière d'accueil
- **Features** - Section des fonctionnalités
- **Accounts** - Gestion des comptes
- **Sign** - Composants d'authentification

## 📱 Pages

- **Homepage** - Page d'accueil
- **SignIn** - Page de connexion
- **User** - Profil utilisateur
- **Edit** - Édition du profil
- **Transactions** - Historique des transactions

## 🔧 Configuration Vite

Le projet utilise Vite avec les configurations suivantes :
- Port de développement : 3000
- Ouverture automatique du navigateur
- Support complet de React avec Fast Refresh
- Support de Sass intégré

## 📚 En savoir plus

- [Documentation Vite](https://vitejs.dev/)
- [Documentation React](https://react.dev/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Sass](https://sass-lang.com/)

## 🌟 Pourquoi Vite ?

Vite offre de nombreux avantages par rapport aux outils traditionnels :
- ⚡ Démarrage instantané du serveur de développement
- 🔥 Hot Module Replacement (HMR) ultra-rapide
- 📦 Build optimisé avec Rollup
- 🎯 Configuration minimale
- 💪 Support natif de ES modules

---

Développé avec ❤️ pour Argent Bank
