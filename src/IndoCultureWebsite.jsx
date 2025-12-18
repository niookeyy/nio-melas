import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Volume2,
  VolumeX,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Music
} from 'lucide-react';

const IndoCultureWebsite = () => {
  const [language, setLanguage] = useState('id');
  const [activeSection, setActiveSection] = useState('hero');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicType, setMusicType] = useState('gamelan'); // 'gamelan' or 'horeg'
  
  // State untuk warna background dinamis
  const [bgColor, setBgColor] = useState('bg-slate-900');

  // Refs untuk deteksi scroll
  const heroRef = useRef(null);
  const traditionalRef = useRef(null);
  const natureRef = useRef(null);
  const modernRef = useRef(null);
  const culinaryRef = useRef(null);

  // Data Konten
  const content = {
    id: {
      hero: {
        title: 'IndoCulture',
        subtitle: 'Jelajahi Kekayaan Budaya Indonesia',
        description: 'Dari tradisi leluhur hingga tren viral Gen Z. Temukan Indonesia yang sesungguhnya.',
        cta: 'Mulai Menjelajah'
      },
      sections: {
        traditional: {
          id: 'traditional',
          title: 'Budaya Tradisional',
          subtitle: 'Warisan Leluhur yang Abadi',
          color: 'bg-amber-900', // Warna Coklat Kayu/Emas
          items: [
            { name: 'Wayang Kulit', desc: 'Seni bayangan warisan dunia UNESCO.', detail: 'Pertunjukan boneka kulit yang menceritakan kisah epik Ramayana dan Mahabharata.' },
            { name: 'Batik', desc: 'Kain bermotif dengan teknik canting.', detail: 'Setiap goresan canting memiliki filosofi mendalam dari berbagai daerah di Jawa.' },
            { name: 'Tari Saman', desc: 'Tarian "Seribu Tangan" dari Aceh.', detail: 'Mengandalkan kekompakan dan kecepatan gerakan tangan tanpa alat musik.' },
            { name: 'Angklung', desc: 'Alat musik bambu Jawa Barat.', detail: 'Alat musik bernada ganda yang dimainkan dengan cara digoyangkan.' },
            { name: 'Reog Ponorogo', desc: 'Topeng raksasa mistis.', detail: 'Tarian topeng dadak merak seberat 50kg yang digigit oleh penarinya.' },
            { name: 'Rumah Gadang', desc: 'Arsitektur khas Minangkabau.', detail: 'Rumah adat dengan atap runcing menyerupai tanduk kerbau.' }
          ]
        },
        nature: {
          id: 'nature',
          title: 'Alam Indonesia',
          subtitle: 'Surga Tropis di Khatulistiwa',
          color: 'bg-emerald-800', // Warna Hijau/Biru Alam
          items: [
            { name: 'Raja Ampat', desc: 'Surga diving dunia di Papua.', detail: 'Rumah bagi 75% spesies karang dunia.' },
            { name: 'Danau Toba', desc: 'Danau vulkanik terbesar.', detail: 'Danau kawah raksasa dengan Pulau Samosir di tengahnya.' },
            { name: 'Bromo', desc: 'Gunung berapi ikonik.', detail: 'Terkenal dengan pemandangan matahari terbit dan kawah berasapnya.' },
            { name: 'Pulau Komodo', desc: 'Habitat naga purba.', detail: 'Satu-satunya tempat di dunia di mana Komodo hidup di alam liar.' },
            { name: 'Labuan Bajo', desc: 'Gerbang menuju surga timur.', detail: 'Destinasi wisata premium dengan pemandangan laut flores.' },
            { name: 'Kawah Ijen', desc: 'Api biru (Blue Fire) abadi.', detail: 'Fenomena api biru yang hanya ada dua di dunia.' }
          ]
        },
        modern: {
          id: 'modern',
          title: 'Budaya Kontemporer (Gen Z)',
          subtitle: 'Dinamis, Viral, dan Kreatif',
          color: 'bg-fuchsia-900', // Warna Neon/Ungu Modern
          items: [
            { name: 'Hipdut', desc: 'Hip-Hop Dangdut Fusion.', detail: 'Genre viral yang dipelopori oleh TENXI lewat lagu "Garam & Madu". Menggabungkan beat hiphop modern dengan cengkok dangdut.' },
            { name: 'Citayam Fashion Week', desc: 'Street Fashion SCBD.', detail: 'Fenomena 2022 dimana remaja pinggiran Jakarta (Citayam/Bojong Gede) mengubah zebra cross Dukuh Atas menjadi catwalk fashion unik.' },
            { name: 'Sound Horeg', desc: 'Battle Sound System.', detail: 'Budaya adu sound system raksasa di Jawa Timur dengan bass menggelegar yang memutar remix Dangdut Koplo & EDM (Brewog Audio, dll).' },
            { name: 'Drag Race Indonesia', desc: 'Seni Drag Queen Lokal.', detail: 'Adaptasi budaya drag yang semakin populer di komunitas urban, menampilkan kreativitas makeup dan kostum luar biasa.' },
            { name: 'Koplo Remix', desc: 'Anthem Party Lokal.', detail: 'Evolusi dangdut koplo yang dicampur dengan musik elektronik kencang.' },
            { name: 'Skena', desc: 'Budaya Musik Indie.', detail: 'Komunitas penikmat musik indie, gig, dan outfit khas anak muda perkotaan.' }
          ]
        },
        culinary: {
          id: 'culinary',
          title: 'Kuliner Nusantara',
          subtitle: 'Cita Rasa Rempah Dunia',
          color: 'bg-orange-800', // Warna Merah/Oranye Pedas
          items: [
            { name: 'Rendang', desc: 'Makanan terenak di dunia.', detail: 'Daging sapi yang dimasak lama dengan santan dan rempah-rempah Minang.' },
            { name: 'Nasi Goreng', desc: 'Menu favorit sejuta umat.', detail: 'Nasi yang digoreng dengan kecap manis, bumbu, dan pelengkap.' },
            { name: 'Sate Ayam', desc: 'Tusukan daging berbumbu.', detail: 'Potongan ayam bakar disiram bumbu kacang yang gurih.' },
            { name: 'Seblak', desc: 'Pedas favorit kaum hawa.', detail: 'Kerupuk basah dengan kuah kencur pedas khas Bandung.' },
            { name: 'Indomie', desc: 'Mie instan legendaris.', detail: 'Bukan sekadar mie, tapi identitas kuliner modern Indonesia yang mendunia.' },
            { name: 'Gudeg', desc: 'Manis gurih khas Jogja.', detail: 'Nangka muda yang dimasak berjam-jam dengan gula merah.' }
          ]
        }
      }
    }
  };

  // Logika Pengubah Warna Background saat Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Logika penentuan warna berdasarkan posisi scroll
      if (scrollPosition < traditionalRef.current?.offsetTop) {
        setBgColor('bg-indigo-950'); // Hero Color
      } else if (scrollPosition < natureRef.current?.offsetTop) {
        setBgColor('bg-amber-950'); // Traditional Color
      } else if (scrollPosition < modernRef.current?.offsetTop) {
        setBgColor('bg-emerald-900'); // Nature Color
      } else if (scrollPosition < culinaryRef.current?.offsetTop) {
        setBgColor('bg-fuchsia-900'); // Modern Color
      } else {
        setBgColor('bg-orange-900'); // Culinary Color
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Komponen Card Horizontal
  const ScrollableSection = ({ sectionData, reference }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === 'left' ? -300 : 300;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <section ref={reference} className="min-h-screen flex flex-col justify-center py-20 px-4 transition-colors duration-700 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white opacity-90">{sectionData.title}</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">{sectionData.subtitle}</p>

          <div className="relative group">
            {/* Tombol Navigasi Kiri */}
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all hidden md:block"
            >
              <ChevronLeft className="text-white" size={32} />
            </button>

            {/* Container Scroll Horizontal */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-hide snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sectionData.items.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setModalContent(item);
                    setShowModal(true);
                  }}
                  className="flex-shrink-0 w-72 h-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer hover:scale-105 hover:bg-white/20 transition-all duration-300 snap-center flex flex-col justify-end group/card overflow-hidden relative"
                >
                   {/* Placeholder Gambar Dinamis */}
                  <div className={`absolute inset-0 opacity-40 transition-opacity duration-500 group-hover/card:opacity-60 bg-gradient-to-t from-black to-transparent`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-3">{item.desc}</p>
                    <span className="text-xs text-yellow-400 mt-4 inline-block font-semibold tracking-wider uppercase">Lihat Detail →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Navigasi Kanan */}
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all hidden md:block"
            >
              <ChevronRight className="text-white" size={32} />
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${bgColor} font-sans text-white overflow-hidden`}>
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-xs">ID</div>
          IndoCulture
        </div>
        
        <div className="flex gap-4 items-center">
          {/* Music Controller */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm">
            <button onClick={() => setMusicType(musicType === 'gamelan' ? 'horeg' : 'gamelan')} className="text-xs font-bold text-yellow-400 uppercase mr-2">
              {musicType === 'gamelan' ? '🎵 Gamelan' : '🔊 Horeg'}
            </button>
            <button onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
              {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>

          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <Globe size={20} />
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header ref={heroRef} className="h-screen flex items-center justify-center relative px-6 text-center">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-50 animate-pulse delay-700"></div>

        <div className="max-w-4xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            {content.id.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
            {content.id.hero.description}
          </p>
          <button 
            onClick={() => traditionalRef.current.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition transform shadow-lg hover:shadow-white/50"
          >
            {content.id.hero.cta}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      {/* SECTIONS */}
      <ScrollableSection sectionData={content.id.sections.traditional} reference={traditionalRef} />
      <ScrollableSection sectionData={content.id.sections.nature} reference={natureRef} />
      <ScrollableSection sectionData={content.id.sections.modern} reference={modernRef} />
      <ScrollableSection sectionData={content.id.sections.culinary} reference={culinaryRef} />

      {/* FOOTER */}
      <footer className="bg-black py-12 text-center border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">IndoCulture</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-pink-500 transition"><Instagram size={24} /></a>
          <a href="#" className="hover:text-blue-400 transition"><Twitter size={24} /></a>
          <a href="#" className="hover:text-red-600 transition"><Youtube size={24} /></a>
        </div>
        
        {/* Contact Form Simple */}
        <div className="max-w-md mx-auto px-6 mb-8">
            <p className="mb-4 text-gray-400">Hubungi Kami</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email Anda" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:border-white" />
                <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200">Kirim</button>
            </div>
        </div>

        <p className="text-gray-500 text-sm">© 2024 IndoCulture Project. Dibuat dengan Cinta untuk Indonesia 🇮🇩</p>
      </footer>

      {/* MODAL POPUP */}
      {showModal && modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-gray-900 border border-white/20 p-8 rounded-3xl max-w-lg w-full relative z-10 shadow-2xl transform transition-all scale-100">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              {modalContent.name}
            </h3>
            <div className="h-1 w-20 bg-white/20 rounded mb-6"></div>
            
            <p className="text-xl text-white mb-4 font-light">{modalContent.desc}</p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed">
                💡 <strong>Info Detail:</strong> <br/>
                {modalContent.detail}
                </p>
            </div>

            <button onClick={() => setShowModal(false)} className="w-full mt-6 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold transition">
                Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export default IndoCultureWebsite;