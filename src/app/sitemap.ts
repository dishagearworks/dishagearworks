import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/config/site";
import { products } from "@/config/products";
import { articles } from "@/config/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level navigation pages. Homepage 1.0, the products hub 0.8, others 0.6.
  const pages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href === "/" ? "" : link.href}`,
    lastModified: now,
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : link.href === "/products" ? 0.8 : 0.6,
  }));

  // Individual product detail pages.
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // SEO landing pages (not in the main nav).
  const landingPages: MetadataRoute.Sitemap = [
    "/combine-harvester-spare-parts-manufacturer",
    "/combine-harvester-gearbox-assembly-manufacturer",
    "/oem-contract-manufacturing",
  ].map((p) => ({
    url: `${siteConfig.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Resources hub + articles.
  const resourcesHub: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteConfig.url}/resources/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...landingPages, ...productPages, ...resourcesHub, ...articlePages];
}
