import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          TPA<span className="accent">.</span>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Tristanio Putra Armanto</p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;