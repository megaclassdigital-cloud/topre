import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { USE_CASES } from "@/lib/constants";

export default function UseCaseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          label="Kebutuhan Industri"
          title="Cocok untuk Berbagai Kebutuhan Distribusi"
          description="Setiap industri membutuhkan solusi pendinginan yang tepat untuk menjaga mutu produk selama perjalanan."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-topre-light bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-topre-secondary hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-topre-light">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-topre-navy/75 via-topre-navy/20 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-bold text-topre-primary shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-topre-yellow" />
                  Cold Chain Use Case
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-black tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="border-t border-topre-light bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-topre-gray">
                    Distribusi suhu terkontrol
                  </p>

                  <span className="h-1.5 w-8 rounded-full bg-topre-yellow" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}