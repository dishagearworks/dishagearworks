/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export the whole site as plain static HTML/CSS/JS into ./out so it can be
  // hosted on ANY Hostinger plan (just upload to public_html) — no Node server,
  // no runtime build steps, no chunk-mismatch crashes. The site is 100% static
  // (no APIs / SSR), so nothing is lost.
  output: "export",

  // Generate /products/index.html (not /products.html) so Apache/Hostinger
  // serves clean URLs like /products/ correctly.
  trailingSlash: true,

  images: {
    // The Next image optimizer needs a server; static export can't use it, so
    // serve images as-is (they're already optimized in /public).
    unoptimized: true,
  },
};

export default nextConfig;
