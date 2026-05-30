import SectionHeader from "@/components/SectionHeader";
import { CheckIcon } from "@/components/icons";
import { WHY_TOPRE } from "@/lib/constants";

export default function WhyTopreSection() {
  return (
    <section id="keunggulan" className="section-padding bg-topre-primary">
      <div className="section-container">
        <SectionHeader
          inverse
          label="Keunggulan"
          title="Mengapa Memilih Solusi Refrigerated Vehicle Topre?"
          description="Dirancang untuk membantu kebutuhan distribusi produk dingin dengan sistem pendinginan yang terpercaya dan struktur box berinsulasi."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_TOPRE.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/70 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft md:p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-topre-light text-topre-primary">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black tracking-tight text-topre-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
