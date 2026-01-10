import React from "react";

export default function CulinarySection({
  reference,
  sectionData,
  onOpenModal,
  IconChevronRight,
}) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectionData.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[400px] rounded-[3rem] overflow-hidden cursor-pointer"
              onClick={() => onOpenModal(item)}
            >
              <img
                src={item.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white uppercase mb-2 italic">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-lg mb-6 italic">{item.desc}</p>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
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
