import React from "react";

export default function FooterSection({
  content,
  IconInstagram,
  IconTwitter,
  IconYoutube,
}) {
  return (
    // Penyesuaian: Menambahkan w-full, box-border, dan overflow-hidden untuk mengunci geseran
    <footer className="bg-white text-black pt-20 md:pt-32 pb-16 px-4 md:px-12 rounded-t-[3rem] w-full box-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <div>
            {/* Ukuran Teks dikurangi: text-5xl (sebelumnya 7xl) */}
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 md:mb-12 uppercase italic">
              LET&apos;S
              <br />
              SHARE
              <br />
              <span className="text-red-600">CULTURE.</span>
            </h2>
            <div className="flex gap-4 md:gap-6">
              {/* Ukuran ikon dikurangi: w-12 (sebelumnya 16) */}
              <a
                href="#"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconInstagram />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconTwitter />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconYoutube />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            {/* Ukuran deskripsi dikurangi: text-xl (sebelumnya 3xl) */}
            <p className="text-xl md:text-3xl font-light mb-8 md:mb-12 leading-relaxed italic text-gray-500">
              Berkolaborasi untuk melestarikan keindahan Nusantara di era digital.
            </p>
            
            {/* PERBAIKAN STRUKTUR: Menggunakan flex-col agar tombol di bawah input */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder={content.ui.emailPlh}
                // Padding dikurangi: py-4 (sebelumnya 5)
                // w-full memastikan input tidak melebihi layar
                className="w-full md:flex-1 bg-gray-100 rounded-full px-6 md:px-8 py-4 md:py-5 border-none focus:ring-2 focus:ring-red-600 outline-none text-base md:text-lg font-bold"
              />
              <button className="w-full md:w-auto px-10 py-4 md:py-5 bg-black text-white rounded-full font-black text-base md:text-lg hover:bg-red-600 transition-all uppercase tracking-widest">
                {content.ui.join}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 md:pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <span className="text-base md:text-lg font-black tracking-widest uppercase italic">
            © 2025 INDOCULTURE. ID
          </span>
          {/* Jarak diperkecil: gap-6 (sebelumnya 12) */}
          <div className="flex gap-6 md:gap-12 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}