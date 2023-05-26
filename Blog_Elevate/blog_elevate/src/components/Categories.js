import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Categories = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Catégories</h1>
        <p>Découvrez les différentes catégories de contenu disponibles sur notre blog.</p>
        <ul>
          <li>Catégorie 1</li>
          <li>Catégorie 2</li>
          <li>Catégorie 3</li>
          {/* Ajoutez ici la liste des catégories avec des liens vers les pages correspondantes */}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;