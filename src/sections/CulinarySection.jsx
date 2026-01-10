import React from "react";

// ✅ IMPORT ASSETS
import rendangImg from "../assets/rendang.png";
import ayamBetutuImg from "../assets/ayam-betutu.png"; // Nama file baru
import seblakImg from "../assets/seblak.png";
import sateImg from "../assets/sate.png";
import indomieImg from "../assets/indomie.png";
import rawonImg from "../assets/rawon.png";

export default function CulinarySection({
  reference,
  sectionData,
  onOpenModal,
  IconChevronRight,
}) {
  
  // ✅ MAPPING IMAGE (Menghubungkan nama dari data ke file import)
  const getImage = (name) => {
    switch (name.toLowerCase()) {
      case "rendang": return rendangImg;
      case "ayam betutu": return ayamBetutuImg;
      case "seblak": return seblakImg;
      case "sate": return sateImg;
      case "indomie": return indomieImg;
      case "rawon": return rawonImg;
      default: return rendangImg;
    }
  };

  return (
    <section ref={reference} className="py-32 px-6 md:px-12 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase italic">
              {sectionData.title}
            </h2>
            <p className="text-2xl text-gray-500 font-light italic">
              {sectionData.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl"
              onClick={() => onOpenModal(item)}
            >
              <img
                src={getImage(item.name)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.name}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white uppercase mb-2 italic">
                  {item.name}
                </h3>
                {/* Deskripsi diperjelas di sini */}
                <p className="text-gray-300 text-base mb-6 italic line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                  <IconChevronRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}