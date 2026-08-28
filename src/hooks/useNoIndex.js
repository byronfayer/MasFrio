import { useEffect } from "react";

// Agrega <meta name="robots" content="noindex, nofollow"> mientras el
// componente está montado, y lo revierte a "index, follow" al desmontar.
// Refuerza (no reemplaza) el Disallow de robots.txt para rutas privadas.
export default function useNoIndex() {
  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]');
    const created = !tag;

    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "robots");
      document.head.appendChild(tag);
    }

    const previous = tag.getAttribute("content");
    tag.setAttribute("content", "noindex, nofollow");

    return () => {
      if (created) {
        tag.remove();
      } else {
        tag.setAttribute("content", previous ?? "index, follow");
      }
    };
  }, []);
}
