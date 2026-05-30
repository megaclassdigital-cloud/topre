import SectionHeader from "@/components/SectionHeader";
import { SnowIcon } from "@/components/icons";
import { PRODUCTS } from "@/lib/constants";

export default function ProductSection() {
  return (
    <section id="produk" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          label="Produk & Solusi"
          title="Pilihan Solusi Refrigerated Vehicle Topre"
          description="Topre menyediakan berbagai solusi box pendingin dan sistem refrigerasi untuk kebutuhan distribusi frozen, chilled, dan cold chain."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.title}
              className={`group flex min-h-[240px] flex-col rounded-2xl border border-topre-border bg-white p-5 shadow-card transition hover:border-topre-secondary hover:shadow-soft md:p-6 ${index > 2 ? "lg:col-span-1" : ""}`}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-topre-light text-topre-primary transition group-hover:bg-topre-primary group-hover:text-white">
                  <SnowIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-topre-light bg-topre-light/70 px-3 py-1.5 text-xs font-black text-topre-primary">
                  {product.badge}
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight text-topre-navy">{product.title}</h3>
              <p className="mt-3 grow text-base leading-7 text-slate-600">{product.description}</p>
              <div className="mt-6 h-1.5 w-12 rounded-full bg-topre-yellow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
