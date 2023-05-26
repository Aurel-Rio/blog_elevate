const express = require('express');

const app = express();
const port = 3001;

app.get('/games', (req, res) => {
    // Effectuez les opérations nécessaires pour récupérer les jeux vidéo depuis votre source de données
    // Par exemple, vous pouvez interagir avec une base de données ou un fichier JSON
  
    // Ensuite, envoyez la liste des jeux vidéo en tant que réponse JSON
    const games = [
      { id: 1, title: 'Game 1', genre: 'Action' },
      { id: 2, title: 'Game 2', genre: 'RPG' },
      { id: 3, title: 'Game 3', genre: 'Adventure' }
    ];
    res.json(games);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });