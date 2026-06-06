"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { BrandMark } from "@/components/icons"; // Sesuaikan dengan path logo Anda

const BRANDS = ["Semua", "Isuzu", "Mitsubishi", "Hino", "Lainnya"];

const GALLERY_DATA = [
  { id: 1, brand: "Isuzu", name: "Isuzu Traga Pick Up", body: "Insulated Box", desc: "Ideal untuk distribusi dalam kota dengan akses jalan terbatas." , img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" },
  { id: 2, brand: "Isuzu", name: "Isuzu NLR", body: "Refrigerated Box", desc: "Solusi logistik menengah dengan efisiensi bahan bakar optimal.", img: "https://images.unsplash.com/photo-1586528116311-ad8ed7450862?auto=format&fit=crop&q=80&w=800" },
  { id: 3, brand: "Mitsubishi", name: "Mitsubishi L300", body: "Chilled Box", desc: "Kendaraan komersial legendaris untuk kebutuhan chilled & frozen ringan.", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" },
  { id: 4, brand: "Mitsubishi", name: "Mitsubishi FE 71 N", body: "Freezer Box", desc: "Truk ringan tangguh untuk distribusi cold chain antarkota.", img: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800" },
  { id: 5, brand: "Hino", name: "Hino 136 MDL", body: "Cooling System Box", desc: "Kapasitas masif untuk kebutuhan logistik suhu terkontrol skala besar.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" },
  { id: 6, brand: "Lainnya", name: "Motor Roda Tiga", body: "Eutectic Box", desc: "Sistem pendingin Eutectic untuk akses distribusi di gang sempit.", img: "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?auto=format&fit=crop&q=80&w=800" },
];

export default function ProductGallerySection() {
  const [activeBrand, setActiveBrand] = useState("Semua");

  const filteredData = activeBrand === "Semua" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter((item) => item.brand === activeBrand);

  return (
    <section id="galeri" className="py-20 lg:py-32 bg-[#f8fafc]">
      <div className="section-container">
        
        {/* Logo Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
        >
            <div className="p-3 bg-white rounded-3xl shadow-sm border border-slate-100">
                <BrandMark /> {/* Ganti dengan <Image src="/logo.png" ... /> jika perlu */}
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Galeri Produk"
            title="Kategori Kendaraan & Box Pendingin"
            description="Pilihan integrasi sasis dan dimensi box Topre yang telah memenuhi standar SK Rancang Bangun (SKRB) untuk operasional legal dan efisien."
          />
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`rounded-full px-8 py-3 text-[16px] font-bold transition-all ${
                activeBrand === brand
                  ? "bg-[#0a1317] text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#0064e0]"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col rounded-[32px] border border-slate-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-xl hover:border-[#0064e0]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#0064e0] mb-2">{item.brand}</span>
                  <h3 className="text-[24px] font-black text-[#0a1317] leading-tight mb-2">{item.name}</h3>
                  <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#f1f4f7] text-[14px] font-bold text-slate-700 w-fit">
                    {item.body}
                  </div>
                  <p className="text-[18px] leading-[1.6] text-[#444950]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}