import React, { useEffect, useState, useRef } from "react";

export default function HeroSection({ reference, content, onCta }) {
  const [textX, setTextX] = useState(window.innerWidth);
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hitung progress scroll di dalam hero (0 sampai 1)
      // 0 = paling atas, 1 = saat hero tepat akan hilang dari layar
      const progress = Math.min(scrollY / windowHeight, 1);

      if (progress <= 1) {
        const screenWidth = window.innerWidth;
        
        // LOGIKA PERGERAKAN:
        // Start: screenWidth (di kanan luar)
        // End: -screenWidth * 1.5 (di kiri luar agar teks benar-benar habis)
        const targetX = screenWidth - (progress * (screenWidth * 2.5));
        
        setTextX(targetX);

        // LOGIKA MUNCUL:
        // Muncul cepat di awal (0.1 progress), lalu tetap ada sampai hero habis
        setOpacity(progress > 0.05 ? 0.6 : 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Set posisi awal saat load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={reference}
      className="relative min-h-screen bg-black overflow-hidden text-white font-sans"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.hero.bg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-[2] min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl px-6 md:px-12 text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-6">
            {content.hero.title}
          </h1>

          <p className="text-lg md:text-2xl font-light text-gray-300 mb-10 max-w-3xl mx-auto">
            {content.hero.description}
          </p>

          <button
            onClick={onCta}
            className="px-10 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all mb-16"
          >
            {content.hero.cta}
          </button>
        </div>

        {/* TEKS PARALLAX (BUKAN LOOPING) */}
        <div className="absolute bottom-20 w-full overflow-hidden pointer-events-none">
          <h2
            className="whitespace-nowrap font-black italic tracking-tighter text-white uppercase"
            style={{
              fontSize: "75px",
              transform: `translateX(${textX}px)`,
              opacity: opacity,
              willChange: "transform",
              transition: "opacity 0.4s ease-out", // Hanya opacity yang pakai transisi agar gerakan scroll tetap presisi
            }}
          >
            {content.hero.marquee}
          </h2>
        </div>
      </div>
    </section>
  );
}