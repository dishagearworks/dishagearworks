/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deployed on Vercel, which runs the full Next.js build (image optimization,
  // static prerendering, etc.) automatically — no static-export config needed.
  images: {
    // WebP (not AVIF): AVIF's on-the-fly encode was measured at 2–3s per image
    // cold on this content (vs ~0.2–0.7s for WebP) for only ~20–30% smaller
    // files, which left images blank for seconds on first view. WebP keeps the
    // files well-compressed while making them appear promptly.
    formats: ["image/webp"],
    // Keep optimized variants cached far longer than the 60s default so repeat
    // visits and other viewers are served instantly instead of re-encoding.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
