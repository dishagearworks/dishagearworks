import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Export Enquiries — Agricultural Machinery Components Supplier",
  description:
    "DISHA GEARWORKS manufactures agricultural machinery components in Punjab, India and welcomes export enquiries, with a focus on European OEMs and dealers. Made as per sample or drawing.",
  alternates: { canonical: "/export" },
  openGraph: {
    title: "Export & International Buyers | DISHA GEARWORKS",
    description:
      "Agricultural machinery components manufactured in Nabha, Punjab, India — export enquiries welcome. Sample/drawing-based manufacturing for OEMs, dealers and importers.",
    url: `${siteConfig.url}/export`,
    type: "website",
  },
};

const exportMessage =
  "Hello DISHA GEARWORKS, I am an international/export buyer interested in agricultural machinery components. Please share details and a quotation. I can send a sample/drawing/photo.";

// Honest, non-overclaiming export details (no invented countries/Incoterms).
const details: { title: string; text: string }[] = [
  {
    title: "Sample & drawing based manufacturing",
    text: "Send a sample, technical drawing, CAD file or product photo. We can reverse-engineer existing or discontinued parts and manufacture to your specification.",
  },
  {
    title: "Order quantity",
    text: "From prototypes and trial orders to regular bulk requirements — quantities are agreed as per your order requirement.",
  },
  {
    title: "Lead times",
    text: "Confirmed for each order based on the component, quantity and finishing required, and shared with your quotation.",
  },
  {
    title: "Export-suitable packaging",
    text: "Components are inspected before dispatch and packed appropriately for the order and destination.",
  },
  {
    title: "Shipping terms",
    text: "Incoterms and shipping arrangements are discussed and agreed for each enquiry.",
  },
  {
    title: "Payment terms",
    text: "Payment terms are discussed and agreed per order.",
  },
];

const process = [
  { step: "01", title: "Enquiry", text: "Share your component, sample, drawing or photo with quantity and application details." },
  { step: "02", title: "Quotation", text: "We review the requirement and respond with a quotation and lead time." },
  { step: "03", title: "Production & inspection", text: "Parts are manufactured and inspected before dispatch; assemblies are tested." },
  { step: "04", title: "Packing & dispatch", text: "Export-suitable packing and dispatch as per the agreed terms." },
];

export default function ExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/export#webpage`,
        url: `${siteConfig.url}/export`,
        name: "Export & International Buyers | DISHA GEARWORKS",
        description:
          "Agricultural machinery components manufactured in Punjab, India — export enquiries welcome.",
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        breadcrumb: { "@id": `${siteConfig.url}/export#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/export#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Export", item: `${siteConfig.url}/export` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageBanner
        title="Export & International Buyers"
        subtitle="Precision agricultural machinery components manufactured in Nabha, Punjab, India — we welcome export enquiries and are actively expanding to international markets."
        crumbs={[{ label: "Export" }]}
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange" /> International Buyers
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Built in India, ready for export
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Established in <strong className="text-navy">1976</strong>,{" "}
                <strong className="text-navy">{siteConfig.name}</strong> manufactures
                sprockets, pulleys, bearing housings, shafts, hubs, flanges, bushes,
                sleeves, gearbox and reduction assemblies, combine harvester components
                and custom CNC parts from our works in Nabha, Punjab, India.
              </p>
              <p>
                We currently supply customers across India and warmly welcome export
                enquiries, with a particular focus on European OEMs, dealers and
                importers. Every component can be manufactured as per sample, technical
                drawing or custom requirement.
              </p>
              <p>
                International buyers can send a sample, drawing or photo for review. We
                will respond with a quotation, materials and lead time so you can plan
                your sourcing with confidence.
              </p>
              <p>
                Read more about our work as a{" "}
                <Link
                  href="/combine-harvester-spare-parts-manufacturer"
                  className="font-medium text-orange transition-colors hover:text-orange-300"
                >
                  combine harvester spare parts manufacturer
                </Link>{" "}
                and our{" "}
                <Link
                  href="/oem-contract-manufacturing"
                  className="font-medium text-orange transition-colors hover:text-orange-300"
                >
                  OEM &amp; contract manufacturing
                </Link>{" "}
                support.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <QuoteButton href="/contact" size="lg">
                Request a Quote
              </QuoteButton>
              <WhatsAppButton size="lg" message={exportMessage}>
                Send on WhatsApp
              </WhatsAppButton>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <ul className="grid gap-3 rounded-2xl border border-navy/10 bg-steel-light/50 p-6 sm:p-8">
              {[
                "Manufacturer since 1976, 400+ repeat customers",
                "Sample, drawing and custom-size manufacturing",
                "Reverse engineering of old / discontinued parts",
                "In-house CNC turning, VMC milling and grinding",
                "Inspected before dispatch; assemblies tested",
                "Export enquiries welcome — Europe and beyond",
              ].map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {h}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* How export orders work */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process for international orders"
            subtitle="From first enquiry to dispatch, every step is confirmed in writing."
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                  <span className="font-heading text-4xl font-bold text-orange/20">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Export details */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Export Details"
            title="What international buyers should know"
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {details.map((d) => (
              <StaggerItem key={d.title}>
                <div className="h-full rounded-2xl border border-navy/10 bg-steel-light/40 p-6">
                  <h3 className="font-heading text-base font-semibold text-navy">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {d.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        title="Sourcing from overseas?"
        titleHighlight="Let's talk export."
        subtitle="Send your sample, drawing or product photo and our team will respond with a quotation and lead time for your market."
      />
    </>
  );
}
