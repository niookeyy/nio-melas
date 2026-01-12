import React, { useEffect, useState, useRef } from "react";

export default function HeroSection({ reference, content, onCta }) {
  const [textX, setTextX] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTextX(window.innerWidth);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      
      const progress = Math.min(scrollY / windowHeight, 1);

      if (progress <= 1) {
        const movementRange = screenWidth * 2.5;
        const targetX = screenWidth - (progress * movementRange);
        
        setTextX(targetX);
        setOpacity(progress > 0.05 ? 0.6 : 0);
      }
    };

    const handleResize = () => {
      if (window.scrollY === 0) setTextX(window.innerWidth);
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic mb-6 leading-none">
            {content.hero.title}
          </h1>

          <p className="text-base md:text-2xl font-light text-gray-300 mb-10 max-w-2xl mx-auto">
            {content.hero.description}
          </p>

          {/* BUTTON DENGAN PADDING KHUSUS AGAR TIDAK DEMPET */}
          <button
            onClick={onCta}
            className={`
              rounded-full bg-white text-black font-black uppercase tracking-widest 
              hover:bg-red-600 hover:text-white transition-all 
              text-sm md:text-base
              /* Margin bottom untuk memberi jarak ke marquee */
              mb-20 
              /* Padding tombol sesuai permintaan Anda */
              px-[20px] py-[10px] md:px-[10px] md:py-[5px]
            `}
          >
            {content.hero.cta}
          </button>
        </div>

        {/* TEKS PARALLAX - KOMPOSISI UKURAN BARU */}
        <div className="absolute bottom-10 md:bottom-20 w-full overflow-hidden pointer-events-none">
          <h2
            className={`
              whitespace-nowrap font-black italic tracking-tighter text-white uppercase
              text-[30px]      /* Ukuran Mobile sesuai komposisi Anda */
              md:text-[60px]   /* Ukuran Tablet sesuai komposisi Anda */
              lg:text-[80px]   /* Ukuran Desktop sesuai komposisi Anda */
            `}
            style={{
              transform: `translateX(${textX}px)`,
              opacity: opacity,
              willChange: "transform",
              transition: "opacity 0.4s ease-out",
            }}
          >
            {content.hero.marquee}
          </h2>
        </div>
      </div>
    </section>
  );
}