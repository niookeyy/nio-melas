import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import aboutPhoto from "../assets/foto-saya.jpeg";

const About = ({ t }) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const pathRef = useRef(null);
  const idleTween = useRef(null);
  const hasAnimated = useRef(false);

  const dragData = useRef({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    prevX: 0,
    lastT: 0,
  });

  const [dragging, setDragging] = useState(false);

  const setRopePath = (x = 0, y = 0, duration = 0.2) => {
    const controlX = 100 + x * 0.5;
    const controlY = 100 + y * 0.2;
    const endX = 100 + x;
    const endY = 205 + y;

    const d = `M100 0 Q ${controlX} ${controlY}, ${endX} ${endY}`;

    gsap.to(pathRef.current, {
      attr: { d },
      duration,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const startIntroAnimation = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    gsap.set(cardRef.current, {
      y: -400,
      rotate: -25,
      opacity: 0,
      scale: 1,
      transformOrigin: "top center",
    });

    gsap.set(pathRef.current, {
      attr: { d: "M100 0 Q100 100 100 205" },
    });

    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "bounce.out",
    })
      .to(
        cardRef.current,
        {
          rotate: 20,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(cardRef.current, {
        rotate: -12,
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(cardRef.current, {
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });

    tl.eventCallback("onUpdate", () => {
      const curX = gsap.getProperty(cardRef.current, "x");
      const curY = gsap.getProperty(cardRef.current, "y");
      setRopePath(curX, curY, 0);
    });

    tl.eventCallback("onComplete", () => {
      idleTween.current = gsap.to(cardRef.current, {
        rotate: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        onUpdate: () => {
          const curX = gsap.getProperty(cardRef.current, "x");
          const curY = gsap.getProperty(cardRef.current, "y");
          setRopePath(curX, curY, 0);
        },
      });
    });
  };

  useEffect(() => {
    gsap.set(cardRef.current, {
      opacity: 0,
      transformOrigin: "top center",
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startIntroAnimation();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (idleTween.current) idleTween.current.kill();
    };
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);

    if (idleTween.current) idleTween.current.pause();

    const now = performance.now();

    dragData.current.startX = e.clientX - dragData.current.x;
    dragData.current.startY = e.clientY - dragData.current.y;
    dragData.current.prevX = dragData.current.x;
    dragData.current.lastT = now;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    const now = performance.now();
    const dt = Math.max(16, now - dragData.current.lastT);

    const x = e.clientX - dragData.current.startX;
    const y = e.clientY - dragData.current.startY;
    const vx = (x - dragData.current.prevX) / dt;

    dragData.current.prevX = x;
    dragData.current.lastT = now;
    dragData.current.x = x;
    dragData.current.y = y;

    const rotate = Math.max(-25, Math.min(25, x * 0.15 + vx * 200));

    gsap.to(cardRef.current, {
      x,
      y,
      rotate,
      scale: 1.02,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    setRopePath(x, y, 0.12);
  };

  const handlePointerUp = () => {
    setDragging(false);

    dragData.current.x = 0;
    dragData.current.y = 0;

    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 1.5,
      ease: "elastic.out(1.1, 0.3)",
      overwrite: "auto",
      onComplete: () => {
        if (idleTween.current) idleTween.current.resume();
      },
    });

    gsap.to({}, {
      duration: 1.5,
      onUpdate: () => {
        const curX = gsap.getProperty(cardRef.current, "x");
        const curY = gsap.getProperty(cardRef.current, "y");
        setRopePath(curX, curY, 0);
      },
    });
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-number">01</div>

      <div className="container about-container">
        <div className="about-section-head">
          <span className="section-label">Introduction</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about-grid-new">
          <div className="about-photo-area">
            <svg className="lanyard-svg" viewBox="0 0 200 300">
              <path
                ref={pathRef}
                d="M100 0 Q100 100 100 205"
                stroke="rgba(91,92,246,0.5)"
                strokeWidth="4"
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
              <div className="about-photo-hole" />
              <img src={aboutPhoto} alt="Tristanio Armanto" />

              <div className="about-photo-info">
                <strong>Tristanio Armanto</strong>
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;