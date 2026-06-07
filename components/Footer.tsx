import Image from "next/image";
import { NAV_ITEMS, SALES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-topre-navy py-12 text-white">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            {/* Logo gambar - tanpa background putih */}
            <div className="mb-4">
              <Image
                src="/topre.png"
                alt="Topre Logo"
                width={140}
                height={46}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Landing page inquiry refrigerated vehicle untuk membantu kebutuhan distribusi frozen, chilled, dan cold chain dengan pendekatan konsultatif yang profesional.
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-400">
              Halaman ini digunakan untuk kebutuhan informasi dan inquiry sales produk Topre.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Quick Menu</h3>
            <div className="mt-5 grid gap-3">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
              <p>{SALES.name} — {SALES.role}</p>
              <p>{SALES.phoneDisplay}</p>
              <p>{SALES.email}</p>
              <p>Area Layanan: {SALES.area}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400 md:text-left">
          © 2026 Topre Refrigerated Vehicle Inquiry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}