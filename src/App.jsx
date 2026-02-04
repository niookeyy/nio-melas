import React, { useState, useEffect } from 'react';
import { content } from './data/content';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  // --- STATE ---
  const [lang, setLang] = useState('en'); // State Bahasa
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[lang]; // Shortcut data bahasa

  // --- EFFECTS ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      // Hitung progress scroll (untuk bar di atas jika ada)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Deteksi section yang sedang aktif
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- CURSOR ANIMATIONS ---
  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <div className="portfolio">
      {/* Custom Cursor */}
      <div 
        className={`cursor ${cursorVariant}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      <div 
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* RENDER ALL SECTIONS */}
      <Navbar 
        t={t} 
        activeSection={activeSection} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        lang={lang} 
        setLang={setLang} 
      />

      <Hero t={t} onEnter={textEnter} onLeave={textLeave} />
      
      <About t={t} />
      
      <Skills t={t} />
      
      <Projects t={t} onEnter={textEnter} onLeave={textLeave} />
      
      <Certificates onEnter={textEnter} onLeave={textLeave} />
      
      <Contact t={t} />
      
      <Footer t={t} />

      {/* Masukkan CSS (style jsx) Anda di bawah sini atau import file .css */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --black: #0a0a0a;
          --white: #ffffff;
          --red: #DC143C;
          --dark-red: #8B0000;
          --gray: #666666;
          --light-gray: #f5f5f5;
        }

        .portfolio {
          background: var(--white);
          color: var(--black);
          font-family: 'Crimson Text', serif;
          overflow-x: hidden;
          cursor: none;
        }

        /* Custom Cursor */
        .cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1.5px solid var(--red);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .cursor.text {
          width: 80px;
          height: 80px;
        }

        .cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: var(--red);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }

        /* Scroll Progress */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--red);
          z-index: 9998;
          transition: width 0.1s;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem 4rem;
          z-index: 9997;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-first {
          color: var(--black);
        }

        .logo-second {
          color: var(--red);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: none;
          padding: 10px;
        }

        .menu-toggle span {
          width: 25px;
          height: 2px;
          background: var(--black);
          transition: all 0.3s;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
        }

        .nav-links a {
          color: var(--gray);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--red);
          transition: width 0.3s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--red);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        /* Sections */
        section {
          padding: 10rem 4rem;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
        }

        .section-number {
          position: absolute;
          top: 10rem;
          left: 4rem;
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          font-weight: 900;
          color: rgba(220, 20, 60, 0.05);
          line-height: 1;
          z-index: 0;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .section-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--gray);
          max-width: 800px;
          margin-bottom: 4rem;
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem;
          position: relative;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
        }

        .hero-label {
          font-size: 0.9rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 2rem;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 0.9;
          margin-bottom: 3rem;
        }

        .hero-title .line {
          display: block;
        }

        .hero-title .accent {
          color: var(--red);
        }

        .hero-tagline {
          font-size: 1.5rem;
          line-height: 1.8;
          color: var(--gray);
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin-bottom: 4rem;
          padding: 3rem 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 800;
          color: var(--red);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .btn-primary,
        .btn-secondary {
          padding: 1.3rem 3rem;
          font-family: 'Crimson Text', serif;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
          border: 2px solid var(--black);
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: var(--black);
          color: var(--white);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--red);
          transition: left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .btn-primary:hover::before {
          left: 0;
        }

        .btn-primary:hover {
          border-color: var(--red);
        }

        .btn-secondary {
          background: transparent;
          color: var(--black);
        }

        .btn-secondary:hover {
          background: var(--black);
          color: var(--white);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--gray);
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: var(--red);
          animation: scrollAnim 2s infinite;
        }

        @keyframes scrollAnim {
          0%, 100% { transform: scaleY(1); transform-origin: top; }
          50% { transform: scaleY(0.5); transform-origin: bottom; }
        }

        /* About */
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          position: relative;
          z-index: 1;
        }

        .about-text .lead {
          font-size: 1.8rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .about-text p {
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--gray);
          margin-bottom: 1.5rem;
        }

        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .highlight-card {
          background: var(--light-gray);
          padding: 2.5rem;
          border-left: 4px solid var(--red);
          transition: all 0.3s;
        }

        .highlight-card:hover {
          transform: translateX(10px);
          border-left-width: 8px;
        }

        .highlight-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .highlight-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .highlight-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .highlight-detail {
          font-size: 1rem;
          color: var(--gray);
          line-height: 1.6;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .skill-category h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--red);
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          transition: all 0.3s;
          padding: 0.5rem 0;
        }

        .skill-item:hover {
          color: var(--red);
          transform: translateX(10px);
        }

        .skill-bullet {
          color: var(--red);
          font-weight: 700;
          font-size: 1.5rem;
        }

        /* Projects */
        .projects-container {
          display: grid;
          gap: 6rem;
          position: relative;
          z-index: 1;
        }

        .project-card {
          background: var(--light-gray);
          padding: 4rem;
          position: relative;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-number {
          position: absolute;
          top: 2rem;
          right: 4rem;
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.03);
          line-height: 1;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .project-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
        }

        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .project-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 2rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .project-tag {
          padding: 0.5rem 1.2rem;
          background: var(--white);
          border: 1px solid var(--black);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-methodology h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .methodology-steps {
          display: grid;
          gap: 1rem;
        }

        .method-step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          background: white;
          transition: all 0.3s;
        }

        .method-step:hover {
          background: var(--black);
          color: var(--white);
        }

        .step-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--red);
        }

        .method-step:hover .step-number {
          color: var(--white);
        }

        .step-text {
          font-size: 1.1rem;
        }

        /* Certificates */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        .cert-card {
          background: var(--light-gray);
          padding: 3rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cert-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--red);
          transition: width 0.3s;
        }

        .cert-card.business::before {
          background: var(--dark-red);
        }

        .cert-card.data-science::before {
          background: var(--red);
        }

        .cert-card.achievement::before {
          background: var(--black);
        }

        .cert-card:hover {
          transform: translateX(10px);
          background: var(--black);
          color: var(--white);
        }

        .cert-card:hover::before {
          width: 8px;
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cert-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
        }

        .cert-year {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .cert-card:hover .cert-year {
          color: var(--red);
        }

        .cert-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cert-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cert-issuer {
          font-size: 1rem;
          color: var(--red);
          margin-bottom: 1rem;
          font-style: italic;
        }

        .cert-card:hover .cert-issuer {
          color: var(--white);
        }

        .cert-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--gray);
        }

        .cert-card:hover .cert-description {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Contact */
        .contact-content {
          position: relative;
          z-index: 1;
        }

        .contact-intro {
          font-size: 1.5rem;
          line-height: 1.8;
          color: var(--gray);
          max-width: 900px;
          margin-bottom: 4rem;
        }

        .contact-grid {
          display: grid;
          gap: 0;
        }

        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.5rem 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          text-decoration: none;
          color: var(--black);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--black);
          transition: left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .contact-link:hover::before {
          left: 0;
        }

        .contact-link:hover {
          color: var(--white);
          padding-left: 4rem;
        }

        .link-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
        }

        .link-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .contact-link:hover .link-value {
          color: var(--red);
        }

        /* Footer */
        .footer {
          padding: 4rem;
          border-top: 2px solid var(--black);
          background: var(--light-gray);
        }

        .footer-content {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .footer-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .footer-tagline {
          font-size: 1rem;
          color: var(--gray);
        }

        .footer-right {
          text-align: right;
          font-size: 0.9rem;
          color: var(--gray);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 6rem;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .about-layout,
          .skills-grid,
          .certificates-grid {
            grid-template-columns: 1fr;
          }

          .section-number {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 6rem 2rem;
          }

          .nav {
            padding: 1.5rem 2rem;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: var(--white);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            transition: left 0.3s;
          }

          .nav-links.open {
            left: 0;
          }

          .hero-title {
            font-size: 4rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }

          .hero-cta {
            flex-direction: column;
          }

          .section-number {
            font-size: 4rem;
          }

          .cursor,
          .cursor-dot {
            display: none;
          }

          .portfolio {
            cursor: auto;
          }

          .project-number {
            font-size: 4rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
          }

          .footer-right {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default App;