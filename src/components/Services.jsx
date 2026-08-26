import { services } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import servicesBg from "../assets/services-bg-placeholder.jpg";
import "./Services.css";

function ServiceCard({ service, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="service-card reveal"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="service-card__icon">
        <Icon name={service.icon} size={26} strokeWidth={1.6} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="section services-section">
      {/*
        Fondo ambiental — reemplazar servicesBg (src/assets/services-bg-placeholder.jpg)
        por una foto real del técnico trabajando. Mismo nombre de archivo = sin tocar código.
      */}
      <div
        className="services-section__bg"
        style={{ backgroundImage: `url(${servicesBg})` }}
        aria-hidden="true"
      />
      <div className="services-section__overlay" aria-hidden="true" />

      <div className="container services-section__content">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Nuestros servicios
          </p>
          <h2>Todo lo que tu equipo necesita, en un solo lugar</h2>
          <p>
            Trabajamos con los equipos que más se usan en casas, comercios y
            empresas — con soluciones para cada estación del año.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard service={service} index={i} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
