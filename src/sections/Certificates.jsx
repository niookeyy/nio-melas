import React, { useState } from 'react';
import Label from './Label';

// IMPORT GAMBAR
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

        {/* BUTTON TAMBAHAN */}
        <div className="view-more-container">
          <a 
            href="https://drive.google.com/drive/folders/1R-QB4y15pPNsaYA6ZQujuuUdGp78RxLY?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
            onMouseEnter={onEnter}
            onLeave={onLeave}
          >
            View All Certificates
          </a>
        </div>
      </div>

      <Label 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      <style jsx>{`
        .view-more-container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .view-more-btn {
  padding: 12px 30px;
  /* Tambahkan background semi-transparan agar teks lebih menonjol dari background utama */
  background: rgba(220, 20, 60, 0.05); 
  border: 1px solid #dc143c;
  color: #dc143c; /* Pastikan warna putih solid */
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: inline-block; /* Memastikan padding bekerja dengan baik */
  opacity: 1; /* Pastikan tidak ada transparansi pada tombol utama */
}

.view-more-btn:hover {
  background: #dc143c;
  color: white;
  box-shadow: 0 0 20px rgba(220, 20, 60, 0.4);
  transform: translateY(-2px); /* Tambahan sedikit efek angkat saat hover */
}
      `}</style>
    </section>
  );
};

export default Certificates;