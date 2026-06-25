import type { ReactNode } from "react";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { getProductBySlug } from "@/config/products";
import { siteConfig } from "@/config/site";
import type { Article } from "@/config/articles";

// Markdown-like prose styling via child selectors (no typography plugin needed).
const prose =
  "mx-auto max-w-3xl text-base leading-relaxed text-slate-600 " +
  "[&>p]:mt-5 " +
  "[&>h2]:mt-10 [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy " +
  "[&>h3]:mt-7 [&>h3]:font-heading [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-navy " +
  "[&>ul]:mt-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul>li]:marker:text-orange " +
  "[&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-5 [&>ol>li]:marker:text-orange " +
  "[&_a]:font-medium [&_a]:text-orange [&_a]:underline [&_a]:decoration-orange/30 [&_a]:underline-offset-2 hover:[&_a]:text-orange-300 " +
  "[&>p>strong]:text-navy";

export function ArticleShell({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  const canonical = `${siteConfig.url}/resources/${article.slug}`;
  const related = article.related
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        inLanguage: "en-IN",
        mainEntityOfPage: canonical,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  };

  const published = new Date(article.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageBanner
        title={article.title}
        subtitle={article.excerpt}
        crumbs={[
          { label: "Resources", href: "/resources" },
          { label: article.title },
        ]}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <p className="mx-auto mb-8 max-w-3xl text-sm text-slate-500">
            {published} · {article.readMins} min read
          </p>
          <div className={prose}>{children}</div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-steel-light py-16 sm:py-20">
          <div className="container-x">
            <SectionHeading
              eyebrow="Related Products"
              title="Components mentioned in this article"
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
      )}

      <CTASection
        title="Need this part made"
        titleHighlight="to your specification?"
        subtitle="Send a sample, drawing or product photo and our team will respond with a quotation and lead time."
      />
    </>
  );
}
