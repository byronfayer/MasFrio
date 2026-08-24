import { company, whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import logo from "../assets/logo-mas-frio.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__mist hero__mist--a" />
      <div className="hero__mist hero__mist--b" />
      <div className="hero__grid" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Empresa familiar de Córdoba</p>
          <h1>
            Soluciones en <span className="hero__accent">refrigeración</span> para
            hogares y empresas
          </h1>
          <p className="hero__desc">
            Instalación, reparación, mantenimiento y venta de equipos de
            refrigeración: aires acondicionados, heladeras, lavarropas, cámaras
            frigoríficas y refrigeración comercial.
          </p>

          <div className="hero__actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="whatsapp" size={18} />
              Solicitar presupuesto
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
              <Icon name="arrow" size={16} />
            </a>
          </div>

          <div className="hero__badges">
            <div className="hero__badge">
              <Icon name="home" size={17} />
              Particulares
            </div>
            <div className="hero__badge">
              <Icon name="building" size={17} />
              Empresas y comercios
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-frame">
            <img src={logo} alt={company.name} className="hero__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
