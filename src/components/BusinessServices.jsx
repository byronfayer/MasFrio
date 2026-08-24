import { whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import "./BusinessServices.css";

const points = [
  "Instalación de equipos en comercios, empresas y obras.",
  "Mantenimiento preventivo y correctivo programado.",
  "Reparación de varios equipos en una misma visita.",
  "Asesoramiento según el rubro y la actividad del negocio.",
];

export default function BusinessServices() {
  const ref = useReveal();
  return (
    <section className="section section-alt business">
      <div className="container business__inner reveal" ref={ref}>
        <div className="business__panel">
          <div className="business__panel-icon">
            <Icon name="building" size={30} strokeWidth={1.5} />
          </div>
          <p className="eyebrow">Para empresas y comercios</p>
          <h2>Soluciones para empresas y comercios</h2>
          <p className="business__desc">
            Además de atender a particulares, trabajamos con empresas,
            comercios y obras: instalación, mantenimiento y reparación de
            equipos de refrigeración, incluyendo trabajos que involucran
            varios equipos en un mismo lugar.
          </p>

          <ul className="business__list">
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" size={16} strokeWidth={2.4} />
                {point}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink("un servicio para mi empresa o comercio")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Icon name="whatsapp" size={18} />
            Consultar servicio para empresas
          </a>
        </div>
      </div>
    </section>
  );
}
