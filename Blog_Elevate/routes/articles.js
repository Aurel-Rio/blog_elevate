const express = require('express');
const router = express.Router();

// Exemple d'articles (vous pouvez les remplacer par vos propres données)
const articles = [
  { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1' },
  { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2' },
  { id: 3, title: 'Article 3', content: 'Contenu de l\'article 3' }
];

// Endpoint GET /articles
router.get('/', (req, res) => {
  res.json(articles);
});

module.exports = router;