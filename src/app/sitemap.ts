import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/config/site";
import { products } from "@/config/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level navigation pages.
  const pages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href === "/" ? "" : link.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  // Individual product detail pages.
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...productPages];
}
