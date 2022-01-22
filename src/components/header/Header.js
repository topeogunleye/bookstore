import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border border-stone-200 shadow divide-y divide-stone-200">
      <div className="py-8 px-28 max-w-7xl mx-auto md:flex items-center justify-start space-x-4 space-y-4 md:space-y-0">
        <div className="">
          <Link to="/">
            <h2 className="text-3xl text-blue-400 font-bold">Bookstore CMS</h2>
          </Link>
        </div>

        <div className="grid grid-cols-2 w-auto text-sm">
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
