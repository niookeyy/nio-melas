import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ DATA
import { DATA_CONTENT } from "./data/content";

// ✅ SECTIONS
import HeroSection from "./sections/HeroSection";
import TraditionalSection from "./sections/TraditionalSection";
import NatureSliderSection from "./sections/NatureSliderSection";
import ContemporaryScroll from "./sections/ContemporaryScroll";
import CulinarySection from "./sections/CulinarySection";
import FooterSection from "./sections/FooterSection";
import DetailModal from "./sections/DetailModal";

// --- ICONS (TETAP SAMA) ---
const IconChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
// const IconVolume2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
// const IconVolumeX = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-6.9 1.1-6.9a6 6 0 0 1-.8-8c2.4 1.1 4.5 2.6 6 4.8a6.6 6.6 0 0 1 9.8-1.5z"/></svg>;
const IconYoutube = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>;

// ============================================
// ✅ MAIN APP COMPONENT (IndoCulture)
// ============================================
export default function IndoCulture() {
  const [lang, setLang] = useState("id");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef();
  const traditionalRef = useRef();
  const natureRef = useRef();
  const culinaryRef = useRef();

  const content = DATA_CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => { setLang(lang === "id" ? "en" : "id"); };
  const openModal = (item) => { setModalContent(item); setShowModal(true); };
  const scrollToSection = (ref) => { ref.current?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="bg-black text-white selection:bg-yellow-400 selection:text-black font-sans">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4" : ""
      }`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <span className="font-black text-xl italic">I</span>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">{content.hero.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
            <IconGlobe /> {lang === "id" ? "Bahasa" : "English"}
          </button>
          {/* <button onClick={() => setAudioEnabled(!audioEnabled)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            {audioEnabled ? <IconVolume2 /> : <IconVolumeX />}
          </button> */}
        </div>
      </nav>

      {/* HERO SECTION */}
      <HeroSection
        reference={heroRef}
        content={content}
        onCta={() => scrollToSection(traditionalRef)}
      />

      {/* TRADITIONAL SECTION */}
      <TraditionalSection
        reference={traditionalRef}
        sectionData={content.sections.traditional}
        onOpenModal={openModal}
        IconChevronRight={IconChevronRight}
      />

      {/* NATURE SLIDER SECTION */}
      <NatureSliderSection
        sectionData={content.sections.nature}
        reference={natureRef}
        ui={content.ui}
        onOpenModal={openModal}
      />

      {/* CONTEMPORARY SECTION 
         PENTING: Kita hapus div pembungkus modernRef agar 
         ContemporaryScroll bisa mengontrol tinggi dan sticky-nya sendiri.
      */}
      <ContemporaryScroll 
        sectionData={content.sections.contemporary} 
        onOpenModal={openModal} 
      />

      {/* CULINARY SECTION */}
      <CulinarySection
        reference={culinaryRef}
        sectionData={content.sections.culinary}
        onOpenModal={openModal}
        IconChevronRight={IconChevronRight}
      />

      {/* FOOTER */}
      <FooterSection
        content={content}
        IconInstagram={IconInstagram}
        IconTwitter={IconTwitter}
        IconYoutube={IconYoutube}
      />

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <DetailModal
            content={content}
            modalContent={modalContent}
            onClose={() => setShowModal(false)}
            IconX={IconX}
          />
        )}
      </AnimatePresence>
    </div>
  );
}