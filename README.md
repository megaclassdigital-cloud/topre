# Topre Refrigerated Vehicle - Landing Page

Landing page profesional untuk lead generation penjualan box pendingin dan refrigerated vehicle Topre.

## Tech Stack

- **Framework**: Next.js App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel-ready

## Setup Project

### 1. Prerequisites

- Node.js 18+
- npm atau yarn
- Supabase account

### 2. Environment Setup

Copy `.env.example` ke `.env.local` dan isi dengan nilai yang sesuai:

```bash
cp .env.example .env.local
```

Konfigurasi yang diperlukan:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_PASSWORD=your_admin_password
NEXT_PUBLIC_WHATSAPP_NUMBER=6281219423402
NEXT_PUBLIC_SALES_NAME=Sopiyan
NEXT_PUBLIC_SALES_AREA=Indonesia
NEXT_PUBLIC_SALES_EMAIL=sopiyan@topre.co.id
```

### 3. Setup Supabase

#### Create Table

Log in ke Supabase dan jalankan SQL query berikut:

```sql
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
```

Catatan security:

- Form submit dilakukan via API route `/api/submit-leads`.
- Admin fetch leads dilakukan via API route `/api/leads`.
- Delete leads dilakukan via API route `/api/leads/[id]`.
- `SUPABASE_SERVICE_ROLE_KEY` hanya dipakai server-side dan tidak diexpose ke client.
- RLS bisa tetap aktif karena operasi server-side menggunakan service role key.

### 4. Installation

```bash
npm install
```

### 5. Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 6. Build

```bash
npm run build
npm start
```

## Project Structure

```txt
app/
├── api/
│   ├── admin/
│   │   ├── login/
│   │   │   └── route.ts
│   │   └── logout/
│   │       └── route.ts
│   ├── leads/
│   │   ├── [id]/
│   │   │   └── route.ts
│   │   └── route.ts
│   └── submit-leads/
│       └── route.ts
├── admin/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── AdminDashboard.tsx
├── AdminLeadsTable.tsx
├── AdminLogin.tsx
├── ButtonLink.tsx
├── FinalCTASection.tsx
├── FloatingWhatsApp.tsx
├── Footer.tsx
├── HeroSection.tsx
├── LeadFormSection.tsx
├── Navbar.tsx
├── ProblemSection.tsx
├── ProductSection.tsx
├── SalesContactSection.tsx
├── SectionHeader.tsx
├── UseCaseSection.tsx
├── WhyTopreSection.tsx
└── icons.tsx

lib/
├── auth.ts
├── constants.ts
├── supabaseAdmin.ts
├── supabaseClient.ts
└── whatsapp.ts

types/
└── lead.ts
```

## Features

### Frontend

- ✓ 1-page landing page dengan sticky navbar
- ✓ Auto-scroll navigation
- ✓ Fully responsive desktop, tablet, mobile
- ✓ Hero section dengan CTA
- ✓ Problem section 3 cards
- ✓ Product highlight 5 products
- ✓ Why Topre section 6 benefits
- ✓ Use case section 8 industries
- ✓ Lead form inquiry
- ✓ Sales contact section
- ✓ Final CTA section
- ✓ Footer
- ✓ Floating WhatsApp button
- ✓ SEO metadata
- ✓ No emoji icon; semua icon dibuat dengan inline SVG
- ✓ Tidak membutuhkan asset eksternal untuk versi awal

### Backend

- ✓ Form submission ke Supabase
- ✓ Form validation
- ✓ Admin dashboard `/admin`
- ✓ Admin login dengan password
- ✓ Cookie httpOnly sederhana dengan signature HMAC
- ✓ View all leads
- ✓ Delete leads
- ✓ API routes untuk leads management

## Admin Dashboard

### Login

1. Buka [http://localhost:3000/admin](http://localhost:3000/admin)
2. Masukkan admin password dari environment variable
3. Dashboard akan menampilkan semua leads

### Features

- View semua leads yang masuk
- Delete leads individual
- Refresh table
- Export data manual via browser table copy-paste

## WhatsApp Integration

Semua CTA WhatsApp mengarah ke nomor yang dikonfigurasi di `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Message template:

```txt
Halo, saya ingin konsultasi kebutuhan box pendingin Topre untuk distribusi produk saya.
```

## Deployment di Vercel

### 1. Push ke Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy di Vercel

1. Buka Vercel
2. Import project dari Git
3. Konfigurasi environment variables
4. Deploy

### 3. Environment Variables di Vercel

Tambahkan di Project Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SALES_NAME`
- `NEXT_PUBLIC_SALES_AREA`
- `NEXT_PUBLIC_SALES_EMAIL`

## Design System

### Colors

- **Primary Blue**: `#1e3a8a`
- **Secondary Blue**: `#2563eb`
- **Dark Navy**: `#0f172a`
- **White**: `#ffffff`
- **Soft Gray**: `#f8fafc`
- **Border**: `#e2e8f0`
- **Light Blue Accent**: `#dbeafe`
- **Yellow Accent**: `#facc15`

### Visual Direction

- Corporate industrial, clean, B2B, dan tidak terlalu ramai.
- Dominasi white/soft gray dengan blue/navy sebagai identitas utama.
- Yellow hanya sebagai aksen kecil pada badge, line, dot, dan label series.
- Tidak menggunakan emoji untuk icon.
- Visual hero dibuat dengan inline SVG refrigerated truck mockup agar tidak perlu asset eksternal.

### Responsive Breakpoints

- Desktop: ≥1024px
- Tablet: 768px-1023px
- Mobile: <768px

## Performance Tips

- ✓ Tidak memakai library icon eksternal
- ✓ Tidak memakai gambar berat
- ✓ CSS minified otomatis saat build
- ✓ Code splitting otomatis dari Next.js
- ✓ API routes server-side
- ✓ No unnecessary dependencies

## Troubleshooting

### Supabase Connection Error

- Pastikan env variables benar
- Check Supabase URL format `https://xxxx.supabase.co`
- Verify anon key dan service role key

### Form Not Submitting

- Check browser console for errors
- Verify Supabase table exists
- Check RLS sudah aktif atau tidak
- Pastikan `SUPABASE_SERVICE_ROLE_KEY` benar karena insert dilakukan server-side

### Admin Login Failed

- Pastikan `ADMIN_PASSWORD` diset di `.env.local`
- Clear browser cookies dan refresh
- Pastikan route `/api/admin/login` tidak error

## Next Steps / Future Enhancements

- [ ] Email notifications for new leads
- [ ] Lead status tracking: new, contacted, converted
- [ ] Export leads to Excel
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] WhatsApp automation
- [ ] CRM integration
- [ ] Mengganti fallback text logo dengan official logo Topre jika asset sudah tersedia

---

**Project Version**: 1.0.0  
**Last Updated**: May 2026
