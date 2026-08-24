import { company, contact, navLinks } from "../data/siteConfig";
import Icon from "./Icon";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <Icon name="snowflake" size={18} strokeWidth={2} />
          </div>
          <div>
            <p className="footer__name">{company.name}</p>
            <p className="footer__tag">Refrigeración para hogares y empresas</p>
          </div>
        </div>

        <nav className="footer__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Icon name="instagram" size={18} />
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Icon name="facebook" size={18} />
          </a>
          <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Icon name="whatsapp" size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</span>
        <span>{contact.zone}</span>
      </div>
    </footer>
  );
}
