"use client";

import { motion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { WhatsappIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FinalCTASection() {
  return (
    <section className="bg-[#0064e0] py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Decorative bar */}
          <div className="mx-auto mb-8 h-1.5 w-16 rounded-full bg-[#facc15]" />
          
          <h2 className="text-[32px] md:text-[42px] font-black tracking-tight text-white leading-tight">
            Butuh Rekomendasi Box Pendingin yang Tepat?
          </h2>
          
          <p className="mt-6 text-[18px] leading-[1.6] text-blue-100 max-w-xl mx-auto">
            Klik tombol WhatsApp untuk konsultasi cepat atau isi form inquiry agar kebutuhan Anda dapat kami pelajari lebih lengkap.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink 
              href={getWhatsappLink()} 
              variant="white" 
              target="_blank" 
              rel="noreferrer" 
              className="h-12 w-full sm:w-auto px-8 rounded-full flex items-center justify-center text-[16px] font-black"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Konsultasi Sekarang
            </ButtonLink>
            
            <ButtonLink 
              href="#inquiry" 
              className="h-12 w-full sm:w-auto px-8 rounded-full flex items-center justify-center text-[16px] font-black bg-transparent border-[2px] border-white/30 text-white hover:bg-white hover:text-[#0064e0] transition-colors"
            >
              Isi Form Inquiry
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}