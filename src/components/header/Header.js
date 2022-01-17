import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>Bookstore CMS</h2>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
  );
}

export default Header;
