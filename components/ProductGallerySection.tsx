"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const BRANDS = ["Semua", "Hino", "Mitsubishi", "Isuzu", "Lainnya"];

const GALLERY_DATA = [
  {
    id: 1,
    brand: "Hino",
    name: "Hino 115 SD",
    body: "Insulated Box",
    desc: "Ideal untuk distribusi dalam kota dengan akses jalan terbatas.",
    images: [
      "/images/product/hino/1_Hino_115_SD.jpeg",
      "/images/product/hino/2_Hino_115_SD.jpeg",
      "/images/product/hino/3_Hino_115_SD.jpeg",
      "/images/product/hino/4_Hino_115_SD.jpeg",
      "/images/product/hino/5_Hino_115_SD.jpeg",
    ],
  },
  {
    id: 2,
    brand: "Mitsubishi",
    name: "Mitsubishi FE 71 L",
    body: "Refrigerated Box",
    desc: "Solusi logistik menengah dengan efisiensi bahan bakar optimal.",
    images: [
      "/images/product/mitsubishi/1_mitsubishi_FE_71_L.jpeg",
      "/images/product/mitsubishi/2_mitsubishi_FE_71_L.jpeg",
      "/images/product/mitsubishi/3_mitsubishi_FE_71_L.jpeg",
      "/images/product/mitsubishi/4_mitsubishi_FE_71_L.jpeg",
    ],
  },
  {
    id: 3,
    brand: "Isuzu",
    name: "Isuzu Elf",
    body: "Chilled Box",
    desc: "Kendaraan komersial legendaris untuk kebutuhan chilled & frozen ringan.",
    images: [
      "/images/product/isuzu/1_Isuzu_Elf.jpeg",
      "/images/product/isuzu/2_Isuzu_Elf.jpeg",
      "/images/product/isuzu/3_Isuzu_Elf.jpeg",
      "/images/product/isuzu/4_Isuzu_Elf.jpeg",
      "/images/product/isuzu/5_Isuzu_Elf.jpeg",
    ],
  },
  {
    id: 4,
    brand: "Mitsubishi",
    name: "Mitsubishi L300",
    body: "Freezer Box",
    desc: "Truk ringan tangguh untuk distribusi cold chain antarkota.",
    images: [
      "/images/product/mitsubishi/1_mitsubishi_l300.jpeg",
      "/images/product/mitsubishi/2_mitsubishi_l300.jpeg",
      "/images/product/mitsubishi/3_mitsubishi_l300.jpeg",
      "/images/product/mitsubishi/4_mitsubishi_l300.jpeg",
      "/images/product/mitsubishi/5_mitsubishi_l300.jpeg",
    ],
  },
];

const ProductCard = ({ item }: { item: typeof GALLERY_DATA[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [animationType, setAnimationType] = useState<"slide" | "fade">("fade");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalImages = item.images.length;
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const autoPlayTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    if (totalImages > 1 && !isHovered && isAutoPlaying) {
      autoSlideInterval.current = setInterval(() => {
        setAnimationType("fade");
        setCurrentIndex((prev) => (prev + 1) % totalImages);
      }, 5000);
    }
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const pauseAutoSlideTemporarily = () => {
    if (autoPlayTimeout.current) clearTimeout(autoPlayTimeout.current);
    setIsAutoPlaying(false);
    stopAutoSlide();
    autoPlayTimeout.current = setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoSlide();
    }, 15000);
  };

  useEffect(() => {
    if (totalImages > 1 && !isHovered && isAutoPlaying) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    return () => {
      stopAutoSlide();
      if (autoPlayTimeout.current) clearTimeout(autoPlayTimeout.current);
    };
  }, [totalImages, isHovered, isAutoPlaying]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (totalImages <= 1) return;
    setDirection(-1);
    setAnimationType("slide");
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    pauseAutoSlideTemporarily();
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (totalImages <= 1) return;
    setDirection(1);
    setAnimationType("slide");
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    pauseAutoSlideTemporarily();
  };

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

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
    e.preventDefault();
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - mouseStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) handlePrev();
      else handleNext();
      isDragging.current = false;
    }
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const getInitial = () => {
    if (animationType === "fade") return { opacity: 0 };
    return { x: direction === 1 ? 300 : -300, opacity: 1 };
  };
  const getAnimate = () => ({ x: 0, opacity: 1 });
  const getExit = () => {
    if (animationType === "fade") return { opacity: 0 };
    return { x: direction === 1 ? -300 : 300, opacity: 0 };
  };

  return (
    <div
      className="group flex flex-col rounded-[32px] border border-slate-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-xl hover:border-[#0064e0]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative aspect-[16/10] w-full overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${item.id}-${currentIndex}`}
            initial={getInitial()}
            animate={getAnimate()}
            exit={getExit()}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={item.images[currentIndex]}
              alt={`${item.name} - gambar ${currentIndex + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={currentIndex === 0}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
              }}
            />
          </motion.div>
        </AnimatePresence>

        {totalImages > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 max-sm:w-10 max-sm:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all focus:outline-none z-10 touch-manipulation"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 max-sm:w-10 max-sm:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all focus:outline-none z-10 touch-manipulation"
              aria-label="Gambar berikutnya"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#0064e0] mb-2">
          {item.brand}
        </span>
        <h3 className="text-[24px] font-black text-[#0a1317] leading-tight mb-2">
          {item.name}
        </h3>
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#f1f4f7] text-[14px] font-bold text-slate-700 w-fit">
          {item.body}
        </div>
        <p className="text-[18px] leading-[1.6] text-[#444950]">{item.desc}</p>
      </div>
    </div>
  );
};

export default function ProductGallerySection() {
  const [activeBrand, setActiveBrand] = useState("Semua");

  const filteredData =
    activeBrand === "Semua"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.brand === activeBrand);

  return (
    <section id="galeri" className="py-20 lg:py-32 bg-[#f8fafc]">
      <div className="section-container">
        {/* Logo dengan background transparan - tanpa bg, border, shadow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/topre.png"
            alt="Topre Logo"
            width={160}
            height={53}
            className="h-12 w-auto md:h-14"
            priority
          />
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

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}