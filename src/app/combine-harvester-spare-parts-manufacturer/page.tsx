import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const PATH = "/combine-harvester-spare-parts-manufacturer";

export const metadata: Metadata = {
  // Title already includes the brand — absolute so the layout template
  // doesn't append "| DISHA GEARWORKS" twice.
  title: {
    absolute: "Combine Harvester Spare Parts Manufacturer in India | DISHA GEARWORKS",
  },
  description:
    "DISHA GEARWORKS manufactures combine harvester spare parts, gearbox assemblies, sprockets, pulleys, shafts, bearing housings and custom CNC components in Punjab, India. OEM, export and bulk enquiries welcome.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Combine Harvester Spare Parts Manufacturer in India | DISHA GEARWORKS",
    description:
      "Combine harvester spare parts and agricultural machinery components manufactured in Nabha, Punjab, India since 1976. OEM, export and bulk enquiries welcome.",
    url: `${siteConfig.url}${PATH}`,
    type: "website",
  },
};

const eyebrow =
  "mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange";
const h2 = "font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl";

// Product names → real product routes (verified to exist). Items without a
// dedicated route stay plain text (no broken links).
const productLinks: { label: string; href: string }[] = [
  { label: "Sprockets", href: "/products/sprockets" },
  { label: "Pulleys", href: "/products/pulleys" },
  { label: "Bearing housings", href: "/products/bearing-housings" },
  { label: "4 Speed GDR Gearbox Full Assembly", href: "/products/4-speed-gdr-gearbox-assembly" },
  { label: "5 Speed GDR Gear Box Full Assembly", href: "/products/5-speed-gdr-gearbox-assembly" },
  { label: "Reduction Body Full Assembly", href: "/products/reduction-body-assembly" },
  { label: "Shafts & gear shafts", href: "/products/shafts" },
  { label: "Hubs", href: "/products/hubs" },
  { label: "Flanges", href: "/products/flanges" },
  { label: "Bushes", href: "/products/bushes" },
  { label: "Sleeves", href: "/products/sleeves" },
  { label: "Combine harvester components", href: "/products/combine-harvester-components" },
  { label: "Custom CNC components", href: "/products/custom-cnc-components" },
];
const plainProducts = ["Gearbox assemblies", "OEM parts as per sample or drawing"];

const capabilitiesList = [
  "CNC turning",
  "CNC milling",
  "Drilling",
  "Boring",
  "Tapping",
  "Precision machining",
  "Batch production",
  "Prototype development",
  "OEM manufacturing",
  "Custom component development",
  "Reverse engineering",
  "Inspection before dispatch",
];

const materialsList = [
  "EN8",
  "20MnCr5",
  "Mild steel",
  "Cast iron",
  "Alloy steel",
  "Carbon steel",
  "Stainless steel",
  "EN series steels",
  "Customer-specified materials",
];

const whyChoose = [
  "Manufacturing legacy since 1976",
  "Based in Nabha, Punjab, India",
  `${siteConfig.repeatClients} repeat clients across India and abroad`,
  "Specialised in agricultural machinery components",
  "Combine harvester component experience",
  "In-house CNC turning and milling",
  "OEM and custom manufacturing",
  "Sample, drawing and photo based manufacturing",
  "Reverse engineering support",
  "Small to large batch production",
  "Domestic and export enquiries welcome",
  "Inspection before dispatch",
];

const whoWeSupply = [
  "Combine harvester manufacturers",
  "Agricultural machinery manufacturers",
  "OEMs",
  "Spare parts traders",
  "Dealers and distributors",
  "Repair workshops",
  "Aftermarket spare parts suppliers",
  "Export buyers and importers",
  "Bulk buyers",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you manufacture combine harvester spare parts?",
    a: "Yes. DISHA GEARWORKS manufactures combine harvester spare parts and agricultural machinery components in Nabha, Punjab, India, with manufacturing experience since 1976.",
  },
  {
    q: "Are you a combine harvester spare part manufacturer in India?",
    a: "Yes. DISHA GEARWORKS is a combine harvester spare part manufacturer in India, supplying durable spare parts and custom CNC machined components for agricultural machinery applications.",
  },
  {
    q: "Can you manufacture combine harvester parts as per sample or drawing?",
    a: "Yes. We manufacture as per sample, technical drawing, CAD file or product photo, including old or discontinued parts through reverse engineering.",
  },
  {
    q: "Do you manufacture gearbox assemblies for combine harvesters?",
    a: "Yes. We manufacture gearbox assemblies including the 4 Speed GDR Gearbox Full Assembly, 5 Speed GDR Gear Box Full Assembly and Reduction Body Full Assembly for Indian combine harvester applications.",
  },
  {
    q: "Do you manufacture sprockets, pulleys, shafts and bearing housings?",
    a: "Yes. Sprockets, pulleys, shafts and bearing housings are core products, manufactured to standard or custom requirements as per sample or drawing.",
  },
  {
    q: "Can you manufacture old or discontinued combine harvester parts?",
    a: "Yes. With a worn sample, clear photo or drawing we can reverse-engineer and manufacture old or discontinued components.",
  },
  {
    q: "Do you accept OEM and bulk orders?",
    a: "Yes. We supply OEMs, dealers, distributors and bulk buyers, with quantities agreed as per order requirement.",
  },
  {
    q: "Do you supply parts outside Punjab and India?",
    a: "We supply customers across India and welcome export enquiries from international buyers, OEMs, dealers and importers.",
  },
  {
    q: "Do you supply to dealers, distributors and export buyers?",
    a: "Yes. We supply OEMs, dealers, distributors, traders, repair workshops and bulk buyers, and we welcome export enquiries from international buyers and importers.",
  },
  {
    q: "What materials do you use for agricultural machinery spare parts?",
    a: "Common materials include EN8, 20MnCr5, mild steel, cast iron, alloy steel, carbon steel, stainless steel, EN series steels and customer-specified materials, selected to suit the application.",
  },
  {
    q: "Can you manufacture custom CNC machined agricultural components?",
    a: "Yes. We offer CNC turning, milling, drilling, boring and tapping for custom and OEM agricultural components, with inspection before dispatch.",
  },
  {
    q: "How can I send my requirement for quotation?",
    a: "Share your sample, drawing, product photo, dimensions, material and quantity through our contact form or WhatsApp, and we will respond with a quotation, material suggestion and lead time.",
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
        name: "Combine Harvester Spare Parts Manufacturer in India | DISHA GEARWORKS",
        description:
          "Combine harvester spare parts and agricultural machinery components manufactured in Nabha, Punjab, India.",
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Combine Harvester Spare Parts Manufacturer",
            item: canonical,
          },
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

      {/* HERO */}
      <PageBanner
        title="Combine Harvester Spare Parts Manufacturer in India"
        subtitle="DISHA GEARWORKS manufactures combine harvester spare parts and agricultural machinery components in Nabha, Punjab, India, with manufacturing experience since 1976."
        crumbs={[{ label: "Combine Harvester Spare Parts Manufacturer" }]}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            From CNC machining to complete gearbox assemblies, we supply
            combine harvester and farm machinery parts for OEMs, dealers,
            distributors, repair markets, bulk buyers and export buyers —
            trusted by{" "}
            <strong className="text-navy">
              {siteConfig.repeatClients} repeat clients
            </strong>{" "}
            across India and abroad.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <QuoteButton href="/products" size="lg" variant="outlineDark">
              View Products
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Product Photo</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Overview
          </span>
          <h2 className={h2}>
            Precision Spare Parts for Combine Harvesters and Agricultural
            Machinery
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              DISHA GEARWORKS is a combine harvester spare part manufacturer in
              India, supplying durable spare parts and custom CNC machined
              components for agricultural machinery applications.
            </p>
            <p>
              As an established combine harvester spare parts manufacturer in
              India, DISHA GEARWORKS produces precision components using modern
              CNC machining alongside decades of hands-on manufacturing
              knowledge. We support OEM supply as well as sample-based and
              drawing-based manufacturing, so buyers can source both standard
              and fully custom parts from one workshop.
            </p>
            <p>
              Our work covers reverse engineering of old or discontinued parts,
              prototype development and batch production — from a single trial
              piece to regular bulk requirements. Every component is inspected
              before dispatch, and gearbox and reduction assemblies are tested.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="range-heading">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Product Range
          </span>
          <h2 id="range-heading" className={h2}>
            Combine Harvester Spare Parts We Manufacture
          </h2>
          <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLinks.map((p) => (
              <StaggerItem key={p.href}>
                <Link
                  href={p.href}
                  className="flex items-center gap-2.5 rounded-lg border border-navy/10 bg-steel-light/40 px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-orange/40 hover:text-orange"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-orange" />
                  {p.label}
                </Link>
              </StaggerItem>
            ))}
            {plainProducts.map((p) => (
              <StaggerItem key={p}>
                <span className="flex items-center gap-2.5 rounded-lg border border-navy/10 bg-steel-light/40 px-4 py-3 text-sm font-medium text-navy">
                  <CheckIcon className="h-4 w-4 shrink-0 text-orange" />
                  {p}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-6 text-sm text-slate-500">
            Browse every component on our{" "}
            <Link href="/products" className="font-medium text-orange hover:text-orange-300">
              products page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CUSTOM MANUFACTURING */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className={eyebrow}>
              <span className="h-px w-6 bg-orange" /> Custom Manufacturing
            </span>
            <h2 className={h2}>
              Manufacturing as per Sample, Drawing or Product Photo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Send us what you have and we will manufacture to match. There is
              no need for a finished drawing — a worn part or a clear photo is
              often enough to get started.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Product sample",
                "Technical drawing",
                "CAD file",
                "Product photo",
                "Dimensions",
                "Material requirement",
                "Quantity requirement",
                "Application details",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy">
              We manufacture for
            </h3>
            <ul className="mt-4 grid gap-3">
              {[
                "OEM supply",
                "Replacement needs",
                "Repair markets",
                "Aftermarket supply",
                "Old or discontinued parts",
                "Bulk production",
                "Export enquiries",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton size="md">Send Drawing / Product Photo</WhatsAppButton>
              <QuoteButton href="/contact" size="md" variant="outlineDark">
                Request a Quote
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITIES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Capabilities
          </span>
          <h2 className={h2}>CNC and VMC Manufacturing Capabilities</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilitiesList.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-navy">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            See the full breakdown on our{" "}
            <Link href="/capabilities" className="font-medium text-orange hover:text-orange-300">
              manufacturing capabilities page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Materials
          </span>
          <h2 className={h2}>Materials We Work With</h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {materialsList.map((m) => (
              <li
                key={m}
                className="inline-flex items-center rounded-sm border border-navy/10 bg-white px-3 py-1.5 text-sm font-medium text-navy"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Material selection depends on the application, load, wear
            resistance, strength requirement and customer specification. If you
            are unsure, share the application and we will recommend a suitable
            material.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Why Us
          </span>
          <h2 className={h2}>Why Choose DISHA GEARWORKS?</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm text-navy">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Who We Supply
          </span>
          <h2 className={h2}>Who We Supply</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeSupply.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm text-navy">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BULK SUPPLY & EXPORT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Bulk &amp; Export
          </span>
          <h2 className={h2}>Bulk Supply and Export Enquiries</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            We supply customers across India and welcome export enquiries from
            international buyers, OEMs, dealers and importers. Quantities are
            agreed as per order requirement, from trial batches to regular bulk
            supply. Learn more on our{" "}
            <Link href="/export" className="font-medium text-orange hover:text-orange-300">
              export information page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* QUALITY CHECKS */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Quality
          </span>
          <h2 className={h2}>Quality Checks Before Dispatch</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            DISHA GEARWORKS follows a practical, hands-on quality process. Parts
            are checked at the relevant stages and given a final inspection
            before dispatch, so components arrive ready to fit.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Dimensional inspection",
              "Bore and keyway checking",
              "Fitment checking",
              "Surface finish checking",
              "Assembly checking where applicable",
              "Material selection as per application",
              "Batch consistency checks",
              "Final inspection before dispatch",
            ].map((q) => (
              <li key={q} className="flex items-start gap-2.5 text-sm text-navy">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW TO SEND REQUIREMENT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> How to Order
          </span>
          <h2 className={h2}>How to Send Your Requirement</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            Getting a quotation is simple. Whether you are an OEM, dealer,
            distributor, trader, repair workshop, bulk buyer or export buyer,
            the process is the same.
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Share product photo, sample, drawing, CAD file or dimensions",
              "Mention quantity, material requirement and application",
              "Our team reviews manufacturing feasibility",
              "We share quotation and estimated lead time",
              "Production starts after confirmation",
              "Final inspection and dispatch",
            ].map((step, i) => (
              <li
                key={step}
                className="relative h-full rounded-2xl border border-navy/10 bg-steel-light/40 p-6"
              >
                <span className="font-heading text-3xl font-bold text-orange/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-navy">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-wrap gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Product Photo</WhatsAppButton>
          </div>
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

      {/* FINAL CTA */}
      <FadeIn className="container-x py-16 sm:py-20">
        <div className="rounded-3xl border border-navy/10 bg-navy px-6 py-14 text-center shadow-card sm:px-10 sm:py-16">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Need Combine Harvester Spare Parts?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-steel">
            Send us your sample, drawing, product photo or requirement. DISHA
            GEARWORKS will review your component and respond with quotation,
            material suggestion and lead time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Product Photo</WhatsAppButton>
            <QuoteButton href="/contact" size="lg" variant="outline">
              Contact Us
            </QuoteButton>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
