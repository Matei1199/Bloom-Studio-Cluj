/**
 * Bloom Studio - Central Configuration & Content Database
 * Owner-verified pricing and business data
 */

const BLOOM_CONFIG = {
  studio: {
    name: "Bloom Studio",
    tagline: "Move Better. Feel Better. Bloom Every Day.",
    brandQuote: "Bloom Studio este locul în care vii atunci când simți nevoia să iei o pauză de la agitația de zi cu zi.",
    city: "Cluj-Napoca",
    region: "Cluj",
    country: "Romania",
    address: "Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca (la granița dintre Mărăști și Someșeni, lângă Leroy Merlin)",
    phone: "0724 486 216",
    phoneTel: "tel:+40724486216",
    whatsappNumber: "40724486216",
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
    seoKeywords: [
      "Pilates Cluj",
      "Pilates Reformer Cluj",
      "Pilates Mat Cluj",
      "Pilates Studio Cluj",
      "Masaj Cluj",
      "Masaj Relaxare Cluj",
      "Drenaj Limfatic Cluj"
    ]
  },

  newsletter: {
    enabled: true,
    title: "Rămâi aproape de Bloom",
    description: "Abonează-te la newsletter pentru a primi noutăți, oferte și informații despre studio.",
    buttonText: "Abonează-mă",
    consent: "Prin abonare, ești de acord cu politica noastră de confidențialitate. Poți renunța oricând."
  },

  // Main Studio Services
  services: [
    {
      id: "reformer",
      title: "Pilates Reformer",
      subtitle: "Grup (max. 3) • Duo • Individual",
      shortDesc: "Un antrenament complet pentru forță, mobilitate și control, pe aparate Reformer. Alege între ședințe în grupuri de maximum 3 persoane, duo sau individuale.",
      fullDesc: "Sesiunile noastre de Reformer combină aliniamentul postural cu stabilitatea abdominală profundă. Cu maxim 3 persoane pe clasă, instructorii noștri oferă ajustări individuale.",
      benefits: ["Forță și tonifiere", "Postură corectă", "Mobilitate", "Echilibru", "Control corporal", "Flexibilitate"],
      formats: ["Grup (max 3 persoane)", "Duo", "Individual"],
      duration: "50 Min",
      tag: "Recomandat",
      image: "assets/images/studio-reformer-arches.jpg"
    },
    {
      id: "mat",
      title: "Pilates Mat",
      subtitle: "Grup • Individual",
      shortDesc: "Pilates la saltea, cu accesorii, pentru un corp mai puternic și mai mobil. Lucrezi cu propria greutate și accesorii precum inelele și benzile elastice.",
      fullDesc: "Mat Pilates construiește forță de bază, control corporal și flexibilitate folosind greutatea proprie, inele de Pilates și benzi elastice.",
      benefits: ["Mobilitate", "Flexibilitate", "Control corporal", "Postură", "Forță", "Echilibru"],
      formats: ["Grup", "Individual"],
      duration: "50 Min",
      tag: "Esențial",
      image: "assets/images/studio-mat-room.jpg"
    },
    {
      id: "massage",
      title: "Servicii de Masaj",
      subtitle: "Relaxare • Limfatic • Anticelulitic • Decontracturant",
      shortDesc: "Momente de relaxare și îngrijire pentru corp, într-un spațiu liniștit și intim. Alege masajul potrivit pentru tine, de la relaxare și decontracturare până la drenaj limfatic și tratamente anticelulitice.",
      fullDesc: "Fie că îți dorești un moment de relaxare, decontractare musculară sau stimularea drenajului limfatic, te așteptăm într-un spațiu liniștit dedicat stării tale de bine.",
      benefits: ["Reducerea stresului", "Drenaj limfatic", "Decontractare musculară", "Circulație îmbunătățită", "Relaxare profundă"],
      duration: "30 - 60 Min",
      tag: "Wellness",
      image: "assets/images/studio-massage-room.jpg"
    }
  ],

  // OWNER-VERIFIED PRICING
  pricing: {
    reformerGrup: {
      label: "Pilates Reformer Trio (Grup max 3)",
      subtitle: "Maximum 3 persoane per clasă",
      hasStrikethroughDiscount: true, // STRIKETHROUGH ONLY ON REFORMER 3 PERSOANE ABONAMENTE
      sessions: [
        { count: "1 ședință", price: "140 lei" },
        { count: "4 ședințe", price: "520 lei", oldPrice: "560 lei" },
        { count: "8 ședințe", price: "960 lei", oldPrice: "1120 lei" },
        { count: "12 ședințe", price: "1320 lei", oldPrice: "1680 lei" }
      ],
      highlight: true
    },
    reformerDuo: {
      label: "Pilates Reformer Duo",
      subtitle: "2 persoane",
      hasStrikethroughDiscount: false,
      sessions: [
        { count: "1 ședință", price: "180 lei" },
        { count: "4 ședințe", price: "680 lei" },
        { count: "8 ședințe", price: "1280 lei" },
        { count: "12 ședințe", price: "1800 lei" }
      ]
    },
    reformerIndividual: {
      label: "Pilates Reformer Individual",
      subtitle: "Ședință Privată",
      hasStrikethroughDiscount: false,
      sessions: [
        { count: "1 ședință", price: "200 lei" },
        { count: "4 ședințe", price: "760 lei" },
        { count: "8 ședințe", price: "1440 lei" },
        { count: "12 ședințe", price: "1920 lei" }
      ]
    },
    matGrup: {
      label: "Pilates Mat Grup",
      subtitle: "Maximum 3 persoane",
      hasStrikethroughDiscount: false,
      sessions: [
        { count: "1 ședință", price: "90 lei" },
        { count: "4 ședințe", price: "320 lei" },
        { count: "8 ședințe", price: "560 lei" },
        { count: "12 ședințe", price: "720 lei" }
      ]
    },
    matIndividual: {
      label: "Pilates Mat Individual",
      subtitle: "Ședință Privată Mat",
      hasStrikethroughDiscount: false,
      sessions: [
        { count: "1 ședință", price: "110 lei" },
        { count: "4 ședințe", price: "420 lei" },
        { count: "8 ședințe", price: "800 lei" },
        { count: "12 ședințe", price: "1140 lei" }
      ]
    },
    studentOffer: {
      label: "Ofertă Studenți / Elevi",
      subtitle: "Pilates Reformer (*cu carnetul de elev/student)",
      hasStrikethroughDiscount: false,
      sessions: [
        { count: "1 ședință", price: "100 lei" },
        { count: "4 ședințe", price: "320 lei" }
      ]
    }
  },

  // Massage Catalog
  massageCatalog: {
    therapist: "Masaj",
    phone: "0724 486 216",
    phoneTel: "tel:+40724486216",
    introText: "Te așteptăm cu drag într-un spațiu liniștit dedicat stării tale de bine. Programările se fac la telefonul studioului sau pe WhatsApp: 0724 486 216.",
    individualServices: [
      { name: "Masaj de Relaxare", desc: "Ideal pentru reducerea stresului după o zi lungă și obositoare.", duration: "60 min", price: "150 RON" },
      { name: "Masaj Anticelulitic cu Bambus", desc: "Ajută la îmbunătăățirea circulației sangvine și la reducerea celulitei.", duration: "60 min", price: "150 RON" },
      { name: "Drenaj Limfatic Brazilian", desc: "Contribuie la detoxifierea organismului și stimularea sistemului limfatic.", duration: "60 min", price: "180 RON" },
      { name: "Masaj Pentru Decontractarea Mușchilor", desc: "Eficient pentru ameliorarea tensiunii musculare profunde și a durerilor.", duration: "40 min", price: "160 RON" },
      { name: "Masaj Facial", desc: "Masaj delicat conceput pentru a relaxa mușchii feței, a stimula circulația și a revitaliza tenul.", duration: "40 min", price: "130 RON" },
      { name: "Peeling Corporal", desc: "Exfoliază pielea în profunzime, lăsând-o catifelată, netedă și revitalizată.", duration: "30 min", price: "100 RON" }
    ],
    promoPackages: [
      { name: "Pachet Masaj de Relaxare (3 ședințe)", desc: "3 sesiuni complete de relaxare corporală (60 min/sesiune).", price: "420 RON", saving: "Economisești 30 RON" },
      { name: "Pachet Masaj Anticelulitic cu Bambus (3 ședințe)", desc: "3 sesiuni intensiv anticelulitic cu bețe de bambus (60 min/sesiune).", price: "420 RON", saving: "Economisești 30 RON" },
      { name: "Pachet Drenaj Limfatic Brazilian (3 ședințe)", desc: "3 sesiuni de detoxifiere și conturare corporală (60 min/sesiune).", price: "480 RON", saving: "Economisești 60 RON" },
      { name: "Pachet Masaj Pentru Decontractarea Mușchilor (3 ședințe)", desc: "3 sesiuni de terapie musculară profundă (40 min/sesiune).", price: "420 RON", saving: "Economisești 60 RON" },
      { name: "Pachet Peeling Corporal + Masaj", desc: "Combo special: 1 ședință peeling corporal (30 min) + 1 ședință masaj de relaxare (60 min).", price: "190 RON", saving: "Economisești 60 RON" }
    ]
  },

  // Team & Instructors
  instructors: [
    {
      name: "Eva",
      role: "Specialist Masaj & Recuperare",
      certification: "Tehnician Maseur Acreditat • Masaj Terapeutic & Limfatic",
      bio: "Te așteptăm în camera de masaj de la Bloom Studio cu tratamente de relaxare, drenaj limfatic brazilian, masaj anticelulitic cu bambus, decontractare musculară și masaj facial.",
      image: "assets/images/studio-lounge.jpg",
      social: "@bloompilatescluj",
      phoneDirect: "0724 486 216"
    },
    {
      name: "Echipa Pilates Bloom",
      role: "Instructori Certificați Reformer & Mat",
      certification: "Instructori Certificați",
      bio: "Echipa noastră de instructori este dedicată aliniamentului corect, siguranței mișcării și atenției individuale.",
      image: "assets/images/studio-reformer-arches.jpg",
      social: "@bloompilatescluj",
      phoneDirect: "0724 486 216"
    }
  ],

  testimonials: [
    {
      clientName: "Clientă Bloom Studio",
      membership: "Abonament Reformer Grup",
      quote: "Atmosfera din studio este extrem de relaxantă. După 1 lună de Reformer Pilates, durerile mele de spate au dispărut complet.",
      highlight: "Fără dureri de spate după orele de birou"
    },
    {
      clientName: "Clientă Masaj Bloom",
      membership: "Drenaj Limfatic Brazilian",
      quote: "Camera de masaj oferă un sanctuar liniștit. Masajul limfatic brazilian oferit la Bloom este de departe cel mai eficient tratament pe care l-am încercat în Cluj.",
      highlight: "Rezultate vizibile și stare de bine"
    },
    {
      clientName: "Prima Vizită Pilates",
      membership: "Ședință Reformer Individual",
      quote: "Echipa m-a ghidat cu multă răbdare. Faptul că suntem maxim 3 persoane pe clasă face o diferență uriașă.",
      highlight: "Atenție personalizată și grup restrâns"
    }
  ],

  firstVisitInfo: [
    { title: "Ce Să Porți", text: "Haine lejere, elastice, care permit mișcarea liberă. Șosetele antiderapante sunt obligatorii pe aparatul Reformer." },
    { title: "Cât Durează O Clasă", text: "Clasele de Reformer și Mat durează 50 de minute. Masajele variază între 30 min și 60 min." },
    { title: "Politica de Anulare", text: "Vă rugăm să anunțați anularea sau reprogramarea cu cel puțin 24 de ore înainte de începerea ședinței." },
    { title: "Locație & Programări", text: "Suntem situați pe Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca (la granița dintre Mărăști și Someșeni, lângă Leroy Merlin). Programările se pot face online pe site sau telefonic." }
  ],

  faqs: [
    { question: "Este doar pentru femei?", answer: "Nu, sunt bine veniți și bărbații." },
    { question: "Cum mă pot programa la masaj la Bloom Studio Cluj?", answer: "Te poți programa direct prin formularul de pe site sau ne poți contacta la numărul de telefon / WhatsApp al studioului: 0724 486 216." },
    { question: "Ce servicii de masaj sunt disponibile în studio?", answer: "Oferim Masaj de Relaxare (150 RON), Masaj Anticelulitic cu Bambus (150 RON), Drenaj Limfatic Brazilian (180 RON), Masaj de Decontractare Mușchi (160 RON), Masaj Facial (130 RON) și Peeling Corporal (100 RON), plus pachete promoționale avantajoase." },
    { question: "Pot veni la Reformer Pilates dacă nu am mai făcut niciodată?", answer: "Da! Clasele noastre sunt concepute pentru toate nivelurile. Grupele restrânse de maxim 3 persoane permit instructorului să îți ofere atenție individuală." },
    { question: "Unde este situat studioul Bloom în Cluj-Napoca?", answer: "Studioul nostru este situat pe Strada Aurel Vlaicu nr. 184, bloc C1, scara 2, parter, Cluj-Napoca (la granița dintre cartierele Mărăști și Someșeni, lângă Leroy Merlin)." },
    { question: "Câte persoane sunt într-o clasă de Reformer?", answer: "Clasele de Pilates Reformer Grup sunt limitate la maxim 3 persoane. Oferim și opțiuni Duo, Individuale și Oferte speciale pentru Studenți / Elevi." }
  ],

  blogPosts: [
    {
      id: "masaj-cluj-ghid",
      category: "Masaj",
      title: "Masaj în Cluj-Napoca: Descoperă Serviciile și Pachetele Promoționale la Bloom Studio",
      excerpt: "De la masajul de relaxare și drenajul limfatic brazilian până la masajul facial și decontractant.",
      date: "August 2026",
      readTime: "4 min lectură",
      image: "assets/images/studio-lounge.jpg",
      content: `<p>Uneori, cel mai bun lucru pe care îl poți face pentru corpul tău este să îi oferi o oră de pauză. De acum, te poți programa la masaj în cadrul studioului nostru Bloom Studio din Cluj-Napoca!</p><p>Te așteptăm într-un spațiu liniștit, dedicat stării tale de bine. Programări: <strong>0724 486 216 (Telefon / WhatsApp)</strong>.</p>`
    },
    {
      id: "reformer-pilates-cluj",
      category: "Reformer Pilates",
      title: "Reformer Pilates Cluj: De Ce Grupele de Maxim 3 Persoane Fac Diferența",
      excerpt: "Descoperă antrenamentele pe aparate la Bloom Studio. Corectează postura și întărește-ți abdomenul profund.",
      date: "August 2026",
      readTime: "5 min lectură",
      image: "assets/images/studio-reformer-arches.jpg",
      content: `<p>Antrenamentul pe Reformer Pilates la Bloom Studio Cluj combină alungirea musculară cu forța de bază. Am limitat numărul de participante la maxim 3 persoane pe clasă.</p>`
    }
  ],

  gallery: [
    { id: 1, src: "assets/images/gallery/bloom-gallery-1.jpg", category: "reformer", title: "Aparate Reformer Alpha", caption: "Sala principală de Reformer Pilates Bloom Studio Cluj" },
    { id: 2, src: "assets/images/gallery/bloom-gallery-2.jpg", category: "lounge", title: "Zona de Recepție & Relaxare", caption: "Zona de acces și lounge pentru cliente" },
    { id: 3, src: "assets/images/gallery/bloom-gallery-3.jpg", category: "mat", title: "Sala Mat Pilates", caption: "Echipamente și accesorii pentru exerciții la saltea" },
    { id: 4, src: "assets/images/gallery/bloom-gallery-4.jpg", category: "reformer", title: "Studio Reformer — Perspectivă Arcuri", caption: "Aparate profesionale Balanced Body®" },
    { id: 5, src: "assets/images/gallery/bloom-gallery-5.jpg", category: "masaj", title: "Camera Dedicată Masaj", caption: "Sanctuarul de relaxare și terapie corporală" },
    { id: 6, src: "assets/images/gallery/bloom-gallery-6.jpg", category: "detalii", title: "Arcade Scandinave & Design Cald", caption: "Lumină naturală și detalii arhitecturale" },
    { id: 7, src: "assets/images/gallery/bloom-gallery-7.jpg", category: "reformer", title: "Cadru Reformer & Aliniament Postural", caption: "Pregătit pentru ședințe individuale și de grup" },
    { id: 8, src: "assets/images/gallery/bloom-gallery-8.jpg", category: "lounge", title: "Vestiar & Confort Personal", caption: "Spațiu intim pentru schimbare și relaxare" },
    { id: 9, src: "assets/images/gallery/bloom-gallery-9.jpg", category: "masaj", title: "Tratamente Terapeutice & Drenaj", caption: "Drenaj limfatic brazilian și masaj anticelulitic" },
    { id: 10, src: "assets/images/gallery/bloom-gallery-10.jpg", category: "reformer", title: "Perspectivă Reformer Studio", caption: "Grupuri de maxim 3 persoane per clasă" },
    { id: 11, src: "assets/images/gallery/bloom-gallery-11.jpg", category: "reformer", title: "Set-up Individual Reformer", caption: "Atenție personalizată pe fiecare mișcare" },
    { id: 12, src: "assets/images/gallery/bloom-gallery-12.jpg", category: "masaj", title: "Cameră Masaj de Relaxare", caption: "Atmosferă caldă pentru eliminarea stresului" },
    { id: 13, src: "assets/images/gallery/bloom-gallery-13.jpg", category: "detalii", title: "Colț de Liniște", caption: "Pauza ta zilnică de la agitația orașului" },
    { id: 14, src: "assets/images/gallery/bloom-gallery-14.jpg", category: "mat", title: "Accesorii Mat Pilates & Benzi", caption: "Inele Pilates, benzi elastice și mingi" },
    { id: 15, src: "assets/images/gallery/bloom-gallery-15.jpg", category: "masaj", title: "Uleiuri Terapeutice & Produse Premium", caption: "Produse naturale pentru îngrijire și masaj" },
    { id: 16, src: "assets/images/gallery/bloom-gallery-16.jpg", category: "lounge", title: "Vedere Ansamblu Studio Bloom", caption: "Cluj-Napoca, Strada Aurel Vlaicu nr. 184" }
  ]
};

if (typeof window !== "undefined") {
  window.BLOOM_CONFIG = BLOOM_CONFIG;
}
