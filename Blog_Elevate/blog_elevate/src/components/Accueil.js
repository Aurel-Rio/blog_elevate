import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Effectuez une requête API pour récupérer les articles
    fetch('https://api.example.com/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <h1>Articles</h1>
        <p>Découvrez notre collection d'articles informatifs et instructifs sur Node.js et React.js.</p>
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <a href={`/articles/${article.id}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;