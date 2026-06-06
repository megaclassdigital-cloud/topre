"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { ShieldIcon } from "@/components/icons";
import { PROBLEMS } from "@/lib/constants";

export default function ProblemSection() {
  // Animasi untuk container (stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animasi untuk item (card)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-[#f8fafc]">
      <div className="section-container">
        {/* Header Section dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Kebutuhan Distribusi Dingin"
            title="Distribusi Produk Dingin Membutuhkan Kendaraan yang Tepat"
            description="Setiap jenis produk memiliki kebutuhan suhu, kapasitas, dan sistem distribusi yang berbeda. Pemilihan box pendingin yang tepat membantu menjaga kualitas produk selama perjalanan."
          />
        </motion.div>

        {/* Grid Card dengan Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem, index) => (
            <motion.article
              key={problem.title}
              variants={itemVariants}
              className="group flex h-full flex-col rounded-[32px] border border-[#e2e8f0] bg-white p-8 shadow-sm transition-all hover:border-[#0064e0] hover:shadow-xl md:p-10"
            >
              <div className="mb-8 flex items-center gap-4">
                {/* Logo/Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f1f4f7] text-[#0064e0] group-hover:bg-[#0064e0] group-hover:text-white transition-colors">
                  <ShieldIcon className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black tracking-[0.2em] uppercase text-slate-400">
                    Challenge 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Ukuran Font sesuai standar HeroSection */}
              <h3 className="text-[24px] font-black tracking-tight text-[#0a1317] leading-tight">
                {problem.title}
              </h3>
              <p className="mt-4 text-[18px] leading-[1.6] text-[#444950]">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}