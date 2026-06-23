import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { SmartImage } from "@/components/PlaceholderImage";
import { QuoteButton } from "@/components/QuoteButton";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/config/products";
import { siteConfig } from "@/config/site";

// Statically prerender one page per product at build time.
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  const canonical = `/products/${product.slug}`;
  const title = `${product.title} Manufacturer`;
  const description = `${product.description} Manufactured by ${siteConfig.name}, ${siteConfig.businessType} in Nabha, Punjab since ${siteConfig.since}. Request a quote.`;
  const image = product.image || siteConfig.ogImage;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
      images: [{ url: image, alt: `${product.title} — ${siteConfig.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const canonical = `${siteConfig.url}/products/${product.slug}`;
  const imageUrl = `${siteConfig.url}${product.image || siteConfig.ogImage}`;

  // Product + Breadcrumb structured data for rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${canonical}#product`,
        name: product.title,
        description: product.description,
        image: imageUrl,
        category: "Agricultural Machinery Spare Parts",
        material: [...siteConfig.materials],
        url: canonical,
        brand: { "@type": "Brand", name: siteConfig.name },
        manufacturer: { "@id": `${siteConfig.url}/#organization` },
        additionalProperty: product.features.map((f) => ({
          "@type": "PropertyValue",
          name: "Feature",
          value: f,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${siteConfig.url}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={product.title}
        subtitle={product.description}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      {/* Detail: image + overview */}
      <section className="bg-white py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-card">
            <SmartImage
              src={product.image}
              alt={`${product.title} — agricultural machinery spare part manufactured by ${siteConfig.name}`}
              label={product.title}
              ratio="aspect-[4/3]"
            />
          </div>

          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="h-px w-6 bg-orange" /> Product Overview
            </span>
            <h2 className="font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
              {product.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {product.description}
            </p>

            {/* Key features */}
            <h3 className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Key Features
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Materials */}
            <h3 className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Materials
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siteConfig.materials.map((m) => (
                <li
                  key={m}
                  className="inline-flex items-center rounded-sm border border-navy/10 bg-steel-light px-2.5 py-1 text-xs font-medium text-navy-600"
                >
                  {m}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <QuoteButton
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                size="lg"
              >
                Request Quote
              </QuoteButton>
              <QuoteButton href="/products" size="lg" variant="outlineDark">
                Back to Products
              </QuoteButton>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Need this part to a custom drawing or sample?{" "}
              <Link
                href="/capabilities"
                className="font-medium text-orange transition-colors hover:text-orange-300"
              >
                See our manufacturing capabilities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Related products — internal linking */}
      <section className="bg-steel-light py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Related Products"
            title="Explore more components"
            subtitle="Precision spare parts and assemblies engineered for combine harvesters and agricultural machinery."
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
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
