import { useEffect, useState } from "react";
import { company, navLinks, whatsappLink } from "../data/siteConfig";
import Icon from "./Icon";
import logo from "../assets/logo-mas-frio.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">
            <img src={logo} alt={company.name} />
          </span>
          <span className="navbar__name">{company.name}</span>
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            <Icon name="whatsapp" size={17} />
            Consultar por WhatsApp
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
