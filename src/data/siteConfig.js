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
  address: "[COMPLETAR — dirección del taller/local]",
  zone: "Córdoba Capital y alrededores",
  hours: [
    { day: "Lunes a Viernes", hours: "[COMPLETAR] hs" },
    { day: "Sábados", hours: "[COMPLETAR] hs" },
    { day: "Domingos", hours: "Cerrado" },
  ],
  instagram: "https://www.instagram.com/gl_refrigeracion_cordoba?igsh=MWd0eWhtYjZqa2ttMw==",
  facebook: "https://www.facebook.com/share/192Z3nVPYw/",
  googleMaps: "https://maps.google.com/?q=[COMPLETAR]",
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
  { label: "Taller" },
  { label: "Instalación de aire acondicionado" },
  { label: "Cámara frigorífica" },
  { label: "Mantenimiento de heladera" },
  { label: "Reparación de lavarropas" },
  { label: "Trabajo para empresa" },
];
