/**
 * Manufacturing capabilities — from the DISHA GEARWORKS brochure.
 * Used on the Home preview and the /capabilities page. Icons are referenced
 * by key (see IconMap in /src/components/icons.tsx).
 */

export type Capability = {
  key: string;
  title: string;
  description: string;
  /** icon name — see /src/components/icons.tsx */
  icon: string;
};

export const capabilities: Capability[] = [
  {
    key: "cnc-turning",
    title: "CNC Turning",
    description:
      "High-precision CNC turning for shafts, sleeves and cylindrical components with consistent tolerances across every batch.",
    icon: "turning",
  },
  {
    key: "cnc-milling",
    title: "CNC Milling",
    description:
      "Multi-axis CNC milling for complex geometries, slots and contoured surfaces — accurate, repeatable and production ready.",
    icon: "milling",
  },
  {
    key: "drilling",
    title: "Drilling",
    description:
      "Accurate drilling of holes to precise diameters and depths, with clean finishes and reliable positional accuracy.",
    icon: "drill",
  },
  {
    key: "boring",
    title: "Boring",
    description:
      "Precision boring for enlarging and finishing internal diameters to exact tolerances and superior surface quality.",
    icon: "boring",
  },
  {
    key: "tapping",
    title: "Tapping",
    description:
      "Internal threading and tapping for secure, accurate fastening across a wide range of components.",
    icon: "tapping",
  },
  {
    key: "precision-machining",
    title: "Precision Machining",
    description:
      "Tight-tolerance machining backed by in-process inspection to meet exacting engineering specifications.",
    icon: "precision",
  },
  {
    key: "batch-production",
    title: "Batch Production",
    description:
      "Efficient small to large batch production with consistent output and competitive lead times.",
    icon: "batch",
  },
  {
    key: "prototype-development",
    title: "Prototype Development",
    description:
      "From a single prototype to mass production — rapid, accurate development of new and replacement parts.",
    icon: "prototype",
  },
  {
    key: "oem-manufacturing",
    title: "OEM Manufacturing",
    description:
      "Trusted OEM partner producing branded parts to specification with dependable quality and on-time delivery.",
    icon: "oem",
  },
  {
    key: "custom-component-development",
    title: "Custom Component Development",
    description:
      "Components developed and manufactured to your drawings, samples or reverse-engineered designs.",
    icon: "custom",
  },
];
