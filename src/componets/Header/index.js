import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Importe o CSS específico para o header

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
            <Link to="/" className="logo-link">Foodfy</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
