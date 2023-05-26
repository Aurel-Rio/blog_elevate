const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Port d'écoute du serveur




app.use(express.json());
// Routes de votre API

// Endpoint racine
app.get('/', (req, res) => {
  res.send('API Blog-Elevate');
});


const articlesRouter = require('./routes/articles');

// Utiliser la route /articles
app.use('/articles', articlesRouter);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

