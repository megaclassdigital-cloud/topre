"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import {
  ArrowRightIcon,
  CheckIcon,
  WhatsappIcon,
} from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

const bullets = [
  "Teknologi pendingin terpercaya",
  "Cocok untuk distribusi cold chain",
  "Konsultasi kebutuhan unit sesuai bisnis",
];

const heroImages = [
  {
    src: "/images/hero/hero-topre-1.jpg",
    alt: "Refrigerated vehicle Topre untuk distribusi produk frozen dan chilled",
  },
  {
    src: "/images/hero/hero-topre-2.webp",
    alt: "Box pendingin Topre untuk kebutuhan distribusi cold chain",
  },
  {
    src: "/images/hero/hero-topre-3.jpg",
    alt: "Unit kendaraan pendingin Topre dengan insulated box",
  },
  {
    src: "/images/hero/hero-topre-4.jpg",
    alt: "Refrigerated truck Topre untuk kebutuhan bisnis frozen food dan chilled product",
  },
];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="beranda" className="relative overflow-hidden bg-white">
      <div
        className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-topre-light/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-24 h-80 w-80 translate-x-1/2 rounded-full bg-blue-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container grid min-h-[calc(100vh-72px)] items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-20">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-topre-light bg-topre-light/70 px-4 py-2 text-sm font-semibold text-topre-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-topre-yellow" />
            Solusi Refrigerated Vehicle untuk Distribusi Frozen & Chilled
          </div>

          <h1 className="mx-auto max-w-4xl text-[34px] font-black leading-[1.08] tracking-tight text-topre-navy sm:text-5xl lg:mx-0 lg:text-[58px]">
            Solusi Box Pendingin Topre untuk Distribusi Frozen & Chilled
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg lg:mx-0">
            Konsultasikan kebutuhan refrigerated vehicle Anda untuk produk
            frozen, chilled, dan cold chain bersama sales Topre. Dapatkan
            rekomendasi unit sesuai suhu, kapasitas, dan kebutuhan distribusi
            bisnis Anda.
          </p>

          <div className="mx-auto mt-7 grid max-w-xl gap-3 text-left lg:mx-0">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 rounded-2xl border border-topre-border bg-white px-4 py-3 shadow-card"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-topre-light text-topre-primary">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-slate-700 md:text-base">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink
              href={getWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>

            <ButtonLink href="#inquiry" variant="secondary" className="w-full sm:w-auto">
              Isi Form Inquiry
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xl lg:max-w-none">
          <div className="rounded-4xl border border-topre-light bg-white p-4 shadow-soft md:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 md:justify-between">
              <span className="rounded-full bg-topre-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Refrigerated Vehicle
              </span>
              <span className="rounded-full bg-topre-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-topre-navy">
                FL Series
              </span>
              <span className="rounded-full border border-topre-light bg-topre-light px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-topre-primary">
                XV Series
              </span>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-topre-border bg-slate-100">
              <div className="relative aspect-[16/10] w-full">
                {heroImages.map((image, index) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                    className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
                      index === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-topre-navy/45 via-topre-navy/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="max-w-md rounded-2xl border border-white/25 bg-white/90 p-4 shadow-card backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-topre-primary">
                      Integrated Refrigerated Vehicle
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      Solusi kendaraan pendingin untuk kebutuhan distribusi
                      frozen, chilled, dan cold chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["FL Series", "XV Series", "Frozen", "Chilled"].map(
                (label, index) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-topre-border bg-white p-3 text-center shadow-card"
                  >
                    <div
                      className={`mx-auto mb-2 h-1.5 w-8 rounded-full ${
                        index === 0 ? "bg-topre-yellow" : "bg-topre-light"
                      }`}
                    />
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
                      {label}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}