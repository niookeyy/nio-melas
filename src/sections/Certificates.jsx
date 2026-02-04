import React from 'react';

const Certificates = ({ onEnter, onLeave }) => {
  const certs = [
    { category: 'Business Marketing', title: 'Global Business Marketing Case Competition', issuer: '2023' },
    { category: 'Data Science', title: 'ASEAN Data Science Explorer', issuer: 'ASEAN Foundation' },
    { category: 'Data Science', title: 'Data Analytics Training', issuer: 'Digital Talent Scholarship' },
    { category: 'Web Development', title: 'SIJA Competency Certificate', issuer: 'SMK Telkom Sidoarjo' },
    { category: 'Data Analysis', title: 'Google Data Analytics Professional', issuer: 'Coursera' }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="section-number">04</div>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="cert-cat">{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;