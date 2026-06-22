import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { products } from "@/config/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of agricultural machinery spare parts: gearbox assemblies (4 & 5 speed), sprockets, pulleys, housings, axles, reduction body assemblies, CNC machined and custom components.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="A complete range of precision spare parts and assemblies for combine harvesters and agricultural machinery. Request a quote on any product below."
        crumbs={[{ label: "Products" }]}
      />

      <section className="bg-white py-20">
        <div className="container-x">
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
