import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./motion/FadeIn";
import { CubeIcon } from "./icons";
import { siteConfig } from "@/config/site";

type MaterialsSectionProps = {
  /** dark=true → styled for dark navy backgrounds */
  dark?: boolean;
};

/** "Materials We Work With" grid — sourced from siteConfig.materials. */
export function MaterialsSection({ dark = false }: MaterialsSectionProps) {
  return (
    <section className={dark ? "relative overflow-hidden bg-navy py-20" : "bg-white py-20"}>
      {dark && <div className="pointer-events-none absolute inset-0 bg-metal-texture" />}
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Materials"
          title="Materials we work with"
          subtitle="We machine a broad range of metals to suit your application, strength and budget."
          light={dark}
        />

        <StaggerContainer className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {siteConfig.materials.map((m) => (
            <StaggerItem key={m}>
              <div
                className={`group flex h-full flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-colors duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-orange/40"
                    : "border-slate-200 bg-steel-light hover:border-orange/40"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <CubeIcon className="h-6 w-6" />
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    dark ? "text-steel" : "text-navy"
                  }`}
                >
                  {m}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
