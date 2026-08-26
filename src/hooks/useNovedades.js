import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "../lib/supabaseClient";

// Trae las novedades activas, ordenadas por fecha de creación.
// Si Supabase no está configurado o falla, devuelve lista vacía sin romper la UI.
export default function useNovedades() {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function fetchNovedades() {
      if (!supabaseConfigured) {
        if (active) {
          setLoading(false);
        }
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("novedades")
        .select("*")
        .eq("activo", true)
        .order("created_at", { ascending: false });

      if (!active) return;

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setNovedades(data || []);
      }
      setLoading(false);
    }

    fetchNovedades();
    return () => {
      active = false;
    };
  }, []);

  return { novedades, loading, error, supabaseConfigured };
}
