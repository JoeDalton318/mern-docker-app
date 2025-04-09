# MERN Docker App

Ce projet est une application MERN (MongoDB, Express.js, React, Node.js) déployée localement avec **Docker**, sans `docker-compose`.

## 📦 Structure du projet

```
mern-docker-app/# MERN Docker App

Ce projet est une application MERN (MongoDB, Express.js, React, Node.js) déployée localement avec **Docker**, sans `docker-compose`.

## 📦 Structure du projet

```
mern-docker-app/
├── backend/           # API Express + Node.js
│   └── Dockerfile
├── frontend/          # Application React (Vite ou CRA)
│   └── Dockerfile
├── nginx/             # (Optionnel) config personnalisée
│   └── nginx.conf
└── README.md
```

## 🚀 Lancer le projet avec Docker

### 1. Créer un réseau Docker

```bash
docker network create mern_network
```

### 2. Lancer MongoDB avec volume

```bash
docker volume create mongo_data

docker run -d \
  --name mongo_container \
  --network mern_network \
  -v mongo_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=pass123 \
  mongo
```

### 3. Construire et lancer l'API

```bash
cd backend
docker build -t mern_api .
docker run -d \
  --name api_container \
  --network mern_network \
  -p 5000:5000 \
  mern_api
```

### 4. Construire et lancer le Frontend

```bash
cd ../frontend
docker build -t mern_frontend .
docker run -d \
  --name frontend_container \
  --network mern_network \
  -p 3000:80 \
  mern_frontend
```

➡️ Accède à l’application via [http://localhost:3000](http://localhost:3000)

## 🔧 Connexions

Dans votre code :

- Backend ➜ MongoDB : `mongodb://mongo_container:27017/nom_db`
- Frontend ➜ Backend : `http://api_container:5000`

## 🧹 Nettoyer

```bash
docker stop mongo_container api_container frontend_container
docker rm mongo_container api_container frontend_container
docker network rm mern_network
docker volume rm mongo_data
```

---

### 🛡️ Sécurité

Ne stockez pas vos mots de passe en dur ! Utilisez des variables d’environnement ou un `.env`.

---

### 👨‍💻 Auteur

[@JoeDalton318](https://github.com/JoeDalton318)

---

## 💡 Alternative avec Docker Compose

Une autre manière plus simple de lancer tout le projet consiste à utiliser `docker-compose` :

### ▶️ Lancer le projet

```bash
docker compose up -d
```

### 🔄 Rebuild si nécessaire

```bash
docker compose up -d --build
```

### 🛑 Stopper et supprimer tous les conteneurs

```bash
docker compose down
```

### 🔍 Vérifier les logs

```bash
docker compose logs -f
```

---

> Assurez-vous que le backend utilise `mongodb://mongo_container:27017/nom_db`  
> et que le frontend communique avec `http://api_container:5000` pour les API.

├── backend/           # API Express + Node.js
│   └── Dockerfile
├── frontend/          # Application React (Vite ou CRA)
│   └── Dockerfile
├── nginx/             # (Optionnel) config personnalisée
│   └── nginx.conf
└── README.md
```

## 🚀 Lancer le projet avec Docker

### 1. Créer un réseau Docker

```bash
docker network create mern_network
```

### 2. Lancer MongoDB avec volume

```bash
docker volume create mongo_data

docker run -d \
  --name mongo_container \
  --network mern_network \
  -v mongo_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=pass123 \
  mongo
```

### 3. Construire et lancer l'API

```bash
cd backend
docker build -t mern_api .
docker run -d \
  --name api_container \
  --network mern_network \
  -p 5000:5000 \
  mern_api
```

### 4. Construire et lancer le Frontend

```bash
cd ../frontend
docker build -t mern_frontend .
docker run -d \
  --name frontend_container \
  --network mern_network \
  -p 8080:80 \
  mern_frontend
```

➡️ Accède à l’application via [http://localhost:8080](http://localhost:8080)

## 🔧 Connexions

Dans votre code :

- Backend ➜ MongoDB : `mongodb://mongo_container:27017/nom_db`
- Frontend ➜ Backend : `http://api_container:5000`

## 🧹 Nettoyer

```bash
docker stop mongo_container api_container frontend_container
docker rm mongo_container api_container frontend_container
docker network rm mern_network
docker volume rm mongo_data
```

---

### 🛡️ Sécurité

Ne stockez pas vos mots de passe en dur ! Utilisez des variables d’environnement ou un `.env`.

---

### 👨‍💻 Auteur

[@JoeDalton318](https://github.com/JoeDalton318)
