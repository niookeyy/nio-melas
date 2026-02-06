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
            <ul>
              <li><a href="https://www.linkedin.com/in/tristanio-armanto-14939b299?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMXP0C%2BXeRY2ecojBpTS8Yg%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/niookeyy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;