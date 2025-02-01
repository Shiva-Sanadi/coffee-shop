import React, { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="header">
      <a href="#" className="logo">
        <img src="images/logo3.jpg" alt=""/>
      </a>
      {/* {menu ?"navbar navbarmenu": navbar } */}
      <nav className= {menu ? "navbar navbarmenu": "navbar" } >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="shopping-btn"></div>
        <div className="fas fa-bars" id="menu-btn" onClick={()=> setMenu(!menu)} ></div>
      </div>

      <div className="search-form">
        <input type="search" id="search-box" placeholder="search here...."/>
        <label for="search-box" className="fas fa-search"></label>
      </div>

      

   </header>
    </>
  )
}

export default Navbar;