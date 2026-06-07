"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { CloseIcon, MenuIcon, WhatsappIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/lib/constants";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-topre-border bg-white/95 backdrop-blur">
      <nav className="section-container flex h-[80px] items-center justify-between gap-6" aria-label="Main navigation">
        {/* Logo gambar - ukuran diperbesar */}
        <a href="#beranda" onClick={closeMenu} className="focus-ring rounded-2xl">
          <Image
            src="/topre.png"
            alt="Topre Logo"
            width={160}
            height={53}
            className="h-12 w-auto md:h-14"
            priority
            quality={100}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-topre-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <ButtonLink href={getWhatsappLink()} className="hidden lg:inline-flex" target="_blank" rel="noreferrer">
          <WhatsappIcon className="mr-2 h-4 w-4" />
          WhatsApp
        </ButtonLink>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-topre-border text-topre-primary lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-topre-border bg-white shadow-card lg:hidden">
          <div className="section-container py-4">
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-topre-light hover:text-topre-primary"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink href={getWhatsappLink()} onClick={closeMenu} target="_blank" rel="noreferrer" className="mt-2 w-full">
                <WhatsappIcon className="mr-2 h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}