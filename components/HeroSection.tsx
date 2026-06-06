"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import ButtonLink from "@/components/ButtonLink";
import { ArrowRightIcon, CheckIcon, WhatsappIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

const bullets = [
  "Teknologi pendingin terpercaya",
  "Cocok untuk distribusi cold chain",
  "Konsultasi kebutuhan unit sesuai bisnis",
];

const heroImages = [
  { src: "/images/hero/hero-topre-3.jpg", alt: "Refrigerated vehicle", title: "Integrated Refrigerated Vehicle", desc: "Solusi kendaraan pendingin untuk kebutuhan distribusi frozen, chilled, dan cold chain." },
  { src: "/images/hero/hero-topre-2.webp", alt: "Box pendingin Topre", title: "FL Series & XV Series", desc: "Teknologi pendingin terpercaya dengan akurasi suhu tinggi untuk cold chain." },
  { src: "/images/hero/hero-topre-3.jpg", alt: "Unit kendaraan", title: "FL Series & XV Series", desc: "Teknologi pendingin terpercaya dengan akurasi suhu tinggi untuk cold chain." },
  { src: "/images/hero/hero-topre-1.jpg", alt: "Refrigerated truck", title: "FL Series & XV Series", desc: "Teknologi pendingin terpercaya dengan akurasi suhu tinggi untuk cold chain." },
];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="beranda" className="bg-[#ffffff] pt-[80px] pb-[96px] lg:pt-[140px] lg:pb-[140px] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid items-center gap-[64px] lg:grid-cols-[1fr_1fr]">
        
        {/* Animasi Konten Kiri */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-[24px] inline-flex items-center gap-[12px] rounded-full bg-[#f1f4f7] px-[24px] py-[12px] text-[16px] font-bold text-[#444950]">
            <span className="h-[12px] w-[12px] rounded-full bg-[#facc15] animate-pulse" />
            Solusi Refrigerated Vehicle untuk Distribusi Frozen & Chilled
          </div>

          <h1 className="text-[52px] font-extrabold leading-[1.1] tracking-tighter text-[#0a1317] md:text-[68px] lg:text-[80px]">
            Solusi Box Pendingin Topre
          </h1>

          <p className="mx-auto mt-[32px] max-w-2xl text-[20px] leading-[1.6] text-[#444950] lg:mx-0 lg:text-[24px]">
            Konsultasikan kebutuhan refrigerated vehicle Anda untuk produk frozen, chilled, dan cold chain bersama sales Topre.
          </p>

          <div className="mx-auto mt-[48px] grid max-w-xl gap-[20px] text-left lg:mx-0">
            {bullets.map((bullet, i) => (
              <motion.div 
                key={bullet} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-[20px]"
              >
                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f1f4f7] text-[#0a1317]">
                  <CheckIcon className="h-[20px] w-[20px]" />
                </span>
                <span className="text-[20px] font-bold text-[#1c1e21]">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-[56px] flex flex-col items-center gap-[20px] sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href={getWhatsappLink()} className="w-full sm:w-auto bg-[#000000] text-white rounded-full px-[40px] py-[20px] font-bold hover:bg-[#222] transition-all flex items-center justify-center shadow-lg">
              <WhatsappIcon className="mr-[12px] h-[24px] w-[24px]" />
              Konsultasi via WhatsApp
            </ButtonLink>

            <ButtonLink href="#inquiry" className="w-full sm:w-auto bg-white text-black border-[3px] border-black rounded-full px-[40px] py-[18px] font-bold hover:bg-[#0064e0] hover:text-white hover:border-[#0064e0] transition-all flex items-center justify-center">
              Isi Form Inquiry
              <ArrowRightIcon className="ml-[12px] h-[20px] w-[20px]" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* Animasi Carousel Kanan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[640px]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px] bg-[#f1f4f7] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image src={heroImages[activeImage].src} alt={heroImages[activeImage].alt} fill className="object-cover" />
                <div className="absolute bottom-[32px] left-[32px] right-[32px]">
                  <div className="rounded-[32px] bg-white/90 p-[32px] border border-white backdrop-blur-md">
                    <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-[#0064e0] mb-[8px]">{heroImages[activeImage].title}</p>
                    <p className="text-[18px] font-medium leading-[1.5] text-[#0a1317]">{heroImages[activeImage].desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}