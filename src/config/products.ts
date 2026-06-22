/**
 * ────────────────────────────────────────────────────────────────────────
 *  PRODUCT LIST — edit / add / remove products here.
 *  (Matches the DISHA GEARWORKS brochure product range.)
 * ────────────────────────────────────────────────────────────────────────
 *  To show a real photo for a product:
 *   1. Drop the image into  /public/images/products/
 *      (a good filename is the product's `slug`, e.g. sprockets.jpg)
 *   2. Set  image: "/images/products/sprockets.jpg"
 *  If `image` is left empty (""), a clean branded placeholder is shown
 *  automatically, so the site always looks complete.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Product = {
  slug: string;
  title: string;
  description: string;
  /** Leave "" to use the auto placeholder. */
  image: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "sprockets",
    title: "Sprockets",
    description:
      "Precision-cut sprockets in a wide range of pitches and tooth counts, hardened for durability in demanding field conditions.",
    image: "/images/products/sprockets.jpg",
    features: ["Hardened teeth", "Custom pitches", "Wear resistant"],
  },
  {
    slug: "pulleys",
    title: "Pulleys",
    description:
      "Balanced V-belt and flat pulleys machined to tight tolerances for smooth, vibration-free power transmission.",
    image: "/images/products/pulleys.jpg",
    features: ["Dynamically balanced", "V & flat profiles", "Tight tolerances"],
  },
  {
    slug: "bearing-housings",
    title: "Bearing Housings",
    description:
      "Machined bearing housings that provide precise alignment and rigid structural support for rotating assemblies.",
    image: "/images/products/bearing-housings.jpg",
    features: ["Precise alignment", "Rigid structure", "Sealed fit"],
  },
  {
    slug: "5-speed-gdr-gearbox-assembly",
    title: "5 Speed GDR Gear Box Full Assembly",
    description:
      "Complete 5-speed GDR gearbox full assembly engineered for combine harvesters — built for high torque, smooth shifting and long, dependable service life.",
    image: "",
    features: ["5 forward speeds", "High torque", "OEM grade"],
  },
  {
    slug: "4-speed-gdr-gearbox-assembly",
    title: "4 Speed GDR Gearbox Full Assembly",
    description:
      "Robust 4-speed GDR gearbox full assembly for agricultural machinery, delivering reliable power transmission in demanding field conditions.",
    image: "/images/products/4-speed-gdr-gearbox-assembly.jpg",
    features: ["4 forward speeds", "Heavy duty", "Field proven"],
  },
  {
    slug: "reduction-body-assembly",
    title: "Reduction Body Full Assembly",
    description:
      "Complete reduction body full assembly providing reliable gear reduction and dependable, field-tested performance for harvesting equipment.",
    image: "/images/products/reduction-body-assembly.jpg",
    features: ["Reliable reduction", "Assembly ready", "Field tested"],
  },
  {
    slug: "shafts",
    title: "Shafts",
    description:
      "Heavy-duty shafts turned from quality steel and heat-treated to withstand continuous agricultural loads.",
    image: "/images/products/shafts.png",
    features: ["Quality steel", "Heat treated", "High load capacity"],
  },
  {
    slug: "hubs",
    title: "Hubs",
    description:
      "Precision hubs machined for secure mounting and accurate concentricity across machinery assemblies.",
    image: "/images/products/hubs.png",
    features: ["Accurate concentricity", "Secure mounting", "Durable"],
  },
  {
    slug: "flanges",
    title: "Flanges",
    description:
      "Machined flanges for strong, leak-free connections and dependable performance under load.",
    image: "/images/products/flanges.jpg",
    features: ["Leak-free fit", "Strong joints", "Precise machining"],
  },
  {
    slug: "bushes",
    title: "Bushes",
    description:
      "Wear-resistant bushes manufactured to tight tolerances for smooth, reliable and long-lasting operation.",
    image: "/images/products/bushes.jpg",
    features: ["Wear resistant", "Tight tolerances", "Smooth running"],
  },
  {
    slug: "sleeves",
    title: "Sleeves",
    description:
      "Precision sleeves for protection, alignment and durable performance in demanding applications.",
    image: "/images/products/sleeves.png",
    features: ["Precision bore", "Protective fit", "Durable"],
  },
  {
    slug: "combine-harvester-components",
    title: "Combine Harvester Components",
    description:
      "Specialised spare parts and components engineered specifically for combine harvesters and agricultural machinery.",
    image: "/images/products/combine-harvester-components.png",
    features: ["Harvester specific", "Field tested", "OEM grade"],
  },
  {
    slug: "custom-cnc-components",
    title: "Custom CNC Components",
    description:
      "Made-to-order CNC turned and milled components produced to your drawings or samples — ideal for OEM and replacement needs.",
    image: "/images/products/custom-cnc-components.jpg",
    features: ["Built to drawing", "CNC turning & milling", "OEM & replacement"],
  },
];
