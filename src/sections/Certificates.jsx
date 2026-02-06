import React, { useState } from 'react';
import Label from './Label';

// IMPORT GAMBAR (Ini kunci agar gambar tidak pecah/putih)
import sapCert from '../assets/Sertifikat Tristanio Putra Armanto.png';
import finalistCert from '../assets/finalist-skomda.png';
import mediaCloudCert from '../assets/media-cloud.png';

const Certificates = ({ onEnter, onLeave }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    { 
      category: 'Data Science', 
      title: 'ASEAN Data Science Explorers 2024 Enablement Session', 
      issuer: 'SAP & ASEAN Foundation',
      img: sapCert 
    },
    { 
      category: 'Finalist', 
      title: 'Finalist Tristanio Putra A (SKOMDA-NERD)', 
      issuer: 'Skomda-Nerd Team 2023',
      img: finalistCert 
    },
    { 
      category: 'Web Development', 
      title: 'Sertifikat Kompetisi Website Media Cloud', 
      issuer: 'Media Cloud Indonesia',
      img: mediaCloudCert 
    }
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
              onLeave={onLeave}
              onClick={() => setSelectedImage(cert.img)}
              style={{ cursor: 'pointer' }}
            >
              <span className="cert-cat">{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tampilkan Pop-up Label */}
      <Label 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Certificates;