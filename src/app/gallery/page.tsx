import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery — Factory, CNC Machining & Finished Components",
  description:
    "View our gallery of gearbox assemblies, CNC machining, agricultural components, workshop and finished products manufactured by DISHA GEARWORKS.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | DISHA GEARWORKS",
    description:
      "A look inside our factory — machines, workshop and manufacturing in progress at DISHA GEARWORKS, Nabha, Punjab.",
    url: `${siteConfig.url}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="A look inside our factory — machines, workshop and manufacturing in progress. Tap any photo or video to view it up close."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="bg-white py-20" aria-labelledby="gallery-heading">
        <div className="container-x">
          <h2 id="gallery-heading" className="sr-only">
            Factory, workshop and finished component photos &amp; videos
          </h2>
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
