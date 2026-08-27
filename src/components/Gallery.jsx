import { galleryPlaceholders } from "../data/siteConfig";
import useReveal from "../hooks/useReveal";
import "./Gallery.css";

// Import estático de cada foto real (Vite las resuelve y optimiza el bundle)
const images = import.meta.glob("../assets/*.jpg", { eager: true, import: "default" });
const getImage = (filename) => images[`../assets/${filename}`];

export default function Gallery() {
  return (
    <section id="trabajos" className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Nuestros trabajos
          </p>
          <h2>Instalaciones, reparaciones y equipos en acción</h2>
          <p>Fotos reales del taller y de los trabajos realizados.</p>
        </div>

        <div className="gallery-grid">
          {galleryPlaceholders.map((item, i) => {
            const ref = useReveal();
            return (
              <div
                key={item.label}
                ref={ref}
                className="gallery-item reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img src={getImage(item.image)} alt={item.label} loading="lazy" />
                <span className="gallery-item__caption">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
