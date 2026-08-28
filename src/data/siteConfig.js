// ============================================================
// CONFIGURACIÓN DEL SITIO — Editá acá todos los datos reales.
// Todo lo marcado [COMPLETAR] es un placeholder para reemplazar.
// ============================================================

export const company = {
  name: "Refrigeración Más Frío",
  alsoKnownAs: "Refrigeración Córdoba",
  tagline: "Soluciones en refrigeración para hogares y empresas",
};

export const contact = {
  whatsappNumber: "5493515093520",
  whatsappDisplay: "+54 9 351 509-3520",
  phone: "351 509-3520",
  address: "Los Chañares 5220, Barrio Los Sauces, Córdoba",
  zone: "Córdoba Capital y alrededores",
  hours: [
    { day: "Lunes a Viernes", hours: "8 a 18 hs" },
    { day: "Sábados", hours: "9 a 14 hs" },
    { day: "Domingos", hours: "Cerrado" },
  ],
  instagram: "https://www.instagram.com/gl_refrigeracion_cordoba?igsh=MWd0eWhtYjZqa2ttMw==",
  facebook: "https://www.facebook.com/share/192Z3nVPYw/",
  googleMaps: "https://www.google.com/maps/place/REFRIGERACION+CORDOBA+%2BFRIO/@-31.4605992,-64.0991212,17z/data=!4m6!3m5!1s0x9432bdaf050590b1:0xd99f3b1c90c739f2!8m2!3d-31.4606724!4d-64.098059!16s%2Fg%2F11nv9tqxx3?hl=es-ES",
  email: "[COMPLETAR]@refrigeracioncordoba.com",
};

// Mensaje prearmado que se abre en WhatsApp
export const whatsappMessage = (context = "") =>
  `Hola! Vi la web de ${company.name} y quería hacer una consulta${
    context ? ` sobre ${context}` : ""
  }.`;

export const whatsappLink = (context = "") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage(context)
  )}`;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Novedades", href: "#novedades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    icon: "snowflake",
    title: "Aire acondicionado",
    description:
      "Instalación, reparación y mantenimiento de equipos de aire acondicionado para el hogar y comercios.",
  },
  {
    icon: "fridge",
    title: "Heladeras",
    description:
      "Reparación, mantenimiento y venta de heladeras. Diagnóstico y solución de fallas.",
  },
  {
    icon: "washer",
    title: "Lavarropas",
    description:
      "Reparación y venta de lavarropas, con especial demanda en la temporada de invierno.",
  },
  {
    icon: "commercial",
    title: "Refrigeración comercial",
    description:
      "Equipos de refrigeración para comercios, con soluciones a medida según el rubro.",
  },
  {
    icon: "chamber",
    title: "Cámaras frigoríficas",
    description:
      "Instalación y mantenimiento de cámaras frigoríficas, ideales para carnicerías y comercios de rubro alimenticio.",
  },
  {
    icon: "tools",
    title: "Instalaciones y mantenimiento",
    description:
      "Instalación de equipos y planes de mantenimiento preventivo y correctivo para que no tengas sorpresas.",
  },
];

export const whyUs = [
  {
    title: "Atención personalizada",
    description:
      "Empresa familiar: te escuchamos y te asesoramos según lo que necesitás, sin vueltas.",
  },
  {
    title: "Trabajo para hogares y empresas",
    description:
      "Atendemos tanto a particulares como a comercios y empresas, adaptándonos a cada tipo de trabajo.",
  },
  {
    title: "Servicio confiable",
    description:
      "Nos ocupamos de que el equipo quede funcionando correctamente, con seriedad en cada visita.",
  },
  {
    title: "Presupuestos y asesoramiento",
    description:
      "Te asesoramos antes de decidir: reparar, mantener o comprar un equipo nuevo.",
  },
];

// Galería de trabajos — reemplazar por fotos reales del taller y trabajos realizados
export const galleryPlaceholders = [
  { label: "Taller", image: "taller.jpg" },
  { label: "Instalación de aire acondicionado", image: "instalacion-aire.jpg" },
  { label: "Cámara frigorífica", image: "camara-frigorifica.jpg" },
  { label: "Mantenimiento de heladera", image: "mantenimiento-heladera.jpg" },
  { label: "Reparación de lavarropas", image: "reparacion-lavarropas.jpg" },
  { label: "Trabajo para empresa", image: "servicio-empresas.jpg" },
];