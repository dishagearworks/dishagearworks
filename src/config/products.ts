/**
 * ────────────────────────────────────────────────────────────────────────
 *  PRODUCT LIST — single source of truth for product pages.
 *  Content sourced from the DISHA GEARWORKS SEO Product Content Pack.
 *  Wording is intentionally safe/factual ("as per requirement", "for Indian
 *  combine harvester applications") — no overclaiming.
 * ────────────────────────────────────────────────────────────────────────
 *  Images live in /public/images/products/. Leave `image: ""` to show the
 *  branded placeholder automatically.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Spec = { label: string; value: string };
export type FAQ = { q: string; a: string };

export type Product = {
  slug: string;
  /** Short catalogue name — used in cards, nav, breadcrumbs, related links. */
  title: string;
  /** SEO-friendly H1 shown on the detail page. */
  heading: string;
  /** Short intro / product-card description. */
  description: string;
  /** Leave "" to use the auto placeholder. */
  image: string;
  /** Descriptive alt text for the product image. */
  imageAlt: string;
  /** SEO meta. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Full product description paragraphs. */
  fullDescription: string[];
  /** Technical specification rows. */
  specs: Spec[];
  features: string[];
  applications: string[];
  /** Materials & manufacturing detail bullets. */
  materials: string[];
  customManufacturing: string;
  faqs: FAQ[];
  /** Slugs of related products to cross-link. */
  related: string[];
  /** Product-specific CTA line. */
  ctaText: string;
};

export const products: Product[] = [
  {
    slug: "sprockets",
    title: "Sprockets",
    heading: "Simplex Sprockets for Combine Harvesters and Agricultural Machinery",
    description:
      "EN8 and mild steel simplex sprockets with 3/4 inch chain pitch, 13–70 teeth range and custom bore options for agricultural machinery applications.",
    image: "/images/products/sprockets.jpg",
    imageAlt:
      "Simplex sprocket for combine harvester chain drive manufactured by DISHA GEARWORKS",
    metaTitle: "Sprockets Manufacturer for Agricultural Machinery | DISHA GEARWORKS India",
    metaDescription:
      "Simplex sprockets in EN8/MS with 3/4 inch pitch, 13–70 teeth, custom bore and bulk supply for agricultural machinery.",
    keywords: [
      "sprockets manufacturer India",
      "combine harvester sprockets",
      "agricultural machinery sprockets",
      "EN8 sprockets",
      "simplex sprocket manufacturer",
      "sprocket manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures simplex sprockets for combine harvesters, tractors and agricultural machinery applications. These sprockets are suitable for buyers who need standard or custom sprockets for chain drive systems used in demanding field conditions.",
      "The provided specification includes 3/4 inch chain pitch and a teeth count range from 13 to 70 teeth. Bore options can include plain bore, keyway, spline, taper bore or custom bore as per sample or drawing. Materials used include EN8 and mild steel. Tempering is available for hardened teeth as per product requirement.",
      "DISHA GEARWORKS can manufacture sprockets as per sample, drawing, custom pitch, tooth count, bore type and application requirement. Sprockets can be used in chain drive, feeder, elevator, transmission and other combine harvester / agricultural machinery areas depending on the machine design.",
      "Each part is inspected before dispatch using measuring tools such as vernier, micrometer, bore gauge, height gauge and custom measuring gauges where required. DISHA GEARWORKS supplies OEMs, exporters, dealers and bulk buyers looking for agricultural machinery sprockets from Punjab, India.",
    ],
    specs: [
      { label: "Product type", value: "Simplex sprockets" },
      { label: "Chain pitch", value: "3/4 inch" },
      { label: "Teeth count range", value: "13–70 teeth" },
      { label: "Bore options", value: "Plain bore, keyway, spline, taper bore and custom bore" },
      { label: "Material", value: "EN8 / mild steel" },
      { label: "Heat treatment", value: "Tempering / hardened teeth as per requirement" },
      { label: "Applications", value: "Chain drive, elevator, feeder, transmission and other agricultural machinery areas" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
      { label: "Target buyers", value: "OEMs, exporters, dealers and bulk buyers" },
    ],
    features: [
      "3/4 inch chain pitch",
      "13–70 teeth range",
      "Simplex sprocket manufacturing",
      "Custom bore and keyway options",
      "EN8 and mild steel materials",
      "Suitable for bulk / export enquiries",
    ],
    applications: [
      "Combine harvester chain drives",
      "Feeder and elevator chain systems",
      "Agricultural machinery transmission areas",
      "Tractor and implement chain drive applications",
      "OEM and replacement spare part supply",
    ],
    materials: [
      "EN8 and mild steel sprocket manufacturing",
      "Tempering available for teeth as per requirement",
      "CNC machining and custom bore/keyway options",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Sprockets can be manufactured as per sample, drawing, tooth count, pitch, bore type, keyway, spline or application requirement. Buyers can send an old sprocket photo/sample for reverse engineering.",
    faqs: [
      { q: "What sprocket pitch do you manufacture?", a: "The provided pitch is 3/4 inch. Custom requirements can be reviewed as per sample or drawing." },
      { q: "What teeth count range is available?", a: "The provided teeth count range is 13 to 70 teeth." },
      { q: "Which material is used for sprockets?", a: "EN8 and mild steel are used as per requirement." },
      { q: "Do you manufacture custom sprockets?", a: "Yes. DISHA GEARWORKS manufactures sprockets as per sample, drawing and custom requirement." },
      { q: "Are sprocket teeth hardened?", a: "Teeth hardening/tempering is available as per product requirement." },
    ],
    related: ["pulleys", "shafts", "hubs", "combine-harvester-components", "custom-cnc-components"],
    ctaText:
      "Looking for custom sprockets in bulk? Send tooth count, pitch, bore details or sample photo to DISHA GEARWORKS for a quotation.",
  },
  {
    slug: "pulleys",
    title: "Pulleys",
    heading: "Cast Iron Pulleys for Combine Harvesters and Agricultural Machinery",
    description:
      "Machined and painted cast iron pulleys from 2.5 inch to 14 inch, available in V-belt, flat belt, multi-groove and timing pulley types.",
    image: "/images/products/pulleys.jpg",
    imageAlt:
      "Cast iron pulley for combine harvester manufactured by DISHA GEARWORKS in Punjab, India",
    metaTitle: "Cast Iron Pulley Manufacturer for Agricultural Machinery | DISHA GEARWORKS",
    metaDescription:
      "Cast iron pulleys from 2.5–14 inch with custom bore, keyway, machined and painted finish for agricultural machinery.",
    keywords: [
      "pulley manufacturer India",
      "cast iron pulley manufacturer",
      "combine harvester pulley",
      "agricultural machinery pulleys",
      "V belt pulley manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures cast iron pulleys for combine harvesters, tractor implements, threshers and general agricultural machinery applications. Pulleys are used for reliable belt-driven power transmission, and accurate machining is important for alignment, fitment and reduced vibration during operation.",
      "The provided pulley range includes diameters from 2.5 inch to 14 inch. Pulley types can include V-belt, flat belt, multi-groove and timing pulley designs, with belt sections such as A, B, C and other sections reviewed as per requirement. Bore and keyway customization is available as per sample, drawing or machine application.",
      "Pulleys are manufactured in cast iron and supplied with machined and painted finish. Balancing is available as part of the product capability, which helps support smoother operation in rotating applications. Each part is inspected before dispatch using standard and custom measuring tools where required.",
      "DISHA GEARWORKS supplies OEMs, exporters and bulk buyers looking for agricultural machinery pulleys from Punjab, India. Buyers should share pulley type, belt section, outside diameter, bore/keyway details, sample photo or technical drawing for accurate manufacturing and quotation.",
    ],
    specs: [
      { label: "Product type", value: "V-belt, flat belt, multi-groove, timing and custom pulleys" },
      { label: "Diameter range", value: "2.5 inch to 14 inch" },
      { label: "Belt section", value: "A, B, C and other sections as per requirement" },
      { label: "Bore / keyway", value: "Custom bore and keyway available" },
      { label: "Material", value: "Cast iron" },
      { label: "Balancing", value: "Available" },
      { label: "Surface finish", value: "Machined and painted" },
      { label: "Applications", value: "Combine harvesters, tractor implements, threshers and agricultural machines" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "2.5 inch to 14 inch diameter range",
      "Cast iron construction",
      "Custom bore and keyway options",
      "Machined and painted finish",
      "Balancing available",
      "Suitable for OEM / export bulk requirements",
    ],
    applications: [
      "Combine harvester belt drive systems",
      "Tractor implements",
      "Threshers",
      "General agricultural machinery power transmission",
      "OEM and replacement pulley supply",
    ],
    materials: [
      "Cast iron pulley manufacturing",
      "Machined finish and painted finish",
      "Balancing available",
      "Bore/keyway machining as per requirement",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Custom pulleys can be manufactured as per sample, drawing, belt section, diameter, groove profile, bore and keyway details. Buyers should share sample photos or measurement details for faster quotation.",
    faqs: [
      { q: "What types of pulleys do you manufacture?", a: "V-belt, flat belt, multi-groove, timing and custom pulleys can be manufactured as per requirement." },
      { q: "What pulley diameter range is available?", a: "The provided diameter range is 2.5 inch to 14 inch." },
      { q: "Which material is used?", a: "Cast iron is used for the pulleys as provided." },
      { q: "Can bore and keyway be customized?", a: "Yes. Bore and keyway can be manufactured as per sample or drawing." },
      { q: "Are pulleys balanced?", a: "Balancing is available as per the product requirement." },
    ],
    related: ["sprockets", "shafts", "hubs", "custom-cnc-components", "combine-harvester-components"],
    ctaText:
      "Send pulley diameter, belt section, bore/keyway details or product photo to get a quote from DISHA GEARWORKS.",
  },
  {
    slug: "bearing-housings",
    title: "Bearing Housings",
    heading: "Bearing Housings for Combine Harvesters and Tractors",
    description:
      "Custom bearing housings for combine harvesters and tractors, including flange, cast and machined housings with machined bearing seats and painted finish.",
    image: "/images/products/bearing-housings.jpg",
    imageAlt:
      "Custom machined bearing housing for combine harvester manufactured by DISHA GEARWORKS, Punjab India",
    metaTitle: "Bearing Housing Manufacturer for Combine Harvesters | DISHA GEARWORKS",
    metaDescription:
      "Bearing housings for combine harvesters and tractors with machined seats, custom fitment, CI/MS/alloy steel and painted finish.",
    keywords: [
      "bearing housing manufacturer",
      "combine harvester bearing housing",
      "tractor bearing housing",
      "flange housing manufacturer India",
      "custom bearing housing Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures bearing housings for combine harvesters, tractors and agricultural machinery assemblies. Bearing housings are important for supporting rotating shafts, maintaining alignment and protecting bearing fitment in field-use machinery. The product is suitable for OEMs, exporters, dealers and replacement market buyers looking for custom machined housings from Punjab, India.",
      "The product range includes flange housings, custom housings and cast/machined housings as per sample, drawing and application requirement. Bearing sizes supported are those commonly used in combine harvesters and tractors. Materials can include cast iron, mild steel and alloy steel as per part requirement. Bearing seats are machined to tolerance, and sealed or special fitment can be provided where required.",
      "Surface finish options include machined finish and painting. Each part is inspected before dispatch with measuring tools such as vernier, micrometer, bore gauge, height gauge and custom gauges where required. This helps buyers receive housings with proper fitment and alignment for the intended assembly.",
      "For accurate quotation, buyers should share bearing number/size, bore/seat dimensions, mounting hole pattern, housing type, sample photo or drawing.",
    ],
    specs: [
      { label: "Product type", value: "Bearing housings" },
      { label: "Supported sizes", value: "Bearing sizes used in combine harvesters and tractors" },
      { label: "Housing types", value: "Flange housing, custom housing, cast housing and machined housing" },
      { label: "Materials", value: "Cast iron, mild steel, alloy steel" },
      { label: "Bearing seat", value: "Machined to tolerance" },
      { label: "Fitment", value: "Sealed fit / special fitment available as per requirement" },
      { label: "Surface finish", value: "Machined finish and painted finish" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "Custom bearing housing manufacturing",
      "Flange, cast and machined housing options",
      "Machined bearing seats",
      "Sealed / special fitment available",
      "Cast iron, mild steel and alloy steel options",
      "Inspection before dispatch",
    ],
    applications: [
      "Combine harvester rotating assemblies",
      "Tractor assemblies",
      "Shaft support applications",
      "Agricultural machinery bearing support",
      "OEM / replacement spare parts",
    ],
    materials: [
      "Cast iron, mild steel and alloy steel",
      "Machined bearing seat",
      "Machined and painted finish",
      "Inspection with standard / custom measuring tools",
    ],
    customManufacturing:
      "Bearing housings can be manufactured as per sample, drawing, bearing number, mounting hole pattern, seat dimensions and fitment requirement.",
    faqs: [
      { q: "What types of bearing housings do you manufacture?", a: "Flange, custom, cast and machined bearing housings can be manufactured." },
      { q: "Can you machine bearing seats to tolerance?", a: "Yes. Bearing seats are machined to tolerance." },
      { q: "Which materials are available?", a: "Cast iron, mild steel and alloy steel are available as per requirement." },
      { q: "Can you provide sealed or special fitment?", a: "Yes. Sealed fit or special fitment can be provided as per requirement." },
      { q: "Can you manufacture as per sample?", a: "Yes. Manufacturing can be done as per sample and drawing." },
    ],
    related: ["shafts", "hubs", "flanges", "combine-harvester-components", "custom-cnc-components"],
    ctaText:
      "Send bearing size, housing sample, drawing or fitment details to request a bearing housing quotation from DISHA GEARWORKS.",
  },
  {
    slug: "5-speed-gdr-gearbox-assembly",
    title: "5 Speed GDR Gear Box Full Assembly",
    heading: "5 Speed GDR Gearbox Assembly for Combine Harvesters",
    description:
      "Complete 5 Speed GDR Gearbox full assembly for Indian combine harvester applications, manufactured with 20MnCr5/EN8 gears, EN8 shafts and cast iron housing.",
    image: "/images/products/5-speed-gdr-gearbox-assembly.jpg",
    imageAlt:
      "5 Speed GDR Gearbox full assembly for combine harvester manufactured by DISHA GEARWORKS",
    metaTitle: "5 Speed GDR Gearbox Assembly Manufacturer in India | DISHA GEARWORKS",
    metaDescription:
      "5 Speed GDR Gearbox assembly for combine harvesters, made with EN8 shafts, cast iron housing and tested quality by DISHA GEARWORKS.",
    keywords: [
      "5 Speed GDR Gearbox",
      "5 Speed GDR Gearbox assembly",
      "combine harvester gearbox manufacturer",
      "GDR gearbox manufacturer India",
      "combine harvester gearbox assembly Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures 5 Speed GDR Gearbox full assemblies for Indian combine harvester applications, with a strong focus on OEM and export requirements. The assembly is designed for demanding field conditions where reliable power transmission, heavy load capacity, gear alignment and long service life are important for harvesting performance.",
      "The gearbox is supplied as a full assembly and includes the required gearbox components such as gears, shafts, bearings, housing and related internal parts as per the final assembly requirement. Gears are manufactured using 20MnCr5 and EN8 as per component requirement, while shafts are manufactured in EN8 and the housing is made from cast iron. Carburizing is available for gears and selected components where required for wear resistance and service durability.",
      "Each gearbox assembly is inspected before dispatch, and gearbox/reduction assemblies are tested as part of the quality process. DISHA GEARWORKS also supports manufacturing as per sample, drawing and custom requirement, making this product suitable for OEM buyers, dealers, exporters and replacement market customers who need dependable combine harvester gearbox assemblies from Punjab, India.",
      "For the best enquiry response, buyers should share the required gearbox model, sample photos, drawings, quantity requirement and application details.",
    ],
    specs: [
      { label: "Product type", value: "Complete 5 Speed GDR Gearbox full assembly" },
      { label: "Application", value: "Combine harvester applications in India" },
      { label: "Included parts", value: "Full assembly with gears, shafts, bearings, housing and related components as per requirement" },
      { label: "Gear material", value: "20MnCr5 / EN8 as per component requirement" },
      { label: "Shaft material", value: "EN8" },
      { label: "Housing material", value: "Cast iron" },
      { label: "Heat treatment", value: "Carburizing available / used as per component requirement" },
      { label: "Testing", value: "Assembly tested before dispatch" },
      { label: "Target buyers", value: "OEMs, exporters, dealers and replacement market buyers" },
      { label: "Customization", value: "As per sample, drawing and order requirement" },
    ],
    features: [
      "Complete assembly supply",
      "Heavy load capacity for field use",
      "Carburized gears as per requirement",
      "EN8 shafts and cast iron housing",
      "Precision-focused gear alignment and timing",
      "Suitable for OEM and export enquiries",
    ],
    applications: [
      "Combine harvester gearbox replacement",
      "OEM combine harvester assembly supply",
      "Agricultural machinery power transmission",
      "Dealer and exporter spare part supply",
    ],
    materials: [
      "Gears: 20MnCr5 / EN8 as per component requirement",
      "Shafts: EN8",
      "Housing: cast iron",
      "Machined and inspected before dispatch",
      "Carburizing available for selected gearbox parts",
    ],
    customManufacturing:
      "DISHA GEARWORKS can manufacture and supply 5 Speed GDR Gearbox assemblies as per sample, drawing or custom order requirement. Buyers can share product photos, old samples, technical drawings or application details for quotation.",
    faqs: [
      { q: "Do you manufacture 5 Speed GDR Gearbox assemblies for combine harvesters?", a: "Yes. DISHA GEARWORKS manufactures 5 Speed GDR Gearbox full assemblies for Indian combine harvester applications." },
      { q: "What materials are used in the gearbox?", a: "Gears are made using 20MnCr5 and EN8 as per requirement, shafts are made in EN8 and the housing is cast iron." },
      { q: "Is the gearbox tested before dispatch?", a: "Yes. Gearbox and reduction assemblies are tested before dispatch as part of the quality process." },
      { q: "Can you manufacture as per sample or drawing?", a: "Yes. Manufacturing can be done as per sample, drawing and custom requirement." },
      { q: "Who can buy this product?", a: "The product is suitable for OEMs, exporters, dealers, farmers and replacement market buyers." },
    ],
    related: ["4-speed-gdr-gearbox-assembly", "reduction-body-assembly", "shafts", "combine-harvester-components"],
    ctaText:
      "Need a 5 Speed GDR Gearbox assembly? Send your sample, drawing or product photo on WhatsApp and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "4-speed-gdr-gearbox-assembly",
    title: "4 Speed GDR Gearbox Full Assembly",
    heading: "4 Speed GDR Gearbox Assembly for Combine Harvesters",
    description:
      "Robust 4 Speed GDR Gearbox full assembly for combine harvesters, with 3 forward gears and 1 reverse gear, manufactured for OEM and export requirements.",
    image: "/images/products/4-speed-gdr-gearbox-assembly.jpg",
    imageAlt:
      "4 Speed GDR Gearbox full assembly for combine harvester manufactured by DISHA GEARWORKS",
    metaTitle: "4 Speed GDR Gearbox Assembly Manufacturer | DISHA GEARWORKS India",
    metaDescription:
      "4 Speed GDR Gearbox assembly for combine harvesters with EN8 shafts, cast iron housing, carburized gears and tested dispatch quality.",
    keywords: [
      "4 Speed GDR Gearbox",
      "4 Speed GDR Gearbox assembly",
      "combine harvester gearbox supplier",
      "agricultural gearbox manufacturer Punjab",
      "GDR gearbox manufacturer",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures 4 Speed GDR Gearbox full assemblies for Indian combine harvester applications. This gearbox assembly is suitable for buyers who require dependable replacement or OEM supply for agricultural machinery power transmission systems. It is especially relevant for OEMs, exporters, dealers and replacement market buyers looking for consistent manufacturing from Punjab, India.",
      "As provided, the 4 Speed GDR Gearbox configuration includes 3 forward gears and 1 reverse gear. The assembly uses 20MnCr5 and EN8 gears as per component requirement, EN8 shafts and a cast iron housing. Carburizing is used for gears / selected components as per requirement to improve wear resistance in demanding field applications.",
      "The gearbox is supplied as a complete assembly, with internal gearbox parts included as per the final assembly requirement. Each gearbox/reduction assembly is tested before dispatch, and parts are inspected using measuring tools such as vernier, micrometer, bore gauge, height gauge and custom measuring gauges where required.",
      "Buyers should share the existing sample, gearbox photos, drawing, quantity requirement and combine harvester application for accurate quotation.",
    ],
    specs: [
      { label: "Product type", value: "4 Speed GDR Gearbox full assembly" },
      { label: "Configuration", value: "3 forward gears and 1 reverse gear" },
      { label: "Application", value: "Combine harvester applications in India" },
      { label: "Included parts", value: "Complete assembly as per requirement" },
      { label: "Gear material", value: "20MnCr5 / EN8 as per component requirement" },
      { label: "Shaft material", value: "EN8" },
      { label: "Housing material", value: "Cast iron" },
      { label: "Heat treatment", value: "Carburizing as per component requirement" },
      { label: "Testing", value: "Tested before dispatch" },
      { label: "Target buyers", value: "OEMs, exporters, dealers and replacement buyers" },
    ],
    features: [
      "3 forward gears and 1 reverse gear",
      "Complete gearbox assembly supply",
      "Carburizing available for gears / selected parts",
      "EN8 shafts and cast iron housing",
      "Manufactured for Indian combine harvester applications",
      "Suitable for OEM and export enquiries",
    ],
    applications: [
      "Combine harvester gearbox assembly",
      "OEM agricultural machinery production",
      "Replacement spare part supply",
      "Dealer and exporter distribution",
    ],
    materials: [
      "Gear material: 20MnCr5 / EN8",
      "Shaft material: EN8",
      "Housing / body material: cast iron",
      "Machined, inspected and assembly-tested before dispatch",
      "Surface finish as per component requirement",
    ],
    customManufacturing:
      "DISHA GEARWORKS can manufacture 4 Speed GDR Gearbox assemblies as per sample, drawing and custom requirement. This is useful for old/discontinued applications, replacement needs and bulk supply enquiries.",
    faqs: [
      { q: "What is the configuration of the 4 Speed GDR Gearbox?", a: "The provided configuration is 3 forward gears and 1 reverse gear." },
      { q: "Is it used in combine harvesters?", a: "Yes. It is manufactured for Indian combine harvester applications." },
      { q: "What materials are used?", a: "Gears are made from 20MnCr5/EN8 as per requirement, shafts from EN8 and housing from cast iron." },
      { q: "Can you supply for OEM and export orders?", a: "Yes. OEM and export buyers are a main focus, along with dealers and replacement market customers." },
      { q: "Is the assembly tested?", a: "Yes. Gearbox/reduction assemblies are tested before dispatch." },
    ],
    related: ["5-speed-gdr-gearbox-assembly", "reduction-body-assembly", "shafts", "combine-harvester-components"],
    ctaText:
      "Send your 4 Speed GDR Gearbox sample, drawing or requirement details to get a quotation from DISHA GEARWORKS.",
  },
  {
    slug: "reduction-body-assembly",
    title: "Reduction Body Full Assembly",
    heading: "Reduction Body Assembly for Combine Harvester Front Wheel Applications",
    description:
      "Complete reduction body assembly for combine harvester front wheel applications, supplied as assembly or body with hubs, bearings and related components as required.",
    image: "/images/products/reduction-body-assembly.jpg",
    imageAlt:
      "Reduction body full assembly for combine harvester front wheel by DISHA GEARWORKS, Punjab India",
    metaTitle: "Reduction Body Assembly Manufacturer for Combine Harvesters | DISHA GEARWORKS",
    metaDescription:
      "Reduction body assembly for combine harvester front wheels with 20MnCr5 gears, EN8 shafts, bearings and tested dispatch quality.",
    keywords: [
      "reduction body assembly",
      "combine harvester reduction body",
      "front wheel reduction body",
      "agricultural machinery reduction assembly",
      "reduction body manufacturer India",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures Reduction Body Full Assemblies for combine harvester front wheel applications. As provided, the assembly is used in a set of two, with one reduction body on each side of the front wheels. This product is important for buyers who need reliable speed reduction, braking support and power transfer performance in agricultural field conditions.",
      "The assembly can be supplied as a complete unit or as the body only, depending on buyer requirement. The complete assembly may include housing, bearings, reduction body, hubs and related parts as per order requirement. The body/housing material is mild steel as provided, gears are manufactured using 20MnCr5 and shafts are manufactured in EN8. Bearings are included when the assembly is ordered as a full unit.",
      "Reduction body assemblies are tested before dispatch, and individual parts are inspected using measuring instruments such as vernier, micrometer, bore gauge, height gauge and custom measuring gauges where required. Surface finish can include machined and painted finish as per component requirement.",
      "Buyers should share the sample, product photo, side requirement, assembly details and quantity requirement for accurate quotation.",
    ],
    specs: [
      { label: "Product type", value: "Reduction Body Full Assembly" },
      { label: "Application area", value: "Front wheel application in combine harvesters" },
      { label: "Set information", value: "Used as set of 2, one on each side, as provided" },
      { label: "Available as", value: "Complete assembly or body only" },
      { label: "Included parts", value: "Housing, bearing, reduction body, hubs and related parts as per requirement" },
      { label: "Body / housing material", value: "Mild steel" },
      { label: "Gear material", value: "20MnCr5" },
      { label: "Shaft material", value: "EN8" },
      { label: "Main function", value: "Speed reduction, braking support and power transfer" },
      { label: "Testing", value: "Tested before dispatch" },
    ],
    features: [
      "Complete assembly or body-only supply",
      "Front wheel combine harvester application",
      "20MnCr5 gears and EN8 shafts",
      "Bearings included in complete assembly",
      "Machined and painted finish options",
      "Tested before dispatch",
    ],
    applications: [
      "Combine harvester front wheel assembly",
      "Reduction and braking support system",
      "Agricultural machinery replacement assemblies",
      "OEM / export spare part supply",
    ],
    materials: [
      "Body / housing: mild steel",
      "Gears: 20MnCr5",
      "Shafts: EN8",
      "Bearings included in full assembly",
      "Machined and painted finish as required",
    ],
    customManufacturing:
      "DISHA GEARWORKS can supply the reduction body as a complete assembly or as body-only, based on sample, drawing, product photo or order requirement.",
    faqs: [
      { q: "Where is the reduction body used?", a: "As provided, it is used at the front wheels of combine harvesters, usually as a set of two." },
      { q: "Can you supply the complete assembly?", a: "Yes. It can be supplied as a complete assembly or as the body only." },
      { q: "What materials are used?", a: "The body/housing is mild steel, gears are 20MnCr5 and shafts are EN8 as provided." },
      { q: "Are bearings included?", a: "Bearings are included when ordered as a complete assembly." },
      { q: "Is it tested before dispatch?", a: "Yes. Assemblies are tested before dispatch." },
    ],
    related: ["5-speed-gdr-gearbox-assembly", "4-speed-gdr-gearbox-assembly", "hubs", "shafts", "bearing-housings"],
    ctaText:
      "Need a reduction body assembly or body-only supply? Send your sample/photo and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "shafts",
    title: "Shafts",
    heading: "CNC Machined Shafts for Combine Harvesters and Tractors",
    description:
      "EN8 shafts for combine harvesters and tractors, manufactured from 30 mm to 60 mm diameter and up to 6 feet length with turning, grinding, keyway, slotting and threading options.",
    image: "/images/products/shafts.png",
    imageAlt:
      "EN8 CNC machined shaft for combine harvester and tractor by DISHA GEARWORKS, Punjab India",
    metaTitle: "EN8 Shaft Manufacturer for Combine Harvesters & Tractors | DISHA GEARWORKS",
    metaDescription:
      "EN8 shafts from 30–60 mm diameter and up to 6 ft length with CNC turning, grinding, keyway and threading options.",
    keywords: [
      "EN8 shaft manufacturer",
      "combine harvester shaft",
      "tractor shaft manufacturer",
      "CNC machined shafts",
      "agricultural machinery shaft manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures shafts for combine harvesters, tractors and agricultural machinery applications. These include custom machined shafts used in gearbox, transmission, drive and support applications, manufactured as per sample, drawing and order requirement.",
      "The provided shaft range includes diameters from 30 mm to 60 mm and lengths up to 6 feet. Shafts are manufactured in EN8, with CNC turning and grinding available. Keyway, threading, slotting and drilling operations are available as per requirement, making the product suitable for replacement parts, OEM use and export enquiries.",
      "Shafts are inspected before dispatch using measuring tools such as vernier, micrometer, bore gauge, height gauge and custom measuring gauges where required. Heat treatment can be reviewed as per component requirement where applicable.",
      "Buyers searching for EN8 shafts, CNC machined shafts and agricultural machinery shaft manufacturers in Punjab, India can share shaft diameter, length, spline/keyway details, threading requirements, bearing seat dimensions, drawing or sample photos for accurate quotation.",
    ],
    specs: [
      { label: "Product type", value: "Shafts for combine harvesters, tractors and agricultural machinery" },
      { label: "Diameter range", value: "30 mm to 60 mm" },
      { label: "Length range", value: "Up to 6 feet" },
      { label: "Material", value: "EN8" },
      { label: "Processes", value: "CNC turning, grinding, keyway, threading, slotting, drilling" },
      { label: "Heat treatment", value: "Reviewed as per component requirement" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
      { label: "Inspection", value: "Vernier, micrometer, bore gauge, height gauge and custom gauges where required" },
    ],
    features: [
      "30 mm to 60 mm diameter range",
      "Up to 6 feet length",
      "EN8 material",
      "CNC turning and grinding available",
      "Keyway, threading, slotting and drilling options",
      "Suitable for OEM / export and replacement needs",
    ],
    applications: [
      "Combine harvester shafts",
      "Tractor shafts",
      "Gearbox and transmission shafts",
      "Input / output shaft applications",
      "Agricultural machinery replacement parts",
    ],
    materials: [
      "EN8 shaft manufacturing",
      "CNC turning and grinding",
      "Keyway, threading, slotting and drilling as required",
      "Machined finish; painted finish if applicable to part type",
    ],
    customManufacturing:
      "Shafts can be manufactured as per sample, drawing, worn-out part, application requirement or custom size. Buyers should share diameter, length, bearing seat dimensions, keyway/spline details and quantity requirement.",
    faqs: [
      { q: "What shaft sizes do you manufacture?", a: "The provided range is 30 mm to 60 mm diameter and up to 6 feet length." },
      { q: "Which material is used for shafts?", a: "EN8 is used for shafts as provided." },
      { q: "Is grinding available?", a: "Yes. Both CNC turning and grinding are available." },
      { q: "Can you make keyway and threading?", a: "Yes. Keyway, threading, slotting and drilling are available as per requirement." },
      { q: "Can shafts be made from a sample?", a: "Yes. Shafts can be manufactured as per sample and drawing." },
    ],
    related: ["sprockets", "pulleys", "hubs", "bearing-housings", "custom-cnc-components"],
    ctaText:
      "Need custom EN8 shafts? Share diameter, length, drawing or sample photo and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "hubs",
    title: "Hubs",
    heading: "Hubs for Combine Harvesters, Tractors and Agricultural Implements",
    description:
      "Custom hubs for combine harvesters, tractors and implements, manufactured in MS, cast iron and EN8 with keyway, spline, bolt hole and custom mounting options.",
    image: "/images/products/hubs.png",
    imageAlt:
      "Custom machined hub for combine harvester and tractor by DISHA GEARWORKS, Punjab India",
    metaTitle: "Agricultural Machinery Hub Manufacturer | DISHA GEARWORKS Punjab India",
    metaDescription:
      "Custom hubs for combine harvesters, tractors and implements in MS, CI and EN8 with bore, keyway, spline and bolt hole options.",
    keywords: [
      "hub manufacturer India",
      "agricultural machinery hubs",
      "combine harvester hubs",
      "tractor hub manufacturer",
      "custom hub manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures hubs used in combine harvesters, tractors, agricultural implements and related machinery assemblies. Hub applications can include wheel hubs, pulley hubs, sprocket hubs, gearbox hubs and other custom mounting components as per machine requirement.",
      "Hubs are manufactured as per sample, drawing and custom requirement, with bore size, bolt pattern and mounting arrangement produced as per the buyer's application. Mounting options can include keyway, spline, bolt holes and other custom features. Materials include mild steel, cast iron and EN8 as provided. Surface finish options include machined and painted finish.",
      "Hubs are universal and repeatable, making them suitable for bulk manufacturing. DISHA GEARWORKS can support dealers, OEMs, exporters and replacement market buyers who need custom agricultural machinery hubs from Punjab, India.",
      "Each part is inspected before dispatch using suitable measuring tools such as vernier, micrometer, bore gauge, height gauge and custom gauges where required. Buyers should share bore size, mounting type, bolt hole PCD, sample photo, drawing and quantity requirement for accurate quotation.",
    ],
    specs: [
      { label: "Product type", value: "Hubs for agricultural machinery" },
      { label: "Hub types", value: "Wheel hub, pulley hub, sprocket hub, gearbox hub and custom hubs" },
      { label: "Applications", value: "Combine harvesters, tractors, implements and machinery assemblies" },
      { label: "Bore size", value: "As per requirement" },
      { label: "Mounting options", value: "Keyway, spline, bolt holes and custom mounting" },
      { label: "Materials", value: "Mild steel, cast iron, EN8" },
      { label: "Surface finish", value: "Machined and painted" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "Custom hub manufacturing",
      "MS, cast iron and EN8 options",
      "Keyway, spline and bolt-hole mounting",
      "Machined and painted finish",
      "Suitable for combine harvesters, tractors and implements",
      "Bulk / OEM / export suitable",
    ],
    applications: [
      "Wheel hub applications",
      "Pulley hub applications",
      "Sprocket hub applications",
      "Gearbox / mounting hub applications",
      "Agricultural machinery custom assemblies",
    ],
    materials: [
      "Mild steel, cast iron and EN8 as per requirement",
      "Machined finish and painted finish",
      "Custom bore, bolt hole and mounting machining",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Hubs can be manufactured as per sample, drawing, bore size, bolt pattern, spline/keyway requirement and application details.",
    faqs: [
      { q: "What types of hubs do you manufacture?", a: "Wheel hubs, pulley hubs, sprocket hubs, gearbox hubs and custom hubs can be manufactured." },
      { q: "Which materials are used?", a: "Mild steel, cast iron and EN8 are used as per requirement." },
      { q: "Can bolt holes and keyways be customized?", a: "Yes. Keyway, spline, bolt holes and custom mounting options are available." },
      { q: "Can you manufacture hubs for exports or bulk orders?", a: "Yes. OEM, export and bulk requirements can be handled as per order requirement." },
      { q: "Can you make hubs from a sample?", a: "Yes. Manufacturing can be done as per sample and drawing." },
    ],
    related: ["sprockets", "pulleys", "shafts", "flanges", "custom-cnc-components"],
    ctaText:
      "Need custom hubs in bulk? Share bore size, bolt pattern, sample photo or drawing and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "flanges",
    title: "Flanges",
    heading: "Custom Flanges for Agricultural Machinery Assemblies",
    description:
      "Custom flanges manufactured as per sample, drawing and requirement for agricultural machinery, gearbox, shaft mounting and bearing applications.",
    image: "/images/products/flanges.jpg",
    imageAlt:
      "Custom machined flange for agricultural machinery by DISHA GEARWORKS, Punjab India",
    metaTitle: "Custom Flange Manufacturer for Agricultural Machinery | DISHA GEARWORKS",
    metaDescription:
      "Custom flanges for agricultural machinery, gearbox, shaft and bearing applications manufactured as per sample or drawing in Punjab, India.",
    keywords: [
      "custom flange manufacturer",
      "agricultural machinery flanges",
      "machined flange manufacturer India",
      "gearbox flange manufacturer",
      "flange manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures custom flanges for agricultural machinery, gearbox assemblies, shaft mounting, bearing support and other machine applications. Most flange details are produced as per requirement, so flanges are manufactured to your part design rather than fixed sizes.",
      "Flanges can be manufactured in round, square, bearing flange, gearbox flange and other custom forms based on drawing, sample or application requirement. Diameter range, hole pattern, material, finish and mounting details are finalized according to your part design and machine application.",
      "DISHA GEARWORKS supports sample-based and drawing-based flange manufacturing, making this product suitable for OEMs, exporters, dealers and replacement market buyers who need custom agricultural machinery flanges from Punjab, India. Parts are machined and inspected before dispatch using standard and custom measuring equipment where required.",
      "For accurate quotation, buyers should share flange OD/ID, thickness, hole PCD, number of holes, material requirement, surface finish, drawing or sample photo.",
    ],
    specs: [
      { label: "Product type", value: "Custom flanges" },
      { label: "Flange types", value: "Round, square, bearing flange, gearbox flange and custom flanges" },
      { label: "Diameter range", value: "As per requirement" },
      { label: "Hole pattern", value: "As per requirement" },
      { label: "Material", value: "As per requirement" },
      { label: "Surface finish", value: "As per requirement" },
      { label: "Applications", value: "Agricultural machinery, gearbox, shaft mounting, bearing support and custom assemblies" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "Fully custom flange manufacturing",
      "Round, square and special flange options",
      "Hole pattern as per drawing",
      "Suitable for gearbox and shaft mounting",
      "Sample / drawing-based manufacturing",
      "OEM / export enquiry suitable",
    ],
    applications: [
      "Agricultural machinery assemblies",
      "Gearbox mounting",
      "Shaft mounting",
      "Bearing support",
      "Custom OEM components",
    ],
    materials: [
      "Material selected as per buyer requirement",
      "Machined finish / painted finish as applicable",
      "CNC / VMC machining as per flange design",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Flanges are manufactured as per sample, drawing, OD/ID, thickness, hole PCD, bolt pattern, mounting style and material requirement.",
    faqs: [
      { q: "Do you manufacture standard or custom flanges?", a: "DISHA GEARWORKS focuses on custom flanges manufactured as per sample, drawing and requirement." },
      { q: "Can hole pattern be customized?", a: "Yes. Hole pattern can be manufactured as per requirement." },
      { q: "Which materials are available?", a: "Material is selected as per buyer requirement." },
      { q: "Can you manufacture gearbox or bearing flanges?", a: "Yes. Gearbox flanges, bearing flanges and other custom flanges can be manufactured as per sample or drawing." },
      { q: "What details are needed for quotation?", a: "OD/ID, thickness, hole PCD, material, finish, sample photo or drawing are helpful." },
    ],
    related: ["bearing-housings", "shafts", "hubs", "custom-cnc-components", "combine-harvester-components"],
    ctaText:
      "Send flange drawing, sample photo, hole pattern and material requirement to get a custom flange quotation from DISHA GEARWORKS.",
  },
  {
    slug: "bushes",
    title: "Bushes",
    heading: "Bushes for Combine Harvesters, Tractors and Wear Assemblies",
    description:
      "Plain, bronze and steel bushes manufactured as per sample or drawing for rotating assemblies, wear points and agricultural machinery applications.",
    image: "/images/products/bushes.jpg",
    imageAlt:
      "Plain, bronze and steel bushes for agricultural machinery by DISHA GEARWORKS, Punjab India",
    metaTitle: "Bush Manufacturer for Agricultural Machinery | DISHA GEARWORKS India",
    metaDescription:
      "Plain, bronze and steel bushes for combine harvesters, tractors and wear assemblies, made as per sample, drawing and custom size.",
    keywords: [
      "bush manufacturer India",
      "bronze bush manufacturer",
      "combine harvester bushes",
      "tractor bushes",
      "agricultural machinery bushes",
      "custom bush manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures bushes for combine harvesters, tractors and agricultural machinery applications. Bushes are used in rotating assemblies, wear points and support locations where proper fitment, surface finish and material selection are important for smooth operation and service life.",
      "The provided bush types include plain bushes, bronze bushes and steel bushes. Material, ID/OD, length and dimensions are manufactured as per requirement. Heat treatment or surface hardening is available as per part requirement. Bushes can be supplied for both rotating assemblies and wear-point applications depending on the machine design.",
      "DISHA GEARWORKS can manufacture bushes as per sample, drawing, worn-out part or custom size requirement. This product is useful for dealers, OEMs, exporters and replacement market buyers who need regular bulk supply of agricultural machinery bushes from Punjab, India.",
      "Each bush is inspected before dispatch using suitable measuring tools such as vernier, micrometer, bore gauge, height gauge and custom gauges where required. Buyers should share ID, OD, length, material preference, oil groove requirement if any, sample photo or drawing for accurate quotation.",
    ],
    specs: [
      { label: "Product type", value: "Bushes" },
      { label: "Bush types", value: "Plain bush, bronze bush, steel bush" },
      { label: "Material", value: "As per requirement" },
      { label: "ID / OD range", value: "As per requirement" },
      { label: "Length range", value: "As per requirement" },
      { label: "Heat treatment", value: "Available as per requirement" },
      { label: "Applications", value: "Rotating assemblies and wear points" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "Plain, bronze and steel bush options",
      "Custom ID/OD and length",
      "Heat treatment as per requirement",
      "Suitable for wear points and rotating assemblies",
      "Sample / drawing-based manufacturing",
      "Good product for bulk / export enquiries",
    ],
    applications: [
      "Combine harvester bushes",
      "Tractor bushes",
      "Rotating assemblies",
      "Wear points",
      "Agricultural machinery replacement parts",
    ],
    materials: [
      "Bronze, steel and other materials as per requirement",
      "Heat treatment / surface hardening as per part requirement",
      "Machined finish as per requirement",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Bushes can be manufactured as per sample, drawing, ID/OD, length, material and wear application. If oil grooves are needed, mention this clearly in the enquiry.",
    faqs: [
      { q: "What types of bushes do you manufacture?", a: "Plain bushes, bronze bushes and steel bushes can be manufactured." },
      { q: "Can you manufacture custom sizes?", a: "Yes. ID, OD and length can be manufactured as per sample or drawing." },
      { q: "Is heat treatment available?", a: "Yes. Heat treatment/surface hardening is available as per requirement." },
      { q: "Where are these bushes used?", a: "They are used in rotating assemblies and wear points in agricultural machinery." },
      { q: "Do you make oil groove bushes?", a: "Oil groove availability can be confirmed on enquiry. Buyers can mention the requirement when sending details." },
    ],
    related: ["sleeves", "shafts", "hubs", "custom-cnc-components", "combine-harvester-components"],
    ctaText:
      "Need custom bushes in bulk? Share ID, OD, length, material or sample photo and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "sleeves",
    title: "Sleeves",
    heading: "Custom Sleeves for Gearbox, Shaft and Bearing Support Applications",
    description:
      "Custom sleeves for shaft support, bearing support, spacing and protection applications, manufactured as per sample, drawing and requirement.",
    image: "/images/products/sleeves.png",
    imageAlt:
      "Custom machined sleeve for agricultural machinery by DISHA GEARWORKS, Punjab India",
    metaTitle: "Custom Sleeve Manufacturer for Agricultural Machinery | DISHA GEARWORKS",
    metaDescription:
      "Custom sleeves for gearbox, shaft, bearing and spacer applications manufactured as per sample, drawing and requirement in Punjab, India.",
    keywords: [
      "custom sleeve manufacturer",
      "agricultural machinery sleeves",
      "shaft sleeve manufacturer",
      "bearing sleeve manufacturer",
      "gearbox sleeve manufacturer Punjab",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures custom sleeves for agricultural machinery, gearbox, shaft mounting and bearing support applications. Sleeves are produced as per sample, drawing and custom requirement.",
      "Sleeves are generally used for spacing, alignment, protection and support in rotating or mounted assemblies. DISHA GEARWORKS can manufacture sleeves as per sample, drawing, worn-out part or custom requirement for OEMs, exporters, dealers and replacement market buyers.",
      "Send your sleeve sample, drawing, ID/OD, length, material and application details for quotation. Each custom part is inspected before dispatch using measuring tools such as vernier, micrometer, bore gauge, height gauge and custom gauges where required.",
    ],
    specs: [
      { label: "Product type", value: "Custom sleeves" },
      { label: "Sleeve types", value: "Shaft, spacer, bearing or gearbox sleeves as per requirement" },
      { label: "ID / OD / length range", value: "As per requirement" },
      { label: "Material", value: "As per requirement" },
      { label: "Heat treatment", value: "As per component requirement" },
      { label: "Surface finish", value: "As per requirement" },
      { label: "Applications", value: "Gearbox, shaft mounting, bearing support and custom agricultural machinery assemblies" },
      { label: "Manufacturing basis", value: "As per sample, drawing and custom requirement" },
    ],
    features: [
      "Custom sleeve manufacturing",
      "Useful for shaft, bearing and gearbox support applications",
      "Manufactured as per sample / drawing",
      "Suitable for OEM and replacement enquiries",
      "Inspection before dispatch",
    ],
    applications: [
      "Gearbox sleeves",
      "Shaft mounting sleeves",
      "Bearing support sleeves",
      "Spacer sleeves",
      "Agricultural machinery custom assemblies",
    ],
    materials: [
      "Material finalized as per buyer requirement",
      "Machined finish or other finish as confirmed",
      "Heat treatment as per component requirement",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Sleeves can be manufactured as per sample, drawing, ID, OD, length, material, fitment and application requirement. Buyers should share photos or drawings for quotation.",
    faqs: [
      { q: "Do you manufacture custom sleeves?", a: "Yes. Sleeves can be manufactured as per sample, drawing and custom requirement." },
      { q: "Which sleeve types are available?", a: "Shaft, spacer, bearing and gearbox sleeve applications can be covered as per requirement." },
      { q: "What details are needed for quotation?", a: "ID, OD, length, material, sample photo, drawing and application details are useful." },
      { q: "Can sleeves be made for agricultural machinery?", a: "Yes. Sleeves can be made for agricultural machinery and custom assembly requirements." },
      { q: "Are heat treatment and finish available?", a: "Heat treatment and finish can be confirmed for the specific sleeve as per requirement." },
    ],
    related: ["bushes", "shafts", "bearing-housings", "custom-cnc-components", "combine-harvester-components"],
    ctaText:
      "Need a custom sleeve? Send ID, OD, length, drawing or sample photo and request a quote from DISHA GEARWORKS.",
  },
  {
    slug: "combine-harvester-components",
    title: "Combine Harvester Components",
    heading: "Combine Harvester Spare Parts Manufacturer in Punjab, India",
    description:
      "Combine harvester components including gearbox parts, sprockets, pulleys, shafts, housings, bushes, sleeves, reduction assemblies, axles and speed changers.",
    image: "/images/products/combine-harvester-components.png",
    imageAlt:
      "Combine harvester spare parts manufactured by DISHA GEARWORKS in Punjab, India",
    metaTitle: "Combine Harvester Spare Parts Manufacturer in Punjab India | DISHA GEARWORKS",
    metaDescription:
      "Combine harvester spare parts including gearbox parts, sprockets, pulleys, shafts, housings, bushes, axles and assemblies.",
    keywords: [
      "combine harvester spare parts manufacturer",
      "agricultural machinery parts India",
      "combine harvester components Punjab",
      "combine harvester parts exporter India",
      "OEM agricultural spare parts",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures combine harvester components and agricultural machinery spare parts in Punjab, India, for buyers who need a reliable manufacturer for multiple combine harvester spare parts.",
      "The product range includes gearbox parts, sprockets, pulleys, shafts, housings, bushes, sleeves, reduction assemblies, axles and speed changers. DISHA GEARWORKS can supply both complete assemblies and individual spare parts as per buyer requirement. Parts can be manufactured as per sample, drawing, old/discontinued part or custom size requirement.",
      "Common materials include EN8, cast iron and mild steel as per component requirement. Heat treatment and finish options are available where applicable. Every part is inspected before dispatch, and gearbox/reduction assemblies are tested before dispatch. Surface finishes include machined and painted options depending on the part type.",
      "DISHA GEARWORKS serves OEMs, exporters, dealers, farmers and replacement market buyers, with special focus on export-ready universal bulk components such as sprockets, pulleys, hubs and bushes, for many commonly used combine harvester applications.",
    ],
    specs: [
      { label: "Product category", value: "Combine harvester components" },
      { label: "Product range", value: "Gearbox parts, sprockets, pulleys, shafts, housings, bushes, sleeves, reduction assemblies, axles, speed changers" },
      { label: "Supply type", value: "Complete assemblies and individual spare parts" },
      { label: "Manufacturing basis", value: "As per sample, drawing, old part and custom requirement" },
      { label: "Materials", value: "EN8, cast iron, mild steel as per component requirement" },
      { label: "Heat treatment", value: "Available as per component requirement" },
      { label: "Finish options", value: "Machined and painted finish where applicable" },
      { label: "Target buyers", value: "OEMs, exporters, dealers, farmers and replacement buyers" },
      { label: "Location focus", value: "Punjab, India, export, Europe, Africa" },
    ],
    features: [
      "Wide range of combine harvester parts",
      "Complete assemblies and individual parts",
      "Sample / drawing-based manufacturing",
      "Old / discontinued part manufacturing support",
      "EN8, CI and MS material options",
      "OEM / export and bulk supply focus",
    ],
    applications: [
      "Combine harvester gearbox systems",
      "Chain drive and belt drive systems",
      "Front wheel / reduction assemblies",
      "Shaft and housing assemblies",
      "Replacement and OEM spare part supply",
    ],
    materials: [
      "EN8, cast iron and mild steel as per component requirement",
      "Heat treatment available where applicable",
      "Machined and painted finish options",
      "Inspection before dispatch",
      "Gearbox / reduction assemblies tested before dispatch",
    ],
    customManufacturing:
      "DISHA GEARWORKS can manufacture combine harvester components as per sample, drawing, old part, discontinued part or custom requirement. Buyers can send product photos or samples for reverse engineering and quotation.",
    faqs: [
      { q: "What combine harvester parts do you manufacture?", a: "Gearbox parts, sprockets, pulleys, shafts, housings, bushes, sleeves, reduction assemblies, axles, speed changers and related parts." },
      { q: "Can you manufacture discontinued or old parts?", a: "Yes. Parts can be manufactured as per old sample, drawing or custom requirement." },
      { q: "Do you supply complete assemblies?", a: "Yes. Complete assemblies and individual spare parts can both be supplied." },
      { q: "Which buyers do you serve?", a: "OEMs, exporters, dealers, farmers and replacement market buyers." },
      { q: "Which materials are used?", a: "EN8, cast iron and mild steel are commonly used as per component requirement." },
    ],
    related: ["5-speed-gdr-gearbox-assembly", "4-speed-gdr-gearbox-assembly", "sprockets", "pulleys", "shafts", "custom-cnc-components"],
    ctaText:
      "Need combine harvester spare parts or complete assemblies? Send your sample, drawing or product photo to DISHA GEARWORKS for quotation.",
  },
  {
    slug: "custom-cnc-components",
    title: "Custom CNC Components",
    heading: "Custom CNC Components for Agricultural Machinery and OEMs",
    description:
      "Custom CNC turned and VMC machined components for agriculture, automotive, industrial and OEM applications, with turning up to 350 mm diameter and 700 mm length.",
    image: "/images/products/custom-cnc-components.jpg",
    imageAlt:
      "Custom CNC turned and VMC machined component by DISHA GEARWORKS, Punjab India",
    metaTitle: "Custom CNC Components Manufacturer in Punjab India | DISHA GEARWORKS",
    metaDescription:
      "Custom CNC turned and VMC machined components up to 350 mm dia, EN8, CI, MS, SS and aluminium for OEM and bulk orders.",
    keywords: [
      "custom CNC components manufacturer",
      "CNC machining Punjab",
      "CNC turned components India",
      "VMC machining manufacturer",
      "OEM machined components India",
      "agricultural CNC parts",
    ],
    fullDescription: [
      "DISHA GEARWORKS manufactures custom CNC components for agricultural machinery, automotive, industrial and OEM applications. The company is ready to explore broader industries while keeping agriculture as a strong manufacturing base. This page is suited to OEMs, exporters and bulk buyers looking for CNC turned and VMC machined components from Punjab, India.",
      "CNC turning capacity provided is up to 350 mm diameter and 700 mm length. VMC milling capacity has been provided as part size approximately 750 mm x 800 mm length and 450 mm x 480 mm width. Materials machined include EN8, cast iron, mild steel, stainless steel and aluminium. Production can include prototype, small batch and bulk orders, with main focus on bulk production.",
      "Capabilities include threading, boring, keyway, milling, drilling, tapping and slotting. Customers can send drawings, samples or both. Reverse engineering is available for old or existing parts where drawings are not available. Surface finish options include machined and painted finish as per part requirement.",
      "Inspection tools include vernier, micrometer, bore gauge, height gauge and custom measuring gauges where required. Buyers can send drawings, samples, material, quantity and tolerance/fitment details for quotation.",
    ],
    specs: [
      { label: "Product type", value: "Custom CNC turned and VMC machined components" },
      { label: "CNC turning capacity", value: "Up to 350 mm diameter and 700 mm length" },
      { label: "VMC milling capacity", value: "Approx. 750 x 800 mm length and 450 x 480 mm width as provided" },
      { label: "Materials machined", value: "EN8, cast iron, mild steel, stainless steel, aluminium and others as per requirement" },
      { label: "Quantity range", value: "Prototype, small batch and bulk production; main focus on bulk" },
      { label: "Industries served", value: "Agriculture, automotive, industrial, OEM and other industries" },
      { label: "Capabilities", value: "Threading, boring, keyway, milling, drilling, tapping, slotting" },
      { label: "Reverse engineering", value: "Available" },
      { label: "Surface finish", value: "Machined and painted finish" },
    ],
    features: [
      "CNC turning and VMC machining",
      "Up to 350 mm diameter CNC turning",
      "Reverse engineering available",
      "Bulk production focus",
      "Multiple material machining capability",
      "Inspection with standard / custom gauges",
    ],
    applications: [
      "Agricultural machinery components",
      "OEM machined parts",
      "Automotive machined components",
      "Industrial components",
      "Custom replacement parts",
    ],
    materials: [
      "EN8, cast iron, mild steel, stainless steel, aluminium and other materials as per requirement",
      "Machined and painted finish options",
      "Threading, boring, keyway, milling, drilling, tapping and slotting operations",
      "Inspection before dispatch",
    ],
    customManufacturing:
      "Custom CNC components can be manufactured as per drawing, sample, CAD file, worn-out part or bulk order requirement. Buyers should share material, quantity, dimensions, tolerance/fitment details and finish requirement.",
    faqs: [
      { q: "What is your CNC turning capacity?", a: "The provided CNC turning capacity is up to 350 mm diameter and 700 mm length." },
      { q: "What is your VMC milling capacity?", a: "The provided VMC part size is approximately 750 x 800 mm length and 450 x 480 mm width." },
      { q: "Which materials can you machine?", a: "EN8, cast iron, mild steel, stainless steel, aluminium and other materials as per requirement." },
      { q: "Do you offer reverse engineering?", a: "Yes. Reverse engineering is available from samples or existing parts." },
      { q: "Do you handle bulk production?", a: "Yes. Prototype and small batch are possible, but the main focus can be bulk production." },
    ],
    related: ["shafts", "hubs", "flanges", "bearing-housings", "combine-harvester-components"],
    ctaText:
      "Send your drawing, sample, material and quantity requirement to request a custom CNC machining quote from DISHA GEARWORKS.",
  },
];

/** Look up a single product by its URL slug (used by /products/[slug]). */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Related products to cross-link from a detail page (internal linking / SEO). */
export function getRelatedProducts(slug: string, count = 3): Product[] {
  const current = getProductBySlug(slug);
  if (current?.related?.length) {
    const list = current.related
      .map((s) => getProductBySlug(s))
      .filter((p): p is Product => Boolean(p))
      .slice(0, count);
    if (list.length) return list;
  }
  // Fallback: the items that follow, wrapping around.
  const i = products.findIndex((p) => p.slug === slug);
  if (i === -1) return products.slice(0, count);
  return Array.from({ length: count }, (_, k) => products[(i + k + 1) % products.length]);
}
