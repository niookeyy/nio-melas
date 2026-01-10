import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- NATURE SLIDER (KODE LAMA) ---
export default function NatureSliderSection({
  sectionData,
  reference,
  ui,
  onOpenModal,
}) {
  const [items, setItems] = useState(sectionData.items || []);

  useEffect(() => {
    setItems(sectionData.items || []);
  }, [sectionData]);

  const handleNext = () => {
    setItems((prev) => {
      if (!prev.length) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const active = items[0];
  const thumbnails = items.slice(1, 4);

  const splitTwoLines = (text) => {
    const words = (text || "").trim().split(" ");
    if (words.length <= 1) return text;
    return (
      <>
        {words[0]}
        <br />
        {words.slice(1).join(" ")}
      </>
    );
  };

  if (!active) return null;

  return (
    <section ref={reference} className="min-h-screen relative overflow-hidden z-10">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active.id || active.name}
          layoutId={`nature-card-${active.id || active.name}`}
          transition={{ duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute inset-0 z-0"
        >
          <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-start px-10 md:px-24 pt-28 md:pt-36 lg:pt-44">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id || active.name}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="max-w-[720px]"
          >
            <p className="text-sm md:text-base tracking-[0.35em] text-gray-300/80 mb-3 font-medium uppercase">
              {sectionData.subtitle}
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              {sectionData.title}
            </h2>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter uppercase">
              {splitTwoLines(active.name)}
            </h1>
            <p className="max-w-[560px] text-lg text-gray-200/85 mb-10 leading-relaxed italic">
              "{active.desc}"
            </p>

            <button
              onClick={() => onOpenModal(active)}
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all uppercase text-sm tracking-widest"
            >
              {ui.detailBtn}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[10%] left-[55%] z-20 flex gap-6 pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {thumbnails.map((slide) => (
            <motion.div
              key={slide.id || slide.name}
              layoutId={`nature-card-${slide.id || slide.name}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
              transition={{ duration: 0.6 }}
              onClick={handleNext}
              className="relative w-[260px] h-[380px] md:w-[280px] md:h-[400px] rounded-[32px] overflow-hidden cursor-pointer flex-shrink-0 group shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[20px] tracking-widest opacity-80 mb-2 uppercase font-medium">
                  {slide.region}
                </p>
                <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter">
                  {splitTwoLines(slide.name)}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
