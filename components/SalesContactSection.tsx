"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import SectionHeader from "@/components/SectionHeader";
import { WhatsappIcon } from "@/components/icons";
import { SALES } from "@/lib/constants";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function SalesContactSection() {
  return (
    <section id="kontak" className="py-20 lg:py-32 bg-white">
      <div className="section-container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Kontak Sales"
            title="Hubungi Sales Topre"
            description="Siap membantu konsultasi awal untuk kebutuhan refrigerated vehicle, box pendingin, dan solusi distribusi produk dingin sesuai kebutuhan bisnis Anda."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            
            <div className="text-center md:text-left">
              <div className="mb-8 flex justify-center md:justify-start">
                <Image
                  src="/topre.png"
                  alt="Topre Logo"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              
              <span className="text-[12px] font-black uppercase tracking-[0.25em] text-[#0064e0]">
                Sales Consultant
              </span>
              
              <h3 className="mt-3 text-[32px] md:text-[42px] font-black tracking-tight text-[#0a1317] leading-tight">
                {SALES.name}
              </h3>
              
              <p className="mt-2 text-[18px] font-bold text-slate-600">
                {SALES.role}
              </p>
              
              <div className="mt-8 grid gap-4 text-[18px] text-slate-700">
                <p><span className="font-black text-[#0a1317]">Phone:</span> {SALES.phoneDisplay}</p>
                <p><span className="font-black text-[#0a1317]">Email:</span> {SALES.email}</p>
                <p><span className="font-black text-[#0a1317]">Area Layanan:</span> {SALES.area}</p>
              </div>
              
              <p className="mt-8 text-[18px] leading-[1.6] text-slate-600 max-w-xl">
                Konsultasikan kebutuhan suhu, kapasitas, dan jenis produk yang akan Anda distribusikan agar mendapatkan arahan awal yang lebih sesuai.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-slate-50 p-8 md:min-w-[360px]">
              <div className="mb-6 h-1.5 w-12 rounded-full bg-[#facc15]" />
              <p className="text-[16px] leading-[1.6] font-semibold text-slate-700">
                Klik tombol di bawah untuk terhubung langsung dengan sales melalui WhatsApp.
              </p>
              <ButtonLink 
                href={getWhatsappLink()} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-8 h-12 w-full justify-center rounded-full bg-[#0064e0] text-[16px] font-black text-white hover:bg-[#0457cb] transition"
              >
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </ButtonLink>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}