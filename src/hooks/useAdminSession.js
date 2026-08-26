import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "../lib/supabaseClient";

// Sesión de Supabase Auth. El admin se loguea con un usuario creado
// manualmente en el dashboard de Supabase (Authentication > Users).
// No se implementa registro público: es la única forma de crear admins.
export default function useAdminSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { session, loading, supabaseConfigured };
}
