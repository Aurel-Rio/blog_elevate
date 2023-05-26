const express = require('express');
const games = require('./games/games');

const app = express();
const port = 3001;

app.get('/games', (req, res) => {
  // Ici, vous pouvez effectuer des opérations supplémentaires si nécessaire
  // avant d'envoyer la liste des jeux vidéo en tant que réponse JSON
  res.json(games);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});