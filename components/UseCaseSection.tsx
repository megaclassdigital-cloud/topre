"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { USE_CASES } from "@/lib/constants";

export default function UseCaseSection() {
  // Menentukan tipe Variants agar TypeScript tidak error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Menggunakan array cubic-bezier
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="section-container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Kebutuhan Industri"
            title="Cocok untuk Berbagai Kebutuhan Distribusi"
            description="Setiap industri membutuhkan solusi pendinginan yang tepat untuk menjaga mutu produk selama perjalanan."
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12"
        >
          {USE_CASES.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="group overflow-hidden rounded-[32px] border border-[#e2e8f0] bg-white shadow-sm transition-all hover:shadow-xl hover:border-[#0064e0]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f1f4f7]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1317]/80 via-[#0a1317]/20 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold text-white shadow-sm backdrop-blur-md uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#facc15]" />
                  Cold Chain
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-[20px] font-black tracking-tight text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[16px] font-black leading-[1.6] text-[#0a1317]">
                    Distribusi suhu terkontrol
                  </p>
                  <span className="h-1 w-8 rounded-full bg-[#facc15]" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}