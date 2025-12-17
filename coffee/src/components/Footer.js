import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <a href="https://facebook.com" className="fab fa-facebook" aria-label="Facebook"></a>
        <a href="https://twitter.com" className="fab fa-twitter" aria-label="Twitter"></a>
        <a href="https://instagram.com" className="fab fa-instagram" aria-label="Instagram"></a>
        <a href="https://linkedin.com" className="fab fa-linkedin" aria-label="LinkedIn"></a>
        <a href="https://pinterest.com" className="fab fa-pinterest" aria-label="Pinterest"></a>
      </div>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/menu">menu</Link>
        <Link to="/products">products</Link>
        <Link to="/reviews">review</Link>
        <Link to="/contact">contact</Link>
        <Link to="/blogs">blogs</Link>
      </div>
      <div className="credit">created by <span>Shiva</span></div>
    </section>
  );
}

export default Footer;