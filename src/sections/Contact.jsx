import React from 'react';

const Contact = ({ t }) => {
  // Cek apakah t dan t.contact ada, supaya tidak crash saat loading
  if (!t || !t.contact) return null;

  return (
    <section id="contact" className="contact">
      <div className="section-number">05</div>
      <div className="contact-container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-desc">{t.contact.desc}</p>
        
        <div className="contact-methods">
          <a 
            href="mailto:tristanioarmanto@gmail.com" 
            className="contact-btn"
          >
            {t.contact.button}
          </a>
          
          <div className="social-links">
            {/* Sesuaikan link dengan sosmed kamu */}
            <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/username" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <a href="https://instagram.com/username" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;