import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Articles = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Articles</h1>
        <p>Découvrez notre collection d'articles informatifs et instructifs sur Node.js et React.js.</p>
        <ul>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
          {/* Ajoutez ici la liste des articles avec des liens vers les pages individuelles */}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;