import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { ArrowRightIcon } from "@/components/icons";
import { articles } from "@/config/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resources — Guides for Agricultural Machinery Parts Buyers",
  description:
    "Practical guides on sourcing and specifying agricultural machinery components — sprocket sizing, gear materials, reduction body assemblies, reverse engineering and custom CNC sourcing.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | DISHA GEARWORKS",
    description:
      "Practical guides on sourcing and specifying agricultural machinery components for dealers, OEMs and export buyers.",
    url: `${siteConfig.url}/resources`,
    type: "website",
  },
};

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/resources#webpage`,
        url: `${siteConfig.url}/resources`,
        name: "Resources | DISHA GEARWORKS",
        description:
          "Practical guides on sourcing and specifying agricultural machinery components.",
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        breadcrumb: { "@id": `${siteConfig.url}/resources#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/resources#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageBanner
        title="Resources"
        subtitle="Practical guides to help dealers, OEMs and export buyers specify and source the right agricultural machinery components."
        crumbs={[{ label: "Resources" }]}
      />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="resources-heading">
        <div className="container-x">
          <h2 id="resources-heading" className="sr-only">
            Articles and guides
          </h2>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <Link
                  href={`/resources/${a.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-cardHover"
                >
                  <span className="label-mono text-orange">
                    {a.readMins} min read
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-orange">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-orange">
                    Read article
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
