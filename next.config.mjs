/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deployed on Vercel, which runs the full Next.js build (image optimization,
  // static prerendering, etc.) automatically — no static-export config needed.
  images: {
    // Serve modern formats; AVIF first, WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
