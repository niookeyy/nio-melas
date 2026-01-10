import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT ASSETS UNTUK MAPPING GAMBAR KULINER
import rendangImg from "../assets/rendang.png";
import ayamBetutuImg from "../assets/ayam-betutu.png";
import seblakImg from "../assets/seblak.png";
import sateImg from "../assets/sate.png";
import indomieImg from "../assets/indomie.png";
import rawonImg from "../assets/rawon.png";

export default function DetailModal({ modalContent, onClose, IconX }) {
  if (!modalContent) return null;

  // Logika untuk menentukan gambar mana yang tampil
  const getDisplayImage = () => {
    const name = modalContent.name.toLowerCase();
    if (name === "rendang") return rendangImg;
    if (name === "ayam betutu") return ayamBetutuImg;
    if (name === "seblak") return seblakImg;
    if (name === "sate") return sateImg;
    if (name === "indomie") return indomieImg;
    if (name === "rawon") return rawonImg;
    // Jika bukan kuliner, gunakan property image langsung dari data
    return modalContent.image;
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
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
        >
          <IconX />
        </button>

        {/* AREA GAMBAR */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <img 
            src={getDisplayImage()} 
            className="w-full h-full object-cover" 
            alt={modalContent.name} 
          />
        </div>

        {/* AREA TEKS */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none text-red-600">
            {modalContent.name}
          </h2>
          
          <div className="space-y-6 overflow-y-auto max-h-[300px] pr-4">
            {/* ✅ MEMISAHKAN TEKS MENJADI PARAGRAF */}
            {modalContent.detail.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* PLAYLIST (Hanya muncul jika ada) */}
          {modalContent.hasMusicPlayer && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Featured Audio</p>
              {modalContent.playlist?.map((track, i) => (
                <div key={i} className="flex items-center justify-between mb-2 text-sm bg-white/5 p-2 rounded-lg">
                  <span>{track.title} - {track.artist}</span>
                  <button className="text-[10px] border border-white/30 px-2 py-1 rounded hover:bg-white hover:text-black">PLAY</button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-10 bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all w-fit"
            style={{ borderRadius: "25px" }} // ✅ RADIUS 25PX
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}