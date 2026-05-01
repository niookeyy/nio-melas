import React from "react";

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h3>{t.footer.name}</h3>
          <p>{t.footer.role}</p>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Tristanio Armanto. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;