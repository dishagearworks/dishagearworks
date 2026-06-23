import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * Floating click-to-chat WhatsApp button, fixed bottom-right on every page
 * (desktop + mobile). Uses the site-wide default enquiry message. Sized to
 * content with a max-width guard so it never overflows small screens.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send Drawing / Product Photo on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1eb858] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="whitespace-nowrap font-heading text-[13px] font-semibold tracking-tight sm:text-sm">
        Send Drawing / Product Photo
      </span>
    </a>
  );
}
