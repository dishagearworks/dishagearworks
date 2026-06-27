import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const PATH = "/oem-contract-manufacturing";

export const metadata: Metadata = {
  title: { absolute: "OEM & Contract Manufacturing — Agri Components | DISHA GEARWORKS" },
  description:
    "OEM and contract manufacturing of agricultural machinery components in Punjab, India. CNC turning, VMC milling and assembly as per your drawing, sample or design.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "OEM & Contract Manufacturing | DISHA GEARWORKS",
    description:
      "Reliable OEM and contract manufacturing partner for agricultural machinery components in Nabha, Punjab, India — made to your drawing, sample or design.",
    url: `${siteConfig.url}${PATH}`,
    type: "website",
  },
};

const eyebrow =
  "mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange";
const h2 = "font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl";

const process = [
  { step: "01", title: "Share drawing or sample", text: "Send a drawing, CAD file, sample or product photo with dimensions, material and quantity." },
  { step: "02", title: "Feasibility & quotation", text: "We review manufacturability and respond with a quotation, material suggestion and lead time." },
  { step: "03", title: "Sampling / first article", text: "Where required, a first article or sample is produced and confirmed before the main run." },
  { step: "04", title: "Production & inspection", text: "Components are machined in batch, inspected before dispatch, and assemblies are tested." },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you manufacture components to our own drawing or sample?",
    a: "Yes. DISHA GEARWORKS manufactures agricultural machinery components as per your drawing, CAD file, sample or product photo, including reverse engineering of existing parts.",
  },
  {
    q: "What order quantities do you handle?",
    a: "From prototypes and first articles to regular bulk runs. Quantities are agreed as per order requirement rather than a fixed minimum.",
  },
  {
    q: "What materials and processes are available?",
    a: "CNC turning and VMC milling in EN8, 20MnCr5, mild steel, cast iron, alloy steel, stainless steel and customer-specified materials, with drilling, boring, tapping and grinding as required.",
  },
  {
    q: "Can you supply OEMs, importers and export buyers?",
    a: "Yes. We work with OEMs, dealers, distributors and importers, and welcome export enquiries from international buyers.",
  },
  {
    q: "How do you maintain consistency across batches?",
    a: "Parts are checked with dimensional, bore/keyway, fitment and surface-finish inspection, with batch consistency checks and a final inspection before dispatch.",
  },
];

export default function Page() {
  const canonical = `${siteConfig.url}${PATH}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "OEM & Contract Manufacturing | DISHA GEARWORKS",
        description:
          "OEM and contract manufacturing of agricultural machinery components in Punjab, India, made to drawing, sample or design.",
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "OEM & Contract Manufacturing", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageBanner
        title="OEM & Contract Manufacturing for Agricultural Machinery Components"
        subtitle="DISHA GEARWORKS is a manufacturing partner for OEMs, dealers and importers — agricultural machinery components made to your drawing, sample or design in Nabha, Punjab, India."
        crumbs={[{ label: "OEM & Contract Manufacturing" }]}
      />

      {/* Overview + CTA */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            With a manufacturing legacy since 1976, we help OEMs and B2B buyers
            produce agricultural machinery components reliably and repeatably.
            You bring the drawing, sample or requirement; we handle CNC turning,
            VMC milling, finishing, inspection and dispatch — so you get
            consistent parts without managing the shop floor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Sample</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* What we offer OEMs */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className={eyebrow}>
              <span className="h-px w-6 bg-orange" /> What We Offer
            </span>
            <h2 className={h2}>A dependable manufacturing partner</h2>
            <ul className="mt-6 grid gap-3">
              {[
                "Manufacturing as per drawing, CAD, sample or product photo",
                "Reverse engineering of existing or discontinued parts",
                "CNC turning and VMC milling in-house",
                "Prototype, first-article, small-batch and bulk production",
                "Material selection guidance per application",
                "Inspection before dispatch; assemblies tested",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className={eyebrow}>
              <span className="h-px w-6 bg-orange" /> Who We Serve
            </span>
            <h2 className={h2}>Built for B2B buyers</h2>
            <ul className="mt-6 grid gap-3">
              {[
                "OEM agricultural machinery manufacturers",
                "Combine harvester and tractor parts businesses",
                "Dealers and distributors",
                "Importers and export buyers",
                "Repair and replacement-part suppliers",
                "Industrial buyers needing custom machined components",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear contract-manufacturing process"
            subtitle="From drawing to dispatch, every step is confirmed in writing."
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-steel-light/40 p-7">
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
          <p className="mt-8 text-sm text-slate-500">
            See our full{" "}
            <Link href="/capabilities" className="font-medium text-orange hover:text-orange-300">
              manufacturing capabilities
            </Link>
            , explore{" "}
            <Link href="/products/custom-cnc-components" className="font-medium text-orange hover:text-orange-300">
              custom CNC components
            </Link>
            , or read about{" "}
            <Link href="/export" className="font-medium text-orange hover:text-orange-300">
              export enquiries
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-steel-light py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> FAQs
          </span>
          <h2 id="faq-heading" className={h2}>
            Frequently Asked Questions
          </h2>
          <StaggerContainer className="mt-8 grid gap-4 lg:max-w-4xl">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <div className="rounded-xl border border-navy/10 bg-white p-5 sm:p-6">
                  <h3 className="font-heading text-base font-semibold text-navy">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <FadeIn className="container-x py-16 sm:py-20">
        <div className="rounded-3xl border border-navy/10 bg-navy px-6 py-14 text-center shadow-card sm:px-10 sm:py-16">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Have a Drawing or Sample to Quote?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-steel">
            Send your drawing, sample, material and quantity. We&apos;ll review
            feasibility and respond with a quotation and lead time for your OEM or
            contract requirement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Sample</WhatsAppButton>
            <QuoteButton href="/contact" size="lg" variant="outline">
              Contact Us
            </QuoteButton>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
