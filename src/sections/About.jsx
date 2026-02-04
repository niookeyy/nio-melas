import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="section-number">01</div>
      <div className="about-layout">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-text">
            <p className="lead">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>
        <div className="about-highlights">
          {t.about.highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="highlight-title">{item.subtitle}</p>
              <p className="highlight-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;