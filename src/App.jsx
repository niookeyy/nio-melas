import React, { useState, useEffect, useRef } from 'react';

// --- ICONS COMPONENT (Agar tidak perlu install lucide-react dulu) ---
const IconChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>;
const IconVolume2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
const IconVolumeX = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>;
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-6.9 1.1-6.9a6 6 0 0 1-.8-8c2.4 1.1 4.5 2.6 6 4.8a6.6 6.6 0 0 1 9.8-1.5z"/></svg>;
const IconYoutube = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;

// --- COMPONENT UTAMA ---
function App() {
    const [language, setLanguage] = useState('id');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [musicType, setMusicType] = useState('gamelan');
    const [bgColor, setBgColor] = useState('bg-slate-900');

    const traditionalRef = useRef(null);
    const natureRef = useRef(null);
    const modernRef = useRef(null);
    const culinaryRef = useRef(null);

    // DATA KONTEN
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
                    title: 'Budaya Tradisional',
                    subtitle: 'Warisan Leluhur yang Abadi',
                    items: [
                        { name: 'Wayang Kulit', desc: 'Seni bayangan warisan dunia UNESCO.', detail: 'Pertunjukan boneka kulit yang menceritakan kisah epik Ramayana dan Mahabharata.' },
                        { name: 'Batik', desc: 'Kain bermotif dengan teknik canting.', detail: 'Setiap goresan canting memiliki filosofi mendalam dari berbagai daerah di Jawa.' },
                        { name: 'Tari Saman', desc: 'Tarian "Seribu Tangan" dari Aceh.', detail: 'Mengandalkan kekompakan dan kecepatan gerakan tangan tanpa alat musik.' },
                        { name: 'Reog Ponorogo', desc: 'Topeng raksasa mistis.', detail: 'Tarian topeng dadak merak seberat 50kg yang digigit oleh penarinya.' },
                        { name: 'Rumah Gadang', desc: 'Arsitektur khas Minangkabau.', detail: 'Rumah adat dengan atap runcing menyerupai tanduk kerbau.' }
                    ]
                },
                nature: {
                    title: 'Alam Indonesia',
                    subtitle: 'Surga Tropis di Khatulistiwa',
                    items: [
                        { name: 'Raja Ampat', desc: 'Surga diving dunia di Papua.', detail: 'Rumah bagi 75% spesies karang dunia.' },
                        { name: 'Danau Toba', desc: 'Danau vulkanik terbesar.', detail: 'Danau kawah raksasa dengan Pulau Samosir di tengahnya.' },
                        { name: 'Bromo', desc: 'Gunung berapi ikonik.', detail: 'Terkenal dengan pemandangan matahari terbit dan kawah berasapnya.' },
                        { name: 'Pulau Komodo', desc: 'Habitat naga purba.', detail: 'Satu-satunya tempat di dunia di mana Komodo hidup di alam liar.' },
                        { name: 'Kawah Ijen', desc: 'Api biru (Blue Fire) abadi.', detail: 'Fenomena api biru yang hanya ada dua di dunia.' }
                    ]
                },
                modern: {
                    title: 'Budaya Kontemporer (Gen Z)',
                    subtitle: 'Dinamis, Viral, dan Kreatif',
                    items: [
                        { name: 'Hipdut', desc: 'Hip-Hop Dangdut Fusion.', detail: 'Genre viral yang dipelopori oleh TENXI lewat lagu "Garam & Madu". Menggabungkan beat hiphop modern dengan cengkok dangdut.' },
                        { name: 'Citayam Fashion Week', desc: 'Street Fashion SCBD.', detail: 'Fenomena 2022 dimana remaja pinggiran Jakarta mengubah zebra cross menjadi catwalk.' },
                        { name: 'Sound Horeg', desc: 'Battle Sound System.', detail: 'Budaya adu sound system raksasa di Jawa Timur dengan bass menggelegar.' },
                        { name: 'Drag Race Indo', desc: 'Seni Drag Queen Lokal.', detail: 'Adaptasi budaya drag yang semakin populer, menampilkan kreativitas makeup dan kostum.' },
                        { name: 'Koplo Remix', desc: 'Anthem Party Lokal.', detail: 'Evolusi dangdut koplo yang dicampur dengan musik elektronik kencang.' }
                    ]
                },
                culinary: {
                    title: 'Kuliner Nusantara',
                    subtitle: 'Cita Rasa Rempah Dunia',
                    items: [
                        { name: 'Rendang', desc: 'Makanan terenak di dunia.', detail: 'Daging sapi yang dimasak lama dengan santan dan rempah-rempah Minang.' },
                        { name: 'Nasi Goreng', desc: 'Menu favorit sejuta umat.', detail: 'Nasi yang digoreng dengan kecap manis, bumbu, dan pelengkap.' },
                        { name: 'Sate Ayam', desc: 'Tusukan daging berbumbu.', detail: 'Potongan ayam bakar disiram bumbu kacang yang gurih.' },
                        { name: 'Seblak', desc: 'Pedas favorit kaum hawa.', detail: 'Kerupuk basah dengan kuah kencur pedas khas Bandung.' },
                        { name: 'Indomie', desc: 'Mie instan legendaris.', detail: 'Identitas kuliner modern Indonesia yang mendunia.' }
                    ]
                }
            }
        },
        en: {
            hero: {
                title: 'IndoCulture',
                subtitle: 'Discover the Wealth of Indonesian Culture',
                description: 'From ancient traditions to viral Gen Z trends. Discover the real Indonesia.',
                cta: 'Start Exploring'
            },
            sections: {
                traditional: { title: 'Traditional Culture', subtitle: 'Timeless Heritage', items: [] },
                nature: { title: 'Nature of Indonesia', subtitle: 'Tropical Paradise', items: [] },
                modern: { title: 'Contemporary Culture', subtitle: 'Dynamic & Viral', items: [] },
                culinary: { title: 'Archipelago Culinary', subtitle: 'Taste of World Spices', items: [] }
            }
        }
    };

    // Gunakan konten berdasarkan bahasa yang dipilih, fallback ke ID jika item kosong di EN
    const currentContent = language === 'id' ? content.id : {
        ...content.en,
        sections: content.id.sections // Menggunakan item ID sebagai placeholder untuk EN
    };

    // LOGIKA SCROLL TRANSISI WARNA
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            if (scrollPosition < traditionalRef.current?.offsetTop) {
                setBgColor('bg-slate-900');
            } else if (scrollPosition < natureRef.current?.offsetTop) {
                setBgColor('bg-amber-900');
            } else if (scrollPosition < modernRef.current?.offsetTop) {
                setBgColor('bg-emerald-800');
            } else if (scrollPosition < culinaryRef.current?.offsetTop) {
                setBgColor('bg-fuchsia-900');
            } else {
                setBgColor('bg-orange-800');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // KOMPONEN CARD SCROLLABLE
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
            <section ref={reference} className="min-h-screen flex flex-col justify-center py-20 px-4 relative z-10 transition-all duration-700">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white opacity-90">{sectionData.title}</h2>
                    <p className="text-xl text-gray-200 mb-10 font-light">{sectionData.subtitle}</p>

                    <div className="relative group">
                        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all hidden md:block border border-white/20">
                            <IconChevronLeft />
                        </button>

                        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {sectionData.items.map((item, idx) => (
                                <div key={idx} onClick={() => { setModalContent(item); setShowModal(true); }}
                                    className="flex-shrink-0 w-72 h-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer hover:scale-105 hover:bg-white/20 transition-all duration-300 snap-center flex flex-col justify-end group/card overflow-hidden relative shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                        <p className="text-sm text-gray-300 line-clamp-3 mb-4">{item.desc}</p>
                                        <span className="text-xs text-yellow-400 font-semibold tracking-wider uppercase border border-yellow-400 px-3 py-1 rounded-full">Lihat Detail</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all hidden md:block border border-white/20">
                            <IconChevronRight />
                        </button>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${bgColor} font-sans text-white overflow-x-hidden selection:bg-pink-500 selection:text-white`}>
            
            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent">
                <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-xs shadow-lg animate-pulse">ID</div>
                    IndoCulture
                </div>
                
                <div className="flex gap-4 items-center">
                    <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 backdrop-blur-md border border-white/10">
                        <button onClick={() => setMusicType(musicType === 'gamelan' ? 'horeg' : 'gamelan')} className="text-xs font-bold text-yellow-400 uppercase mr-2 hover:text-yellow-300 transition">
                            {musicType === 'gamelan' ? '🎵 Gamelan' : '🔊 Horeg'}
                        </button>
                        <button onClick={() => setIsMusicPlaying(!isMusicPlaying)} className="hover:text-red-400 transition">
                            {isMusicPlaying ? <IconVolume2 /> : <IconVolumeX />}
                        </button>
                    </div>
                    <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')} className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition border border-white/10 flex items-center gap-2 px-3">
                        <IconGlobe /> <span className="text-xs font-bold">{language.toUpperCase()}</span>
                    </button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="h-screen flex items-center justify-center relative px-6 text-center overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-40 animate-pulse-slow delay-700"></div>

                <div className="max-w-4xl relative z-10 mt-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                        {currentContent.hero.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                        {currentContent.hero.description}
                    </p>
                    <button 
                        onClick={() => traditionalRef.current.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-100 transition transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        {currentContent.hero.cta}
                    </button>
                </div>
            </header>

            {/* SECTIONS */}
            <ScrollableSection sectionData={currentContent.sections.traditional} reference={traditionalRef} />
            <ScrollableSection sectionData={currentContent.sections.nature} reference={natureRef} />
            <ScrollableSection sectionData={currentContent.sections.modern} reference={modernRef} />
            <ScrollableSection sectionData={currentContent.sections.culinary} reference={culinaryRef} />

            {/* FOOTER */}
            <footer className="bg-black/80 backdrop-blur-lg py-12 text-center border-t border-white/10 relative z-10">
                <h2 className="text-2xl font-bold mb-6">IndoCulture</h2>
                <div className="flex justify-center gap-8 mb-8">
                    <a href="#" className="hover:text-pink-500 transition hover:scale-110 transform"><IconInstagram /></a>
                    <a href="#" className="hover:text-blue-400 transition hover:scale-110 transform"><IconTwitter /></a>
                    <a href="#" className="hover:text-red-600 transition hover:scale-110 transform"><IconYoutube /></a>
                </div>
                <div className="max-w-md mx-auto px-6 mb-8">
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email Anda" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/50 transition text-sm" />
                        <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition text-sm">Join</button>
                    </div>
                </div>
                <p className="text-gray-500 text-xs">© 2024 IndoCulture Project. Dibuat dengan Cinta untuk Indonesia 🇮🇩</p>
            </footer>

            {/* MODAL */}
            {showModal && modalContent && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    <div className="bg-gray-900 border border-white/10 p-8 rounded-3xl max-w-lg w-full relative z-10 shadow-2xl transform transition-all scale-100 animate-[fadeIn_0.3s_ease-out]">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 rounded-full p-1"><IconX /></button>
                        <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">{modalContent.name}</h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded mb-6"></div>
                        <p className="text-xl text-white mb-4 font-light">{modalContent.desc}</p>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p className="text-gray-300 text-sm leading-relaxed">💡 <strong>Fun Fact:</strong> <br/>{modalContent.detail}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;