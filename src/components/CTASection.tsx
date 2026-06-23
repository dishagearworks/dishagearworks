import Image from "next/image";
import { siteConfig } from "@/config/site";
import { QuoteButton } from "./QuoteButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { FadeIn } from "./motion/FadeIn";
import { MailIcon } from "./icons";

type CTASectionProps = {
  title?: string;
  /** optional second phrase rendered in the orange accent, on its own line */
  titleHighlight?: string;
  subtitle?: string;
};

/**
 * Inquiry call-to-action band: dark premium card with the handshake/industrial
 * image on the right and a left→right dark gradient keeping the left readable.
 */
export function CTASection({
  title = "Ready to source",
  titleHighlight = "reliable components?",
  subtitle = "Tell us what you need — our team will get back to you with a quotation and lead time.",
}: CTASectionProps) {
  return (
    <section className="container-x py-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy shadow-card">
          {/* Handshake image — full width on mobile, right ~70% on desktop */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-[72%]">
            <Image
              src="/images/cta-handshake.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-center"
            />
            {/* blend the image's left edge into the dark card */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/10" />
            {/* extra darkening on mobile so the text stays readable */}
            <div className="absolute inset-0 bg-navy/45 sm:bg-transparent" />
          </div>

          {/* subtle warmth + texture */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

          {/* Content */}
          <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="max-w-lg">
              <span className="label-mono text-orange">Get in touch</span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                {title}
                {titleHighlight && (
                  <>
                    {" "}
                    <span className="block text-gradient-orange sm:inline">
                      {titleHighlight}
                    </span>
                  </>
                )}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-steel">
                {subtitle}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <QuoteButton href="/contact" size="lg">
                  Request a Quote
                </QuoteButton>
                <WhatsAppButton size="lg">Send on WhatsApp</WhatsAppButton>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-white transition-colors hover:text-orange"
                >
                  <MailIcon className="h-5 w-5 text-orange" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
