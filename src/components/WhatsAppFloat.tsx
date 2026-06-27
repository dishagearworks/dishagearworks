import { WhatsAppIcon, PhoneIcon } from "./icons";
import { whatsappHref } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

/**
 * Floating click-to-contact actions.
 *  • Mobile: two compact circular buttons — Call + WhatsApp — for one-tap
 *    contact (Indian B2B buyers call and message a lot).
 *  • Desktop (sm+): the labelled "Send Drawing / Product Photo" WhatsApp pill.
 * Uses the site-wide default enquiry message and the primary phone number.
 */
export function WhatsAppFloat() {
  const callHref = siteConfig.phones[0].href;

  return (
    <>
      {/* Mobile: Call + WhatsApp circles */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:hidden">
        <a
          href={callHref}
          aria-label="Call DISHA GEARWORKS"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp — send drawing or product photo"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>

      {/* Desktop: labelled WhatsApp pill */}
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send Drawing / Product Photo on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 hidden max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1eb858] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span className="whitespace-nowrap font-heading text-sm font-semibold tracking-tight">
          Send Drawing / Product Photo
        </span>
      </a>
    </>
  );
}
