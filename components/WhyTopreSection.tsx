"use client";

import { motion, Variants } from "framer-motion";

const ADVANTAGES = [
  {
    label: "Heritage & Engineering",
    title: "Teknologi Teruji Asal Jepang Sejak 1935",
    description: "Dikembangkan dengan standar rekayasa termal ketat dari Jepang selama puluhan tahun, menjamin daya tahan komponen yang andal menghadapi iklim tropis ekstrem Indonesia."
  },
  {
    label: "Thermal Efficiency",
    title: "Isolasi Poliuretan Densitas Tinggi",
    description: "Struktur panel box menggunakan formulasi insulasi khusus tanpa celah sambungan. Mencegah kebocoran suhu dingin secara radikal sehingga menghemat konsumsi bahan bakar armada."
  },
  {
    label: "Cold Chain Integrity",
    title: "Akurasi Kontrol Suhu Konstan",
    description: "Sistem refrigerasi cerdas mempertahankan tingkat pembekuan secara presisi, meminimalisir risiko kerusakan komoditas pangan atau farmasi selama proses distribusi logistik."
  }
];

export default function WhyTopreSection() {
  // Definisi tipe Variants untuk menghindari error build Vercel
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="keunggulan" className="relative overflow-hidden bg-[#0a1317] py-20 lg:py-32">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -left-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-[#0064e0] blur-[150px]" />
        <div className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#facc15] blur-[150px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#0064e0]">
            Keunggulan Teknis
          </span>
          <h2 className="mt-6 text-[32px] md:text-[42px] font-black tracking-tight text-white leading-tight">
            Mengapa Memilih Solusi Refrigerated Vehicle Topre?
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-slate-300">
            Investasi jangka panjang terbaik untuk menjamin stabilitas temperatur distribusi bisnis rantai dingin Anda.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {ADVANTAGES.map((item) => (
            <motion.article 
              key={item.title} 
              variants={itemVariants}
              className="flex flex-col rounded-[32px] border border-white/10 bg-white/[0.03] p-8 lg:p-10 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-[#0064e0]/50"
            >
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#facc15] mb-4">
                {item.label}
              </span>
              <h3 className="text-[24px] font-black tracking-tight text-white leading-tight">
                {item.title}
              </h3>
              <p className="mt-5 text-[18px] leading-[1.6] text-slate-400 flex-grow">
                {item.description}
              </p>
              <div className="mt-10 h-1.5 w-16 rounded-full bg-[#0064e0]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}