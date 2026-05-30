import { SALES, WHATSAPP_MESSAGE } from "@/lib/constants";

export function normalizeWhatsappNumber(number?: string) {
  const raw = number || SALES.phoneWa;
  const digits = raw.replace(/[^0-9]/g, "");

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  return digits;
}

export function getWhatsappLink(message = WHATSAPP_MESSAGE) {
  const number = normalizeWhatsappNumber(SALES.phoneWa);
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}
