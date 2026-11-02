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
      "High-precision CNC turning for shafts, sleeves and cylindrical components with consistent results across the batch.",
    icon: "turning",
  },
  {
    key: "cnc-milling",
    title: "CNC Milling",
    description:
      "CNC milling for slots, flats, contours and more complex geometries — accurate and repeatable in production.",
    icon: "milling",
  },
  {
    key: "conventional-turning",
    title: "Conventional Turning",
    description:
      "Conventional lathe turning for larger, simpler or one-off turned parts alongside our CNC work.",
    icon: "turning",
  },
  {
    key: "drilling",
    title: "Drilling",
    description:
      "Drilling of holes to the required diameters and depths with clean finishes and reliable positions.",
    icon: "drill",
  },
  {
    key: "boring",
    title: "Boring",
    description:
      "Boring to enlarge and finish internal diameters where a close, accurate bore is needed.",
    icon: "boring",
  },
  {
    key: "tapping-keyway",
    title: "Tapping & Keyway",
    description:
      "Internal threading, tapping and keyway cutting for secure fitment and positive, non-slip drive.",
    icon: "tapping",
  },
  {
    key: "broaching",
    title: "Broaching",
    description:
      "Broaching for keyways and internal profiles that need an accurate, repeatable form.",
    icon: "boring",
  },
  {
    key: "balancing",
    title: "Balancing",
    description:
      "Rotating parts such as pulleys are balanced to run smoother and reduce vibration in service.",
    icon: "precision",
  },
  {
    key: "welding",
    title: "MIG & ARC Welding",
    description:
      "In-house MIG and ARC welding for fabricated and joined components.",
    icon: "gear",
  },
  {
    key: "gearbox-assembly",
    title: "Gearbox & Reduction Assembly",
    description:
      "Assembly of gearbox and reduction sets, built up as complete units to your requirement.",
    icon: "cube",
  },
  {
    key: "casting",
    title: "In-house Casting",
    description:
      "In-house casting to produce blanks and bodies that are then machined to the finished part.",
    icon: "gear",
  },
  {
    key: "precision-machining",
    title: "Precision Machining",
    description:
      "Tight-tolerance machining with in-process checks to meet the drawing or sample requirement.",
    icon: "precision",
  },
  {
    key: "batch-production",
    title: "Batch Production",
    description:
      "Small to large batch production with consistent output, from trial runs to regular supply.",
    icon: "batch",
  },
  {
    key: "prototype-development",
    title: "Prototype Development",
    description:
      "From a single prototype to full production — development of new and replacement parts.",
    icon: "prototype",
  },
  {
    key: "oem-manufacturing",
    title: "OEM Manufacturing",
    description:
      "OEM supply of components made to your specification, drawing or sample.",
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
