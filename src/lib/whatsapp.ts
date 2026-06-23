import { siteConfig } from "@/config/site";

/** Build a wa.me click-to-chat link with a prefilled message. */
export function whatsappHref(message?: string): string {
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Prefilled WhatsApp message that names a specific product. */
export function productWhatsappMessage(product: string): string {
  return `Hello DISHA GEARWORKS, I need a quotation for ${product}. I have a sample/drawing/photo. Please guide me.`;
}
