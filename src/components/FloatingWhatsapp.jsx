import { whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Consultar por WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
