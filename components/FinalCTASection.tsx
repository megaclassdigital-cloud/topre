import ButtonLink from "@/components/ButtonLink";
import { WhatsappIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FinalCTASection() {
  return (
    <section className="bg-topre-primary py-16 md:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-topre-yellow" />
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-[42px]">
            Butuh Rekomendasi Box Pendingin yang Tepat?
          </h2>
          <p className="mt-4 text-base leading-8 text-blue-100 md:text-lg">
            Klik tombol WhatsApp untuk konsultasi cepat atau isi form inquiry agar kebutuhan Anda dapat kami pelajari lebih lengkap.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={getWhatsappLink()} variant="white" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Konsultasi Sekarang
            </ButtonLink>
            <ButtonLink href="#inquiry" variant="secondary" className="w-full border-white bg-transparent text-white hover:bg-white hover:text-topre-primary sm:w-auto">
              Isi Form Inquiry
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
