import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { SmartImage } from "@/components/PlaceholderImage";
import { QuoteButton } from "@/components/QuoteButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SampleDrawingCTA } from "@/components/SampleDrawingCTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { CheckIcon } from "@/components/icons";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/config/products";
import { siteConfig } from "@/config/site";
import { productWhatsappMessage } from "@/lib/whatsapp";

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
  const image = product.image || siteConfig.ogImage;
  return {
    // metaTitle already includes the brand — mark absolute so the layout
    // template doesn't append "| DISHA GEARWORKS" a second time.
    title: { absolute: product.metaTitle },
    description: product.metaDescription,
    keywords: [...product.keywords],
    alternates: { canonical },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
      images: [{ url: image, alt: product.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [image],
    },
  };
}

const sectionHeadingClass =
  "font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl";
const eyebrowClass =
  "mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange";

export default function ProductDetailPage({ params }: Params) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const canonical = `${siteConfig.url}/products/${product.slug}`;
  const imageUrl = `${siteConfig.url}${product.image || siteConfig.ogImage}`;
  const waNumber = siteConfig.whatsapp.productNumber;
  const waMessage = productWhatsappMessage(product.title);
  const quoteHref = `/contact?product=${encodeURIComponent(product.title)}`;

  // Structured data for product pages. We intentionally do NOT use Product
  // schema: this is a B2B page with no fixed price, reviews or ratings, so a
  // Product node would always trigger Google's "offers/review/aggregateRating"
  // warning. WebPage + BreadcrumbList + FAQPage are valid without that data,
  // and the global Organization (#organization) is emitted in the root layout.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: product.metaTitle,
        description: product.metaDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        primaryImageOfPage: imageUrl,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
          { "@type": "ListItem", position: 3, name: product.title, item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: product.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
        title={product.heading}
        subtitle={product.description}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      {/* ── Overview: image + description + CTAs ───────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="overview-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-card lg:sticky lg:top-28">
            <SmartImage
              src={product.image}
              alt={product.imageAlt}
              label={product.title}
              ratio="aspect-[4/3]"
            />
          </div>

          <div>
            <span className={eyebrowClass}>
              <span className="h-px w-6 bg-orange" /> Overview
            </span>
            <h2 id="overview-heading" className={sectionHeadingClass}>
              {product.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              {product.fullDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <QuoteButton href={quoteHref} size="lg">
                Request a Quote
              </QuoteButton>
              <WhatsAppButton size="lg" message={waMessage} number={waNumber}>
                Send on WhatsApp
              </WhatsAppButton>
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

      {/* ── Technical Specifications (responsive table) ────────────────── */}
      <section className="bg-steel-light py-16 sm:py-20" aria-labelledby="specs-heading">
        <div className="container-x">
          <span className={eyebrowClass}>
            <span className="h-px w-6 bg-orange" /> Technical Specifications
          </span>
          <h2 id="specs-heading" className={sectionHeadingClass}>
            Specifications
          </h2>
          <FadeIn className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {product.specs.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 ? "bg-steel-light/40" : "bg-white"}
                    >
                      <th
                        scope="row"
                        className="w-2/5 px-5 py-3.5 align-top font-heading font-semibold text-navy"
                      >
                        {row.label}
                      </th>
                      <td className="px-5 py-3.5 align-top text-slate-600">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Key Features + Applications ────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div aria-labelledby="features-heading">
            <span className={eyebrowClass}>
              <span className="h-px w-6 bg-orange" /> Key Features
            </span>
            <h2 id="features-heading" className={sectionHeadingClass}>
              Built for the field
            </h2>
            <ul className="mt-6 grid gap-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div aria-labelledby="applications-heading">
            <span className={eyebrowClass}>
              <span className="h-px w-6 bg-orange" /> Applications
            </span>
            <h2 id="applications-heading" className={sectionHeadingClass}>
              Where it is used
            </h2>
            <ul className="mt-6 grid gap-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Materials & Manufacturing + Custom Manufacturing ───────────── */}
      <section className="bg-steel-light py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div aria-labelledby="materials-heading">
            <span className={eyebrowClass}>
              <span className="h-px w-6 bg-orange" /> Materials &amp; Manufacturing
            </span>
            <h2 id="materials-heading" className={sectionHeadingClass}>
              Materials &amp; quality
            </h2>
            <ul className="mt-6 grid gap-3">
              {product.materials.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div aria-labelledby="custom-heading">
            <span className={eyebrowClass}>
              <span className="h-px w-6 bg-orange" /> Custom Manufacturing
            </span>
            <h2 id="custom-heading" className={sectionHeadingClass}>
              Made as per your requirement
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {product.customManufacturing}
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <WhatsAppButton size="md" message={waMessage} number={waNumber}>
                Send on WhatsApp
              </WhatsAppButton>
              <QuoteButton href={quoteHref} size="md" variant="outlineDark">
                Request a Quote
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="container-x">
          <span className={eyebrowClass}>
            <span className="h-px w-6 bg-orange" /> FAQs
          </span>
          <h2 id="faq-heading" className={sectionHeadingClass}>
            Frequently asked questions
          </h2>
          <StaggerContainer className="mt-8 grid gap-4 lg:max-w-4xl">
            {product.faqs.map((f) => (
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

      {/* ── Sample / Drawing conversion section (product number) ────────── */}
      <SampleDrawingCTA productName={product.title} whatsappNumber={waNumber} />

      {/* ── Related products — internal linking ────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
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
