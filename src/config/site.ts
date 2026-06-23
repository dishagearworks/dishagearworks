/**
 * ────────────────────────────────────────────────────────────────────────
 *  DISHA GEARWORKS — central site configuration
 * ────────────────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE. This is the single source of truth for company
 *  details used across the whole website.
 *
 *  • Email          → siteConfig.email
 *  • Phone number    → siteConfig.phone
 *  • Location/address → siteConfig.address
 *  • Logo            → /public/logo.svg (replace with your artwork)
 *  • Product list    → /src/config/products.ts
 *  • Capabilities    → /src/config/capabilities.ts
 *  • Materials       → siteConfig.materials (below)
 * ────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "DISHA GEARWORKS",
  tagline: "Precision Agricultural Machinery Components",
  experienceNote: "Nearly 50 Years of Engineering Excellence",
  footerTagline:
    "Precision Components Built for Performance, Trusted for Generations.",
  since: 1976,
  repeatClients: "400+",

  // ---- Contact details --------------------------------------------------
  email: "Info@dishagearworks.in",
  phone: "+91 62830 11490",
  phoneHref: "tel:+916283011490",
  // Phone numbers (display text + tel: link) — used by the footer and the
  // contact page. The single `phone`/`phoneHref` above remain for schema.
  phones: [
    { display: "+91 62830 11490", href: "tel:+916283011490" },
    { display: "+91 98140 42006", href: "tel:+919814042006" },
  ],

  // WhatsApp click-to-chat (conversion). `number` is digits only (wa.me form).
  whatsapp: {
    number: "916283011490",
    defaultMessage:
      "Hello DISHA GEARWORKS, I need a quotation for agricultural machinery spare parts. I have a sample/drawing/photo. Please guide me.",
  },

  address: {
    line1: "Patiala Road, Nabha",
    line2: "Punjab, India - 147201",
    full: "Patiala Road, Nabha, Punjab, India - 147201",
  },

  businessType: "Manufacturer of Agricultural Machinery Spare Parts",
  industry: "Agricultural Machinery Spare Parts Manufacturing",

  // ---- Materials we work with (from brochure) ---------------------------
  materials: [
    "Carbon Steel",
    "Alloy Steel",
    "Stainless Steel",
    "Cast Iron",
    "EN Series Steels",
    "Customer Specified Materials",
  ],

  // ---- SEO --------------------------------------------------------------
  // Canonical production domain (live on Vercel). Used for canonical URLs,
  // Open Graph, sitemap, robots and JSON-LD — keep in sync with the domain.
  url: "https://dishagearworks.in",
  // Default social-share / Open Graph image (landscape hero, ~1.91:1 friendly).
  ogImage: "/images/hero/combine-sunset.jpg",
  // Approx. geo-coordinates of the works (Nabha, Punjab) for LocalBusiness schema.
  geo: { latitude: 30.3746, longitude: 76.1419 },
  description:
    "Established in 1976, DISHA GEARWORKS is a trusted manufacturer of precision-engineered components for combine harvesters and agricultural machinery — sprockets, pulleys, bearing housings, gears, shafts, hubs, flanges, bushes, sleeves and custom CNC components. 400+ repeat customers across India and abroad.",
  keywords: [
    "agricultural machinery spare parts",
    "combine harvester components",
    "sprockets manufacturer",
    "pulleys",
    "bearing housings",
    "gears",
    "shafts",
    "hubs flanges bushes sleeves",
    "CNC turning",
    "CNC milling",
    "OEM manufacturing",
    "custom CNC components",
    "Nabha Punjab manufacturer",
    "precision machining India",
  ],
} as const;

// Primary navigation links (used by Navbar + Footer)
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing Capabilities", href: "/capabilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export type SiteConfig = typeof siteConfig;
