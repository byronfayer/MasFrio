import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Icon from "../components/Icon";
import NovedadForm from "./NovedadForm";

export default function AdminNovedades() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null); // null = cerrado, {} = nuevo, {...} = editar
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from("novedades")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) setError(fetchError.message);
    else setItems(data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (form) => {
    setSaving(true);
    setError("");

    const payload = {
      nombre: form.nombre,
      descripcion: form.descripcion,
      precio: form.precio,
      imagen_url: form.imagen_url,
      activo: form.activo,
    };

    const result = form.id
      ? await supabase.from("novedades").update(payload).eq("id", form.id)
      : await supabase.from("novedades").insert(payload);

    setSaving(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    setEditing(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta novedad?")) return;
    const { error: deleteError } = await supabase.from("novedades").delete().eq("id", id);
    if (deleteError) setError(deleteError.message);
    else load();
  };

  const toggleActivo = async (item) => {
    const { error: updateError } = await supabase
      .from("novedades")
      .update({ activo: !item.activo })
      .eq("id", item.id);
    if (updateError) setError(updateError.message);
    else load();
  };

  return (
    <div>
      <div className="admin-toolbar">
        <div>
          <h2 className="admin__section-title">Novedades</h2>
          <p className="admin__section-sub">
            Productos destacados que se muestran en la web pública.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setEditing({})}>
          + Nueva novedad
        </button>
      </div>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr className="admin-empty-row">
                <td colSpan={5}>Cargando…</td>
              </tr>
            )}

            {!loading && items.length === 0 && (
              <tr className="admin-empty-row">
                <td colSpan={5}>Todavía no hay novedades cargadas.</td>
              </tr>
            )}

            {!loading &&
              items.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.imagen_url ? (
                      <img src={item.imagen_url} alt="" className="admin-table__thumb" />
                    ) : (
                      <div className="admin-table__thumb" />
                    )}
                  </td>
                  <td>{item.nombre}</td>
                  <td>
                    {item.precio != null
                      ? Number(item.precio).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                          maximumFractionDigits: 0,
                        })
                      : "—"}
                  </td>
                  <td>
                    <button
                      className={`admin-badge ${item.activo ? "admin-badge--on" : "admin-badge--off"}`}
                      onClick={() => toggleActivo(item)}
                    >
                      {item.activo ? "Visible" : "Oculto"}
                    </button>
                  </td>
                  <td>
                    <div className="admin-row-actions">
                      <button
                        className="admin-icon-btn"
                        onClick={() => setEditing(item)}
                        aria-label="Editar"
                      >
                        <Icon name="edit" size={16} />
                      </button>
                      <button
                        className="admin-icon-btn admin-icon-btn--danger"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Eliminar"
                      >
                        <Icon name="trash" size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {editing !== null && (
        <NovedadForm
          initial={editing}
          onCancel={() => setEditing(null)}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </div>
  );
}
