import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            "facebook-f",
            "twitter",
            "instagram",
            "linkedin-in",
            "pinterest-p",
          ].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:-translate-y-1"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { name: "Home", to: "/" },
            { name: "About", to: "/about" },
            { name: "Menu", to: "/menu" },
            { name: "Products", to: "/products" },
            { name: "Reviews", to: "/reviews" },
            { name: "Blogs", to: "/blogs" },
            { name: "Contact", to: "/contact" },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="px-6 py-2 text-sm uppercase tracking-wide border border-white/20 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Crafted with ☕ by{" "}
          <span className="text-yellow-500 font-semibold">Shiva</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
