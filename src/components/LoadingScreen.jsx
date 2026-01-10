import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      const increment = p > 70 ? Math.random() * 1.5 : Math.random() * 10;
      p += increment;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(onDone, 800);
      }
      setProgress(p);
    }, 100);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- DYNAMIC BACKGROUND SYSTEM --- */}
      
      {/* 1. Animated Gradient Mesh (Pojok Kiri Atas & Kanan Bawah) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 rounded-full blur-[120px] animate-[pulse_8s_infinite] transition-all duration-1000"
        style={{ opacity: 0.1 + (progress / 200) }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] animate-[pulse_10s_infinite] transition-all duration-1000"
        style={{ opacity: 0.05 + (progress / 300) }}
      />

      {/* 2. Floating Particles (Sederhana namun efektif) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-float-particle"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 10 + 10) + 's',
              animationDelay: (Math.random() * 5) + 's',
            }}
          />
        ))}
      </div>

      {/* 3. Central Ambient Glow - Beresonansi dengan logo */}
      <div 
        className="absolute w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] transition-all duration-700 pointer-events-none"
        style={{ 
          transform: `scale(${0.8 + progress / 100})`, 
          opacity: progress / 100 
        }}
      />

      {/* --- MAIN CONTENT (LOGO & TEXT) --- */}
      
      <div className="relative flex flex-col items-center z-20">
        
        {/* LOGO DYNAMISM CONTAINER */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-12">
          
          {/* Layer 1: Outer Ring Glow */}
          <div className="absolute inset-0 rounded-full border-2 border-white/5 animate-[spin_12s_linear_infinite]" />
          
          {/* Layer 2: Pulse Ripple */}
          <div className="absolute inset-0 rounded-full border border-red-500/30 animate-[ping_2s_linear_infinite]" />

          {/* SVG LOGO UTAMA */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1080 1080"
            className="w-full h-full relative z-10 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
          >
            {/* Bagian Putih: Efek Menggambar (Stroke Dash) */}
            <g 
              fill="none" 
              stroke="#FFF" 
              strokeWidth="4" 
              strokeDasharray="3000" 
              strokeDashoffset={3000 - (progress * 30)}
              className="transition-all duration-500 ease-out"
              style={{ 
                fill: progress > 85 ? 'white' : 'transparent', 
                stroke: progress > 85 ? 'transparent' : 'white' 
              }}
            >
              <path d="M520.5 109.1c-77.3 3.1-153.2 27.9-218.8 71.5-104.8 69.7-173.8 180.8-189.8 305.6-3.8 30.1-4 74.8-.4 104.3 11.2 92.1 50.4 176.4 113 243.5 11.6 12.3 14.1 14.8 28 27.4C315 918 397 956.1 481 967.4c28.5 3.9 69.6 5 95.5 2.6 44.1-4.1 83.7-13.5 123-29.2C844 883 946.8 751.6 967.4 598.5c5.1-37.5 5.1-79.2 0-117.5-7.1-53.2-26.3-109.3-53.5-156.1-55.3-95.3-144.7-166.3-249.1-197.8-34.5-10.4-69.2-16.5-100.3-17.6-7.7-.3-16.7-.7-20-.8-3.3-.2-14.1 0-24 .4m57.8 45.5c63.1 6.8 115.5 24.7 167.7 57.3 47.4 29.5 92.6 74.7 122.1 122.1 13.9 22.2 22.4 39.3 33.1 65.9 24.8 62 32 134 20.7 205-10.6 66.9-42.4 134.7-87.4 186.6-44 50.7-91.8 84.6-154.4 109.7-62 24.8-134 32-205 20.7-65.1-10.3-133.6-42-183.6-84.7-44.7-38.2-81.3-86-103-134.1C163.6 647.5 153 599 153 540c0-74.9 19.3-142.5 58.9-206 19.6-31.5 45.8-61.8 76.6-88.5C342.4 198.8 412 167 482 157.1c24-3.5 29.4-3.8 56.3-4 17.4-.1 30.4.4 40 1.5"/><path d="M277 405.7v20.8l21.3 9.7 21.2 9.7.2 114.8.3 114.8-21.3 9.7-21.2 9.7-.3 21-.2 21.1h160l-.2-21.1-.3-21.1-21-9.7-21-9.6-.3-114.6-.2-114.6 21.5-9.9 21.5-9.9V385H277zm221 155.4v176.1l62.3-.5c34.5-.3 66-1 70.7-1.6 45.2-5.7 75.9-17.7 105.2-41.3 28.3-22.8 46.1-59 52-105.8 1.8-14.6 1.5-52.3-.6-65-5-31.2-15.1-55.5-32.2-77.6-25.9-33.4-70.3-55.1-121.9-59.4-6.6-.5-39.8-1-73.7-1H498zm142.5-113.3c26.4 5.8 45 18.8 57.8 40.3 6.5 11 11.7 30.2 13.8 50.7 1.4 13 .6 41.4-1.4 53.3-7.3 43.1-30.6 69.8-69 79.3-14.3 3.6-25 4.6-48.9 4.6H572V444.8l29.8.5c24.7.4 31.2.8 38.7 2.5"/></g>

            {/* Bagian Merah: Efek Floating Secara Organik */}
            <g 
              fill="#BF0000" 
              className="transition-all duration-700"
              style={{ 
                transform: `translateY(${Math.sin(progress/5) * 6}px)`,
                opacity: progress > 25 ? 1 : 0 
              }}
            >
              <path d="M519 154c-85.2 4.6-165.7 36.9-230.1 92.3-18 15.5-25.3 22.7-40.4 40-30.9 35.5-52.3 71.3-70 116.7-16.7 43-24.8 87.7-24.8 137 0 58.5 10.9 108.4 35.6 162.6 9.8 21.6 26.5 49.5 41.9 70.1 7.1 9.5 27.5 32.9 36.3 41.7 30.7 30.5 72.3 59.3 110.5 76.6 53.7 24.3 102.9 35.1 161 35.2 25 .1 37-.8 61-4.3 60-8.9 121.8-35 172.7-73.1 9.5-7.1 32.9-27.5 41.7-36.3 30.5-30.7 59.3-72.3 76.6-110.5 24.5-54.2 35.2-103.2 35.2-162 0-33.4-3.1-61.3-10-89.5-15-61.2-42.5-115-82.5-161.6-15.5-18-22.7-25.3-40-40.4-35.5-30.9-71.3-52.3-116.7-70-48.1-18.7-104.3-27.4-158-24.5m-81 251.4v21.4l-21.5 9.8-21.5 9.9.2 114.3.3 114.4 21.2 9.6 21.2 9.7.1 21.7V738H276l.2-21.7.3-21.7 21-9.6 21-9.7.3-114.4.2-114.5-21.5-9.8-21.5-9.9V384h162zm208-19c43.9 7.2 73.7 21.2 99 46.6 20.9 20.9 33.1 43.4 40.4 75 3.6 15.5 4.7 27.2 4.7 49.5 0 39.8-5.8 67.4-19.8 94.8-11.5 22.4-28.3 40.4-52 55.5-14.1 9-32.3 16.6-50.3 21.2-29.5 7.4-37.4 8-109.2 8.7l-61.8.6V383.8l69.3.5c59.4.3 70.7.6 79.7 2.1"/><path d="M573 560.5V675h21.8c24.2 0 33.8-.9 47.8-4.5 32.4-8.5 53.1-28.8 63.2-62 5-16.3 5.7-22.7 5.7-49.5-.1-27.5-1.1-35.7-7.1-54-9.1-28.1-27.7-46-56.7-54.4-12.8-3.7-22.3-4.6-49.9-4.6H573z"/></g>
          </svg>
        </div>

        {/* TYPOGRAPHY DYNAMISM */}
        <div className="text-center overflow-hidden">
          <h1 
            className="text-5xl md:text-7xl font-black italic tracking-tighter transition-all duration-1000 uppercase"
            style={{ 
              letterSpacing: `${(100 - progress) / 8}px`,
              opacity: progress / 100,
              filter: `blur(${(100 - progress) / 15}px)`
            }}
          >
            IndoCulture
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-[10px] tracking-[0.6em] uppercase opacity-40 animate-pulse font-light">
              Digital Heritage Preservation
            </span>
            
            <span className="mt-2 font-mono text-xl font-light italic opacity-90">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* MINIMALIST PROGRESS BAR */}
        <div className="mt-12 w-56 h-[1px] bg-white/5 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-300"
            style={{ left: `${progress - 100}%` }}
          />
        </div>
      </div>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-float-particle {
          animation-name: float-particle;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

    </div>
  );
}