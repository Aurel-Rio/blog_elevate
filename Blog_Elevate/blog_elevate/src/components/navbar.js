
import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/categories">Catégories</Link>
        </li>
        <li>
          <Link to="/apropos">À Propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;