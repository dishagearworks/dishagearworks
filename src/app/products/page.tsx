import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Products — Gearbox Assemblies, Sprockets, Pulleys & CNC Parts",
  description:
    "Explore our range of agricultural machinery spare parts: gearbox assemblies (4 & 5 speed), sprockets, pulleys, housings, axles, reduction body assemblies, CNC machined and custom components.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | DISHA GEARWORKS",
    description:
      "A complete range of precision spare parts and assemblies for combine harvesters and agricultural machinery — manufactured in Nabha, Punjab since 1976.",
    url: `${siteConfig.url}/products`,
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/products",
          name: "Products | DISHA GEARWORKS",
          description:
            "Agricultural machinery spare parts and assemblies manufactured by DISHA GEARWORKS.",
          type: "CollectionPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ],
        })}
      />
      <PageBanner
        title="Our Products"
        subtitle="A complete range of precision spare parts and assemblies for combine harvesters and agricultural machinery. Request a quote on any product below."
        crumbs={[{ label: "Products" }]}
      />

      <section className="bg-white py-20" aria-labelledby="product-range-heading">
        <div className="container-x">
          <h2 id="product-range-heading" className="sr-only">
            Our complete range of agricultural machinery spare parts
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600">
            As a{" "}
            <Link
              href="/combine-harvester-spare-parts-manufacturer"
              className="font-medium text-orange transition-colors hover:text-orange-300"
            >
              combine harvester spare parts manufacturer
            </Link>{" "}
            in Punjab, India, we make every component below to standard or
            custom requirement — as per sample, drawing or product photo.
          </p>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProductCard product={p} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Explore manufacturing categories — SEO landing pages */}
      <section className="bg-steel-light py-16 sm:py-20" aria-labelledby="categories-heading">
        <div className="container-x">
          <h2
            id="categories-heading"
            className="font-heading text-2xl font-bold text-navy sm:text-3xl"
          >
            Explore Manufacturing Categories
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/combine-harvester-spare-parts-manufacturer",
                label: "Combine Harvester Spare Parts Manufacturer",
                text: "Our full range of combine harvester and agricultural machinery spare parts.",
              },
              {
                href: "/combine-harvester-gearbox-assembly-manufacturer",
                label: "Gearbox Assembly Manufacturer",
                text: "4 speed, 5 speed GDR and reduction body full assemblies.",
              },
              {
                href: "/oem-contract-manufacturing",
                label: "OEM & Contract Manufacturing",
                text: "Components made to your drawing or sample for OEMs and B2B buyers.",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex h-full flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-cardHover"
              >
                <h3 className="font-heading text-base font-semibold leading-snug text-navy transition-colors group-hover:text-orange">
                  {c.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {c.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-semibold text-orange">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a custom component?"
        titleHighlight=""
        subtitle="Send us your drawings, samples or specifications and we'll manufacture to your exact requirements."
      />
    </>
  );
}
