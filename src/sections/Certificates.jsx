import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Label from "./Label";

import sapCert from "../assets/Sertifikat Tristanio Putra Armanto.png";
import finalistCert from "../assets/finalist-skomda.png";
import mediaCloudCert from "../assets/media-cloud.png";

const certs = [
  {
    category: "Data Science",
    title: "ASEAN Data Science Explorers 2024 Enablement Session",
    issuer: "SAP & ASEAN Foundation",
    img: sapCert,
  },
  {
    category: "Finalist",
    title: "Finalist Tristanio Putra A (SKOMDA-NERD)",
    issuer: "Skomda-Nerd Team 2023",
    img: finalistCert,
  },
  {
    category: "Web Development",
    title: "Sertifikat Kompetisi Website Media Cloud",
    issuer: "Media Cloud Indonesia",
    img: mediaCloudCert,
  },
];

const Certificates = ({ onEnter, onLeave }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="certificates">
      <div className="section-number">04</div>

      <div className="container">
        <div className="section-head">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-desc">
            Certificates and achievements that support my learning journey in technology,
            frontend development, and digital problem solving.
          </p>
        </div>

        <div className="certificates-grid">
          {certs.map((cert, index) => (
            <motion.button
              type="button"
              key={cert.title}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="cert-icon">
                <Award size={22} />
              </div>

              <span className="cert-category">{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>

              <span className="cert-view">
                View Certificate
                <ExternalLink size={16} />
              </span>
            </motion.button>
          ))}
        </div>

        <div className="view-more-container">
          <a
            href="https://drive.google.com/drive/folders/1R-QB4y15pPNsaYA6ZQujuuUdGp78RxLY?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            View All Certificates
            <ExternalLink size={17} />
          </a>
        </div>
      </div>

      <Label
        isOpen={!!selectedCert}
        imageSrc={selectedCert?.img}
        imageAlt={selectedCert?.title}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default Certificates;