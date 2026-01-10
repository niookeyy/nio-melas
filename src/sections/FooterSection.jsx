import React from "react";

export default function FooterSection({
  content,
  IconInstagram,
  IconTwitter,
  IconYoutube,
}) {
  return (
    <footer className="bg-white text-black pt-32 pb-16 px-6 md:px-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-12 uppercase italic">
              LET&apos;S
              <br />
              SHARE
              <br />
              <span className="text-red-600">CULTURE.</span>
            </h2>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconInstagram />
              </a>
              <a
                href="#"
                className="w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconTwitter />
              </a>
              <a
                href="#"
                className="w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <IconYoutube />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-3xl font-light mb-12 leading-relaxed italic text-gray-500">
              Berkolaborasi untuk melestarikan keindahan Nusantara di era digital.
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={content.ui.emailPlh}
                className="flex-1 bg-gray-100 rounded-full px-8 py-5 border-none focus:ring-2 focus:ring-red-600 outline-none text-lg font-bold"
              />
              <button className="px-10 py-5 bg-black text-white rounded-full font-black text-lg hover:bg-red-600 transition-all uppercase tracking-widest">
                {content.ui.join}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-lg font-black tracking-widest uppercase italic">
            © 2025 INDOCULTURE. ID
          </span>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
