import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from '@gsap/react';
import { motion } from "framer-motion";

// Assets
import bintangImg from "../assets/bintang.png";
import mataBaseImg from "../assets/mata-senyum.png";
import pupilImg from "../assets/pupil-mata.png";
import playIcon from "../assets/play.png";
import pauseIcon from "../assets/pause.png";
import forwardIcon from "../assets/forward.png";
import nadaGImg from "../assets/nada-g.png";
import nadaiimg from "../assets/nada-i.png";
import nadaidoubleimg from "../assets/nada-idouble1.png";
import nadaitripleimg from "../assets/nada-i-triple.png";
import quarterimg from "../assets/quareter.png";
import iconSoundHoregImg from "../assets/icon-sound-horeg.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ContemporaryScroll = ({ sectionData, onOpenModal }) => {
  const containerRef = useRef();
  const mainImageRef = useRef();
  const bgTextRef = useRef();
  const eyeContainerRef = useRef();
  const pupilRef = useRef();
  const audioRef = useRef(new Audio());

  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const dataArrayRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const items = sectionData.items || [];

  // --- VARIANTS ANIMASI (SOLUSI MOBILE VS DESKTOP) ---
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      // Di mobile kita gunakan Y (bawah ke atas), di desktop kita gunakan X (kanan ke kiri)
      x: window.innerWidth < 768 ? 0 : 50, 
      y: window.innerWidth < 768 ? 30 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // --- AUDIO ANALYZER ---
  useEffect(() => {
    const updateBeat = () => {
      if (isPlaying && items[currentSessionIndex]?.name === "Sound Horeg" && analyzerRef.current) {
        analyzerRef.current.getByteFrequencyData(dataArrayRef.current);
        const lowFreq = dataArrayRef.current.slice(0, 5);
        const average = lowFreq.reduce((a, b) => a + b) / lowFreq.length;
        const scale = 1 + (average / 255) * 0.08;

        if (mainImageRef.current) {
          gsap.set(mainImageRef.current, { scale: scale });
          const waveIntensity = (average / 255);
          mainImageRef.current.style.setProperty('--wave-opacity', waveIntensity);
          mainImageRef.current.style.setProperty('--wave-speed', `${1 - waveIntensity * 0.5}s`);
        }
      } else {
        if (mainImageRef.current) gsap.set(mainImageRef.current, { scale: 1 });
      }
      animationFrameRef.current = requestAnimationFrame(updateBeat);
    };
    updateBeat();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isPlaying, currentSessionIndex, items]);

  // --- EYE TRACKING ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeContainerRef.current && pupilRef.current && currentSessionIndex === 0) {
        const rect = eyeContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / 10;
        const y = (e.clientY - (rect.top + rect.height / 2)) / 10;
        gsap.to(pupilRef.current, { x: Math.max(-12, Math.min(12, x)), y: Math.max(-12, Math.min(12, y)), duration: 0.2 });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentSessionIndex]);

  // --- PROGRESS & PLAYER LOGIC ---
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (!isDragging && audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [isDragging]);

  const initAudioContext = () => {
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const source = ctx.createMediaElementSource(audioRef.current);
      const analyzer = ctx.createAnalyser();
      analyzer.fftSize = 256;
      source.connect(analyzer);
      analyzer.connect(ctx.destination);
      audioContextRef.current = ctx;
      analyzerRef.current = analyzer;
      dataArrayRef.current = new Uint8Array(analyzer.frequencyBinCount);
    }
    if (audioContextRef.current.state === 'suspended') audioContextRef.current.resume();
  };

  const handleProgressInteraction = (e) => {
    e.preventDefault();
    initAudioContext();
    const bar = e.currentTarget;
    const updateValue = (clientX) => {
      const rect = bar.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = x / rect.width;
      if (audioRef.current.duration) {
        audioRef.current.currentTime = percentage * audioRef.current.duration;
        setProgress(percentage * 100);
      }
    };
    setIsDragging(true);
    updateValue(e.clientX || e.touches[0].clientX);
    const onMove = (mE) => updateValue(mE.clientX || mE.touches[0].clientX);
    const onUp = () => { setIsDragging(false); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const togglePlay = () => {
    initAudioContext();
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play().catch(err => console.error(err)); }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const session = items[currentSessionIndex];
    if (session?.playlist?.length > 0) {
      const nextIndex = (currentTrackIndex + 1) % session.playlist.length;
      setCurrentTrackIndex(nextIndex);
      audioRef.current.src = session.playlist[nextIndex].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    const session = items[currentSessionIndex];
    if (session?.playlist?.length > 0) {
      const prevIndex = (currentTrackIndex - 1 + session.playlist.length) % session.playlist.length;
      setCurrentTrackIndex(prevIndex);
      audioRef.current.src = session.playlist[prevIndex].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // --- GSAP SCROLL LOGIC ---
  useGSAP(() => {
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateContent(i),
        onEnterBack: () => updateContent(i),
      });
    });

    function updateContent(index) {
      setCurrentSessionIndex(index);
      setCurrentTrackIndex(0);
      const session = items[index];
      if (session?.playlist?.length > 0) audioRef.current.src = session.playlist[0].url;
      audioRef.current.pause();
      setIsPlaying(false);
      gsap.fromTo(mainImageRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
      gsap.fromTo(bgTextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 0.1, duration: 0.4 });
    }

    [".note-1", ".note-2", ".note-3", ".note-a", ".note-b", ".note-c"].forEach((n, i) => {
      gsap.to(n, { duration: 5, repeat: -1, ease: "none", delay: i * 0.8,
        motionPath: { path: `#path${(i % 3) + 1}`, align: `#path${(i % 3) + 1}`, alignOrigin: [0.5, 0.5] } 
      });
    });
  }, { scope: containerRef, dependencies: [items] });

  return (
    <div ref={containerRef} className={`relative transition-colors duration-1000 ${items[currentSessionIndex]?.color || 'bg-zinc-900'} w-full text-white`}>
      <style>{`
        @keyframes ripple { 0% { transform: scale(1); opacity: var(--wave-opacity, 0.5); } 100% { transform: scale(1.5); opacity: 0; } }
        .wave-element { position: absolute; inset: 0; border: 2px solid white; border-radius: inherit; pointer-events: none; z-index: -1; animation: ripple var(--wave-speed, 1s) infinite linear; }
      `}</style>

      <div className="flex flex-col md:flex-row relative w-full items-start">
        {/* LEFT PANEL (STICKY) */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0 flex flex-col items-center justify-center p-4 z-20 overflow-hidden select-none">
          <h1 ref={bgTextRef} className="absolute text-[18vw] font-black opacity-10 pointer-events-none uppercase italic text-center leading-none">
            {items[currentSessionIndex]?.bgText}
          </h1>

          <svg className="w-[300px] h-auto absolute left-0 top-[15%] pointer-events-none transition-opacity duration-500" style={{ opacity: currentSessionIndex === 0 ? 0.6 : 0 }}>
            <path id="path1" d="M -50 100 Q 100 0 200 100 T 450 50" fill="none" stroke="white" strokeWidth="0.5"/>
            <image href={nadaGImg} className="note-1" width="30" height="30" />
            <image href={nadaiimg} className="note-a" width="30" height="30" />
            <path id="path2" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 40)" fill="none" stroke="white" strokeWidth="0.5"/>
            <image href={nadaidoubleimg} className="note-2" width="30" height="30" />
            <image href={nadaitripleimg} className="note-b" width="30" height="30" />
            <path id="path3" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 80)" fill="none" stroke="white" strokeWidth="0.5"/>
            <image href={quarterimg} className="note-3" width="30" height="30" />
            <image href={nadaitripleimg} className="note-c" width="30" height="30" />
          </svg>

          <div ref={mainImageRef} className={`relative z-10 w-full max-w-[180px] md:max-w-[420px] aspect-square shadow-2xl transition-all duration-500 border-2 border-white/20 ${(items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying) ? 'rounded-[40px]' : 'rounded-[30px]'}`}>
            {items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying && (
              <><div className="wave-element" /><div className="wave-element" style={{animationDelay:'0.3s'}}/></>
            )}
            <div className="w-full h-full overflow-hidden rounded-[inherit]">
              <img src={(items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying) ? iconSoundHoregImg : items[currentSessionIndex]?.image} className="w-full h-full object-cover" alt="visual" />
            </div>
          </div>

          <div className={`w-full max-w-[320px] md:max-w-[480px] mt-10 transition-opacity duration-500 ${items[currentSessionIndex]?.hasMusicPlayer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="group relative w-full h-12 flex items-center cursor-pointer mb-6 touch-none" onMouseDown={handleProgressInteraction} onTouchStart={handleProgressInteraction}>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white transition-all duration-75" style={{ width: `${progress}%` }} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ left: `${progress}%` }}>
                <img src={bintangImg} className="w-[35px] md:w-[47px] h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" alt="marker" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-12">
              <img src={forwardIcon} onClick={handlePrev} className="w-[35px] md:w-[47px] cursor-pointer rotate-180 opacity-70" alt="prev" />
              <img src={isPlaying ? pauseIcon : playIcon} onClick={togglePlay} className="w-[60px] md:w-[79px] cursor-pointer" alt="play" />
              <img src={forwardIcon} onClick={handleNext} className="w-[35px] md:w-[47px] cursor-pointer opacity-70" alt="next" />
            </div>

            <div className="text-center mt-6 space-y-1">
              <p className="font-black truncate uppercase tracking-widest text-lg md:text-[29px]">
                {items[currentSessionIndex]?.playlist?.[currentTrackIndex]?.title || "No Track"}
              </p>
              <p className="opacity-70 uppercase tracking-[2px] md:tracking-[4px] font-bold text-sm md:text-[27px]">
                {items[currentSessionIndex]?.playlist?.[currentTrackIndex]?.artist || "Unknown Artist"}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (CONTENT) */}
        <div className="w-full md:w-1/2 relative z-10">
          {items.map((item, index) => (
            <section key={index} className="content-section h-screen snap-start flex flex-col justify-center px-8 md:px-20 relative">
              {/* PERBAIKAN UTAMA: Menggunakan Variants dengan deteksi lebar layar */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={contentVariants}
              >
                <span className="uppercase tracking-[4px] text-xs font-bold mb-4 opacity-70 block">{item.subtitle}</span>
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="text-4xl md:text-8xl font-black italic leading-none uppercase">{item.name}</h2>
                   {item.name === "Hipdut" && (
                    <div ref={eyeContainerRef} className="relative w-12 h-12 md:w-24 md:h-24">
                      <img src={mataBaseImg} className="absolute inset-0 z-10 w-full" alt="eye" />
                      <img ref={pupilRef} src={pupilImg} className="absolute w-[60%] top-[20%] left-[20%] z-20" alt="pupil" />
                    </div>
                  )}
                </div>
                <div className="w-16 md:w-20 h-1.5 bg-white mb-8 rounded-full" />
                <p className="text-base md:text-xl leading-relaxed max-w-xl opacity-90 mb-10 italic border-l-2 border-white/30 pl-6">{item.desc}</p>
                
                <button 
                  onClick={() => {
                    audioRef.current.pause(); 
                    setIsPlaying(false);      
                    onOpenModal(item);        
                  }} 
                  className="group relative flex items-center gap-4 bg-white text-black px-8 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-xl rounded-full text-sm md:text-base"
                >
                  <span className="relative z-10">Pelajari Selengkapnya</span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContemporaryScroll;