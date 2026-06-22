import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our gallery of gearbox assemblies, CNC machining, agricultural components, workshop and finished products manufactured by DISHA GEARWORKS.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="A look inside our factory — machines, workshop and manufacturing in progress. Tap any photo or video to view it up close."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="bg-white py-20">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
