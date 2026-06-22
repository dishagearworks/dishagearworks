# DISHA GEARWORKS — Website

Premium industrial B2B website for **DISHA GEARWORKS**, a manufacturer of
agricultural machinery spare parts (since 1976), built with **Next.js (App
Router) · TypeScript · Tailwind CSS · Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Pages

| Route            | Page                       |
| ---------------- | -------------------------- |
| `/`              | Home                       |
| `/about`         | About Us                   |
| `/products`      | Products                   |
| `/capabilities`  | Manufacturing Capabilities |
| `/gallery`       | Gallery                    |
| `/contact`       | Contact (inquiry form)     |

## Folder structure

```
src/
  app/                 # App Router pages + SEO (layout, sitemap, robots, icon)
    page.tsx           # Home
    about/ products/ capabilities/ gallery/ contact/
    layout.tsx         # Fonts, metadata, Navbar + Footer, JSON-LD
    globals.css        # Theme tokens & base styles
  components/          # Reusable components
    Navbar, Footer, HeroSection, ProductCard, CapabilityCard,
    SectionHeading, QuoteButton, InquiryForm, GalleryGrid,
    StatsSection, CTASection, WhyChooseUs, PageBanner, PlaceholderImage
    icons.tsx          # Inline SVG icon set (no icon dependency)
    motion/FadeIn.tsx  # Framer Motion scroll/stagger helpers
  config/              # ⭐ EDIT YOUR CONTENT HERE
    site.ts            # Company name, email, phone, address, SEO
    products.ts        # Product list
    capabilities.ts    # Manufacturing capabilities
    gallery.ts         # Gallery items + categories
public/
  images/products/     # Drop product photos here
  images/gallery/      # Drop gallery photos here
```

## ✍️ Where to replace things

Everything customer-specific lives in **`src/config/`** — no need to touch the
components.

| What            | File / location                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Email**       | `src/config/site.ts` → `email`                                                  |
| **Phone number**| `src/config/site.ts` → `phone` and `phoneHref` (currently a placeholder)        |
| **Location**    | `src/config/site.ts` → `address`                                                |
| **Product list**| `src/config/products.ts`                                                         |
| **Logo**        | Replace `public/logo.png` with your artwork (keep the filename). Favicon: `src/app/icon.svg` |
| **Product images** | Add files to `public/images/products/`, set `image:` path in `products.ts`   |
| **Gallery images** | Add files to `public/images/gallery/`, set `image:` path in `gallery.ts`     |
| **About/Capabilities photos** | `SmartImage src=""` props in `about/page.tsx` & `capabilities/page.tsx` |
| **Colors / fonts** | `tailwind.config.ts` (palette) and `src/app/layout.tsx` (fonts)              |

### Images
Any image left as `image: ""` automatically shows a clean branded
**placeholder** — so the site always looks complete. To use a real photo:

1. Put the file in `public/images/products/` (or `gallery/`).
2. Set its path, e.g. `image: "/images/products/gearbox.jpg"`.

### Logo
The header and footer load `/public/logo.png`. To use your official brochure
artwork, just replace that file (a horizontal/landscape logo around 320×76
works best). Replace `src/app/icon.svg` to change the browser favicon.

### Inquiry form
With no backend, the form opens the visitor's email client pre-filled to your
address. To connect a real backend, replace the body of `handleSubmit` in
`src/components/InquiryForm.tsx` with a `fetch()` to your API route.

## Tech notes
- Fonts: **Poppins** (headings) + **Inter** (body) via `next/font` (self-hosted, fast).
- Animations: subtle fade-in on scroll, hover lifts, hero entrance — all via Framer Motion, and they respect `prefers-reduced-motion`.
- SEO: per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, and Organization JSON-LD.
- Fully responsive (mobile / tablet / desktop) and accessible (labels, focus states, aria attributes).
