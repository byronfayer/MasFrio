import { galleryPlaceholders } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section id="trabajos" className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Nuestros trabajos
          </p>
          <h2>Instalaciones, reparaciones y equipos en acción</h2>
          <p>
            Espacio reservado para fotos reales del taller y de los trabajos
            realizados. Por ahora se muestran como referencia visual.
          </p>
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
                <Icon name="snowflake" size={28} strokeWidth={1.4} />
                <span>{item.label}</span>
                <small>Foto próximamente</small>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
