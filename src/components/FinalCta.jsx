import { whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import "./FinalCta.css";

export default function FinalCta() {
  const ref = useReveal();
  return (
    <section className="final-cta">
      <div className="final-cta__mist" />
      <div className="container final-cta__inner reveal" ref={ref}>
        <h2>¿Necesitás reparar, instalar o mantener un equipo?</h2>
        <p>Contactanos y contanos qué necesitás — te respondemos a la brevedad.</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary final-cta__btn"
        >
          <Icon name="whatsapp" size={19} />
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
