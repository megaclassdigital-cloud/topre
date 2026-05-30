import SectionHeader from "@/components/SectionHeader";
import { ShieldIcon } from "@/components/icons";
import { PROBLEMS } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section className="section-padding bg-topre-soft">
      <div className="section-container">
        <SectionHeader
          label="Kebutuhan Distribusi Dingin"
          title="Distribusi Produk Dingin Membutuhkan Kendaraan yang Tepat"
          description="Setiap jenis produk memiliki kebutuhan suhu, kapasitas, dan sistem distribusi yang berbeda. Pemilihan box pendingin yang tepat membantu menjaga kualitas produk selama perjalanan."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, index) => (
            <article key={problem.title} className="group flex h-full flex-col rounded-2xl border border-topre-border bg-white p-5 shadow-card transition hover:border-topre-secondary hover:shadow-soft md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-topre-light text-topre-primary">
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <span className="h-2 w-2 rounded-full bg-topre-yellow" aria-hidden="true" />
                <span className="text-sm font-black text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-black tracking-tight text-topre-navy">{problem.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
