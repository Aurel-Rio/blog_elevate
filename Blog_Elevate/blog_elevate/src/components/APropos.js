import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const APropos = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>À Propos</h1>
        <p>En savoir plus sur Blog-Elevate et notre équipe dévouée qui partage sa passion pour Node.js et React.js.</p>
        <p>Nous sommes déterminés à fournir des ressources de qualité, des tutoriels détaillés et des conseils pratiques pour vous aider à maîtriser ces technologies.</p>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;