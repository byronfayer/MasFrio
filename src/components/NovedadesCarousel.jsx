import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { whatsappLink } from "../data/siteConfig";
import "./NovedadesCarousel.css";

const AUTOPLAY_MS = 5000;

export default function NovedadesCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setIndex((i + items.length) % items.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (items.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [items.length]);

  const restartAutoplay = () => {
    clearInterval(timerRef.current);
    if (items.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
  };

  const handleManual = (fn) => {
    fn();
    restartAutoplay();
  };

  const current = items[index];

  return (
    <div className="novedades-carousel">
      <div className="novedades-carousel__track">
        {items.map((item, i) => (
          <div
            key={item.id ?? i}
            className={`novedades-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="novedades-slide__media">
              <img src={item.imagen_url} alt={item.nombre} loading="lazy" />
            </div>
            <div className="novedades-slide__info">
              <h3>{item.nombre}</h3>
              <p className="novedades-slide__desc">{item.descripcion}</p>
              {item.precio != null && (
                <p className="novedades-slide__price">
                  {typeof item.precio === "number"
                    ? item.precio.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        maximumFractionDigits: 0,
                      })
                    : item.precio}
                </p>
              )}
              <a
                href={whatsappLink(item.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" size={18} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            className="novedades-arrow novedades-arrow--prev"
            onClick={() => handleManual(prev)}
            aria-label="Anterior"
          >
            <Icon name="arrow" size={18} className="novedades-arrow__icon novedades-arrow__icon--prev" />
          </button>
          <button
            className="novedades-arrow novedades-arrow--next"
            onClick={() => handleManual(next)}
            aria-label="Siguiente"
          >
            <Icon name="arrow" size={18} />
          </button>

          <div className="novedades-dots">
            {items.map((item, i) => (
              <button
                key={item.id ?? i}
                className={`novedades-dot ${i === index ? "is-active" : ""}`}
                onClick={() => handleManual(() => goTo(i))}
                aria-label={`Ver novedad ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
