import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo">Foodfy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
