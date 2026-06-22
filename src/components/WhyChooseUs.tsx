import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./motion/FadeIn";
import { Icon } from "./icons";

const reasons = [
  {
    icon: "clock",
    title: "Established Legacy Since 1976",
    text: "Nearly five decades of manufacturing expertise trusted by agricultural machinery makers.",
  },
  {
    icon: "users",
    title: "400+ Loyal Repeat Customers",
    text: "A large base of repeat clients across India and abroad who rely on us order after order.",
  },
  {
    icon: "precision",
    title: "High Precision Manufacturing",
    text: "CNC turning and milling to tight tolerances for accurate, dependable components.",
  },
  {
    icon: "shield",
    title: "Strict Quality Control",
    text: "In-process inspection and rigorous checks ensure consistent quality on every part.",
  },
  {
    icon: "tag",
    title: "Competitive Pricing",
    text: "Fair, transparent pricing without compromising on quality or reliability.",
  },
  {
    icon: "truck",
    title: "Timely Delivery",
    text: "Efficient production and planning to meet your schedules and deadlines.",
  },
  {
    icon: "prototype",
    title: "Prototype to Mass Production",
    text: "From a single prototype to high-volume batches — we scale with your needs.",
  },
  {
    icon: "custom",
    title: "Custom Manufacturing Solutions",
    text: "Components built to your drawings, samples or reverse-engineered designs.",
  },
  {
    icon: "handshake",
    title: "Long-Term Partnership",
    text: "We build lasting relationships founded on trust, consistency and service.",
  },
];

/** "Why choose us" feature grid (white section). */
export function WhyChooseUs() {
  return (
    <section className="relative bg-steel-light py-20">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          index="04"
          title="Built on precision, trust and decades of experience"
          subtitle="A manufacturing partner you can rely on for quality agricultural machinery components."
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="group flex h-full gap-4 rounded-lg border border-navy/10 bg-white p-6 transition-all duration-300 hover:border-orange/40 hover:shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-orange/25 bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange-gradient group-hover:text-white">
                  <Icon name={r.icon} className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {r.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
