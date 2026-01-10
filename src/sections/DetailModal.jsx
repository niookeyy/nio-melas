import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT ASSETS
import rendangImg from "../assets/rendang.png";
import ayamBetutuImg from "../assets/ayam-betutu.png";
import seblakImg from "../assets/seblak.png";
import sateImg from "../assets/sate.png";
import indomieImg from "../assets/indomie.png";
import rawonImg from "../assets/rawon.png";

export default function DetailModal({ modalContent, onClose, IconX }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const modalAudioRef = useRef(new Audio());
  const progressBarRef = useRef(null);
  
  // ✅ Ref Baru untuk mendeteksi area Dropdown
  const dropdownRef = useRef(null);

  // Efek untuk Audio
  useEffect(() => {
    const audio = modalAudioRef.current;
    const updateProgress = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.pause();
      audio.src = "";
    };
  }, []);

  // ✅ FUNGSI BARU: Tutup Dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Jika dropdown sedang terbuka dan klik terjadi di luar dropdownRef
      if (activeDropdown !== null && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        // Opsional: Pause musik jika dropdown tertutup (bisa dihapus jika ingin musik tetap jalan)
        modalAudioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  if (!modalContent) return null;

  const getDisplayImage = () => {
    const name = modalContent.name.toLowerCase();
    const mapping = {
      rendang: rendangImg,
      "ayam betutu": ayamBetutuImg,
      seblak: seblakImg,
      sate: sateImg,
      indomie: indomieImg,
      rawon: rawonImg
    };
    return mapping[name] || modalContent.image;
  };

  const handleMainPlayTrigger = (track, index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
      modalAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      setActiveDropdown(index);
      modalAudioRef.current.src = track.url;
      modalAudioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      modalAudioRef.current.pause();
    } else {
      modalAudioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    if (!progressBarRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercentage = clickX / width;
    const newTime = newPercentage * duration;
    
    modalAudioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-zinc-900 text-white w-full max-w-5xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
          <IconX />
        </button>

        <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <img src={getDisplayImage()} className="w-full h-full object-cover" alt={modalContent.name} />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none text-red-600">
            {modalContent.name}
          </h2>
          
          <div className="space-y-6 overflow-y-auto max-h-[300px] pr-4 mb-4">
            {modalContent.detail?.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {modalContent.hasMusicPlayer && (
            <div className="mt-4 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Featured Audio</p>
              
              <div className="space-y-3">
                {modalContent.playlist?.map((track, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{track.title}</span>
                        <span className="text-xs opacity-50">{track.artist}</span>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Penting agar tidak langsung memicu handleClickOutside
                          handleMainPlayTrigger(track, i);
                        }}
                        className={`text-[10px] font-bold px-6 py-2 rounded-full transition-all ${
                          activeDropdown === i ? 'bg-red-600 text-white' : 'bg-white text-black'
                        }`}
                      >
                        {activeDropdown === i ? 'CLOSE' : 'PLAY'}
                      </button>
                    </div>

                    <AnimatePresence>
                      {activeDropdown === i && (
                        <motion.div
                          ref={dropdownRef} // ✅ Pasang Ref di sini
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute right-0 top-full mt-2 w-full z-20 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-2xl"
                          onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam dropdown menutup dirinya sendiri
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg overflow-hidden shrink-0">
                               <img src={getDisplayImage()} className="w-full h-full object-cover opacity-80" alt="thumb" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                              <p className="font-bold text-sm truncate">{track.title}</p>
                              <p className="text-[10px] opacity-60 italic">Now Playing - Culture Audio</p>
                            </div>
                            
                            <button 
                              onClick={togglePlayPause}
                              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                              {isPlaying ? (
                                <div className="flex gap-1">
                                  <div className="w-1 h-4 bg-black rounded-full"></div>
                                  <div className="w-1 h-4 bg-black rounded-full"></div>
                                </div>
                              ) : (
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                              )}
                            </button>
                          </div>

                          <div 
                            ref={progressBarRef}
                            onClick={handleSeek}
                            className="mt-4 w-full h-2 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group"
                          >
                            <div 
                              className="h-full bg-white transition-all duration-100 relative" 
                              style={{ width: `${(currentTime / duration) * 100}%` }}
                            >
                              <div className="absolute right-0 top-0 h-full w-1 bg-red-500 opacity-0 group-hover:opacity-100" />
                            </div>
                          </div>
                          
                          <div className="flex justify-between text-[10px] opacity-50 mt-1 font-mono">
                            <span>{Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}</span>
                            <span>{Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={onClose} className="mt-8 bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all w-fit rounded-[25px]">
            Tutup
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}