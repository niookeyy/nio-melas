import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from '@gsap/react';

// Import Assets Visual (Tetap diimport manual karena ini file statis)
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
import mentahanHoregImg from "../assets/mentahan-horeg.png";
import iconSoundHoregImg from "../assets/icon-sound-horeg.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ContemporaryScroll = ({ sectionData }) => {
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

  // DATA MAPPING: Menggabungkan data dari content.js dengan asset audio/lokal
  // Pastikan di content.js anda memiliki array items (Hipdut, Horeg, Citayam)
  const items = sectionData.items || [];

  // --- LOGIKA AUDIO ANALYZER ---
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

  // --- LOGIKA MATA ---
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

  // --- LOGIKA AUDIO ---
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => { if (!isDragging) setProgress((audio.currentTime / audio.duration) * 100 || 0); };
    const handleEnded = () => handleNext();
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, currentSessionIndex, isDragging, items]);

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

  const togglePlay = () => {
    initAudioContext();
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(err => console.error(err));
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    initAudioContext();
    const session = items[currentSessionIndex];
    if (session?.playlist && session.playlist.length > 0) {
      const nextIndex = (currentTrackIndex + 1) % session.playlist.length;
      setCurrentTrackIndex(nextIndex);
      audioRef.current.src = session.playlist[nextIndex].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    initAudioContext();
    const session = items[currentSessionIndex];
    if (session?.playlist && session.playlist.length > 0) {
      const prevIndex = (currentTrackIndex - 1 + session.playlist.length) % session.playlist.length;
      setCurrentTrackIndex(prevIndex);
      audioRef.current.src = session.playlist[prevIndex].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseDown = (e) => {
    initAudioContext();
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const moveHandler = (moveEvent) => {
      const x = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
      const newProgress = x / rect.width;
      if (audioRef.current.duration) {
        audioRef.current.currentTime = newProgress * audioRef.current.duration;
        setProgress(newProgress * 100);
      }
    };
    const upHandler = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
    };
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
  };

  // --- GSAP SCROLL & STICKY LOGIC ---
  useGSAP(() => {
    ScrollTrigger.refresh();

    // Notes Animation
    const noteAnimations = [
      { el: ".note-1", path: "#path1", delay: 0 },
      { el: ".note-2", path: "#path2", delay: 1.2 },
      { el: ".note-3", path: "#path3", delay: 2.5 },
      { el: ".note-a", path: "#path1", delay: 2 },
      { el: ".note-b", path: "#path2", delay: 2 },
      { el: ".note-c", path: "#path3", delay: 2 },
    ];

    noteAnimations.forEach(n => {
      gsap.to(n.el, { 
        duration: 5, repeat: -1, ease: "none", delay: n.delay,
        motionPath: { path: n.path, align: n.path, alignOrigin: [0.5, 0.5] } 
      });
    });

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
      if (session?.playlist && session.playlist.length > 0) {
        audioRef.current.src = session.playlist[0].url;
      }
      audioRef.current.pause();
      setIsPlaying(false);
      gsap.fromTo(mainImageRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
      gsap.fromTo(bgTextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 0.1, duration: 0.4 });
    }
  }, { scope: containerRef, dependencies: [items] });

  return (
    <div ref={containerRef} className={`relative transition-colors duration-1000 ${items[currentSessionIndex]?.color || 'bg-zinc-900'} w-full text-white`}>
      <style>{`
        @keyframes ripple { 0% { transform: scale(1); opacity: var(--wave-opacity, 0.5); } 100% { transform: scale(1.5); opacity: 0; } }
        .wave-element { position: absolute; inset: 0; border: 2px solid white; border-radius: inherit; pointer-events: none; z-index: -1; animation: ripple var(--wave-speed, 1s) infinite linear; }
      `}</style>

      <div className="flex flex-col md:flex-row relative w-full items-start">
        
        {/* LEFT: STICKY PANEL */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0 flex flex-col items-center justify-center p-4 z-20 overflow-hidden">
          <h1 ref={bgTextRef} className="absolute text-[18vw] font-black opacity-10 pointer-events-none uppercase">
            {items[currentSessionIndex]?.bgText}
          </h1>

          {/* Music Notes SVG */}
          <svg className="w-[300px] md:w-[400px] h-auto absolute left-0 top-[15%] pointer-events-none transition-opacity duration-500" 
               style={{ opacity: currentSessionIndex === 0 ? 0.6 : 0 }}>
            <path id="path1" d="M -50 100 Q 100 0 200 100 T 450 50" fill="none" stroke="white" strokeWidth="1"/>
            <image href={nadaGImg} className="note-1" width="30" height="30" />
            <image href={nadaiimg} className="note-a" width="30" height="30" />
            <path id="path2" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 40)" fill="none" stroke="white" strokeWidth="1"/>
            <image href={nadaidoubleimg} className="note-2" width="30" height="30" />
            <image href={nadaitripleimg} className="note-b" width="30" height="30" />
            <path id="path3" d="M -50 100 Q 100 0 200 100 T 450 50" transform="translate(0, 80)" fill="none" stroke="white" strokeWidth="1"/>
            <image href={quarterimg} className="note-3" width="30" height="30" />
            <image href={nadaitripleimg} className="note-c" width="30" height="30" />
          </svg>

          {/* Main Visual */}
          <div ref={mainImageRef} className={`relative z-10 w-full max-w-[180px] md:max-w-[420px] aspect-square shadow-2xl transition-all duration-500 border-2 border-white/20 
              ${(items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying) ? 'rounded-[40px]' : 'rounded-[30px]'}`}>
            {items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying && (
              <><div className="wave-element" /><div className="wave-element" style={{animationDelay:'0.3s'}}/></>
            )}
            <div className="w-full h-full overflow-hidden rounded-[inherit]">
              <img src={(items[currentSessionIndex]?.name === "Sound Horeg" && isPlaying) ? iconSoundHoregImg : items[currentSessionIndex]?.image} 
                   className="w-full h-full object-cover" alt="visual" />
            </div>
          </div>

          {/* Player UI */}
          <div className={`w-full max-w-[280px] md:max-w-[420px] mt-8 transition-opacity duration-500 ${items[currentSessionIndex]?.hasMusicPlayer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="w-full h-1 bg-white/20 relative mb-8 cursor-pointer rounded-full" onMouseDown={handleMouseDown}>
              <div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
              <img src={bintangImg} className="absolute top-1/2 w-8 h-8 -translate-y-1/2 -translate-x-1/2" style={{ left: `${progress}%` }} alt="marker" />
            </div>
            <div className="flex items-center justify-center gap-8">
              <img src={forwardIcon} onClick={handlePrev} className="w-8 cursor-pointer rotate-180 opacity-70 hover:opacity-100" alt="prev" />
              <img src={isPlaying ? pauseIcon : playIcon} onClick={togglePlay} className="w-16 cursor-pointer hover:scale-110" alt="play" />
              <img src={forwardIcon} onClick={handleNext} className="w-8 cursor-pointer opacity-70 hover:opacity-100" alt="next" />
            </div>
            <div className="text-center mt-4">
              <p className="font-bold truncate">{items[currentSessionIndex]?.playlist?.[currentTrackIndex]?.title || "No Track"}</p>
              <p className="text-xs opacity-60 uppercase tracking-widest">{items[currentSessionIndex]?.playlist?.[currentTrackIndex]?.artist}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: SCROLLABLE CONTENT */}
        <div className="w-full md:w-1/2 relative z-10">
          {items.map((item, index) => (
            <section key={index} className="content-section min-h-screen flex flex-col justify-center px-6 md:px-20 py-24">
              <span className="uppercase tracking-[4px] text-xs font-bold mb-4 opacity-70 block">{item.subtitle}</span>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {item.name === "Hipdut" && <img src={nadaGImg} className="h-12" alt="clef" />}
                <h2 className="text-4xl md:text-7xl font-black leading-none">{item.name}</h2>
                {item.name === "Sound Horeg" && <img src={mentahanHoregImg} className="h-16" alt="horeg" />}
                {item.name === "Hipdut" && (
                  <div ref={eyeContainerRef} className="relative w-20 h-20">
                    <img src={mataBaseImg} className="absolute inset-0 z-10 w-full" alt="eye" />
                    <img ref={pupilRef} src={pupilImg} className="absolute w-[70%] top-[15%] left-[15%] z-20" alt="pupil" />
                  </div>
                )}
              </div>
              <p className="text-lg leading-relaxed max-w-xl opacity-90 mb-10 border-l-2 border-white/40 pl-6">{item.desc}</p>
              <button className="w-fit px-8 py-3 border border-white font-bold text-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                {sectionData.learnMoreBtn || "Pelajari Selengkapnya"}
              </button>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContemporaryScroll;