import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <nav className="footer__nav">
      <ul className="footer__list">
        <li className="footer__list-item"><Link to="/" className="footer__link">Home</Link></li>
      </ul>
    </nav>
    <span className="footer__copyright">Leolassence React/Redux</span>
  </footer>
);

export default Footer;
