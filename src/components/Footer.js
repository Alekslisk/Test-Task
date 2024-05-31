import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Rick and Morty Fan Site</p>
    </footer>
  );
};

export default Footer;