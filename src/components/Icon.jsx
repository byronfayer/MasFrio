// Set de íconos propios en SVG — línea simple, coherentes con la identidad.
// Se agregan acá nuevos íconos si hace falta en el futuro.

const paths = {
  snowflake: (
    <>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="4" y1="7" x2="20" y2="17" />
      <line x1="20" y1="7" x2="4" y2="17" />
      <path d="M12 2l-2 2M12 2l2 2M12 22l-2-2M12 22l2-2" />
      <path d="M4 7l.5 2.6M4 7l2.6-.5M20 17l-.5-2.6M20 17l-2.6.5" />
      <path d="M20 7l-.5 2.6M20 7l-2.6-.5M4 17l.5-2.6M4 17l2.6.5" />
    </>
  ),
  fridge: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="1.5" />
      <line x1="6" y1="9" x2="18" y2="9" />
      <line x1="9" y1="5" x2="9" y2="6.5" />
      <line x1="9" y1="12" x2="9" y2="13.5" />
    </>
  ),
  washer: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <circle cx="12" cy="13" r="2" />
      <line x1="7.5" y1="6" x2="9" y2="6" />
    </>
  ),
  commercial: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <rect x="9" y="13" width="6" height="8" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <line x1="9" y1="9" x2="15" y2="9" />
    </>
  ),
  chamber: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 6.5l3 3L8 19l-4 1 1-4z" />
      <path d="M13 8l3-3a3 3 0 0 1 4 4l-3 3" />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.3.7-1.4 1.3-2 1.4-.5.1-1.2.2-3.7-.8-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.3-1.7-1.3-3.2 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6l1 2.3c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l2.1 1c.2.1.4.2.5.3.1.2.1.9-.2 1.6z"
    />
  ),
  phone: (
    <path d="M7 3h2l1.5 4L8.5 8.5a12 12 0 0 0 6 6l1.5-2 4 1.5v2a2 2 0 0 1-2 2C11.6 18 5 11.4 5 3.5A2 2 0 0 1 7 3z" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 8h2V5h-2a3.5 3.5 0 0 0-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V8.7c0-.4.3-.7.5-.7z" />
  ),
  map: (
    <>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <line x1="9" y1="4" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="20" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="9" y1="7" x2="9" y2="7.01" />
      <line x1="15" y1="7" x2="15" y2="7.01" />
      <line x1="9" y1="11" x2="9" y2="11.01" />
      <line x1="15" y1="11" x2="15" y2="11.01" />
      <line x1="9" y1="15" x2="9" y2="15.01" />
      <line x1="15" y1="15" x2="15" y2="15.01" />
    </>
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.7, className = "" }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {content}
    </svg>
  );
}
