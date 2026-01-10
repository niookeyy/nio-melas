// src/data/content.js

import heroBg from "../assets/background-hero-section.png";
import wayang from "../assets/wayang-kulit.png";
import batik from "../assets/batik.png";
import saman from "../assets/tari-saman.png";
import gamelanImg from "../assets/gamelan.png";
import gadang from "../assets/rumah-gadang.png";

import rajaAmpatImg from "../assets/raja-ampat.jpg";
import danauTobaImg from "../assets/danau-toba.jpg";
import gunungBromoImg from "../assets/gunung-bromo.jpg";
import kawahIjenImg from "../assets/kawah-ijen.jpg";
import borobudurImg from "../assets/borobudur.jpg";

// ✅ CONTEMPORARY ASSETS (for translate section)
import tenxitImg from "../assets/tenxi.jpg";
import sounhoregImg from "../assets/sound-horeg.png";
import citayemfashionweekImg from "../assets/citayem-fashion-week.jpg";

import attachedAudio from "../assets/attached.mp3";
import gamanMaduAudio from "../assets/garam-dan-madu.mp3";
import kasihAbaAbaAudio from "../assets/kasih-aba-aba.mp3";
import horegAudio from "../assets/horeg.mp3";
import horeg2Audio from "../assets/horeg-pt2.mp3";

const culinaryImg =
  "https://images.unsplash.com/photo-1541518763531-d4285b5182cc?auto=format&fit=crop&q=80&w=1400";

export const DATA_CONTENT = {
  id: {
    hero: {
      title: "IndoCulture",
      description:
        "Dari tradisi leluhur hingga tren viral Gen Z. Temukan Indonesia yang sesungguhnya.",
      cta: "Mulai Menjelajah",
      marquee:
        "SELAMAT DATANG DI INDONESIA • NIKMATI KEKAYAAN BUDAYA KITA • ",
      bg: heroBg, // ⬅️ wajib ada

    },
    ui: {
      detailBtn: "Detail Selengkapnya",
      closeBtn: "Tutup Detail",
      join: "Gabung",
      emailPlh: "Email Anda",
    },
    sections: {
      traditional: {
        title: "Budaya Tradisional",
        subtitle: "Warisan leluhur pembentuk identitas.",
        items: [
          {
            name: "Wayang Kulit",
            desc: "Seni bayangan warisan UNESCO.",
            detail:
              "Pertunjukan boneka kulit kisah Ramayana & Mahabharata.",
            image: wayang,
          },
          {
            name: "Batik",
            desc: "Seni lukis kain motif khas.",
            detail: "Setiap goresan memiliki filosofi mendalam.",
            image: batik,
          },
          {
            name: "Tari Saman",
            desc: "Tarian harmonis dari Aceh.",
            detail:
              "Mengandalkan kekompakan gerakan tangan tanpa musik.",
            image: saman,
          },
          {
            name: "Gamelan",
            desc: "Musik perkusi perunggu.",
            detail:
              "Alunan mistis yang memberikan ketenangan.",
            image: gamelanImg,
          },
          {
            name: "Rumah Gadang",
            desc: "Arsitektur Minangkabau.",
            detail:
              "Rumah adat dengan atap tanduk kerbau.",
            image: gadang,
          },
        ],
      },

      nature: {
        title: "Alam Indonesia",
        subtitle: "Surga Tropis Khatulistiwa",
        items: [
          {
            id: 1,
            name: "GUNUNG BROMO",
            region: "JAWA TIMUR",
            desc: "Lautan pasir ikonik.",
            detail:
              "Gunung aktif dengan pemandangan matahari terbit terbaik.",
            image: gunungBromoImg,
          },
          {
            id: 2,
            name: "DANAU TOBA",
            region: "SUMATERA UTARA",
            desc: "Danau vulkanik terbesar.",
            detail:
              "Terbentuk dari letusan supervolcano purba yang dahsyat.",
            image: danauTobaImg,
          },
          {
            id: 3,
            name: "RAJA AMPAT",
            region: "PAPUA BARAT",
            desc: "Surga diving dunia.",
            detail:
              "Rumah bagi biodiversitas laut tertinggi di dunia.",
            image: rajaAmpatImg,
          },
          {
            id: 4,
            name: "CANDI BOROBUDUR",
            region: "JAWA TENGAH",
            desc: "Candi Buddha terbesar.",
            detail:
              "Warisan dunia UNESCO yang megah di Magelang.",
            image: borobudurImg,
          },
          {
            id: 5,
            name: "KAWAH IJEN",
            region: "JAWA TIMUR",
            desc: "Fenomena api biru abadi.",
            detail:
              "Blue fire langka dan danau asam berwarna toska.",
            image: kawahIjenImg,
          },
        ],
      },

      contemporary: {
        title: "Budaya Kontemporer",
        subtitle: "Tren modern & viral Gen Z",
        learnMoreBtn: "Pelajari Selengkapnya",
        items: [
          {
            name: "Hipdut",
            subtitle: "Hip-Hop & Dangdut",
            desc: "Genre revolusioner yang menggabungkan energi beat modern hip-hop dengan kehangatan cengkok tradisional Indonesia.",
            color: "bg-[#a53a42]",
            bgText: "VIBE",
            image: tenxitImg,
            hasMusicPlayer: true,
            playlist: [
              {
                title: "Garam & Madu",
                artist: "Tenxi, Naykilla, & Jemsii",
                url: gamanMaduAudio,
              },
              {
                title: "Attached",
                artist: "Tenxi, Anangga, & Suisei",
                url: attachedAudio,
              },
              {
                title: "Kasih Aba-Aba",
                artist: "Tenxi, Anangga, & Suisei",
                url: kasihAbaAbaAudio,
              },
            ],
          },
          {
            name: "Sound Horeg",
            subtitle: "Adu Sound System",
            desc: "Tradisi parade audio skala besar khas Jawa Timur yang mengutamakan kekuatan bass hingga menggetarkan fisik.",
            color: "bg-[#8d6e63]",
            bgText: "BASS",
            image: sounhoregImg,
            hasMusicPlayer: true,
            playlist: [
              { title: "Horeg", artist: "Pasukan Bass", url: horegAudio },
              { title: "Horeg2", artist: "Pasukan Bass", url: horeg2Audio },
            ],
          },
          {
            name: "Citayam Fashion",
            subtitle: "Street fashion lokal",
            desc: "Gerakan akar rumput yang mengubah ruang publik menjadi landasan pacu bagi ekspresi diri anak muda tanpa batas.",
            color: "bg-[#4a4e51]",
            bgText: "STYLE",
            image: citayemfashionweekImg,
            hasMusicPlayer: false,
            playlist: [],
          },
        ],
      },

      culinary: {
        title: "Kuliner Nusantara",
        subtitle: "Cita Rasa Rempah Dunia",
        items: [
          {
            name: "Rendang",
            desc: "Masakan terenak dunia.",
            detail:
              "Daging sapi rempah Minang yang dimasak berjam-jam.",
            image: culinaryImg,
          },
          {
            name: "Nasi Goreng",
            desc: "Menu favorit nusantara.",
            detail:
              "Nasi goreng bumbu kecap manis ikonik yang mendunia.",
            image: culinaryImg,
          },
          {
            name: "Sate",
            desc: "Tusuk daging berbumbu.",
            detail:
              "Variasi Nusantara yang kaya rempah.",
            image: culinaryImg,
          },
          {
            name: "Seblak",
            desc: "Pedas favorit anak muda.",
            detail:
              "Kerupuk basah kuah kencur pedas.",
            image: culinaryImg,
          },
          {
            name: "Indomie",
            desc: "Mie instan legendaris.",
            detail:
              "Ikon kuliner modern Indonesia.",
            image: culinaryImg,
          },
        ],
      },
    },
  },

  en: {
    hero: {
      title: "IndoCulture",
      description:
        "From ancestral traditions to viral Gen Z trends. Discover the real Indonesia.",
      cta: "Start Exploring",
      marquee:
        "WELCOME TO INDONESIA • ENJOY OUR RICH CULTURE • ",
      bg: heroBg, // ⬅️ wajib ada

    },
    ui: {
      detailBtn: "View Details",
      closeBtn: "Close Details",
      join: "Join",
      emailPlh: "Your Email",
    },
    sections: {
      traditional: {
        title: "Traditional Culture",
        subtitle:
          "Ancestral heritage shaping identity.",
        items: [
          {
            name: "Wayang Kulit",
            desc: "UNESCO shadow puppet art.",
            detail:
              "Leather puppet performance telling Ramayana & Mahabharata epics.",
            image: wayang,
          },
          {
            name: "Batik",
            desc: "Signature fabric painting.",
            detail:
              "Every stroke of wax carries deep philosophy.",
            image: batik,
          },
          {
            name: "Saman Dance",
            desc: "Harmonious dance from Aceh.",
            detail:
              "Relying on hand synchronization without instruments.",
            image: saman,
          },
          {
            name: "Gamelan",
            desc: "Bronze percussion music.",
            detail:
              "Mystical tunes that provide tranquility.",
            image: gamelanImg,
          },
          {
            name: "Gadang House",
            desc: "Minangkabau architecture.",
            detail:
              "Traditional house with buffalo horn-shaped roof.",
            image: gadang,
          },
        ],
      },

      nature: {
        title: "Indonesian Nature",
        subtitle:
          "Equatorial Tropical Paradise",
        items: [
          {
            id: 1,
            name: "MOUNT BROMO",
            region: "EAST JAVA",
            desc: "Iconic sea of sand.",
            detail:
              "Active volcano with breathtaking sunrise views.",
            image: gunungBromoImg,
          },
          {
            id: 2,
            name: "LAKE TOBA",
            region: "NORTH SUMATRA",
            desc: "Largest volcanic lake.",
            detail:
              "Formed from an ancient supervolcano eruption.",
            image: danauTobaImg,
          },
          {
            id: 3,
            name: "RAJA AMPAT",
            region: "WEST PAPUA",
            desc: "World-class diving paradise.",
            detail:
              "Home to one of the richest marine biodiversities.",
            image: rajaAmpatImg,
          },
          {
            id: 4,
            name: "BOROBUDUR",
            region: "CENTRAL JAVA",
            desc: "Great Buddhist temple.",
            detail:
              "UNESCO world heritage masterpiece.",
            image: borobudurImg,
          },
          {
            id: 5,
            name: "IJEN CRATER",
            region: "EAST JAVA",
            desc: "Rare blue fire.",
            detail:
              "Blue flames and turquoise acidic crater lake.",
            image: kawahIjenImg,
          },
        ],
      },

      contemporary: {
        title: "Contemporary Culture",
        subtitle: "Modern & viral Gen Z trends",
        learnMoreBtn: "Learn More",
        items: [
          {
            name: "Hipdut",
            subtitle: "Hip-Hop & Dangdut",
            desc: "A revolutionary genre blending modern hip-hop beats with the warmth of traditional Indonesian dangdut vocals.",
            color: "bg-[#a53a42]",
            bgText: "VIBE",
            image: tenxitImg,
            hasMusicPlayer: true,
            playlist: [
              {
                title: "Garam & Madu",
                artist: "Tenxi, Naykilla, & Jemsii",
                url: gamanMaduAudio,
              },
              {
                title: "Attached",
                artist: "Tenxi, Anangga, & Suisei",
                url: attachedAudio,
              },
              {
                title: "Kasih Aba-Aba",
                artist: "Tenxi, Anangga, & Suisei",
                url: kasihAbaAbaAudio,
              },
            ],
          },
          {
            name: "Sound Horeg",
            subtitle: "Sound System Battle",
            desc: "A large-scale audio parade tradition from East Java that emphasizes powerful bass you can physically feel.",
            color: "bg-[#8d6e63]",
            bgText: "BASS",
            image: sounhoregImg,
            hasMusicPlayer: true,
            playlist: [
              { title: "Horeg", artist: "Pasukan Bass", url: horegAudio },
              { title: "Horeg2", artist: "Pasukan Bass", url: horeg2Audio },
            ],
          },
          {
            name: "Citayam Fashion",
            subtitle: "Local street fashion",
            desc: "A grassroots movement that turns public spaces into runways for young people to express themselves freely.",
            color: "bg-[#4a4e51]",
            bgText: "STYLE",
            image: citayemfashionweekImg,
            hasMusicPlayer: false,
            playlist: [],
          },
        ],
      },

      culinary: {
        title: "Archipelago Culinary",
        subtitle:
          "Taste of World Spices",
        items: [
          {
            name: "Rendang",
            desc: "World’s tastiest dish.",
            detail:
              "Minang spicy beef slow-cooked for hours to perfection.",
            image: culinaryImg,
          },
          {
            name: "Fried Rice",
            desc: "Archipelago favorite.",
            detail:
              "Iconic fried rice with sweet soy sauce known worldwide.",
            image: culinaryImg,
          },
          {
            name: "Satay",
            desc: "Skewered savory meat.",
            detail:
              "Endless regional variations.",
            image: culinaryImg,
          },
          {
            name: "Seblak",
            desc: "Spicy comfort snack.",
            detail:
              "Wet crackers in aromatic spicy broth.",
            image: culinaryImg,
          },
          {
            name: "Indomie",
            desc: "Legendary instant noodles.",
            detail:
              "A global Indonesian icon.",
            image: culinaryImg,
          },
        ],
      },
    },
  },
};
