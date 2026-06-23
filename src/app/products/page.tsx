import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

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
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProductCard product={p} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
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
