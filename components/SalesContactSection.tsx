import ButtonLink from "@/components/ButtonLink";
import SectionHeader from "@/components/SectionHeader";
import { BrandMark, WhatsappIcon } from "@/components/icons";
import { SALES } from "@/lib/constants";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function SalesContactSection() {
  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          label="Kontak Sales"
          title="Hubungi Sales Topre"
          description="Siap membantu konsultasi awal untuk kebutuhan refrigerated vehicle, box pendingin, dan solusi distribusi produk dingin sesuai kebutuhan bisnis Anda."
        />

        <div className="rounded-4xl border border-topre-light bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-center md:text-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <BrandMark />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-topre-primary">Sales Consultant</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-topre-navy">{SALES.name}</h3>
              <p className="mt-1 text-base font-bold text-slate-600">{SALES.role}</p>
              <div className="mt-5 grid gap-2 text-base text-slate-600">
                <p><span className="font-bold text-topre-navy">Phone:</span> {SALES.phoneDisplay}</p>
                <p><span className="font-bold text-topre-navy">Email:</span> {SALES.email}</p>
                <p><span className="font-bold text-topre-navy">Area Layanan:</span> {SALES.area}</p>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Konsultasikan kebutuhan suhu, kapasitas, dan jenis produk yang akan Anda distribusikan agar mendapatkan arahan awal yang lebih sesuai.
              </p>
            </div>

            <div className="rounded-3xl border border-topre-border bg-topre-soft p-5 md:min-w-[320px]">
              <div className="mb-5 h-1.5 w-12 rounded-full bg-topre-yellow" />
              <p className="text-sm font-semibold leading-7 text-slate-600">
                Klik tombol di bawah untuk terhubung langsung dengan sales melalui WhatsApp.
              </p>
              <ButtonLink href={getWhatsappLink()} target="_blank" rel="noreferrer" className="mt-5 w-full">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
