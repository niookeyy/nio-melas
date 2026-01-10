import React from "react";
import { motion } from "framer-motion";

export default function TraditionalSection({
  reference,
  sectionData,
  onOpenModal,
  IconChevronRight,
}) {
  return (
    <section
      ref={reference}
      className="py-32 px-6 md:px-12 bg-white text-black rounded-[3rem] -mt-10 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase italic">
            {sectionData.title}
          </h2>
          <p className="text-2xl text-gray-500 font-light italic">
            {sectionData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="group relative bg-gray-50 rounded-[2.5rem] p-8 overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => onOpenModal(item)}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed italic">
                  "{item.desc}"
                </p>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <IconChevronRight />
                </div>
              </div>
              <img
                src={item.image}
                className="absolute -right-10 -bottom-10 w-48 opacity-10 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700"
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
