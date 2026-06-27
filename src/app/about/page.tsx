import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { SmartImage } from "@/components/PlaceholderImage";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Icon, CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Manufacturing Legacy Since 1976",
  description:
    "DISHA GEARWORKS is a Punjab-based manufacturer of precision agricultural machinery spare parts since 1976, offering CNC machining, OEM and contract manufacturing for domestic and export customers.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | DISHA GEARWORKS",
    description:
      "A manufacturing legacy since 1976 — precision agricultural machinery components engineered in Nabha, Punjab and trusted by 400+ repeat customers across India and abroad.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const values = [
  {
    icon: "precision",
    title: "Quality First",
    text: "Every component is machined to specification and inspected for consistent, dependable performance.",
  },
  {
    icon: "clock",
    title: "Proven Experience",
    text: "A manufacturing legacy since 1976 spanning generations of agricultural machinery components.",
  },
  {
    icon: "globe",
    title: "Domestic & Export",
    text: "Trusted by customers across India and ready to serve international markets.",
  },
];

const highlights = [
  "Established legacy since 1976",
  "400+ loyal repeat customers",
  "Combine harvester components",
  "In-house CNC turning & milling",
  "OEM & custom manufacturing",
  "Prototype to mass production",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/about",
          name: "About Us | DISHA GEARWORKS",
          description:
            "DISHA GEARWORKS is a Punjab-based manufacturer of precision agricultural machinery spare parts since 1976.",
          type: "AboutPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ],
        })}
      />
      <PageBanner
        title="A manufacturing legacy since 1976"
        subtitle="Precision agricultural machinery components, engineered in Punjab and trusted across India and beyond."
        crumbs={[{ label: "About Us" }]}
      />

      {/* Intro + image */}
      <section className="bg-white py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange" /> Who We Are
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Precision components for agricultural machinery
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Established in <strong className="text-navy">1976</strong>,{" "}
                <strong className="text-navy">{siteConfig.name}</strong> is a
                Punjab-based, trusted manufacturer of precision-engineered
                components for combine harvesters and agricultural machinery.
                With nearly 50 years of expertise and more than{" "}
                <strong className="text-navy">400 repeat customers</strong>, we
                are known for quality, consistency and dependable manufacturing.
              </p>
              <p>
                From our works on Patiala Road, Nabha, we produce sprockets,
                pulleys, bearing housings, gears, shafts, hubs, flanges, bushes,
                sleeves, combine harvester components and custom CNC parts. Our
                capabilities span CNC turning, milling, drilling, boring,
                tapping, precision machining, batch production, prototype
                development and OEM manufacturing.
              </p>
              <p>
                We work with carbon steel, alloy steel, stainless steel, cast
                iron, EN series steels and customer-specified materials —
                delivering consistent quality and reliable lead times for
                customers across India and abroad, and building long-term
                partnerships founded on trust.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {h}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="left">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-cardHover">
              <SmartImage
                src="/images/about-collage-v2.jpg"
                alt="DISHA GEARWORKS manufacturing facility — CNC machining, foundry and finished components"
                label="Manufacturing Facility"
                ratio="aspect-[2/3]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <StatsSection />

      {/* Mission / Vision */}
      <section className="bg-steel-light py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <FadeIn direction="right">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow">
                <Icon name="oem" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To manufacture precision agricultural machinery components that
                our customers can depend on — combining experienced
                craftsmanship with modern CNC technology to deliver consistent
                quality, fair pricing and reliable delivery.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow">
                <Icon name="globe" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To be a trusted manufacturing partner for agricultural machinery
                makers in India and across the world — recognised for precision,
                integrity and long-standing customer relationships.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="What guides our work every day"
          />
          <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-slate-200 bg-steel-light p-7 text-center shadow-card">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
