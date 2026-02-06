import React from 'react';

const Contact = ({ t }) => {
  const contactLinks = [
    { label: 'Email', value: 'tristanioputra@gmail.com', url: 'mailto:portofoliotristanio@gmail.com', icon: '✉️' },
    { label: 'Discord', value: 'tristanio', url: 'https://discord.com/users/nio0133_18725', icon: '🎮' },
    { label: 'LinkedIn', value: 'Tristanio Putra', url: 'https://linkedin.com/in/tristanioputra', icon: '🔗' },
    { label: 'GitHub', value: '@tristanioputra', url: 'https://github.com/tristanioputra', icon: '📂' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-number">05</div>
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-intro">{t.contact.desc}</p>

      <div className="contact-grid-modern">
        {contactLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-content">
              <span className="card-icon">{link.icon}</span>
              <div className="card-info">
                <span className="card-label">{link.label}</span>
                <span className="card-value">{link.value}</span>
              </div>
            </div>
            <div className="card-arrow">↗</div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .contact-section {
          background: #ffffff;
          padding: 10rem 4rem;
        }

        .contact-grid-modern {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 4rem;
        }

        .contact-card {
          background: #1a1a1a; /* Warna gelap seperti di gambar */
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          background: #252525;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #DC143C; /* Aksen merah saat hover */
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .card-icon {
          font-size: 1.5rem;
          filter: grayscale(1);
        }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .card-label {
          color: #888;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
        }

        .card-value {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .card-arrow {
          color: #DC143C;
          font-size: 1.2rem;
          opacity: 0;
          transition: 0.3s;
        }

        .contact-card:hover .card-arrow {
          opacity: 1;
          transform: translate(3px, -3px);
        }

        @media (max-width: 768px) {
          .contact-grid-modern {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;