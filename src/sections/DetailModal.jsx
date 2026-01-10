import React from "react";
import { motion } from "framer-motion";

export default function DetailModal({ content, modalContent, onClose, IconX }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-gray-900 text-white w-full max-w-[500px] rounded-[2.5rem] p-8 relative z-10 shadow-2xl border border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition bg-white/10 p-2 rounded-full"
        >
          <IconX />
        </button>

        <img
          src={modalContent.image}
          className="w-full h-64 object-cover rounded-3xl mb-8 shadow-lg border border-white/10"
          alt=""
        />

        <h2 className="text-3xl font-black mb-2 uppercase tracking-tight text-left text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          {modalContent.name}
        </h2>

        <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded mb-6"></div>

        <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed text-left">
          {modalContent.detail}
        </p>

        <button
          onClick={onClose}
          className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all uppercase tracking-widest shadow-xl"
        >
          {content.ui.closeBtn}
        </button>
      </motion.div>
    </div>
  );
}
