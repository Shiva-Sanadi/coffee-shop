import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/images/logo3.jpg" alt="Coffee Shop Logo"/>
      </Link>
      
      <nav className={menu ? "navbar navbarmenu" : "navbar"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/reviews" onClick={closeMenu}>Review</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
      </nav>

      <div className="icons">
        <div 
          className="fas fa-search" 
          id="search-btn"
          onClick={() => setSearchActive(!searchActive)}
        ></div>
        <div className="fas fa-shopping-cart" id="shopping-btn"></div>
        <div 
          className="fas fa-bars" 
          id="menu-btn" 
          onClick={() => setMenu(!menu)}
        ></div>
      </div>

      <div className={searchActive ? "search-form active" : "search-form"}>
        <input 
          type="search" 
          id="search-box" 
          placeholder="search here...."
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
    </header>
  );
}

export default Navbar;