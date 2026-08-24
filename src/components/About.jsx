import { company } from "../data/siteConfig";
import logo from "../assets/logo-mas-frio.jpg";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();
  return (
    <section id="nosotros" className="section section-alt">
      <div className="container about__inner">
        <div className="about__visual reveal" ref={ref}>
          <div className="about__frame">
            <img src={logo} alt={company.name} className="about__frame-img" />
          </div>
          <div className="about__dot about__dot--a" />
          <div className="about__dot about__dot--b" />
        </div>

        <div className="about__copy">
          <p className="eyebrow">Sobre nosotros</p>
          <h2>Una empresa familiar de Córdoba, cerca tuyo</h2>
          <p>
            {company.name} es una empresa familiar dedicada al rubro de la
            refrigeración en Córdoba. Contamos con taller propio y trabajamos
            tanto con clientes particulares como con comercios y empresas,
            ofreciendo instalación, reparación y mantenimiento de equipos.
          </p>
          <p>
            La demanda cambia según la época del año — en verano se destaca el
            trabajo con aires acondicionados y heladeras, y en invierno crece
            la demanda de reparación de lavarropas. Nos adaptamos a cada
            temporada para dar respuesta a tiempo.
          </p>
          <p className="about__note">
            Empresa también conocida como "{company.alsoKnownAs}".
          </p>
        </div>
      </div>
    </section>
  );
}
