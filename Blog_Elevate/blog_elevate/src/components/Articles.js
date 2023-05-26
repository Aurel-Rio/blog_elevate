import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../articles.css'; // Import du fichier CSS

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <main className="articles-container">
        <h1 className="articles-header">Articles</h1>
        <p>Découvrez notre collection d'articles informatifs et instructifs sur Node.js et React.js.</p>
        <ul className="articles-list">
          {articles.map(article => (
            <li key={article.id} className="article-item">
              <img src={`https://picsum.photos/200/300?random=${article.id}`} alt="Article" className="article-image" />
              <a href={`/articles/${article.id}`} className="article-link">{article.title}</a>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;