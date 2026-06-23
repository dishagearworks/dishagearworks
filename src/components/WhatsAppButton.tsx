import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/whatsapp";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "outline";

const sizeClass: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

// WhatsApp brand green — a recognizable action colour; does not alter the
// site's own theme palette (used only on these click-to-chat buttons).
const variantClass: Record<Variant, string> = {
  solid:
    "bg-[#25D366] text-white shadow-card ring-1 ring-inset ring-black/5 hover:bg-[#1eb858]",
  outline:
    "border border-[#25D366] text-[#0f7a37] hover:bg-[#25D366]/10",
};

type WhatsAppButtonProps = {
  children?: ReactNode;
  /** Prefilled message; defaults to the site-wide enquiry message. */
  message?: string;
  size?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
};

/**
 * Click-to-chat WhatsApp button. Opens wa.me in a new tab with a prefilled
 * message. Shares the same shape/sizing as QuoteButton for visual consistency.
 */
export function WhatsAppButton({
  children = "Send on WhatsApp",
  message,
  size = "md",
  variant = "solid",
  fullWidth = false,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={typeof children === "string" ? children : "Send on WhatsApp"}
      className={`group inline-flex items-center justify-center gap-2 rounded-md font-heading font-medium tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
      <span>{children}</span>
    </a>
  );
}
