"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { ArrowRightIcon, CheckIcon, WhatsappIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

const bullets = [
  "Teknologi pendingin terpercaya",
  "Cocok untuk distribusi cold chain",
  "Konsultasi kebutuhan unit sesuai bisnis",
];

const heroImages = [
  {
    src: "/images/hero/hero-topre-3.jpg",
    alt: "Refrigerated vehicle",
    title: "Integrated Refrigerated Vehicle",
    desc: "Solusi kendaraan pendingin untuk kebutuhan distribusi frozen, chilled, dan cold chain.",
  },
  {
    src: "/images/hero/hero-topre-2.webp",
    alt: "Box pendingin Topre",
    title: "FL Series & XV Series",
    desc: "Teknologi pendingin terpercaya dengan akurasi suhu tinggi untuk cold chain.",
  },
  {
    src: "/images/hero/hero-topre-1.jpg",
    alt: "Refrigerated truck",
    title: "FL Series & XV Series",
    desc: "Teknologi pendingin terpercaya dengan akurasi suhu tinggi untuk cold chain.",
  },
];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalImages = heroImages.length;

  // Auto slide (fade)
  useEffect(() => {
    if (totalImages > 1 && !isHovered) {
      autoSlideInterval.current = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % totalImages);
      }, 5000);
    } else if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, [totalImages, isHovered]);

  // Fungsi navigasi manual (dipanggil oleh swipe)
  const handlePrev = () => {
    if (totalImages <= 1) return;
    setActiveImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    if (totalImages <= 1) return;
    setActiveImage((prev) => (prev + 1) % totalImages);
  };

  // Swipe touch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="beranda" className="bg-[#ffffff] pt-[80px] pb-[96px] lg:pt-[140px] lg:pb-[140px] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid items-center gap-[64px] lg:grid-cols-[1fr_1fr]">
        {/* Konten Kiri */}
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

            <ButtonLink href="#inquiry" className="w-full justify-center rounded-full bg-[#0064e0] text-[16px] font-black text-white hover:bg-[#0457cb] transition">
              Isi Form Inquiry
              <ArrowRightIcon className="ml-[12px] h-[20px] w-[20px]" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* Carousel Kanan - Card style product gallery, tanpa panah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[640px]"
        >
          <div
            className="group relative bg-white border border-slate-200 rounded-[32px] shadow-sm transition-all hover:shadow-xl hover:border-[#0064e0] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Area gambar dengan swipe */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "pan-y pinch-zoom" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[activeImage].src}
                    alt={heroImages[activeImage].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Teks di luar gambar (menempel di bawah) */}
            <div className="p-6">
              <p className="text-[14px] font-black uppercase tracking-[0.2em] text-[#0064e0] mb-2">
                {heroImages[activeImage].title}
              </p>
              <p className="text-[16px] font-medium leading-[1.5] text-[#0a1317]">
                {heroImages[activeImage].desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}