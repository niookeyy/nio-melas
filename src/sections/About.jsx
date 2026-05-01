import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp } from "lucide-react";
import gsap from "gsap";
import aboutPhoto from "../assets/foto-saya.jpeg";

const icons = [Sparkles, Target, TrendingUp];

const About = ({ t }) => {
  const cardRef = useRef(null);
  const dragData = useRef({ startX: 0, startY: 0, x: 0, y: 0 });

  const [dragging, setDragging] = useState(false);
  const [rope, setRope] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    setDragging(true);

    dragData.current.startX = e.clientX - dragData.current.x;
    dragData.current.startY = e.clientY - dragData.current.y;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    const x = e.clientX - dragData.current.startX;
    const y = e.clientY - dragData.current.startY;
    const rotate = Math.max(-14, Math.min(14, x / 12));

    dragData.current.x = x;
    dragData.current.y = y;

    setRope({ x, y });

    gsap.to(cardRef.current, {
      x,
      y,
      rotate,
      duration: 0.16,
      ease: "power2.out",
    });
  };

  const handlePointerUp = () => {
    setDragging(false);

    dragData.current.x = 0;
    dragData.current.y = 0;

    setRope({ x: 0, y: 0 });

    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 1.15,
      ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    <section id="about" className="about">
      <div className="section-number">01</div>

      <div className="container about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Introduction</span>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="about-grid-new">
          <motion.div
            className="about-photo-area"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <svg className="lanyard-svg" viewBox="0 0 200 300">
              <path
                d={`
                  M100 0
                  Q ${100 + rope.x * 0.45} ${90 + rope.y * 0.5},
                    ${100 + rope.x * 0.8} ${205 + rope.y * 0.55}
                `}
                stroke="rgba(91, 92, 246, 0.5)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={`
                  M100 0
                  Q ${100 + rope.x * 0.35} ${86 + rope.y * 0.42},
                    ${100 + rope.x * 0.65} ${205 + rope.y * 0.5}
                `}
                stroke="rgba(59, 130, 246, 0.18)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <div
              ref={cardRef}
              className={`about-photo-card ${dragging ? "dragging" : ""}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div className="photo-hole" />

              <img src={aboutPhoto} alt="Tristanio Armanto" />

              <div className="about-photo-info">
                <strong>Tristanio Armanto</strong>
                <span>Frontend Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;