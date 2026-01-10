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
  title: "Kuliner",
  subtitle: "Cita rasa warisan Nusantara yang mendunia",
  items: [
    {
      name: "Rendang",
      desc: "Mahakarya kuliner Minangkabau berupa olahan daging sapi yang dimasak perlahan dengan santan dan rempah pilihan hingga meresap sempurna ke serat daging.",
      detail: "Rendang bukan sekadar makanan, melainkan simbol budaya Minangkabau. Proses memasaknya yang memakan waktu berjam-jam hingga kuah santan mengering menjadi bumbu karamel hitam adalah kunci dari kelezatannya yang diakui dunia sebagai salah satu makanan terenak.",
      image: "rendang.png"
    },
    {
      name: "Ayam Betutu",
      desc: "Hidangan ikonik Bali yang kaya akan bumbu 'base genep', dimasak dengan teknik pengasapan lama hingga daging menjadi sangat empuk dan pedas aromatik.",
      detail: "Ayam Betutu merupakan kuliner tradisional Bali yang diproses dengan bumbu rempah lengkap. Tekstur dagingnya yang sangat lembut dan rasa pedas yang meresap hingga ke tulang menjadikannya sajian wajib bagi para pecinta kuliner pedas Nusantara.",
      image: "ayam-betutu.png"
    },
    {
      name: "Seblak",
      desc: "Jajanan khas Bandung yang memadukan kerupuk basah dengan kuah kencur pedas membara, menciptakan sensasi gurih yang digemari generasi muda.",
      detail: "Populer sebagai 'street food' favorit, Seblak menawarkan tekstur kenyal dari kerupuk yang direbus dan dipadukan dengan aroma kencur yang kuat. Kini hadir dengan berbagai topping seperti bakso, ceker, dan sosis.",
      image: "seblak.png"
    },
    {
      name: "Sate",
      desc: "Potongan daging yang dipanggang di atas bara api tradisional, disajikan dengan siraman bumbu kacang kental yang manis-gurih dan aroma asap yang khas.",
      detail: "Sate mencerminkan keberagaman Indonesia melalui berbagai variannya, mulai dari Sate Madura dengan bumbu kacang hingga Sate Maranggi. Aroma bakaran arang memberikan karakter rasa yang tidak bisa ditemukan pada teknik memasak lainnya.",
      image: "sate.png"
    },
    {
      name: "Indomie",
      desc: "Mie instan kebanggaan Indonesia yang telah mendunia, dikenal karena kelezatan bumbu aslinya yang praktis namun menawarkan rasa yang tak terkalahkan.",
      detail: "Lebih dari sekadar mie instan, Indomie telah menjadi ikon budaya populer Indonesia. Rasa 'Mie Goreng'-nya yang khas telah diekspor ke puluhan negara dan menjadi favorit lintas bangsa karena keseimbangan rasa gurih dan aromanya.",
      image: "indomie.png"
    },
    {
      name: "Rawon",
      desc: "Sup daging legendaris khas Jawa Timur dengan kuah hitam pekat dari kluwek, memberikan cita rasa unik, dalam, dan gurih tiada banding.",
      detail: "Warna hitam unik dari Rawon berasal dari buah kluwek. Disajikan dengan tauge pendek, telur asin, dan sambal terasi, hidangan ini menawarkan profil rasa yang kaya, earthy (membumi), dan sangat melegakan di lidah.",
      image: "rawon.png"
    }
  ]
}
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
  title: "Culinary",
  subtitle: "A world-renowned heritage of Indonesian flavors",
  items: [
    {
      name: "Rendang",
      desc: "A Minangkabau culinary masterpiece consisting of beef slow-cooked in coconut milk and rich spices until perfectly absorbed into every fiber.",
      detail: "More than just a dish, Rendang is a symbol of West Sumatran culture. The cooking process takes hours until the coconut milk thickens into a dark, caramelized spice paste—the secret behind its title as one of the world's most delicious foods.",
      image: "rendang.png"
    },
    {
      name: "Ayam Betutu",
      desc: "An iconic Balinese delicacy rich in 'base genep' spices, slow-cooked using traditional smoking techniques until the meat is tender and aromatically spicy.",
      detail: "Ayam Betutu is a staple of Balinese traditional cuisine. Its incredibly soft texture and deep spice penetration, reaching even the bones, make it a must-try for lovers of authentic Indonesian spicy food.",
      image: "ayam-betutu.png"
    },
    {
      name: "Seblak",
      desc: "A signature Bandung street food blending chewy wet crackers with a fiery kencur (aromatic ginger) broth, creating a savory sensation loved by the youth.",
      detail: "Popular as a favorite local street food, Seblak offers a unique chewy texture from boiled crackers combined with a sharp, refreshing herbal aroma. It is now served with various toppings like meatballs, chicken feet, and sausages.",
      image: "seblak.png"
    },
    {
      name: "Sate",
      desc: "Skewered meats grilled over traditional charcoal embers, served with a generous pour of thick, sweet-savory peanut sauce and a signature smoky aroma.",
      detail: "Sate reflects Indonesia's diversity through its many variants, from Madura's peanut sauce sate to Maranggi's marinated sate. The charcoal grilling process provides a depth of flavor that cannot be replicated by any other cooking technique.",
      image: "sate.png"
    },
    {
      name: "Indomie",
      desc: "The pride of Indonesia that has gone global, renowned for the unbeatable deliciousness of its authentic seasonings that offer a world-class taste.",
      detail: "More than just instant noodles, Indomie has become an Indonesian pop-culture icon. Its signature 'Mi Goreng' flavor is exported to dozens of countries and is a global favorite due to its perfect balance of savory notes and aroma.",
      image: "indomie.png"
    },
    {
      name: "Rawon",
      desc: "A legendary beef soup from East Java with a deep black broth made from kluwek nuts, offering a unique, earthy, and unparalleled savory flavor.",
      detail: "Rawon’s unique black color comes from the kluwek nut. Typically served with short bean sprouts, salted egg, and shrimp paste chili, this dish offers a rich, deep flavor profile that is both exotic and comforting.",
      image: "rawon.png"
    }
  ]
}
    },
  },
};
