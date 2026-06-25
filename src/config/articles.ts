/**
 * ────────────────────────────────────────────────────────────────────────
 *  RESOURCES / BLOG — article metadata (single source of truth).
 *  Article bodies live in their page components under app/resources/<slug>/.
 *  This file powers the listing page, the sitemap and the Article JSON-LD.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Article = {
  slug: string;
  /** SEO H1 / article title. */
  title: string;
  metaTitle: string;
  description: string;
  /** Short summary shown on the listing card. */
  excerpt: string;
  /** ISO date (published). */
  date: string;
  readMins: number;
  /** Related product slugs to cross-link. */
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "combine-harvester-sprocket-size-guide",
    title: "How to Identify the Right Combine Harvester Sprocket Size",
    metaTitle: "How to Identify the Right Combine Harvester Sprocket Size",
    description:
      "Measure chain pitch, count teeth and check bore and keyway to specify the correct combine harvester sprocket — a practical guide for dealers and OEM buyers.",
    excerpt:
      "Pitch, teeth count, bore and keyway — the four measurements that let you order the correct sprocket the first time.",
    date: "2026-06-10",
    readMins: 6,
    related: ["sprockets", "shafts", "combine-harvester-components"],
  },
  {
    slug: "en8-vs-20mncr5-gear-material",
    title: "EN8 vs 20MnCr5: Choosing Gear Material for Agricultural Gearboxes",
    metaTitle: "EN8 vs 20MnCr5: Choosing Gear Material for Farm Gearboxes",
    description:
      "Understand where EN8 and 20MnCr5 fit in agricultural gearbox components, how carburizing changes performance, and how to specify the right material.",
    excerpt:
      "When a medium-carbon steel is enough, when you need a case-hardening alloy, and why carburizing matters for gear life.",
    date: "2026-06-14",
    readMins: 7,
    related: ["5-speed-gdr-gearbox-assembly", "4-speed-gdr-gearbox-assembly", "shafts"],
  },
  {
    slug: "reduction-body-assembly-explained",
    title: "What a Reduction Body Assembly Does in a Combine Harvester Front Wheel",
    metaTitle: "Reduction Body Assembly in a Combine Harvester — Explained",
    description:
      "What the front-wheel reduction body assembly does in a combine harvester, what it contains, and what to share when ordering a replacement.",
    excerpt:
      "Speed reduction, braking support and power transfer at the front wheels — and how to order the assembly or body only.",
    date: "2026-06-18",
    readMins: 6,
    related: ["reduction-body-assembly", "hubs", "shafts", "bearing-housings"],
  },
  {
    slug: "reverse-engineering-spare-part-from-sample",
    title: "Reverse-Engineering a Discontinued Spare Part from a Sample or Photo",
    metaTitle: "Reverse-Engineering a Discontinued Spare Part from a Sample",
    description:
      "No drawing for an old or discontinued agricultural part? Here is how a worn sample or clear photo becomes a manufactured replacement.",
    excerpt:
      "How a worn-out part, a photo or a hand sketch is turned into a measured, manufacturable component.",
    date: "2026-06-22",
    readMins: 6,
    related: ["custom-cnc-components", "combine-harvester-components", "bushes"],
  },
  {
    slug: "sourcing-custom-cnc-agricultural-components-export",
    title: "A Buyer's Guide to Sourcing Custom CNC Agricultural Components for Export",
    metaTitle: "Buyer's Guide: Sourcing Custom CNC Agricultural Components",
    description:
      "A practical checklist for export buyers sourcing custom CNC agricultural components from India — drawings, materials, tolerances, quantities and lead times.",
    excerpt:
      "What to prepare — drawings, materials, tolerances, quantities — so an Indian CNC supplier can quote accurately for export.",
    date: "2026-06-24",
    readMins: 7,
    related: ["custom-cnc-components", "shafts", "hubs", "flanges"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
