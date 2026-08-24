# Refrigeración Córdoba — Demo web corporativa

Demo frontend (React + Vite) para mostrarle a la clienta como propuesta visual.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Cómo modificar los datos reales

Todos los datos editables (WhatsApp, teléfono, dirección, horarios, redes
sociales, servicios) están centralizados en:

```
src/data/siteConfig.js
```

Buscá el texto `[COMPLETAR]` para encontrar todos los placeholders pendientes:

- `contact.whatsappNumber` — número de WhatsApp en formato internacional (ej: `5493511234567`)
- `contact.phone` — teléfono fijo/otro
- `contact.address` — dirección del taller/local
- `contact.hours` — horarios de atención
- `contact.instagram` / `contact.facebook` — enlaces a redes sociales
- `contact.googleMaps` — enlace a Google Maps (y el embed del mapa en `Contact.jsx`)

## Estructura

```
src/
  components/   → un componente por sección (Navbar, Hero, Services, etc.)
  data/          → siteConfig.js (todos los textos y datos editables)
  hooks/         → useReveal.js (animación al hacer scroll)
```

## Notas

- No incluye backend, base de datos, login ni panel administrativo (según lo pedido).
- La sección "Nuestros trabajos" usa placeholders — reemplazar por fotos reales
  del taller y los trabajos hechos (ver `galleryPlaceholders` en `siteConfig.js`
  y el componente `Gallery.jsx`).
- El embed de Google Maps queda marcado como `[COMPLETAR]` en `Contact.jsx`.
