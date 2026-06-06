"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { SnowIcon } from "@/components/icons";
import Image from "next/image";

// Konten di-hardcode menjadi 3 agar sesuai permintaan
const PRODUCTS = [
  {
    title: "FL Series",
    badge: "Reliable Cooling",
    desc: "Sistem pendingin standar untuk kebutuhan distribusi frozen dan chilled dengan efisiensi energi yang optimal.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8317d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "XV Series",
    badge: "High Performance",
    desc: "Teknologi pendingin premium untuk kontrol suhu yang sangat akurat, ideal bagi industri farmasi & makanan sensitif.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Custom Insulated Box",
    badge: "Bespoke Solution",
    desc: "Solusi box kustom yang disesuaikan dengan dimensi kendaraan dan spesifikasi operasional distribusi bisnis Anda.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProductSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="produk" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="section-container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Produk & Solusi"
            title="Pilihan Solusi Refrigerated Vehicle Topre"
            description="Topre menyediakan berbagai solusi box pendingin dan sistem refrigerasi untuk kebutuhan distribusi frozen, chilled, dan cold chain."
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 mt-12"
        >
          {PRODUCTS.map((product) => (
            <motion.article
              key={product.title}
              variants={itemVariants}
              className="group flex flex-col rounded-[32px] border border-[#e2e8f0] bg-white shadow-sm overflow-hidden transition-all hover:shadow-xl hover:border-[#0064e0]"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f4f7] text-[#0064e0] group-hover:bg-[#0064e0] group-hover:text-white transition-colors">
                    <SnowIcon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-[#e2e8f0] bg-[#f1f4f7] px-4 py-1.5 text-[12px] font-black uppercase tracking-wider text-[#0064e0]">
                    {product.badge}
                  </span>
                </div>
                
                <h3 className="text-[24px] font-black tracking-tight text-[#0a1317]">
                  {product.title}
                </h3>
                <p className="mt-4 text-[18px] leading-[1.6] text-[#444950] flex-grow">
                  {product.desc}
                </p>
                
                <div className="mt-8 h-1.5 w-16 rounded-full bg-[#facc15]" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}