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

import tenxitImg from "../assets/tenxi.jpg";
import sounhoregImg from "../assets/sound-horeg.png";
import citayemfashionweekImg from "../assets/citayem-fashion-week.jpg";

import attachedAudio from "../assets/attached.mp3";
import gamanMaduAudio from "../assets/garam-dan-madu.mp3";
import kasihAbaAbaAudio from "../assets/kasih-aba-aba.mp3";
import horegAudio from "../assets/horeg.mp3";
import horeg2Audio from "../assets/horeg-pt2.mp3";

export const DATA_CONTENT = {
  id: {
    hero: {
      title: "IndoCulture",
      description: "Dari tradisi leluhur hingga tren viral Gen Z. Temukan Indonesia yang sesungguhnya.",
      cta: "Mulai Menjelajah",
      marquee: "SELAMAT DATANG DI INDONESIA • NIKMATI KEKAYAAN BUDAYA KITA • ",
      bg: heroBg,
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
            detail: "Wayang Kulit adalah pertunjukan teater bayangan legendaris yang membawakan kisah epik Ramayana dan Mahabharata. Pertunjukan ini dipimpin oleh seorang Dalang yang mengendalikan tokoh-tokoh dari kulit kerbau. \n\nSeni ini bukan sekadar hiburan melainkan media dakwah dan pendidikan moral bagi masyarakat Jawa. Setiap karakter memiliki filosofi mendalam tentang kebajikan dan keburukan dalam hidup manusia.",
            image: wayang,
          },
          {
            name: "Batik",
            desc: "Seni lukis kain motif khas.",
            detail: "Batik merupakan teknik menggambar motif pada kain menggunakan malam panas dan alat bernama canting. Setiap motif yang tercipta merepresentasikan identitas sosial dan doa-doa bagi pemakainya. \n\nKini Batik telah diakui dunia sebagai warisan budaya tak benda oleh UNESCO. Kain ini tetap relevan digunakan mulai dari acara sakral hingga gaya busana modern sehari-hari.",
            image: batik,
          },
          {
            name: "Tari Saman",
            desc: "Tarian harmonis dari Aceh.",
            detail: "Tari Saman dikenal dengan julukan tarian seribu tangan yang berasal dari dataran tinggi Gayo, Aceh. Tarian ini menuntut kekompakan ritme yang sangat cepat antara gerakan tangan, badan, dan kepala. \n\nKeunikan utamanya terletak pada penggunaan suara tepukan tangan dan dada sebagai musik pengiring tunggal. Gerakan harmonis ini melambangkan nilai kebersamaan, kesopanan, dan pendidikan bagi masyarakat setempat.",
            image: saman,
          },
          {
            name: "Gamelan",
            desc: "Musik perkusi perunggu.",
            detail: "Gamelan adalah ansambel musik yang didominasi oleh alat perkusi berbahan perunggu seperti gong dan kenong. Alunan suaranya menciptakan harmoni mistis yang memberikan ketenangan batin bagi pendengarnya. \n\nAlat musik ini sering mengiringi pertunjukan seni wayang, tarian tradisional, hingga upacara sakral di kerajaan. Keberadaannya membuktikan kejeniusan bangsa Indonesia dalam mengolah logam menjadi instrumen bernada indah.",
            image: gamelanImg,
          },
          {
            name: "Rumah Gadang",
            desc: "Arsitektur Minangkabau.",
            detail: "Rumah Gadang adalah rumah adat Sumatera Barat yang memiliki bentuk atap meruncing seperti tanduk kerbau. Arsitekturnya dirancang tahan gempa dengan pilar-pilar kayu yang tidak tertanam langsung di tanah. \n\nBangunan ini berfungsi sebagai tempat tinggal keluarga besar dan simbol sistem kekerabatan matrilineal. Setiap ukiran pada dinding kayu rumah ini memiliki makna tentang kearifan alam dan kehidupan.",
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
            detail: "Gunung Bromo menawarkan pemandangan kawah aktif yang megah di tengah lautan pasir yang luas. Pengunjung biasanya mendaki di pagi buta demi menyaksikan keajaiban matahari terbit dari Puncak Penanjakan. \n\nKawasan ini juga menjadi tempat suci bagi masyarakat suku Tengger untuk melakukan upacara Yadnya Kasada. Keindahan alam dan nilai sakralnya menjadikan Bromo destinasi wisata yang tidak terlupakan.",
            image: gunungBromoImg,
          },
          {
            id: 2,
            name: "DANAU TOBA",
            region: "SUMATERA UTARA",
            desc: "Danau vulkanik terbesar.",
            detail: "Danau Toba terbentuk dari letusan dahsyat gunung api purba ribuan tahun silam yang mengubah sejarah dunia. Di tengah danau ini terdapat Pulau Samosir yang menjadi pusat budaya suku Batak yang autentik. \n\nUdara sejuk dan hamparan air biru menjadikannya tempat ideal untuk melepas penat dari keramaian kota. Pengunjung dapat menikmati keindahan alam sambil mempelajari tradisi unik masyarakat lokal di pinggiran danau.",
            image: danauTobaImg,
          },
          {
            id: 3,
            name: "RAJA AMPAT",
            region: "PAPUA BARAT",
            desc: "Surga diving dunia.",
            detail: "Raja Ampat dikenal sebagai jantung segitiga karang dunia dengan kekayaan spesies laut paling melimpah. Gugusan pulau karang berwarna hijau di atas air laut biru jernih memberikan pemandangan yang sangat eksotis. \n\nDestinasi ini adalah impian bagi para penyelam yang ingin melihat keanekaragaman terumbu karang secara langsung. Kelestarian alamnya sangat dijaga ketat demi melindungi ribuan jenis ikan dan biota laut lainnya.",
            image: rajaAmpatImg,
          },
          {
            id: 4,
            name: "CANDI BOROBUDUR",
            region: "JAWA TENGAH",
            desc: "Candi Buddha terbesar.",
            detail: "Candi Borobudur adalah monumen Buddha terbesar di dunia yang dibangun dari jutaan blok batu tanpa semen. Dindingnya dihiasi ribuan panel relief yang menceritakan perjalanan hidup manusia menuju pencerahan. \n\nKeagungan arsitekturnya mencerminkan kemajuan ilmu pengetahuan dan seni bangsa Indonesia di masa lalu. Berdiri di puncaknya saat fajar memberikan pengalaman spiritual yang luar biasa bagi setiap pengunjung.",
            image: borobudurImg,
          },
          {
            id: 5,
            name: "KAWAH IJEN",
            region: "JAWA TIMUR",
            desc: "Fenomena api biru abadi.",
            detail: "Kawah Ijen sangat populer karena fenomena 'Blue Fire' atau api biru yang muncul secara alami di kawahnya. Api biru ini hanya bisa terlihat dengan jelas pada tengah malam hingga menjelang subuh. \n\nSelain itu, pengunjung dapat melihat danau asam berwarna toska yang memukau di puncak kawah. Aktivitas penambangan belerang tradisional di sini juga memberikan gambaran perjuangan hidup masyarakat lokal.",
            image: kawahIjenImg,
          },
        ],
      },
      contemporary: {
        items: [
          {
            name: "Hipdut",
            subtitle: "Hip-Hop & Dangdut",
            desc: "Genre revolusioner yang menggabungkan beat modern dengan cengkok tradisional.",
            detail: "Hipdut adalah eksperimen musik berani yang menggabungkan ritem hip-hop global dengan vokal khas dangdut Indonesia. Perpaduan ini menciptakan energi musik yang modern namun tetap terasa sangat akrab di telinga masyarakat lokal. \n\nGenre ini semakin populer di kalangan generasi muda karena liriknya yang jujur dan seringkali humoris. Alunan bass yang berat dipadukan dengan cengkok tradisional menjadikannya identitas musik baru yang unik.",
            image: tenxitImg,
            color: "bg-[#a53a42]",
            bgText: "VIBE",
            hasMusicPlayer: true,
            playlist: [
              { title: "Garam & Madu", artist: "Tenxi, Naykilla, & Jemsii", url: gamanMaduAudio },
              { title: "Attached", artist: "Tenxi, Anangga, & Suisei", url: attachedAudio },
              { title: "Kasih Aba-Aba", artist: "Tenxi, Anangga, & Suisei", url: kasihAbaAbaAudio },
            ],
          },
          {
            name: "Sound Horeg",
            subtitle: "Adu Sound System",
            desc: "Parade audio skala besar khas Jawa Timur yang mengutamakan kekuatan getaran bass.",
            detail: "Sound Horeg merupakan tradisi karnaval audio dari Jawa Timur yang menggunakan puluhan pengeras suara raksasa di atas truk. Kekuatan getaran bass-nya mampu menggetarkan kaca bangunan dan memberikan sensasi fisik bagi para penontonnya. \n\nFenomena ini telah berkembang menjadi ajang adu gengsi kreatifitas teknologi audio antar komunitas lokal. Parade ini selalu berhasil menarik ribuan orang untuk berkumpul dan merayakan kegembiraan bersama di jalanan.",
            image: sounhoregImg,
            color: "bg-[#8d6e63]",
            bgText: "BASS",
            hasMusicPlayer: true,
            playlist: [
              { title: "Horeg", artist: "Pasukan Bass", url: horegAudio },
              { title: "Horeg2", artist: "Pasukan Bass", url: horeg2Audio },
            ],
          },
          {
            name: "Citayam Fashion",
            subtitle: "Street Fashion Lokal",
            desc: "Gerakan akar rumput yang mengubah ruang publik menjadi landasan pacu ekspresi diri.",
            detail: "Citayam Fashion Week bermula dari aksi anak muda pinggiran kota yang berani tampil nyentrik di jalanan pusat Jakarta. Mereka mengubah trotoar biasa menjadi panggung mode dadakan yang menarik perhatian media internasional. \n\nGerakan ini membuktikan bahwa selera busana tinggi tidak selalu harus datang dari kalangan elit. Fenomena ini menjadi simbol kebebasan berekspresi dan inklusivitas sosial bagi generasi muda Indonesia.",
            image: citayemfashionweekImg,
            color: "bg-[#4a4e51]",
            bgText: "STYLE",
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
            desc: "Mahakarya kuliner Minangkabau dari olahan daging sapi berbumbu rempah melimpah.",
            detail: "Rendang adalah mahakarya kuliner dari Sumatera Barat yang dimasak perlahan menggunakan santan dan bumbu rempah melimpah. Proses memasak yang memakan waktu lama mengubah tekstur daging menjadi sangat lembut dan berbumbu hitam pekat. \n\nHidangan ini sering dinobatkan sebagai salah satu makanan terenak di dunia versi survei internasional. Kelezatannya terletak pada keseimbangan rasa pedas, gurih, dan aroma karamel santan yang unik.",
            image: "rendang.png",
          },
          {
            name: "Ayam Betutu",
            desc: "Hidangan ikonik Bali yang kaya akan bumbu base genep dengan aroma pedas kuat.",
            detail: "Ayam Betutu diproses dengan bumbu tradisional Bali yang dikenal sebagai Base Genep yang kaya akan rempah aromatik. Daging ayam biasanya dibungkus daun pisang atau pelepah pinang lalu dipanggang dalam waktu yang cukup lama. \n\nTeknik memasak ini membuat bumbu meresap sempurna hingga ke tulang dan memberikan tekstur daging yang empuk. Sajian ini merupakan ikon kuliner pedas yang wajib dicicipi bagi setiap pengunjung di pulau dewata.",
            image: "ayam-betutu.png",
          },
          {
            name: "Seblak",
            desc: "Jajanan khas Bandung dengan kuah kencur pedas yang populer di kalangan anak muda.",
            detail: "Seblak adalah kuliner kontemporer khas Bandung yang terbuat dari kerupuk basah yang dimasak dengan kuah pedas aroma kencur. Sensasi pedas dan hangat dari bumbu kencur inilah yang menjadi daya tarik utama bagi para pecintanya. \n\nKini seblak disajikan dengan berbagai variasi topping mulai dari makaroni, bakso, hingga ceker ayam. Makanan ini mencerminkan dinamika kreativitas jajanan jalanan Indonesia yang terus berinovasi mengikuti selera zaman.",
            image: "seblak.png",
          },
          {
            name: "Sate",
            desc: "Potongan daging bakar dengan bumbu kacang kental yang memiliki aroma asap menggoda.",
            detail: "Sate adalah hidangan daging tusuk yang dipanggang di atas bara api tradisional hingga mengeluarkan aroma asap yang sangat harum. Setiap daerah di Indonesia memiliki versi sate sendiri dengan bumbu kacang atau bumbu kecap yang berbeda. \n\nSajian ini melambangkan keberagaman budaya kuliner Indonesia dalam satu hidangan yang sederhana namun nikmat. Tekstur daging yang juicy dipadukan dengan bumbu gurih selalu menjadi pilihan favorit keluarga.",
            image: "sate.png",
          },
          {
            name: "Indomie",
            desc: "Mie instan kebanggaan Indonesia yang telah mendunia dengan rasa bumbu yang ikonik.",
            detail: "Indomie bukan sekadar mie instan biasa melainkan sudah menjadi bagian dari identitas budaya populer masyarakat Indonesia. Bumbu khasnya menawarkan perpaduan rasa yang sangat kuat dan seringkali membuat ketagihan bagi siapa saja. \n\nProduk ini telah berhasil menembus pasar internasional dan diakui sebagai salah satu mie instan terbaik di bumi. Kepraktisannya menjadikannya solusi makanan favorit bagi jutaan orang di berbagai penjuru dunia.",
            image: "indomie.png",
          },
          {
            name: "Rawon",
            desc: "Sup daging khas Jawa Timur dengan kuah hitam pekat yang berasal dari buah kluwek.",
            detail: "Rawon dikenal karena kuah hitamnya yang sangat unik yang berasal dari buah kluwek pilihan. Daging sapi di dalamnya dimasak hingga empuk dalam kaldu yang gurih dan memiliki aroma rempah yang sangat dalam. \n\nBiasanya rawon disajikan bersama nasi hangat, tauge pendek, telur asin, dan sambal terasi yang pedas. Cita rasa yang kaya dan bersahaja menjadikannya sup legendaris yang selalu dirindukan dari tanah Jawa Timur.",
            image: "rawon.png",
          },
        ],
      },
    },
  },

  en: {
    hero: {
      title: "IndoCulture",
      description: "From ancestral traditions to viral Gen Z trends. Discover the real Indonesia.",
      cta: "Start Exploring",
      marquee: "WELCOME TO INDONESIA • ENJOY OUR RICH CULTURE • ",
      bg: heroBg,
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
        subtitle: "Ancestral heritage shaping identity.",
        items: [
          {
            name: "Wayang Kulit",
            desc: "UNESCO shadow puppet art.",
            detail: "Wayang Kulit is a legendary shadow puppet theater that tells the epic stories of Ramayana and Mahabharata. This performance is led by a Dalang who controls figures made from water buffalo leather. \n\nThis art is not just entertainment but a medium for moral education and spiritual messages for the Javanese people. Every character holds a deep philosophy regarding virtue and vice in human life.",
            image: wayang,
          },
          {
            name: "Batik",
            desc: "Signature fabric painting.",
            detail: "Batik is a traditional technique of creating motifs on fabric using hot wax and a tool called a canting. Every pattern created represents a social identity and carries prayers for the wearer. \n\nBatik has been recognized globally as an intangible cultural heritage by UNESCO. This fabric remains relevant today, used in sacred ceremonies as well as modern daily fashion.",
            image: batik,
          },
          {
            name: "Saman Dance",
            desc: "Harmonious dance from Aceh.",
            detail: "The Saman Dance is often called the 'dance of a thousand hands' and originates from the Gayo highlands in Aceh. This dance demands high-speed synchronization of hands, bodies, and heads among the performers. \n\nThe primary uniqueness lies in the use of hand clapping and chest hitting as the sole accompaniment music. These harmonious movements symbolize values of togetherness, politeness, and education in local society.",
            image: saman,
          },
          {
            name: "Gamelan",
            desc: "Bronze percussion music.",
            detail: "Gamelan is a musical ensemble dominated by bronze percussion instruments such as gongs and kenongs. Its sounds create a mystical harmony that provides a sense of tranquility to its listeners. \n\nThis musical set often accompanies shadow puppet shows, traditional dances, and royal sacred ceremonies. Its existence proves the ingenuity of the Indonesian people in turning metal into beautiful melodic instruments.",
            image: gamelanImg,
          },
          {
            name: "Gadang House",
            desc: "Minangkabau architecture.",
            detail: "The Gadang House is a West Sumatran traditional home featuring a sharp roof shaped like buffalo horns. Its architecture is designed to be earthquake-resistant using wooden pillars that do not enter the ground directly. \n\nThis building serves as a home for large families and a symbol of the matrilineal kinship system. Every carving on the wooden walls carries a meaning about natural wisdom and life.",
            image: gadang,
          },
        ],
      },
      nature: {
        title: "Indonesian Nature",
        subtitle: "Equatorial Tropical Paradise",
        items: [
          {
            id: 1,
            name: "MOUNT BROMO",
            region: "EAST JAVA",
            desc: "Iconic sea of sand.",
            detail: "Mount Bromo offers a majestic view of an active crater in the middle of a vast desert of sand. Visitors usually hike in the early hours to witness the miracle of the sunrise from Penanjakan Peak. \n\nThis area is also a sacred place for the Tengger people to perform the Yadnya Kasada ceremony. Its natural beauty and sacred values make Bromo an unforgettable travel destination.",
            image: gunungBromoImg,
          },
          {
            id: 2,
            name: "LAKE TOBA",
            region: "NORTH SUMATRA",
            desc: "Largest volcanic lake.",
            detail: "Lake Toba was formed from a massive ancient supervolcanic eruption thousands of years ago that changed world history. In the middle of this lake lies Samosir Island, the heart of authentic Batak culture. \n\nThe cool air and vast blue water make it an ideal place to escape the hustle of city life. Visitors can enjoy natural beauty while learning about the unique local traditions on the shores of the lake.",
            image: danauTobaImg,
          },
          {
            id: 3,
            name: "RAJA AMPAT",
            region: "WEST PAPUA",
            desc: "World-class diving paradise.",
            detail: "Raja Ampat is known as the heart of the world's coral triangle with the most abundant marine species wealth. The clusters of green coral islands above crystal-clear blue seawater provide an exotic view. \n\nThis destination is a dream for divers who want to see coral reef biodiversity firsthand. Its environmental conservation is strictly guarded to protect thousands of types of fish and other marine life.",
            image: rajaAmpatImg,
          },
          {
            id: 4,
            name: "BOROBUDUR",
            region: "CENTRAL JAVA",
            desc: "Great Buddhist temple.",
            detail: "Borobudur Temple is the world's largest Buddhist monument built from millions of stone blocks without cement. Its walls are decorated with thousands of relief panels telling the human life journey toward enlightenment. \n\nThe grandeur of its architecture reflects the advanced science and art of the Indonesian nation in the past. Standing at its peak during dawn provides an extraordinary spiritual experience for every visitor.",
            image: borobudurImg,
          },
          {
            id: 5,
            name: "IJEN CRATER",
            region: "EAST JAVA",
            desc: "Rare blue fire.",
            detail: "Ijen Crater is highly popular for the 'Blue Fire' phenomenon that naturally appears inside its crater. This blue fire can only be clearly seen from midnight until just before dawn. \n\nAdditionally, visitors can see the stunning turquoise acidic lake at the top of the crater. The traditional sulfur mining activities here also provide a glimpse into the life struggles of the local people.",
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
            detail: "Hipdut is a bold musical experiment that combines global hip-hop rhythms with Indonesia's signature dangdut vocals. This fusion creates a modern musical energy that feels very familiar to the ears of the local society. \n\nThis genre is increasingly popular among the younger generation because of its honest and often humorous lyrics. The heavy bass lines paired with traditional vocal ornaments make it a unique new musical identity.",
            color: "bg-[#a53a42]",
            bgText: "VIBE",
            image: tenxitImg,
            hasMusicPlayer: true,
            playlist: [
              { title: "Garam & Madu", artist: "Tenxi, Naykilla, & Jemsii", url: gamanMaduAudio },
              { title: "Attached", artist: "Tenxi, Anangga, & Suisei", url: attachedAudio },
              { title: "Kasih Aba-Aba", artist: "Tenxi, Anangga, & Suisei", url: kasihAbaAbaAudio },
            ],
          },
          {
            name: "Sound Horeg",
            subtitle: "Sound System Battle",
            desc: "A large-scale audio parade tradition from East Java that emphasizes powerful bass you can physically feel.",
            detail: "Sound Horeg is an audio carnival tradition from East Java using dozens of giant speakers on top of trucks. The power of its bass vibrations can vibrate building windows and provide a physical sensation for the audience. \n\nThis phenomenon has evolved into a creative pride competition of audio technology between local communities. This parade always succeeds in attracting thousands of people to gather and celebrate joy together on the streets.",
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
            detail: "Citayam Fashion Week began with the actions of suburban youth who dared to appear eccentric on the streets of central Jakarta. They successfully transformed ordinary sidewalks into impromptu fashion stages that attracted international media attention. \n\nThis movement proves that high fashion tastes do not always have to come from elite circles. This phenomenon has become a symbol of freedom of expression and social inclusivity for the younger generation of Indonesia.",
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
            desc: "A Minangkabau masterpiece of slow-cooked beef with rich traditional spices.",
            detail: "Rendang is a culinary masterpiece from West Sumatra slow-cooked using coconut milk and an abundance of spices. The long cooking process transforms the meat texture into something very soft with a deep black seasoning. \n\nThis dish is often crowned as one of the most delicious foods in the world by international surveys. Its deliciousness lies in the balance of spicy, savory flavors and a unique caramelized coconut aroma.",
            image: "rendang.png",
          },
          {
            name: "Ayam Betutu",
            desc: "An iconic Balinese dish rich in 'base genep' spices with a strong spicy aroma.",
            detail: "Ayam Betutu is processed with Balinese traditional seasoning known as Base Genep, which is rich in aromatic spices. The chicken is usually wrapped in banana leaves or areca palm husks and then grilled for a long time. \n\nThis cooking technique allows the spices to penetrate perfectly to the bone and provides a tender meat texture. This dish is a spicy culinary icon that every visitor to the island of the gods must taste.",
            image: "ayam-betutu.png",
          },
          {
            name: "Seblak",
            desc: "A signature Bandung street food with spicy kencur broth popular among the youth.",
            detail: "Seblak is a contemporary culinary dish from Bandung made from wet crackers cooked in a spicy broth flavored with aromatic ginger (kencur). The spicy and warm sensation from the kencur seasoning is the main attraction for its fans. \n\nNow seblak is served with various topping variations ranging from macaroni and meatballs to chicken feet. This food reflects the dynamic creativity of Indonesian street snacks that innovate to follow modern tastes.",
            image: "seblak.png",
          },
          {
            name: "Sate",
            desc: "Grilled meat skewers with thick peanut sauce and a tempting smoky aroma.",
            detail: "Sate is a skewered meat dish grilled over traditional charcoal embers until it emits a very fragrant smoky aroma. Every region in Indonesia has its own version of sate with different peanut or soy sauces. \n\nThis dish symbolizes the diversity of Indonesian culinary culture in one simple yet delicious meal. The juicy meat texture combined with savory seasonings is always a favorite choice for families.",
            image: "sate.png",
          },
          {
            name: "Indomie",
            desc: "Indonesia's pride instant noodles that have gone global with iconic seasoning flavors.",
            detail: "Indomie is not just an ordinary instant noodle but has become part of the popular cultural identity of Indonesian society. Its signature seasoning offers a very strong flavor profile that is often addictive for anyone. \n\nThis product has successfully penetrated international markets and is recognized as one of the best instant noodles on earth. Its practicality makes it a favorite food solution for millions of people around the globe.",
            image: "indomie.png",
          },
          {
            name: "Rawon",
            desc: "A legendary East Javanese beef soup with deep black broth made from kluwek nuts.",
            detail: "Rawon is known for its highly unique black broth which comes from selected kluwek fruits. The beef inside is cooked until tender in a savory broth that has a very deep earthy spice aroma. \n\nRawon is usually served with warm rice, short bean sprouts, salted egg, and spicy shrimp paste chili. The rich and humble flavor profile makes it a legendary soup that is always missed from the land of East Java.",
            image: "rawon.png",
          },
        ],
      },
    },
  },
};