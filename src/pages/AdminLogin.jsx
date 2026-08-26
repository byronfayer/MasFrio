import { useState } from "react";
import { supabase, supabaseConfigured } from "../lib/supabaseClient";
import "./Admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!supabaseConfigured) {
      setError("Supabase no está configurado (ver .env.example).");
      return;
    }

    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (authError) {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <h1>Panel de administración</h1>
        <p>Ingresá con tu usuario de Supabase para gestionar las novedades.</p>

        {error && <div className="admin-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="admin-field">
            <label htmlFor="admin-password">Contraseña</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button className="btn btn-primary admin-submit" disabled={loading}>
            {loading ? "Ingresando…" : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
