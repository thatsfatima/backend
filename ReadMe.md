---

# Backend API - Application de Gestion de Livres

Ce projet est une API backend construite avec Node.js, Express, et MongoDB pour gérer des utilisateurs et leurs livres. L'application supporte l'inscription, l'authentification (JWT) et des opérations CRUD sur les livres.

## Table des matières

* [Prérequis](#prérequis)
* [Installation](#installation)
* [Variables d'environnement](#variables-denvironnement)
* [Lancement du Serveur](#lancement-du-serveur)
* [Structure du Projet](#structure-du-projet)
* [Endpoints de l'API](#endpoints-de-lapi)
* [Technologies Utilisées](#technologies-utilisées)
* [Améliorations Futures](#améliorations-futures)

---

## Prérequis

Assurez-vous d'avoir installé les outils suivants :

* [Node.js](https://nodejs.org/) (version 14 ou supérieure)
* [MongoDB](https://www.mongodb.com/) (local ou cloud via MongoDB Atlas)
* Un gestionnaire de paquets comme `npm` ou `yarn`

---

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo/backend
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

---

## Variables d'environnement

Créez un fichier `.env` à la racine du dossier backend avec les clés suivantes :

```plaintext
MONGO_URI=mongodb+srv://mbenguef2001:passer2021@cluster0.1yhfe.mongodb.net/gestionlivres?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=d38fe3f2dd04a311a9d665a901c1fa28aa7e4ea186b1f835e3e2525b2d9af5afcc72708c874a34559e3a8b917e82866dd02c22c4f9235507031052a91850617a
PORT=5000
```

* `MONGO_URI` : L'URL de connexion à MongoDB (local ou MongoDB Atlas).
* `JWT_SECRET` : Une clé secrète utilisée pour signer les tokens JWT.
* `PORT` : Le port sur lequel le serveur s'exécutera (par défaut : 5000).

---

## Lancement du Serveur

1. Démarrez le serveur en mode développement :

   ```bash
   npm run dev
   ```

2. Démarrez le serveur en mode production :

   ```bash
   npm start
   ```

Par défaut, le serveur s'exécutera à l'adresse : `http://localhost:5000`

---

## Structure du Projet

Voici la structure principale du projet :

```plaintext
backend/
├── controllers/
│   ├── authController.js
│   ├── bookController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Book.js
├── routes/
│   ├── auth.js
│   ├── book.js
├── .env
├── app.js
├── package-lock.json
├── package.json
```

---

## Endpoints de l'API

### Authentification

* **POST `/api/auth/register`**
  Crée un nouvel utilisateur.
  **Body JSON** :

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

* **POST `/api/auth/login`**
  Authentifie un utilisateur et retourne un token JWT.
  **Body JSON** :

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

---

### Livres (Protégés par JWT)

*  **Header** :

  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```

* **GET `/api/books`**
  Récupère tous les livres de l'utilisateur connecté.

* **GET `/api/books/:id`**
  Récupère les détails d'un livre spécifique.

* **POST `/api/books`**
  Ajoute un nouveau livre.
  **Body JSON** :

  ```json
  {
    "titre": "Vol de nuit",
    "auteur": "Antoine de Saint-Exupéry",
    "description": "Un conte philosophique",
    "annee": 1943
  }
  ```

* **PUT `/api/books/:id`**
  Met à jour un livre existant.
  **Body JSON** :

  ```json
  {
    "titre": "Vol de nuit (édition révisée)",
    "auteur": "Antoine de Saint-Exupéry"
  }
  ```

* **DELETE `/api/books/:id`**
  Supprime un livre.

---

## Technologies Utilisées

* **NodeJS** : Pour le runtime JavaScript côté serveur.
* **ExpressJS** : Framework minimaliste pour construire l'API.
* **MongoDB** : Base de données NoSQL pour stocker les utilisateurs et les livres.
* **Mongoose** : ODM pour MongoDB, facilitant les opérations sur la base.
* **JWT** : JSON Web Token pour la gestion des sessions.
* **Nodemon** : Pour un rechargement automatique en mode développement.


---