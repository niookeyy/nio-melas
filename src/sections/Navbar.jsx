import React from 'react';

const Navbar = ({ t, activeSection, menuOpen, setMenuOpen, lang, setLang }) => {
  // Fungsi untuk mengganti bahasa saat tombol diklik
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const navItems = [
    { id: 'home', label: t.nav[0] },
    { id: 'about', label: t.nav[1] },
    { id: 'skills', label: t.nav[2] },
    { id: 'projects', label: t.nav[3] },
    { id: 'certificates', label: t.nav[4] },
    { id: 'contact', label: t.nav[5] },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#home" className="logo">
          TPA<span className="accent">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-num">0{index + 1}</span>
              {item.label}
            </a>
          ))}
          
          {/* Tombol Language Switcher */}
          <button className="lang-toggle-btn" onClick={toggleLanguage}>
            {lang === 'en' ? 'ID 🇮🇩' : 'EN 🇺🇸'}
          </button>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;