import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TraditionalSection({
  reference,
  sectionData,
  onOpenModal,
  IconChevronRight,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      ref={reference}
      className="py-32 px-6 md:px-12 bg-white text-black rounded-[3rem] -mt-10 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 uppercase italic">
            {sectionData.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light italic">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Carousel for mobile */}
        <div className="md:hidden">
          <Slider {...settings}>
            {sectionData.items.map((item, idx) => (
              <div key={idx} className="px-2">
                <motion.div
                  whileHover={{ y: -15 }}
                  className="group relative bg-gray-50 rounded-[2.5rem] p-8 overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer h-full"
                  onClick={() => onOpenModal(item)}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-base mb-8 leading-relaxed italic">
                      "{item.desc}"
                    </p>
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <IconChevronRight />
                    </div>
                  </div>
                  <img
                    src={item.image}
                    className="absolute -right-10 -bottom-10 w-32 opacity-10 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700"
                    alt=""
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for tablet and desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {sectionData.items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="group relative bg-gray-50 rounded-[2.5rem] p-6 md:p-8 overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => onOpenModal(item)}
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed italic">
                  "{item.desc}"
                </p>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <IconChevronRight />
                </div>
              </div>
              <img
                src={item.image}
                className="absolute -right-10 -bottom-10 w-40 md:w-48 opacity-10 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700"
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
