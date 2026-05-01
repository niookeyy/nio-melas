import React, { useState } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import profilePhoto from "../assets/Foto-saya-hero.jpeg";

const GithubIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const Hero = ({ onEnter, onLeave }) => {
  const [light, setLight] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    titleX: 0,
    titleY: 0,
    bottomX: 0,
    bottomY: 0,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = (mouseX / rect.width) * 100;
    const yPercent = (mouseY / rect.height) * 100;

    const x = mouseX / rect.width - 0.5;
    const y = mouseY / rect.height - 0.5;

    setLight({ x: xPercent, y: yPercent });

    setTilt({
      rotateX: y * -12,
      rotateY: x * 12,
      titleX: x * 18,
      titleY: y * 18,
      bottomX: x * -12,
      bottomY: y * -12,
    });
  };

  const handleLeave = () => {
    setLight({ x: 50, y: 50 });
    setTilt({
      rotateX: 0,
      rotateY: 0,
      titleX: 0,
      titleY: 0,
      bottomX: 0,
      bottomY: 0,
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-copy">
          <span className="hero-intro">HELLO, I’M</span>

          <h1 className="hero-name">Tristanio Armanto</h1>

          <div className="hero-role-wrap">
            <span>Frontend Developer</span>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/niookeyy" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/tristanio-armanto-14939b299" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
            <a href="#contact">
              <Instagram size={22} />
            </a>
          </div>

          <p className="hero-desc">
            I help individuals and businesses transform ideas into modern,
            responsive, and user-friendly web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              View Projects <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-tilt-wrap"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div
              className="hero-photo-card"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              }}
            >
              <img src={profilePhoto} alt="Tristanio Armanto" />

              <div
                className="hero-light"
                style={{
                  background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(255,255,255,0.55), rgba(255,255,255,0.16) 18%, transparent 48%)`,
                }}
              />

              <div
                className="photo-title"
                style={{
                  transform: `translate3d(${tilt.titleX}px, ${tilt.titleY}px, 42px)`,
                }}
              >
                <h3>Tristanio Armanto</h3>
                <p>Frontend Developer</p>
              </div>

              <div
                className="photo-bottom"
                style={{
                  transform: `translate3d(${tilt.bottomX}px, ${tilt.bottomY}px, 52px)`,
                }}
              >
                <div className="mini-profile">
                  <img src={profilePhoto} alt="Tristanio" />
                  <div>
                    <strong>@tristanio</strong>
                    <span>Online</span>
                  </div>
                </div>

                <a href="#contact">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;