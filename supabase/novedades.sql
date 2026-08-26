-- ============================================================
-- NOVEDADES — Supabase SQL
-- Ejecutar en el SQL Editor de tu proyecto de Supabase.
-- ============================================================

create table if not exists public.novedades (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  descripcion text,
  precio numeric,
  imagen_url text,
  activo boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.novedades enable row level security;

-- Lectura pública: cualquiera (anon o autenticado) puede leer
-- solamente las novedades activas. Esto es lo que consume la web pública.
create policy "novedades_public_read_active"
  on public.novedades
  for select
  to anon, authenticated
  using (activo = true);

-- El panel /admin usa Supabase Auth (email + password creado a mano
-- en Authentication > Users). Cualquier usuario autenticado puede
-- ver TODO (incluidas las inactivas) y gestionar los registros.
-- Si más adelante hay varios roles, reemplazar "true" por una
-- condición más estricta (ej: auth.uid() en una tabla de admins).

create policy "novedades_admin_read_all"
  on public.novedades
  for select
  to authenticated
  using (true);

create policy "novedades_admin_insert"
  on public.novedades
  for insert
  to authenticated
  with check (true);

create policy "novedades_admin_update"
  on public.novedades
  for update
  to authenticated
  using (true)
  with check (true);

create policy "novedades_admin_delete"
  on public.novedades
  for delete
  to authenticated
  using (true);

-- ============================================================
-- STORAGE — bucket para las imágenes de novedades
-- ============================================================

insert into storage.buckets (id, name, public)
values ('novedades', 'novedades', true)
on conflict (id) do nothing;

-- Lectura pública de las imágenes (el bucket es público)
create policy "novedades_images_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'novedades');

-- Solo usuarios autenticados (el admin) pueden subir/editar/borrar imágenes
create policy "novedades_images_admin_insert"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'novedades');

create policy "novedades_images_admin_update"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'novedades');

create policy "novedades_images_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'novedades');

-- ============================================================
-- Cómo crear el usuario admin:
-- Supabase Dashboard > Authentication > Users > Add user
-- (email + password). No hay registro público en la web.
-- ============================================================
