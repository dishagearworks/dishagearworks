import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTASection } from "@/components/CTASection";
import { SampleDrawingCTA } from "@/components/SampleDrawingCTA";
import { QuoteButton } from "@/components/QuoteButton";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { products } from "@/config/products";
import { capabilities } from "@/config/capabilities";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Agricultural Machinery Spare Parts Manufacturer Since 1976",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline} Since ${siteConfig.since}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />

      {/* Product categories preview */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Products"
            title="Components engineered for agricultural machinery"
            subtitle="A complete range of precision parts and assemblies for combine harvesters and farm equipment."
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProductCard product={p} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-12 text-center">
            <QuoteButton href="/products" variant="secondary">
              View All Products
            </QuoteButton>
            <p className="mt-5 text-sm text-slate-500">
              Sourcing in volume? See why we&apos;re a trusted{" "}
              <Link
                href="/combine-harvester-spare-parts-manufacturer"
                className="font-medium text-orange transition-colors hover:text-orange-300"
              >
                combine harvester spare parts manufacturer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing capabilities preview (dark) */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-metal-texture" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service manufacturing capabilities"
            subtitle="From CNC turning and milling to OEM and contract manufacturing — all under one roof."
            light
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.slice(0, 4).map((c, i) => (
              <StaggerItem key={c.key} className="h-full">
                <CapabilityCard capability={c} dark index={String(i + 1).padStart(2, "0")} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-12 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-orange transition-colors hover:text-orange-300"
            >
              Explore all capabilities →
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <SampleDrawingCTA />
      <CTASection />
    </>
  );
}
