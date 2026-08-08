/**
 * Bloom Studio - Central Configuration & Content Database
 * Updated for Bloom Studio (Strada Aurel Vlaicu nr. 184, Cluj-Napoca)
 */

const BLOOM_CONFIG = {
  studio: {
    name: "Bloom Studio",
    tagline: "Move Better. Feel Better. Bloom Every Day.",
    city: "Cluj-Napoca",
    region: "Cluj",
    country: "Romania",
    // Official Business Information
    address: "Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca",
    phone: "0724 486 216",
    phoneTel: "tel:+40724486216",
    phoneDisplay: "0724 486 216",
    email: "contact@bloompilatescluj.ro",
    instagramHandle: "@bloompilatescluj",
    instagramUrl: "https://www.instagram.com/bloompilatescluj/",
    hours: {
      weekdays: "07:30 - 21:00",
      saturday: "09:00 - 15:00",
      sunday: "La cerere / Ședințe private"
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.123!2d23.6300!3d46.7785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c3a2a67e8a9%3A0x0!2zU3RyYWRhIEF1cmVsIFZsYWljdSAxODQsIENsdWotTmFwb2Nh!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro",
    // Target SEO Keywords
    seoKeywords: [
      "Pilates Cluj", 
      "Pilates Reformer Cluj", 
      "Pilates Studio Cluj", 
      "Masaj Cluj", 
      "Masaj Relaxare Cluj", 
      "Drenaj Limfatic Cluj", 
      "Masaj Anticelulitic Cluj"
    ]
  },

  // 6-Month Price Retention Rule
  priceLockRule: {
    enabled: true,
    title: "Preț blocat timp de 6 luni",
    description: "Dacă îți faci abonamentul în prima lună, beneficiezi de același preț pentru următoarele 6 luni."
  },

  // Main Studio Services (Pilates & Massage Overview)
  services: [
    {
      id: "reformer",
      title: "Pilates Reformer Cluj",
      subtitle: "Echipament Allegro 2 • Max 6 Persoane",
      shortDesc: "Antrenament pe aparate Reformer de ultimă generație pentru alungirea și tonifierea musculaturii fără impact asupra articulațiilor.",
      fullDesc: "Sesiunile noastre de Reformer din Cluj-Napoca combină aliniamentul postural cu stabilitatea abdominală profundă. Cu maxim 6 persoane pe clasă, instructorii noștri oferă ajustări individuale pentru rezultate optime.",
      features: [
        "Maxim 6 participante per clasă",
        "Aparate Balanced Body Allegro 2",
        "Corectarea posturii și realinierea coloanei",
        "Antrenament fără șocuri articulare"
      ],
      duration: "50 Min",
      tag: "Recomandat",
      image: "assets/images/studio-reformer-arches.jpg"
    },
    {
      id: "mat-flow",
      title: "Pilates Mat & Flow",
      subtitle: "Control Abdominal • Mobilitate & Tonifiere",
      shortDesc: "Secvențe fluide la saltea cu accesorii de rezistență pentru dezvoltarea forței funcționale și a flexibilității.",
      fullDesc: "Mat Pilates construiește forță de bază, control corporal și flexibilitate folosind greutatea proprie, inele de Pilates și benzi elastice. Ideal pentru decongestionarea spatelui după orele la birou.",
      features: [
        "Grupuri restrânse",
        "Focus pe respirație și stabilitate pelviană",
        "Decompresia coloanei vertebrale"
      ],
      duration: "50 Min",
      tag: "Esențial",
      image: "assets/images/studio-mat-room.jpg"
    },
    {
      id: "massage-full-menu",
      title: "Servicii de Masaj (Eva)",
      subtitle: "Relaxare • Anticelulitic • Limfatic • Decontractant",
      shortDesc: "Cameră special amenajată dedicată stării tale de bine. Masaje individuale și pachete promoționale realizate de colega noastră Eva.",
      fullDesc: "Fie că îți dorești un moment de relaxare, decontractare musculară sau stimularea drenajului limfatic, colega noastră Eva te așteaptă într-un spațiu liniștit și primitor la Bloom Studio.",
      features: [
        "Masaj de Relaxare (60 min) - 150 RON",
        "Masaj Anticelulitic cu Bambus (60 min) - 150 RON",
        "Drenaj Limfatic Brazilian (60 min) - 180 RON",
        "Masaj Decontractare Mușchi (40 min) - 160 RON",
        "Masaj Facial (40 min) - 130 RON",
        "Peeling Corporal (30 min) - 100 RON"
      ],
      duration: "30 - 60 Min",
      tag: "Colecția Masaj",
      image: "assets/images/studio-lounge.jpg"
    }
  ],

  // Full Catalog of Massage Treatments & Promotional Packages
  massageCatalog: {
    therapist: "Eva",
    phone: "0744 229 230",
    phoneTel: "tel:+40744229230",
    introText: "Colega noastră, Eva (0744 229 230), te așteaptă cu drag într-un spațiu liniștit dedicat stării tale de bine.",
    individualServices: [
      {
        name: "Masaj de Relaxare",
        desc: "Ideal pentru reducerea stresului după o zi lungă și obositoare.",
        duration: "60 min",
        price: "150 RON"
      },
      {
        name: "Masaj Anticelulitic cu Bambus",
        desc: "Ajută la îmbunătățirea circulației sangvine și la reducerea celulitei.",
        duration: "60 min",
        price: "150 RON"
      },
      {
        name: "Drenaj Limfatic Brazilian",
        desc: "Contribuie la detoxifierea organismului și stimularea sistemului limfatic.",
        duration: "60 min",
        price: "180 RON"
      },
      {
        name: "Masaj Pentru Decontractarea Mușchilor",
        desc: "Eficient pentru ameliorarea tensiunii musculare profunde și a durerilor.",
        duration: "40 min",
        price: "160 RON"
      },
      {
        name: "Masaj Facial",
        desc: "Masaj delicat conceput pentru a relaxa mușchii feței, a stimula circulația și a revitaliza tenul cu uleiuri esențiale.",
        duration: "40 min",
        price: "130 RON"
      },
      {
        name: "Peeling Corporal",
        desc: "Exfoliază pielea în profunzime, lăsând-o catifelată, netedă și revitalizată.",
        duration: "30 min",
        price: "100 RON"
      }
    ],
    promoPackages: [
      {
        name: "Pachet Masaj de Relaxare (3 ședințe)",
        desc: "3 sesiuni complete de relaxare corporală (60 min/sesiune).",
        price: "420 RON",
        saving: "Economisești 30 RON"
      },
      {
        name: "Pachet Masaj Anticelulitic cu Bambus (3 ședințe)",
        desc: "3 sesiuni intensiv anticelulitic cu bețe de bambus (60 min/sesiune).",
        price: "420 RON",
        saving: "Economisești 30 RON"
      },
      {
        name: "Pachet Drenaj Limfatic Brazilian (3 ședințe)",
        desc: "3 sesiuni de detoxifiere și conturare corporală (60 min/sesiune).",
        price: "480 RON",
        saving: "Economisești 60 RON"
      },
      {
        name: "Pachet Masaj Pentru Decontractarea Mușchilor (3 ședințe)",
        desc: "3 sesiuni de terapie musculară profundă (40 min/sesiune).",
        price: "420 RON",
        saving: "Economisești 60 RON"
      },
      {
        name: "Pachet Peeling Corporal + Masaj",
        desc: "Combo special: 1 ședință peeling corporal (30 min) + 1 ședință masaj de relaxare (60 min).",
        price: "190 RON",
        saving: "Economisești 60 RON"
      }
    ]
  },

  // Pilates Class Passes & Memberships
  pricing: [
    {
      id: "trial",
      name: "Ședință Încercare Reformer",
      subtitle: "Prima vizită la Bloom Studio Cluj",
      price: "100 RON",
      period: "Single Session",
      featured: false,
      badge: "Prima Vizită",
      features: [
        "1 Clasă Reformer (50 min)",
        "Grup restrâns (max 6)",
        "Recomandări posturale inițiale",
        "Valabilitate 14 zile"
      ],
      buttonText: "Programează Încercare",
      actionType: "book",
      planCode: "TRIAL_PASS"
    },
    {
      id: "pass-4",
      name: "Abonament 4 Ședințe",
      subtitle: "Ritm flexibil de mișcare",
      price: "360 RON",
      period: "Valabil 30 Zile",
      featured: false,
      badge: null,
      features: [
        "4 Ședințe Reformer sau Mat",
        "Maxim 6 participante per clasă",
        "Rezervare online facilă",
        "Acces la toți instructorii"
      ],
      buttonText: "Alege Abonamentul",
      actionType: "book",
      planCode: "PASS_4"
    },
    {
      id: "pass-8",
      name: "Abonament 8 Ședințe",
      subtitle: "Frecvență optimă 2x pe săptămână",
      price: "640 RON",
      period: "Valabil 45 Zile",
      featured: true,
      badge: "Cel Mai Popular",
      features: [
        "8 Ședințe Reformer sau Mat",
        "Maxim 6 participante per clasă",
        "Prioritate la rezervarea locurilor",
        "10% Discount la Masaj (Eva)",
        "Anulare flexibilă cu 24h înainte"
      ],
      buttonText: "Alege 8 Ședințe",
      actionType: "book",
      planCode: "PASS_8"
    },
    {
      id: "pass-12",
      name: "Abonament 12 Ședințe",
      subtitle: "Rezultate maxime & tonifiere",
      price: "880 RON",
      period: "Valabil 60 Zile",
      featured: false,
      badge: "Cea Mai Bună Valoare",
      features: [
        "12 Ședințe Reformer sau Mat",
        "Evaluare periodică a progresului",
        "Prioritate la clasele de weekend",
        "15% Discount la Serviciile de Masaj",
        "1 Guest Pass cadou pentru o prietenă"
      ],
      buttonText: "Alege 12 Ședințe",
      actionType: "book",
      planCode: "PASS_12"
    }
  ],

  // Team & Instructors / Therapists
  instructors: [
    {
      name: "Eva",
      role: "Specialist Terapii prin Masaj & Recuperare",
      certification: "Tehnician Maseur Acreditat • Masaj Terapeutic & Limfatic",
      bio: "Eva te așteaptă în camera de masaj de la Bloom Studio cu tratamente de relaxare, drenaj limfatic brazilian, masaj anticelulitic cu bambus, decontractare musculară și masaj facial.",
      image: "assets/images/studio-lounge.jpg",
      social: "@bloompilatescluj",
      phoneDirect: "0744 229 230"
    },
    {
      name: "Echipa Pilates Bloom",
      role: "Instructori Certificați Reformer & Mat",
      certification: "Acreditați Balanced Body® & Posture Specialists",
      bio: "Echipa noastră de instructori este dedicată aliniamentului corect, siguranței mișcării și atenției individuale în grupele restrânse de maxim 6 persoane.",
      image: "assets/images/studio-reformer-arches.jpg",
      social: "@bloompilatescluj",
      phoneDirect: "0724 486 216"
    }
  ],

  // Authentic Testimonial Markers
  testimonials: [
    {
      clientName: "Clientă Bloom Studio",
      membership: "Membru Abonament 8 Ședințe",
      quote: "Atmosfera din studio este extrem de relaxantă. După 1 lună de Reformer Pilates și masajul decontractant de la Eva, durerile mele de spate au dispărut complet.",
      highlight: "Fără dureri de spate după orele de birou"
    },
    {
      clientName: "Clientă Masaj Bloom",
      membership: "Pachet Drenaj Limfatic Brazilian",
      quote: "Camera de masaj oferă un sanctuar liniștit. Masajul limfatic brazilian oferit de Eva este de departe cel mai eficient tratament pe care l-am încercat în Cluj.",
      highlight: "Rezultate vizibile și stare de bine"
    },
    {
      clientName: "Prima Vizită Pilates",
      membership: "Ședință Încercare Reformer",
      quote: "Echipa m-a ghidat cu multă răbdare. Faptul că suntem maxim 6 persoane pe clasă face o diferență uriașă în corectitudinea exercițiilor.",
      highlight: "Atenție personalizată și grup restrâns"
    }
  ],

  // Orientation Guide
  firstVisitInfo: [
    {
      title: "Ce Să Porți",
      text: "Haine lejere, elastice, care permit mișcarea liberă. Șosetele antiderapante sunt obligatorii pe aparatul Reformer pentru igienă și siguranță."
    },
    {
      title: "Cât Durează O Clasă",
      text: "Clasele de Reformer și Mat durează 50 de minute. Masajele variază între 30 min (Peeling), 40 min (Decontractant / Facial) și 60 min (Relaxare / Limfatic / Anticelulitic)."
    },
    {
      title: "Politica de Anulare",
      text: "Vă rugăm să anunțați anularea sau reprogramarea cu cel puțin 24 de ore înainte de începerea ședinței."
    },
    {
      title: "Locație & Programări",
      text: "Suntem situați pe Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca. Programările se pot face online pe site sau telefonic la 0724 486 216."
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Cum mă pot programa la masaj la Bloom Studio Cluj?",
      answer: "Te poți programa direct prin formularul de pe site sau o poți contacta pe colega noastră, Eva, la numărul de telefon / WhatsApp: 0744 229 230."
    },
    {
      question: "Ce servicii de masaj sunt disponibile în studio?",
      answer: "Oferim Masaj de Relaxare (150 RON), Masaj Anticelulitic cu Bambus (150 RON), Drenaj Limfatic Brazilian (180 RON), Masaj de Decontractare Mușchi (160 RON), Masaj Facial (130 RON) și Peeling Corporal (100 RON), plus pachete promoționale avantajoase."
    },
    {
      question: "Pot veni la Reformer Pilates dacă nu am mai făcut niciodată?",
      answer: "Da! Clasele noastre sunt concepute pentru toate nivelurile. Grupele restrânse de maxim 6 persoane permit instructorului să îți ofere atenție individuală și adaptări ale exercițiilor."
    },
    {
      question: "Unde este situat studioul Bloom în Cluj-Napoca?",
      answer: "Studioul nostru este situat pe Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca, într-o zonă ușor accesibilă."
    }
  ],

  // Local SEO Blog Posts
  blogPosts: [
    {
      id: "masaj-cluj-ghid",
      category: "Masaj & Terapie",
      title: "Masaj în Cluj-Napoca: Descoperă Serviciile și Pachetele Promoționale la Bloom Studio",
      excerpt: "De la masajul de relaxare și drenajul limfatic brazilian până la masajul facial și decontractant cu Eva. Află beneficiile pentru corpul tău.",
      date: "August 2026",
      readTime: "4 min lectură",
      image: "assets/images/studio-lounge.jpg",
      content: `
        <p>Uneori, cel mai bun lucru pe care îl poți face pentru corpul tău este să îi oferi o oră de pauză. De acum, te poți programa la masaj în cadrul studioului nostru Bloom Studio din Cluj-Napoca!</p>
        <p>Colega noastră, <strong>Eva (0744 229 230)</strong>, te așteaptă într-un spațiu liniștit, dedicat stării tale de bine. Iată lista completă a serviciilor disponibile:</p>
        <ul>
          <li><strong>Masaj de Relaxare (60 min - 150 RON):</strong> Ideal pentru reducerea stresului după o zi lungă.</li>
          <li><strong>Masaj Anticelulitic cu Bambus (60 min - 150 RON):</strong> Îmbunătățește circulația și reduce celulita.</li>
          <li><strong>Drenaj Limfatic Brazilian (60 min - 180 RON):</strong> Detoxifică organismul și stimulează sistemul limfatic.</li>
          <li><strong>Masaj pentru Decontractarea Mușchilor (40 min - 160 RON):</strong> Eficient pentru tensiuni musculare și dureri de spate.</li>
          <li><strong>Masaj Facial (40 min - 130 RON):</strong> Relaxează mușchii feței și revitalizează tenul cu uleiuri esențiale.</li>
          <li><strong>Peeling Corporal (30 min - 100 RON):</strong> Exfoliază pielea, lăsând-o catifelată și radiantă.</li>
        </ul>
        <h3>Pachete Promoționale Avantajoase</h3>
        <p>Pentru rezultate de durată, profită de pachetele promoționale cu 3 ședințe (de la 420 RON) sau de pachetul combo Peeling Corporal + Masaj de Relaxare la doar 190 RON!</p>
      `
    },
    {
      id: "reformer-pilates-cluj",
      category: "Reformer Pilates",
      title: "Reformer Pilates Cluj: De Ce Grupele de Maxim 6 Persoane Fac Diferența",
      excerpt: "Descoperă antrenamentele pe aparate Allegro 2 la Bloom Studio. Corectează postura și întărește-ți abdomenul profund.",
      date: "August 2026",
      readTime: "5 min lectură",
      image: "assets/images/studio-reformer-arches.jpg",
      content: `
        <p>Antrenamentul pe Reformer Pilates la Bloom Studio Cluj combină alungirea musculară cu forța de bază. În spațiul nostru de pe Strada Aurel Vlaicu nr. 184, am limitat numărul de participante la maxim 6 persoane pe clasă pentru ca fiecare exercițiu să fie executat cu precizie maximă.</p>
        <p>Îmbină orele de Reformer cu o sesiune de masaj decontractant pentru refacere musculară completă!</p>
      `
    }
  ]
};

if (typeof window !== "undefined") {
  window.BLOOM_CONFIG = BLOOM_CONFIG;
}
