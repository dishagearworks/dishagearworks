import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { CapabilityCard } from "@/components/CapabilityCard";
import { SectionHeading } from "@/components/SectionHeading";
import { MaterialsSection } from "@/components/MaterialsSection";
import { IsoCertification } from "@/components/IsoCertification";
import { CTASection } from "@/components/CTASection";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmartImage } from "@/components/PlaceholderImage";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import { capabilities } from "@/config/capabilities";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities — CNC Machining, Welding, Assembly & Casting",
  description:
    "CNC and conventional turning, milling, drilling, tapping, keyway, broaching, balancing, MIG/ARC welding, gearbox assembly and in-house casting for agricultural machinery components — made to your drawing or sample.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Manufacturing Capabilities | DISHA GEARWORKS",
    description:
      "Modern CNC and VMC machining and end-to-end manufacturing services for agricultural machinery components — all under one roof in Nabha, Punjab.",
    url: `${siteConfig.url}/capabilities`,
    type: "website",
    images: [siteConfig.ogImage],
  },
};

const capabilitiesMessage =
  "Hello DISHA GEARWORKS, I would like a quotation for machined / custom components. I can send a drawing, sample or photo with material and quantity details.";

const process = [
  { step: "01", title: "Inquiry & Design", text: "We review your drawings, samples or requirements and confirm specifications." },
  { step: "02", title: "Material & Setup", text: "Quality raw material is selected and CNC programs and tooling are prepared." },
  { step: "03", title: "Machining", text: "Components are turned and milled to precise tolerances with in-process checks." },
  { step: "04", title: "Inspect & Dispatch", text: "Finished parts are inspected, finished and packed for safe delivery." },
];

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/capabilities",
          name: "Manufacturing Capabilities | DISHA GEARWORKS",
          description:
            "CNC turning, VMC milling, precision machining and OEM/contract manufacturing for agricultural machinery components.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Manufacturing Capabilities", path: "/capabilities" },
          ],
        })}
      />
      <PageBanner
        title="Manufacturing Capabilities"
        subtitle="Modern CNC machining and end-to-end manufacturing services for agricultural machinery components — all under one roof."
        crumbs={[{ label: "Manufacturing Capabilities" }]}
      />

      {/* Capability cards (dark) */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-metal-texture" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything we manufacture, in-house"
            subtitle="A full suite of precision manufacturing services built around your requirements."
            light
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <StaggerItem key={c.key} className="h-full">
                <CapabilityCard capability={c} dark index={String(i + 1).padStart(2, "0")} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capability detail + image */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <SmartImage
                src="/images/cnc-machining-floor.jpg"
                alt="CNC and VMC machining floor at DISHA GEARWORKS"
                label="CNC Machining Floor"
                ratio="aspect-[5/4]"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" className="order-1 lg:order-2">
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange" /> Precision Engineering
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Modern CNC machining, time-tested expertise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We combine CNC turning and milling with decades of hands-on
              manufacturing knowledge to produce components that meet exacting
              standards — consistently, batch after batch.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Tight-tolerance machining",
                "In-process quality checks",
                "Material selection guidance",
                "Reverse engineering",
                "Small to large batches",
                "Gearbox & reduction assembly",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Heat treatment such as hardening or carburizing is arranged through
              trusted external specialists — it is not carried out in-house, so it
              is sourced only where a part needs it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="bg-steel-light py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear, dependable manufacturing process"
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
          <p className="mt-10 text-sm text-slate-500">
            These capabilities power our work as a{" "}
            <Link
              href="/combine-harvester-spare-parts-manufacturer"
              className="font-medium text-orange transition-colors hover:text-orange-300"
            >
              combine harvester spare parts manufacturer
            </Link>{" "}
            and support{" "}
            <Link
              href="/oem-contract-manufacturing"
              className="font-medium text-orange transition-colors hover:text-orange-300"
            >
              OEM &amp; contract manufacturing
            </Link>{" "}
            for replacement and export requirements.
          </p>
        </div>
      </section>

      {/* What to send for a quotation + enquiry options */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="quote-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange" /> Request a Quotation
            </span>
            <h2
              id="quote-heading"
              className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl"
            >
              What to send for a quotation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              The more detail you share, the faster and more accurate the
              quotation. You do not need a full drawing — a sample or clear photo
              is enough to get started, and we can reverse-engineer worn or
              discontinued parts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <QuoteButton href="/contact" size="lg">
                Request a Quote
              </QuoteButton>
              <WhatsAppButton size="lg" message={capabilitiesMessage}>
                Send on WhatsApp
              </WhatsAppButton>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <ul className="grid gap-3 rounded-2xl border border-navy/10 bg-steel-light/50 p-6 sm:p-8">
              {[
                "A drawing, CAD file, sample or clear photo of the part",
                "Material — or ask us to suggest a suitable one",
                "Quantity — prototype, trial batch or regular bulk",
                "Key dimensions and any critical fits or tolerances",
                "The machine or application the part is used in",
                "Any finish or heat-treatment requirement",
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

      <IsoCertification />

      <MaterialsSection />

      <CTASection />
    </>
  );
}
