import { contact, whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Contacto
          </p>
          <h2>Hablemos de tu equipo</h2>
          <p>
            Escribinos por WhatsApp o llamanos. Te respondemos y te asesoramos
            sin compromiso.
          </p>
        </div>

        <div className="contact-grid reveal" ref={ref}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card--highlight"
          >
            <Icon name="whatsapp" size={24} />
            <div>
              <h3>WhatsApp</h3>
              <p>{contact.whatsappDisplay}</p>
            </div>
          </a>

          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-card">
            <Icon name="phone" size={22} />
            <div>
              <h3>Teléfono</h3>
              <p>{contact.phone}</p>
            </div>
          </a>

          <a
            href={contact.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Icon name="pin" size={22} />
            <div>
              <h3>Ubicación</h3>
              <p>{contact.address}</p>
              <span className="contact-card__sub">{contact.zone}</span>
            </div>
          </a>

          <div className="contact-card contact-card--static">
            <Icon name="clock" size={22} />
            <div>
              <h3>Horarios</h3>
              {contact.hours.map((h) => (
                <p key={h.day} className="contact-card__hours">
                  <span>{h.day}</span> <span>{h.hours}</span>
                </p>
              ))}
            </div>
          </div>

          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Icon name="instagram" size={22} />
            <div>
              <h3>Instagram</h3>
              <p>@gl_refrigeracion_cordoba</p>
            </div>
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Icon name="facebook" size={22} />
            <div>
              <h3>Facebook</h3>
              <p>Refrigeración Córdoba</p>
            </div>
          </a>
        </div>

        <div className="contact-map-embed">
          <iframe
            title="Ubicación en Google Maps"
            src="https://maps.google.com/maps?q=Los%20Cha%C3%B1ares%205220%2C%20C%C3%B3rdoba&z=16&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
