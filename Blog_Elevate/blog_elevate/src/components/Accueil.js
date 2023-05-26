import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Accueil = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Blog-Elevate</h1>
        <p>Bienvenue sur notre blog dédié à Node.js et React.js.</p>
        <p>Explorez nos articles informatifs, découvrez les dernières tendances et améliorez vos compétences en développement web.</p>
      </main>

      <Footer />
    </div>
  );
};

export default Accueil;