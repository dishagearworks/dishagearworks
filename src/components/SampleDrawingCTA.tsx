import { QuoteButton } from "./QuoteButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { FadeIn } from "./motion/FadeIn";
import { productWhatsappMessage } from "@/lib/whatsapp";

/**
 * Conversion section inviting buyers to send a sample / drawing / photo.
 * Used on the homepage and every product detail page. Pass `productName`
 * on product pages so the WhatsApp + quote actions reference that product,
 * and `whatsappNumber` to route product enquiries to a specific number.
 * Uses only existing theme tokens — no new colours/layout patterns.
 */
export function SampleDrawingCTA({
  productName,
  whatsappNumber,
}: {
  productName?: string;
  whatsappNumber?: string;
}) {
  const quoteHref = productName
    ? `/contact?product=${encodeURIComponent(productName)}`
    : "/contact";
  const waMessage = productName ? productWhatsappMessage(productName) : undefined;

  return (
    <section className="bg-steel-light py-16 sm:py-20">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-card sm:p-12">
          <span className="label-mono text-orange">Custom Manufacturing</span>
          <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Have a Sample, Drawing or Product Photo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Send us your sample, technical drawing or product photo. DISHA
            GEARWORKS manufactures agricultural machinery components as per
            sample, drawing and custom size requirements for OEMs, exporters,
            dealers and regular buyers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton size="lg" message={waMessage} number={whatsappNumber}>
              Send on WhatsApp
            </WhatsAppButton>
            <QuoteButton href={quoteHref} size="lg" variant="outlineDark">
              Request a Quote
            </QuoteButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
