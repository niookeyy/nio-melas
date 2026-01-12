import React, { useState, useEffect, useRef } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import LoadingScreen from "./components/LoadingScreen"; 
 
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
 
// --- ICONS (Tetap Sama) --- 
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>; 
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>; 
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>; 
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>; 
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-6.9 1.1-6.9a6 6 0 0 1-.8-8c2.4 1.1 4.5 2.6 6 4.8a6.6 6.6 0 0 1 9.8-1.5z"/></svg>; 
const IconYoutube = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>; 
 
export default function IndoCulture() { 
  const [isLoading, setIsLoading] = useState(true); 
  const [lang, setLang] = useState("id"); 
  const [showModal, setShowModal] = useState(false); 
  const [modalContent, setModalContent] = useState({}); 
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
  
  const scrollToSection = (ref) => { 
    ref.current?.scrollIntoView({ behavior: "smooth" }); 
  }; 
 
  if (isLoading) { 
    return <LoadingScreen onDone={() => setIsLoading(false)} />; 
  } 
 
  return ( 
    /* PENTING: 
      1. JANGAN gunakan 'overflow-x-hidden' di sini karena akan mematikan 'position: sticky' 
         pada ContemporaryScroll.
      2. Biarkan 'overflow-x: clip' diatur melalui file index.css pada tag html/body saja.
    */
    <div className="bg-black text-white selection:bg-yellow-400 selection:text-black font-sans relative w-full"> 
        
      {/* NAVBAR FIXED */} 
      <nav className={`fixed top-0 left-0 right-0 w-full z-[100] box-border transition-all duration-500 px-4 md:px-12 py-4 flex justify-between items-center ${ 
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-gradient-to-b from-black/60 to-transparent" 
      }`}> 
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 md:gap-4 group cursor-pointer flex-1 min-w-0"> 
          <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"> 
             <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1080 1080" className="w-full h-full"> 
               <circle cx="540" cy="540" r="500" fill="#BF0000" />
               <path d="M300 300h480v480H300z" fill="white" opacity="0.2"/>
            </svg> 
          </div> 
          <span className="text-sm sm:text-lg md:text-2xl font-black tracking-tighter uppercase italic truncate"> 
            {content.hero.title} 
          </span> 
        </div> 
 
        <div className="flex items-center flex-shrink-0 ml-4"> 
          <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest"> 
            <IconGlobe /> 
            <span className="whitespace-nowrap">{lang === "id" ? "ID" : "EN"}</span> 
          </button> 
        </div> 
      </nav> 
 
      {/* JANGAN gunakan <main className="overflow-x-hidden"> di sini. 
         Langsung panggil section agar sticky di ContemporaryScroll berjalan lancar.
      */} 
      <HeroSection reference={heroRef} content={content} onCta={() => scrollToSection(traditionalRef)} /> 
      <TraditionalSection reference={traditionalRef} sectionData={content.sections.traditional} onOpenModal={openModal} IconChevronRight={IconChevronRight} /> 
      <NatureSliderSection sectionData={content.sections.nature} reference={natureRef} ui={content.ui} onOpenModal={openModal} /> 
      
      {/* SECTION STICKY */}
      <ContemporaryScroll sectionData={content.sections.contemporary} onOpenModal={openModal} /> 
      
      <CulinarySection reference={culinaryRef} sectionData={content.sections.culinary} onOpenModal={openModal} IconChevronRight={IconChevronRight} /> 

      <FooterSection content={content} IconInstagram={IconInstagram} IconTwitter={IconTwitter} IconYoutube={IconYoutube} /> 
 
      <AnimatePresence> 
        {showModal && ( 
          <DetailModal content={content} modalContent={modalContent} onClose={() => setShowModal(false)} IconX={IconX} /> 
        )} 
      </AnimatePresence> 
    </div> 
  ); 
}