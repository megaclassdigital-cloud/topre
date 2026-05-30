create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  phone text not null,
  city text,
  need_type text,
  temperature_need text,
  message text,
  source text default 'topre-landing-page',
  created_at timestamp with time zone default now()
);

alter table leads enable row level security;

-- Tidak perlu policy public insert/delete karena semua operasi dilakukan server-side
-- menggunakan SUPABASE_SERVICE_ROLE_KEY melalui Next.js API Route.
-- Service role key bypass RLS dan tidak boleh diexpose ke client.
