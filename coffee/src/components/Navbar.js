import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo3.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Menu", "/menu"],
    ["Products", "/products"],
    ["Reviews", "/reviews"],
    ["Contact", "/contact"],
    ["Blogs", "/blogs"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#081a14] border-b border-yellow-600/40 shadow-md">
      <div className="flex items-center justify-between px-8 md:px-16 py-4 md:py-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gradient-to-tr from-[#07f184a8] via-[#04f84d] to-[#1f7736]
 flex items-center justify-center shadow-lg">
            <img
              src={logo}
              alt="Coffee Shop Logo"
              className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover"
            />
          </div>
          <span className="hidden md:inline text-2xl md:text-3xl font-bold text-yellow-500 tracking-wider">
            CoffeeHub
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative text-white text-lg md:text-xl font-medium uppercase transition-colors ${
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500 rounded-full animate-pulse" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white text-2xl md:text-3xl">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hover:text-yellow-500 transition-colors"
          >
            <i className="fas fa-search" />
          </button>
          <button className="hover:text-yellow-500 transition-colors relative">
            <i className="fas fa-shopping-cart" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden hover:text-yellow-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Search box */}
      <div
        className={`absolute top-full right-0 left-0 bg-white flex items-center px-4 py-3 transition-all duration-500 transform ${
          searchOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } origin-top`}
      >
        <input
          type="search"
          placeholder="Search..."
          className="w-full text-lg md:text-xl text-[#081a14] outline-none px-4 py-2 rounded-l-md border border-r-0 border-gray-300"
        />
        <button className="bg-yellow-500 px-4 py-2 rounded-r-md text-black font-semibold hover:bg-yellow-600 transition">
          <i className="fas fa-search" />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#081a14] transform transition-transform duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-yellow-600/40">
          <span className="text-yellow-500 text-2xl font-bold uppercase">
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times text-white text-2xl" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-2xl font-semibold uppercase hover:text-yellow-500 transition-colors ${
                  isActive ? "text-yellow-500" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
