import { supabase, supabaseConfigured } from "../lib/supabaseClient";
import useAdminSession from "../hooks/useAdminSession";
import AdminLogin from "./AdminLogin";
import AdminNovedades from "./AdminNovedades";
import "./Admin.css";

export default function AdminPage() {
  const { session, loading, supabaseConfigured: configured } = useAdminSession();

  if (!configured) {
    return (
      <div className="admin-login">
        <div className="admin-login__card">
          <h1>Panel de administración</h1>
          <p>Supabase no está configurado todavía. Completá las variables en .env (ver .env.example).</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="admin-login">Cargando…</div>;
  }

  if (!session) {
    return <AdminLogin />;
  }

  return (
    <div className="admin">
      <header className="admin__header">
        <div className="admin__header-inner">
          <div className="admin__title">
            Panel de administración
            <span>{session.user.email}</span>
          </div>
          <button className="admin__logout" onClick={() => supabase.auth.signOut()}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className="admin__content">
        <AdminNovedades />
      </div>
    </div>
  );
}
