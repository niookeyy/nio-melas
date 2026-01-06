// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- ASSETS ---
// import heroBg from "./assets/background-hero-section.png";
// import wayang from "./assets/wayang-kulit.png";
// import batik from "./assets/batik.png";
// import saman from "./assets/tari-saman.png";
// import gamelanImg from "./assets/gamelan.png";
// import gadang from "./assets/rumah-gadang.png";

// // Nature local images (yang kamu sebut)
// import rajaAmpatImg from "./assets/raja-ampat.jpg";
// import danauTobaImg from "./assets/danau-toba.jpg";
// import gunungBromoImg from "./assets/gunung-bromo.jpg";
// import kawahIjenImg from "./assets/kawah-ijen.jpg";
// import borobudurImg from "./assets/borobudur.jpg";

// // Fallback images for other sections (boleh kamu ganti local juga)
// const modernImg =
//   "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=1400";
// const culinaryImg =
//   "https://images.unsplash.com/photo-1541518763531-d4285b5182cc?auto=format&fit=crop&q=80&w=1400";

// // --- ICONS ---
// const IconChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// );
// const IconChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m9 18 6-6-6-6" />
//   </svg>
// );
// const IconX = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 6 6 18" />
//     <path d="m6 6 12 12" />
//   </svg>
// );
// const IconVolume2 = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//     <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
//     <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
//   </svg>
// );
// const IconVolumeX = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//     <line x1="23" y1="9" x2="17" y2="15" />
//     <line x1="17" y1="9" x2="23" y2="15" />
//   </svg>
// );
// const IconGlobe = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//     <path d="M2 12h20" />
//   </svg>
// );
// const IconInstagram = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//   </svg>
// );
// const IconTwitter = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-6.9 1.1-6.9a6 6 0 0 1-.8-8c2.4 1.1 4.5 2.6 6 4.8a6.6 6.6 0 0 1 9.8-1.5z" />
//   </svg>
// );
// const IconYoutube = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//     <path d="m10 15 5-3-5-3z" />
//   </svg>
// );

// // --- DATA ---
// const DATA_CONTENT = {
//   id: {
//     hero: {
//       title: "IndoCulture",
//       description:
//         "Dari tradisi leluhur hingga tren viral Gen Z. Temukan Indonesia yang sesungguhnya.",
//       cta: "Mulai Menjelajah",
//       marquee: "SELAMAT DATANG DI INDONESIA • NIKMATI KEKAYAAN BUDAYA KITA • ",
//     },
//     ui: {
//       detailBtn: "Detail Selengkapnya",
//       closeBtn: "Tutup Detail",
//       join: "Gabung",
//       emailPlh: "Email Anda",
//     },
//     sections: {
//       traditional: {
//         title: "Budaya Tradisional",
//         subtitle: "Warisan leluhur pembentuk identitas.",
//         items: [
//           { name: "Wayang Kulit", desc: "Seni bayangan warisan UNESCO.", detail: "Pertunjukan boneka kulit kisah Ramayana & Mahabharata.", image: wayang },
//           { name: "Batik", desc: "Seni lukis kain motif khas.", detail: "Setiap goresan memiliki filosofi mendalam.", image: batik },
//           { name: "Tari Saman", desc: "Tarian harmonis dari Aceh.", detail: "Mengandalkan kekompakan gerakan tangan tanpa musik.", image: saman },
//           { name: "Gamelan", desc: "Musik perkusi perunggu.", detail: "Alunan mistis yang memberikan ketenangan.", image: gamelanImg },
//           { name: "Rumah Gadang", desc: "Arsitektur Minangkabau.", detail: "Rumah adat dengan atap tanduk kerbau.", image: gadang },
//         ],
//       },

//       // ✅ Alam Indonesia (pakai slider travel-style)
//       nature: {
//         title: "Alam Indonesia",
//         subtitle: "Surga Tropis Khatulistiwa",
//         items: [
//           { id: 1, name: "GUNUNG BROMO", region: "JAWA TIMUR", desc: "Lautan pasir ikonik.", detail: "Gunung aktif dengan pemandangan matahari terbit terbaik.", image: gunungBromoImg },
//           { id: 2, name: "DANAU TOBA", region: "SUMATERA UTARA", desc: "Danau vulkanik terbesar.", detail: "Terbentuk dari letusan supervolcano purba yang dahsyat.", image: danauTobaImg },
//           { id: 3, name: "RAJA AMPAT", region: "PAPUA BARAT", desc: "Surga diving dunia.", detail: "Rumah bagi biodiversitas laut tertinggi di dunia.", image: rajaAmpatImg },
//           { id: 4, name: "CANDI BOROBUDUR", region: "JAWA TENGAH", desc: "Candi Buddha terbesar.", detail: "Warisan dunia UNESCO yang megah di Magelang.", image: borobudurImg },
//           { id: 5, name: "KAWAH IJEN", region: "JAWA TIMUR", desc: "Fenomena api biru abadi.", detail: "Blue fire langka dan danau asam berwarna toska.", image: kawahIjenImg },
//         ],
//       },

//       modern: {
//         title: "Budaya Kontemporer",
//         subtitle: "Dinamis dan Viral",
//         items: [
//           { name: "Hipdut", desc: "Hip-Hop & Dangdut.", detail: "Genre viral gabungan beat modern & cengkok tradisional.", image: modernImg },
//           { name: "Sound Horeg", desc: "Adu Sound System.", detail: "Parade bass kuat khas Jawa Timur yang menggetarkan.", image: modernImg },
//           { name: "Citayam Fashion Week", desc: "Street fashion lokal.", detail: "Ekspresi anak muda yang sempat viral hingga ke kancah global.", image: modernImg },
//           { name: "E-Sports Indo", desc: "Dominasi game mobile.", detail: "Indonesia merupakan salah satu pasar gaming terbesar di dunia.", image: modernImg },
//         ],
//       },

//       culinary: {
//         title: "Kuliner Nusantara",
//         subtitle: "Cita Rasa Rempah Dunia",
//         items: [
//           { name: "Rendang", desc: "Masakan terenak dunia.", detail: "Daging sapi rempah Minang yang dimasak berjam-jam.", image: culinaryImg },
//           { name: "Nasi Goreng", desc: "Menu favorit nusantara.", detail: "Nasi goreng bumbu kecap manis ikonik yang mendunia.", image: culinaryImg },
//           { name: "Sate", desc: "Tusuk daging berbumbu.", detail: "Variasi Nusantara yang kaya rempah.", image: culinaryImg },
//           { name: "Seblak", desc: "Pedas favorit anak muda.", detail: "Kerupuk basah kuah kencur pedas.", image: culinaryImg },
//           { name: "Indomie", desc: "Mie instan legendaris.", detail: "Ikon kuliner modern Indonesia.", image: culinaryImg },
//         ],
//       },
//     },
//   },

//   en: {
//     hero: {
//       title: "IndoCulture",
//       description:
//         "From ancestral traditions to viral Gen Z trends. Discover the real Indonesia.",
//       cta: "Start Exploring",
//       marquee: "WELCOME TO INDONESIA • ENJOY OUR RICH CULTURE • ",
//     },
//     ui: {
//       detailBtn: "View Details",
//       closeBtn: "Close Details",
//       join: "Join",
//       emailPlh: "Your Email",
//     },
//     sections: {
//       traditional: {
//         title: "Traditional Culture",
//         subtitle: "Ancestral heritage shaping identity.",
//         items: [
//           { name: "Wayang Kulit", desc: "UNESCO shadow puppet art.", detail: "Leather puppet performance telling Ramayana & Mahabharata epics.", image: wayang },
//           { name: "Batik", desc: "Signature fabric painting.", detail: "Every stroke of wax carries deep philosophy.", image: batik },
//           { name: "Saman Dance", desc: "Harmonious dance from Aceh.", detail: "Relying on hand synchronization without instruments.", image: saman },
//           { name: "Gamelan", desc: "Bronze percussion music.", detail: "Mystical tunes that provide tranquility.", image: gamelanImg },
//           { name: "Gadang House", desc: "Minangkabau architecture.", detail: "Traditional house with buffalo horn-shaped roof.", image: gadang },
//         ],
//       },

//       nature: {
//         title: "Indonesian Nature",
//         subtitle: "Equatorial Tropical Paradise",
//         items: [
//           { id: 1, name: "MOUNT BROMO", region: "EAST JAVA", desc: "Iconic sea of sand.", detail: "Active volcano with breathtaking sunrise views.", image: gunungBromoImg },
//           { id: 2, name: "LAKE TOBA", region: "NORTH SUMATRA", desc: "Largest volcanic lake.", detail: "Formed from an ancient supervolcano eruption.", image: danauTobaImg },
//           { id: 3, name: "RAJA AMPAT", region: "WEST PAPUA", desc: "World-class diving paradise.", detail: "Home to one of the richest marine biodiversities.", image: rajaAmpatImg },
//           { id: 4, name: "BOROBUDUR", region: "CENTRAL JAVA", desc: "Great Buddhist temple.", detail: "UNESCO world heritage masterpiece.", image: borobudurImg },
//           { id: 5, name: "IJEN CRATER", region: "EAST JAVA", desc: "Rare blue fire.", detail: "Blue flames and turquoise acidic crater lake.", image: kawahIjenImg },
//         ],
//       },

//       modern: {
//         title: "Contemporary Culture",
//         subtitle: "Dynamic and Viral",
//         items: [
//           { name: "Hipdut", desc: "Hip-Hop & Dangdut fusion.", detail: "Viral genre combining modern beats with traditional vocals.", image: modernImg },
//           { name: "Sound Horeg", desc: "Sound System Battle.", detail: "Giant sound system parade from East Java that vibrates.", image: modernImg },
//           { name: "Citayam Fashion Week", desc: "Local street fashion.", detail: "Youth self-expression that went globally viral.", image: modernImg },
//           { name: "E-Sports Indo", desc: "Mobile gaming dominance.", detail: "Indonesia is among the biggest gaming markets.", image: modernImg },
//         ],
//       },

//       culinary: {
//         title: "Archipelago Culinary",
//         subtitle: "Taste of World Spices",
//         items: [
//           { name: "Rendang", desc: "World’s tastiest dish.", detail: "Minang spicy beef slow-cooked for hours to perfection.", image: culinaryImg },
//           { name: "Fried Rice", desc: "Archipelago favorite.", detail: "Iconic fried rice with sweet soy sauce known worldwide.", image: culinaryImg },
//           { name: "Satay", desc: "Skewered savory meat.", detail: "Endless regional variations.", image: culinaryImg },
//           { name: "Seblak", desc: "Spicy comfort snack.", detail: "Wet crackers in aromatic spicy broth.", image: culinaryImg },
//           { name: "Indomie", desc: "Legendary instant noodles.", detail: "A global Indonesian icon.", image: culinaryImg },
//         ],
//       },
//     },
//   },
// };

// // =========================
// // ✅ Nature Slider (FIXED)
// // =========================
// const NatureSliderSection = ({ sectionData, reference, ui, onOpenModal }) => {
//   const [items, setItems] = useState(sectionData.items || []);

//   useEffect(() => {
//     setItems(sectionData.items || []);
//   }, [sectionData]);

//   const handleNext = () => {
//     setItems((prev) => {
//       if (!prev.length) return prev;
//       const [first, ...rest] = prev;
//       return [...rest, first];
//     });
//   };

//   const active = items[0];
//   const thumbnails = items.slice(1, 4);

//   const splitTwoLines = (text) => {
//     // buat "GUNUNG\nBROMO" (dua baris), tapi tetap aman jika 1 kata
//     const words = (text || "").trim().split(" ");
//     if (words.length <= 1) return text;
//     return (
//       <>
//         {words[0]}
//         <br />
//         {words.slice(1).join(" ")}
//       </>
//     );
//   };

//   if (!active) return null;

//   return (
//     <section
//       ref={reference}
//       className="min-h-screen relative overflow-hidden z-10"
//     >
//       {/* BACKGROUND UTAMA (explosion effect) */}
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={active.id || active.name}
//           layoutId={`nature-card-${active.id || active.name}`}
//           transition={{
//             duration: 0.85,
//             ease: [0.6, 0.05, 0.01, 0.9],
//           }}
//           className="absolute inset-0 z-0"
//         >
//           <img
//             src={active.image}
//             alt={active.name}
//             className="h-full w-full object-cover"
//           />
//           {/* overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* KONTEN TEKS KIRI */}
//       <div className="relative z-10 flex h-full flex-col justify-start px-10 md:px-24 pt-28 md:pt-36 lg:pt-44">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.id || active.name}
//             initial={{ opacity: 0, y: 22 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -14 }}
//             transition={{ duration: 0.5, delay: 0.12 }}
//             className="max-w-[720px]"
//           >
//             <p className="text-sm md:text-base tracking-[0.35em] text-gray-300/80 mb-3 font-medium uppercase">
//               {sectionData.subtitle}
//             </p>

//             <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
//               {sectionData.title}
//             </h2>

//             {/* ✅ dua baris */}
//             <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter uppercase">
//               {splitTwoLines(active.name)}
//             </h1>

//             <p className="max-w-[560px] text-lg text-gray-200/85 mb-10 leading-relaxed italic">
//               "{active.desc}"
//             </p>

//             {/* ✅ tombol normal (nggak ketiban thumbnail) */}
//             <button
//               onClick={() => onOpenModal(active)}
//               className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all uppercase text-sm tracking-widest"
//             >
//               {ui.detailBtn}
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* THUMBNAILS KANAN BAWAH */}
//       <div className="absolute bottom-[10%] left-[55%] z-20 flex gap-6 pointer-events-auto">
//         <AnimatePresence mode="popLayout">
//           {thumbnails.map((slide) => (
//             <motion.div
//               key={slide.id || slide.name}
//               layoutId={`nature-card-${slide.id || slide.name}`}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
//               transition={{ duration: 0.6 }}
//               onClick={handleNext}
//               className="relative w-[260px] h-[380px] md:w-[280px] md:h-[400px] rounded-[32px] overflow-hidden cursor-pointer flex-shrink-0 group
//                          shadow-[0_30px_70px_rgba(0,0,0,0.65)]" // ✅ shadow per-card
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.name}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors" />

//               {/* ✅ teks dalam card */}
//               <div className="absolute bottom-8 left-8 right-8 text-white">
//                 <p className="text-[20px] tracking-widest opacity-80 mb-2 uppercase font-medium">
//                   {slide.region}
//                 </p>
//                 <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter">
//                   {splitTwoLines(slide.name)}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default function App() {
//   const [language, setLanguage] = useState("id");
//   const [bgColor, setBgColor] = useState("bg-black");
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const [musicType, setMusicType] = useState("gamelan");
//   const [textX, setTextX] = useState(2500);

//   const currentContent = DATA_CONTENT[language];

//   const heroRef = useRef(null);
//   const traditionalRef = useRef(null);
//   const natureRef = useRef(null);
//   const modernRef = useRef(null);
//   const culinaryRef = useRef(null);
//   const scrollTextRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const scrollPos = scrollY + window.innerHeight / 2;

//       // --- TRANSISI WARNA (ASLI) ---
//       if (scrollY < 300) {
//         setBgColor("bg-black");
//       } else if (scrollPos < (natureRef.current?.offsetTop || 0)) {
//         setBgColor("bg-[#3d2b1f]");
//       } else if (scrollPos < (modernRef.current?.offsetTop || 0)) {
//         setBgColor("bg-[#064e3b]");
//       } else if (scrollPos < (culinaryRef.current?.offsetTop || 0)) {
//         setBgColor("bg-[#312e81]");
//       } else {
//         setBgColor("bg-[#ca8a04]");
//       }

//       // --- HERO MARQUEE (ASLI) ---
//       if (heroRef.current && scrollTextRef.current) {
//         const h = heroRef.current.offsetHeight;
//         let p = Math.min(Math.max(scrollY / h, 0), 1);
//         const start = window.innerWidth + 600;
//         const dist = start + scrollTextRef.current.offsetWidth;
//         setTextX(start - p * dist);
//         scrollTextRef.current.style.opacity = p < 0.02 ? "0" : "0.65";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // --- AnimatedSection (ASLI) ---
//   const AnimatedSection = ({ sectionData, reference }) => {
//     const [index, setIndex] = useState(0);
//     const [anim, setAnim] = useState(0);

//     const next = () => {
//       setAnim(-324);
//       setTimeout(() => {
//         setIndex((i) => (i + 1) % sectionData.items.length);
//         setAnim(0);
//       }, 500);
//     };

//     const prev = () => {
//       setAnim(324);
//       setTimeout(() => {
//         setIndex((i) => (i - 1 + sectionData.items.length) % sectionData.items.length);
//         setAnim(0);
//       }, 500);
//     };

//     return (
//       <section
//         ref={reference}
//         className="min-h-screen flex flex-col justify-center py-20 px-10 relative z-10 transition-all duration-1000"
//       >
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-6 text-white text-left">
//             <h2 className="text-5xl font-black uppercase tracking-tighter">
//               {sectionData.title}
//             </h2>
//             <p className="text-gray-100 max-w-sm text-right font-light italic opacity-90">
//               {sectionData.subtitle}
//             </p>
//           </div>

//           <div className="overflow-hidden">
//             <div
//               className="flex gap-6"
//               style={{
//                 transform: `translateX(${anim}px)`,
//                 transition:
//                   anim !== 0
//                     ? "0.5s cubic-bezier(0.22, 1, 0.36, 1)"
//                     : "none",
//               }}
//             >
//               {[0, 1, 2, 3, 4].map((i) => {
//                 const item = sectionData.items[(index + i) % sectionData.items.length];
//                 if (!item) return null;
//                 return (
//                   <div
//                     key={i}
//                     className="w-[300px] h-[420px] rounded-[2.5rem] overflow-hidden relative flex-shrink-0 group shadow-2xl border border-white/10"
//                   >
//                     <img
//                       src={item.image}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       alt=""
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//                     <div className="absolute bottom-8 left-6 right-6 text-white text-left">
//                       <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
//                       <p className="text-sm text-gray-200 line-clamp-2 font-light">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-12">
//             <button
//               onClick={() => {
//                 setModalContent(sectionData.items[index]);
//                 setShowModal(true);
//               }}
//               className="px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white text-white hover:text-black transition-all font-bold"
//             >
//               {currentContent.ui.detailBtn}
//             </button>

//             <div className="flex gap-4">
//               <button
//                 onClick={prev}
//                 className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/30 transition text-white"
//               >
//                 <IconChevronLeft />
//               </button>
//               <button
//                 onClick={next}
//                 className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/30 transition text-white"
//               >
//                 <IconChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   const openModal = (item) => {
//     setModalContent(item);
//     setShowModal(true);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-1000 ${bgColor} font-sans text-white overflow-x-hidden`}>
//       {/* NAVBAR (ASLI) */}
//       <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]">
//         <div
//           className="text-2xl font-black flex items-center gap-3 cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-lg">
//             ID
//           </div>
//           <span className="tracking-tighter uppercase">IndoCulture</span>
//         </div>

//         <div className="flex gap-4 items-center">
//           <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-md">
//             <button
//               onClick={() => setMusicType(musicType === "gamelan" ? "horeg" : "gamelan")}
//               className="text-[10px] font-bold text-yellow-400 uppercase mr-2 tracking-widest uppercase"
//             >
//               {musicType === "gamelan" ? "🎵 Gamelan" : "🔊 Horeg"}
//             </button>
//             <button
//               onClick={() => setIsMusicPlaying(!isMusicPlaying)}
//               className="hover:text-red-400 transition"
//             >
//               {isMusicPlaying ? <IconVolume2 /> : <IconVolumeX />}
//             </button>
//           </div>

//           <button
//             onClick={() => setLanguage(language === "id" ? "en" : "id")}
//             className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
//           >
//             <IconGlobe /> <span className="text-xs font-bold uppercase">{language}</span>
//           </button>
//         </div>
//       </nav>

//       {/* HERO (ASLI) */}
//       <header ref={heroRef} className="h-screen flex items-center justify-center relative px-6 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="max-w-4xl relative z-20">
//           <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
//             {currentContent.hero.title}
//           </h1>
//           <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
//             {currentContent.hero.description}
//           </p>
//           <button
//             onClick={() => traditionalRef.current.scrollIntoView({ behavior: "smooth" })}
//             className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition shadow-2xl"
//           >
//             {currentContent.hero.cta}
//           </button>
//         </div>

//         <h2
//           ref={scrollTextRef}
//           className="absolute text-white font-black whitespace-nowrap z-20 pointer-events-none italic tracking-tighter transition-all duration-300"
//           style={{
//             bottom: "8%",
//             transform: `translateX(${textX}px)`,
//             fontSize: "90px",
//             opacity: 0,
//           }}
//         >
//           {currentContent.hero.marquee}
//         </h2>
//       </header>

//       {/* TRADITIONAL (ASLI) */}
//       <AnimatedSection sectionData={currentContent.sections.traditional} reference={traditionalRef} />

//       {/* ✅ NATURE (FIXED) */}
//       <NatureSliderSection
//         sectionData={currentContent.sections.nature}
//         reference={natureRef}
//         ui={currentContent.ui}
//         onOpenModal={openModal}
//       />

//       {/* MODERN (ASLI) */}
//       <AnimatedSection sectionData={currentContent.sections.modern} reference={modernRef} />

//       {/* CULINARY (ASLI) */}
//       <AnimatedSection sectionData={currentContent.sections.culinary} reference={culinaryRef} />

//       {/* FOOTER (ASLI) */}
//       <footer className="bg-black/40 backdrop-blur-lg py-16 text-center border-t border-white/10 relative z-10">
//         <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase">IndoCulture</h2>
//         <div className="flex justify-center gap-8 mb-10 text-white">
//           <a href="#" className="hover:text-pink-500 transition hover:scale-110 transform"><IconInstagram /></a>
//           <a href="#" className="hover:text-blue-400 transition hover:scale-110 transform"><IconTwitter /></a>
//           <a href="#" className="hover:text-red-600 transition hover:scale-110 transform"><IconYoutube /></a>
//         </div>

//         <div className="max-w-md mx-auto px-6 mb-10">
//           <div className="flex gap-2">
//             <input
//               type="email"
//               placeholder={currentContent.ui.emailPlh}
//               className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-white/50 transition text-sm text-white"
//             />
//             <button className="bg-white text-black font-black px-8 py-3 rounded-xl hover:bg-gray-200 transition text-sm">
//               {currentContent.ui.join}
//             </button>
//           </div>
//         </div>

//         <p className="text-gray-500 text-xs font-light italic">
//           © 2024 IndoCulture Project. Dibuat dengan Cinta untuk Indonesia 🇮🇩
//         </p>
//       </footer>

//       {/* MODAL (ASLI) */}
//       {showModal && modalContent && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 animate-fadeIn">
//           <div
//             className="absolute inset-0 bg-black/95 backdrop-blur-xl"
//             onClick={() => setShowModal(false)}
//           ></div>

//           <div className="bg-gray-900 text-white w-full max-w-[500px] rounded-[2.5rem] p-8 relative z-10 shadow-2xl border border-white/10">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-6 right-6 text-gray-400 hover:text-white transition bg-white/10 p-2 rounded-full"
//             >
//               <IconX />
//             </button>

//             <img
//               src={modalContent.image}
//               className="w-full h-64 object-cover rounded-3xl mb-8 shadow-lg border border-white/10"
//               alt=""
//             />

//             <h2 className="text-3xl font-black mb-2 uppercase tracking-tight text-left text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
//               {modalContent.name}
//             </h2>
//             <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded mb-6"></div>

//             <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed text-left">
//               {modalContent.detail}
//             </p>

//             <button
//               onClick={() => setShowModal(false)}
//               className="w-full py-5 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-2xl font-black text-lg hover:brightness-110 transition"
//             >
//               {currentContent.ui.closeBtn}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; 
import { useGSAP } from '@gsap/react';

// Import Assets
import tenxitImg from "./assets/tenxi.jpg";
import sounhoregImg from "./assets/sound-horeg2.png";
import citayemfashionweekImg from "./assets/citayem-fashion-week.jpg";
import attachedAudio from "./assets/attached.mp3";
import gamanMaduAudio from "./assets/garam-dan-madu.mp3";
import kasihAbaAbaAudio from "./assets/kasih-aba-aba.mp3";
import horegAudio from "./assets/horeg.mp3";
import horeg2Audio from "./assets/horeg-pt2.mp3";
import bintangImg from "./assets/bintang.png";
import nadaGImg from "./assets/nada-g.png";
import mataBaseImg from "./assets/mata-senyum.png"; 
import pupilImg from "./assets/pupil-mata.png"; 
// import notegimg from "./assets/nada-g.png";



// --- ICON BARU YANG ANDA MAKSUD ---
import playIcon from "./assets/play.png";
import pauseIcon from "./assets/pause.png";
import forwardIcon from "./assets/forward.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const contentData = [
  {
    name: "Hipdut",
    subtitle: "Hip-Hop & Dangdut",
    desc: "Genre revolusioner yang menggabungkan energi beat modern hip-hop dengan kehangatan cengkok tradisional Indonesia. Fenomena ini menciptakan gelombang baru di industri musik lokal, menyatukan audiens lintas generasi melalui irama yang inklusif dan lirik yang relevan dengan kehidupan sehari-hari.",
    color: "#a53a42",
    bgText: "VIBE",
    image: tenxitImg,
    hasMusicPlayer: true,
    playlist: [
      { title: "Garam & Madu", artist: "Tenxi, Naykilla, & Jemsii", url: gamanMaduAudio }, 
      { title: "Attached", artist: "Tenxi, Anangga, & Suisei" , url: attachedAudio },
      { title: "Kasih Aba-Aba", artist: "Tenxi, Naykilla, & Jemsii", url: kasihAbaAbaAudio }
    ]
  },
  {
    name: "Sound Horeg",
    subtitle: "Adu Sound System",
    desc: "Tradisi parade audio skala besar khas Jawa Timur yang mengutamakan kekuatan bass hingga menggetarkan fisik. Lebih dari sekadar hiburan, Sound Horeg adalah simbol kebanggaan komunitas dan demonstrasi teknik audio tingkat tinggi yang kini telah menjadi daya tarik wisata budaya kontemporer.",
    color: "#8d6e63",
    bgText: "BASS",
    image: sounhoregImg,
    hasMusicPlayer: true,
    playlist: [
      { title: "Horeg", artist: "Tidak Diketahui", url: horegAudio },  
      { title: "Horeg-2", artist: "Tidak Diketahui", url: horeg2Audio }
    ]
  },
  {
    name: "Citayam Fashion",
    subtitle: "Street fashion lokal",
    desc: "Gerakan akar rumput yang mengubah ruang publik menjadi landasan pacu bagi ekspresi diri anak muda tanpa batas. Fenomena ini membuktikan bahwa kreativitas fashion tidak eksklusif milik kelas atas, menciptakan dialog global tentang identitas, keberanian, dan demokratisasi gaya di era digital.",
    color: "#4a4e51",
    bgText: "STYLE",
    image: citayemfashionweekImg,
    hasMusicPlayer: false,
    playlist: []
  }
];

const ContemporaryScroll = () => {
  const containerRef = useRef();
  const mainImageRef = useRef();
  const bgTextRef = useRef();
  const imgTagRef = useRef();
  const playerRef = useRef();
  const eyeContainerRef = useRef(); 
  const pupilRef = useRef();

  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // LOGIKA MATA
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeContainerRef.current && pupilRef.current && currentSessionIndex === 0) {
        const rect = eyeContainerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const maxMove = 12; 
        const x = Math.cos(angle) * maxMove;
        const y = Math.sin(angle) * maxMove;
        gsap.to(pupilRef.current, { x, y, duration: 0.2, ease: "power1.out" });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentSessionIndex]);

  // LOGIKA AUDIO
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentSessionIndex, currentTrackIndex]);

  const togglePlay = () => { isPlaying ? audioRef.current.pause() : audioRef.current.play(); setIsPlaying(!isPlaying); };
  
  const handleNext = () => {
    const session = contentData[currentSessionIndex];
    if (session.playlist.length > 0) {
      playTrack(currentSessionIndex, (currentTrackIndex + 1) % session.playlist.length);
    }
  };

  const handlePrev = () => {
    const session = contentData[currentSessionIndex];
    if (session.playlist.length > 0) {
      playTrack(currentSessionIndex, (currentTrackIndex - 1 + session.playlist.length) % session.playlist.length);
    }
  };

  const playTrack = (sIdx, tIdx) => {
    const track = contentData[sIdx].playlist[tIdx];
    if (track) {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTrackIndex(tIdx);
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = clickRatio * audioRef.current.duration;
  };

  useGSAP(() => {
    // ANIMASI TANGGA NADA
    // Jalur 1 (Utama) - Cepat
// Jalur Atas - Langsung Jalan
gsap.to(".note-1", {
  duration: 5,
  repeat: -1,
  ease: "none",
  motionPath: { path: "#path1", align: "#path1", alignOrigin: [0.5, 0.5] }
});

// Jalur Tengah - Jeda 1.2 detik
gsap.to(".note-2", {
  duration: 5.2, // Sedikit lebih lambat agar ritme asik
  repeat: -1,
  ease: "none",
  delay: 1.2,
  motionPath: { path: "#path2", align: "#path2", alignOrigin: [0.5, 0.5] }
});

// Jalur Bawah - Jeda 2.5 detik
gsap.to(".note-3", {
  duration: 4.8, // Sedikit lebih cepat
  repeat: -1,
  ease: "none",
  delay: 2.5,
  motionPath: { path: "#path3", align: "#path3", alignOrigin: [0.5, 0.5] }
});

gsap.to(".note-a", {
  duration: 4.8, // Sedikit lebih cepat
  repeat: -1,
  ease: "none",
  delay: 2,
  motionPath: { path: "#path1", align: "#path1", alignOrigin: [0.5, 0.5] }
});

gsap.to(".note-b", {
  duration: 5.2, // Sedikit lebih cepat
  repeat: -1,
  ease: "none",
  delay: 2,
  motionPath: { path: "#path2", align: "#path2", alignOrigin: [0.5, 0.5] }
});

gsap.to(".note-c", {
  duration: 4.5, // Sedikit lebih cepat
  repeat: -1,
  ease: "none",
  delay: 2,
  motionPath: { path: "#path3", align: "#path3", alignOrigin: [0.5, 0.5] }
});

    const sections = gsap.utils.toArray('.content-section');
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateSession(i),
        onEnterBack: () => updateSession(i),
      });
    });

    function updateSession(index) {
      const item = contentData[index];
      setCurrentSessionIndex(index);
      setCurrentTrackIndex(0);

      // Reset Audio Source saat scroll
      if (item.hasMusicPlayer && item.playlist.length > 0) {
        audioRef.current.src = item.playlist[0].url;
      }
      audioRef.current.pause();
      setIsPlaying(false);

      if (imgTagRef.current) imgTagRef.current.src = item.image;
      gsap.to(containerRef.current, { backgroundColor: item.color, duration: 0.8 });
      gsap.to(playerRef.current, { opacity: item.hasMusicPlayer ? 1 : 0, y: item.hasMusicPlayer ? 0 : 20, duration: 0.5 });
      gsap.fromTo(bgTextRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 0.1, duration: 0.5, textContent: item.bgText });
      gsap.fromTo(mainImageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', minHeight: '100vh', color: 'white', transition: 'background-color 0.8s' }}>
      
      {/* SISI KIRI: STICKY */}
      <div style={{ width: '50%', height: '100vh', position: 'sticky', top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Tangga Nada SVG dengan 3 Jalur */}
{/* Paranada SVG (3 Jalur Sejajar) */}
{/* Paranada SVG (3 Jalur Sejajar dengan Gambar Note) */}
<svg width="400" height="300" viewBox="0 0 400 300" style={{ position: 'absolute', left: 0, top: '15%', opacity: currentSessionIndex === 0 ? 0.6 : 0, transition: 'opacity 0.5s', pointerEvents: 'none' }}>
    
    {/* Jalur 1 (Atas) */}
    <path id="path1" d="M -50 100 Q 100 0 200 100 T 450 50" fill="none" stroke="white" strokeWidth="1"/>
    {/* GANTI CIRCLE MENJADI IMAGE */}
    <image href={nadaGImg} className="note-1" width="30" height="30" />
    <image href={nadaGImg} className="note-a" width="30" height="30" />

    {/* Jalur 2 (Tengah) */}
    <path id="path2" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 40)" fill="none" stroke="white" strokeWidth="1"/>
    <image href={nadaGImg} className="note-2" width="30" height="30" />
    <image href={nadaGImg} className="note-b" width="30" height="30" />

    {/* Jalur 3 (Bawah) */}
    <path id="path3" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 80)" fill="none" stroke="white" strokeWidth="1"/>
    <image href={nadaGImg} className="note-3" width="30" height="30" />
    <image href={nadaGImg} className="note-c" width="30" height="30" />
</svg>
        

        <h1 ref={bgTextRef} style={{ position: 'absolute', fontSize: '10vw', fontWeight: '900', opacity: 0.1, zIndex: 0 }}>VIBE</h1>

        <div style={{ zIndex: 2, textAlign: 'center' }}>
            <div ref={mainImageRef} style={{ width: '380px', height: '380px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden', marginBottom: '30px' }}>
              <img ref={imgTagRef} src={contentData[0].image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Visual" />
            </div>

            <div ref={playerRef} style={{ width: '380px', opacity: 0 }}>
                {/* Progress Bar */}
                <div onClick={handleProgressClick} style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', position: 'relative', marginBottom: '30px', cursor: 'pointer' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${progress}%`, background: 'white' }}></div>
                    <img src={bintangImg} style={{ position: 'absolute', left: `${progress}%`, top: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', filter: 'drop-shadow(2px 0 0 black) drop-shadow(-2px 0 0 black) drop-shadow(0 2px 0 black) drop-shadow(0 -2px 0 black)' }} />
                </div>

                {/* --- PERBAIKAN: KONTROL MENGGUNAKAN IMAGE ICON --- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    {/* Prev menggunakan forwardIcon yang di-flip horizontal */}
                    <img 
                      src={forwardIcon} 
                      onClick={handlePrev} 
                      style={{ cursor: 'pointer', width: '50px', transform: 'scaleX(-1)' }} 
                      alt="Prev" 
                    />
                    
                    {/* Play/Pause Toggle */}
                    <img 
                      src={isPlaying ? pauseIcon : playIcon} 
                      onClick={togglePlay} 
                      style={{ cursor: 'pointer', width: '85px' }} 
                      alt="Play/Pause" 
                    />
                    
                    {/* Next */}
                    <img 
                      src={forwardIcon} 
                      onClick={handleNext} 
                      style={{ cursor: 'pointer', width: '50px' }} 
                      alt="Next" 
                    />
                </div>

                <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>{contentData[currentSessionIndex]?.playlist[currentTrackIndex]?.title || ""}</p>
                <p style={{ fontSize: '18px', opacity: 0.6 }}>{contentData[currentSessionIndex]?.playlist[currentTrackIndex]?.artist || ""}</p>
            </div>
        </div>
      </div>

      {/* SISI KANAN: SCROLLABLE */}
      <div style={{ width: '50%' }}>
        {contentData.map((item, index) => (
          <section key={index} className="content-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', marginBottom: '10px' }}>{item.subtitle}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {item.name === "Hipdut" && <img src={nadaGImg} style={{ height: '70px' }} />}
              <h2 style={{ fontSize: '4.5rem', margin: '0 0 20px 0', lineHeight: '1' }}>{item.name}</h2>
              {item.name === "Hipdut" && (
                <div ref={eyeContainerRef} style={{ position: 'relative', width: '110px', height: '110px' }}>
                   <img src={mataBaseImg} style={{ width: '100%', position: 'absolute', zIndex: 1 }} />
                   <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                      <img ref={pupilRef} src={pupilImg} style={{ width: '80%' }} />
                   </div>
                </div>
              )}
            </div>
            <p style={{ fontSize: '1.2rem', maxWidth: '550px', lineHeight: '1.8', opacity: 0.9 }}>{item.desc}</p>
            <button style={{ marginTop: '30px', padding: '12px 24px', width: 'fit-content', border: '1px solid white', background: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Pelajari Selengkapnya</button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContemporaryScroll;