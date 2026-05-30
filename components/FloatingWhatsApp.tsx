import { WhatsappIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-topre-primary text-white shadow-soft transition hover:bg-topre-navy md:bottom-6 md:right-6 md:h-auto md:w-auto md:px-5 md:py-4"
      aria-label="Chat via WhatsApp"
    >
      <WhatsappIcon className="h-6 w-6" />
      <span className="ml-2 hidden text-sm font-bold md:inline">WhatsApp</span>
    </a>
  );
}
