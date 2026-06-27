import { siteConfig } from "@/config/site";

type Crumb = { name: string; path: string };

/**
 * Build a WebPage (or a WebPage subtype like ContactPage / AboutPage /
 * CollectionPage) + BreadcrumbList @graph for a simple page. The page links to
 * the site-wide WebSite (#website) and Organization (#organization) emitted in
 * the root layout, so nothing is duplicated.
 */
export function pageGraph({
  path,
  name,
  description,
  type = "WebPage",
  breadcrumbs,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ContactPage" | "AboutPage" | "CollectionPage";
  breadcrumbs: Crumb[];
}) {
  const url = `${siteConfig.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.path === "/" ? siteConfig.url : `${siteConfig.url}${b.path}`,
        })),
      },
    ],
  };
}
