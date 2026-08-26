import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const emptyForm = {
  nombre: "",
  descripcion: "",
  precio: "",
  imagen_url: "",
  activo: true,
};

const BUCKET = "novedades";

export default function NovedadForm({ initial, onCancel, onSave, saving }) {
  const [form, setForm] = useState(initial || emptyForm);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const isEdit = Boolean(initial?.id);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError("");

    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (uploadErr) {
      setUploadError("No se pudo subir la imagen: " + uploadErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    update("imagen_url", data.publicUrl);
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      precio: form.precio === "" ? null : Number(form.precio),
    });
  };

  return (
    <div className="admin-modal-backdrop" onClick={onCancel}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isEdit ? "Editar novedad" : "Nueva novedad"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <label>Nombre</label>
            <input
              value={form.nombre}
              onChange={(e) => update("nombre", e.target.value)}
              required
            />
          </div>
          <div className="admin-field">
            <label>Descripción</label>
            <textarea
              value={form.descripcion}
              onChange={(e) => update("descripcion", e.target.value)}
            />
          </div>
          <div className="admin-field">
            <label>Precio</label>
            <input
              type="number"
              step="0.01"
              value={form.precio}
              onChange={(e) => update("precio", e.target.value)}
            />
          </div>
          <div className="admin-field">
            <label>Imagen (desde el dispositivo)</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {uploading && <p className="admin-upload-hint">Subiendo imagen…</p>}
            {uploadError && <div className="admin-error">{uploadError}</div>}
            {form.imagen_url && (
              <img src={form.imagen_url} alt="" className="admin-form-preview" />
            )}
          </div>

          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={form.activo}
              onChange={(e) => update("activo", e.target.checked)}
            />
            Visible en la web
          </label>

          <div className="admin-modal-actions">
            <button type="button" className="btn btn-outline" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving || uploading}>
              {saving ? "Guardando…" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
