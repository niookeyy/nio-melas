import React from 'react';

const Contact = ({ t }) => {
  const contactLinks = [
    { 
      label: 'Email', 
      value: 'tristanioputra@gmail.com', 
      url: 'mailto:tristanioputra@gmail.com', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    { 
      label: 'Discord', 
      value: 'tristanio', 
      url: 'https://discord.com/users/nio0133_18725', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      )
    },
    { 
      label: 'LinkedIn', 
      value: 'Tristanio Putra', 
      url: 'https://linkedin.com/in/tristanioputra', 
      icon: (
        /* Menggunakan SVG yang kamu berikan */
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
          <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
          <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      label: 'GitHub', 
      value: '@tristanioputra', 
      url: 'https://github.com/tristanioputra', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
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
          background: #1a1a1a;
          padding: 1.5rem 2rem;
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
          background: #222222;
          border-color: #DC143C;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .card-icon {
          display: flex;
          align-items: center;
          color: #ffffff;
          opacity: 0.8;
          transition: 0.3s;
        }

        .contact-card:hover .card-icon {
          color: #DC143C;
          opacity: 1;
        }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .card-label {
          color: #888;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
        }

        .card-value {
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
        }

        .card-arrow {
          color: #DC143C;
          font-size: 1.2rem;
          opacity: 0;
          transform: translate(-10px, 10px);
          transition: 0.3s;
        }

        .contact-card:hover .card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 5rem 2rem;
          }
          .contact-grid-modern {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;