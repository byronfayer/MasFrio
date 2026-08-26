import useNovedades from "../hooks/useNovedades";
import NovedadesCarousel from "./NovedadesCarousel";
import "./NovedadesSection.css";

export default function NovedadesSection() {
  const { novedades, loading, supabaseConfigured } = useNovedades();

  return (
    <section id="novedades" className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Novedades
          </p>
          <h2>Productos destacados</h2>
          <p>Equipos disponibles para la venta, actualizados frecuentemente.</p>
        </div>

        {loading && <div className="novedades-empty">Cargando novedades…</div>}

        {!loading && novedades.length === 0 && (
          <div className="novedades-empty">
            <p>Próximamente tendremos novedades.</p>
            {!supabaseConfigured && (
              <p className="novedades-empty__hint">
                [Supabase no configurado — ver .env.example]
              </p>
            )}
          </div>
        )}

        {!loading && novedades.length > 0 && (
          <NovedadesCarousel items={novedades} />
        )}
      </div>
    </section>
  );
}
