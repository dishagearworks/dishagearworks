import { siteConfig } from "@/config/site";

/** Build a wa.me click-to-chat link with a prefilled message and number. */
export function whatsappHref(message?: string, number?: string): string {
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  const to = number ?? siteConfig.whatsapp.number;
  return `https://wa.me/${to}?text=${encodeURIComponent(text)}`;
}

/** Prefilled WhatsApp message that names a specific product. */
export function productWhatsappMessage(product: string): string {
  return `Hello DISHA GEARWORKS, I need a quotation for ${product}. I have a sample/drawing/photo. Please guide me.`;
}
