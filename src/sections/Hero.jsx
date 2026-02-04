import React from 'react';

const Hero = ({ t, onEnter, onLeave }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Label kecil di atas nama */}
        <div 
          className="hero-label" 
          onMouseEnter={onEnter} 
          onMouseLeave={onLeave}
        >
          {t.hero.label}
        </div>

        {/* Nama Utama */}
        <h1 
          className="hero-title" 
          onMouseEnter={onEnter} 
          onMouseLeave={onLeave}
        >
          <span className="line">{t.hero.title[0]}</span>
          <span className="line">{t.hero.title[1]}</span>
          <span className="line accent">{t.hero.title[2]}</span>
        </h1>

        {/* Tagline / Deskripsi */}
        <p className="hero-tagline">{t.hero.tagline}</p>

        {/* Tombol Aksi */}
        <div className="hero-cta">
          <a 
            href="#projects" 
            className="btn-primary" 
            onMouseEnter={onEnter} 
            onMouseLeave={onLeave}
          >
            {t.hero.cta[0]}
          </a>
          <a 
            href="#contact" 
            className="btn-secondary" 
            onMouseEnter={onEnter} 
            onMouseLeave={onLeave}
          >
            {t.hero.cta[1]}
          </a>
        </div>

        {/* Statistik di bagian bawah Hero */}
        <div className="hero-stats">
          {t.hero.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-num">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;