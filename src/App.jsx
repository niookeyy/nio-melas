import React, { useEffect, useState } from "react";
import { content } from "./data/content";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [splashes, setSplashes] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = content[lang];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const splash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setSplashes((prev) => [...prev, splash]);

      setTimeout(() => {
        setSplashes((prev) => prev.filter((item) => item.id !== splash.id));
      }, 650);
    };

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;

      setScrollProgress(progress);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="portfolio">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div
        className={`cursor ${cursorVariant}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {splashes.map((splash) => (
        <span
          key={splash.id}
          className="cursor-splash"
          style={{
            left: splash.x,
            top: splash.y,
          }}
        />
      ))}

      <Navbar
        t={t}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        lang={lang}
        setLang={setLang}
      />

      <main>
        <Hero t={t} onEnter={textEnter} onLeave={textLeave} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} onEnter={textEnter} onLeave={textLeave} />
        <Certificates onEnter={textEnter} onLeave={textLeave} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;