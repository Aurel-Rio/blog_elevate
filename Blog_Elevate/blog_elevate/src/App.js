import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Articles from './components/Articles';
import Categories from './components/Categories';
import Apropos from './components/APropos';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;