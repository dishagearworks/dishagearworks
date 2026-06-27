import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import { getProductBySlug } from "@/config/products";
import { siteConfig } from "@/config/site";

const PATH = "/combine-harvester-gearbox-assembly-manufacturer";

export const metadata: Metadata = {
  title: { absolute: "Combine Harvester Gearbox Assembly Manufacturer | DISHA GEARWORKS" },
  description:
    "Manufacturer of combine harvester gearbox assemblies in India — 4 speed, 5 speed GDR and reduction body assemblies, made with 20MnCr5/EN8 gears and cast iron housing.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Combine Harvester Gearbox Assembly Manufacturer | DISHA GEARWORKS",
    description:
      "4 speed, 5 speed GDR and reduction body assemblies for combine harvesters, manufactured in Nabha, Punjab, India. OEM, export and bulk enquiries welcome.",
    url: `${siteConfig.url}${PATH}`,
    type: "website",
  },
};

const eyebrow =
  "mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange";
const h2 = "font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl";

const assemblySlugs = [
  "5-speed-gdr-gearbox-assembly",
  "4-speed-gdr-gearbox-assembly",
  "reduction-body-assembly",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you manufacture combine harvester gearbox assemblies?",
    a: "Yes. DISHA GEARWORKS manufactures combine harvester gearbox full assemblies in Nabha, Punjab, India, including 5 Speed GDR, 4 Speed GDR and reduction body assemblies.",
  },
  {
    q: "What is the difference between the 4 speed and 5 speed GDR gearbox?",
    a: "Both are full assemblies for Indian combine harvester applications. The 4 Speed GDR configuration, as provided, has 3 forward gears and 1 reverse gear; the 5 Speed GDR provides five forward speeds. Share your machine and sample for the correct match.",
  },
  {
    q: "What materials are used in the gearbox assemblies?",
    a: "Gears are made from 20MnCr5 and EN8 as per component requirement, shafts from EN8 and the housing from cast iron, with carburizing available for selected parts.",
  },
  {
    q: "Are the assemblies tested before dispatch?",
    a: "Yes. Gearbox and reduction assemblies are tested as part of the quality process and inspected before dispatch.",
  },
  {
    q: "Can you manufacture a gearbox assembly as per sample or drawing?",
    a: "Yes. We manufacture as per sample, drawing or custom requirement, including support for older or replacement gearbox assemblies.",
  },
];

export default function Page() {
  const canonical = `${siteConfig.url}${PATH}`;
  const assemblies = assemblySlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Combine Harvester Gearbox Assembly Manufacturer | DISHA GEARWORKS",
        description:
          "Combine harvester gearbox assemblies — 4 speed, 5 speed GDR and reduction body — manufactured in Punjab, India.",
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
            name: "Combine Harvester Gearbox Assembly Manufacturer",
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

      <PageBanner
        title="Combine Harvester Gearbox Assembly Manufacturer in India"
        subtitle="DISHA GEARWORKS manufactures combine harvester gearbox full assemblies — 4 speed, 5 speed GDR and reduction body — in Nabha, Punjab, India."
        crumbs={[{ label: "Combine Harvester Gearbox Assembly Manufacturer" }]}
      />

      {/* Hero CTA + overview */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            We supply complete gearbox assemblies for Indian combine harvester
            applications, built for reliable power transmission, heavy load
            capacity and dependable service life. Each assembly includes the
            required gears, shafts, bearings and housing as per the final
            assembly requirement, and is tested before dispatch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton href="/contact" size="lg">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="lg">Send Drawing / Product Photo</WhatsAppButton>
            <QuoteButton href="/products" size="lg" variant="outlineDark">
              View Products
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Assemblies we manufacture */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gearbox Assemblies"
            title="Gearbox Assemblies We Manufacture"
            subtitle="Complete, field-tested assemblies for combine harvesters — supplied as full assemblies or as per your requirement."
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assemblies.map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProductCard product={p} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Materials & build */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className={eyebrow}>
              <span className="h-px w-6 bg-orange" /> Materials &amp; Build
            </span>
            <h2 className={h2}>Built for demanding field conditions</h2>
            <ul className="mt-6 grid gap-3">
              {[
                "Gears in 20MnCr5 / EN8 as per component requirement",
                "Shafts in EN8",
                "Cast iron housing",
                "Carburizing available for selected gearbox parts",
                "Precision-focused gear alignment and timing",
                "Assemblies tested and inspected before dispatch",
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
              <span className="h-px w-6 bg-orange" /> Applications
            </span>
            <h2 className={h2}>Where these assemblies are used</h2>
            <ul className="mt-6 grid gap-3">
              {[
                "Combine harvester gearbox replacement",
                "OEM combine harvester assembly supply",
                "Front-wheel reduction and braking support (reduction body)",
                "Agricultural machinery power transmission",
                "Dealer, distributor and export spare-part supply",
              ].map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <span className={eyebrow}>
            <span className="h-px w-6 bg-orange" /> Custom Manufacturing
          </span>
          <h2 className={h2}>Made as per sample, drawing or requirement</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Share your gearbox model, sample photos, drawings, quantity and
            application details for an accurate quotation. We support OEM,
            replacement and bulk requirements, and can manufacture older or
            discontinued assemblies through reverse engineering. See our{" "}
            <Link href="/capabilities" className="font-medium text-orange hover:text-orange-300">
              manufacturing capabilities
            </Link>{" "}
            or read about us as a{" "}
            <Link
              href="/combine-harvester-spare-parts-manufacturer"
              className="font-medium text-orange hover:text-orange-300"
            >
              combine harvester spare parts manufacturer
            </Link>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <QuoteButton href="/contact" size="md">
              Request a Quote
            </QuoteButton>
            <WhatsAppButton size="md">Send Drawing / Product Photo</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
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
                <div className="rounded-xl border border-navy/10 bg-steel-light/40 p-5 sm:p-6">
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
            Need a Combine Harvester Gearbox Assembly?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-steel">
            Send your gearbox sample, drawing or product photo with your machine
            details. We&apos;ll respond with a quotation, material suggestion and
            lead time.
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
