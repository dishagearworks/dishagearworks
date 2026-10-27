/**
 * Companies DISHA GEARWORKS has manufactured components for.
 * Edit this list to add/remove logos — drop the image in
 * /public/images/customers/ and add an entry here. Only include companies
 * you have genuinely supplied and have permission to display.
 */
export type Customer = { name: string; image: string; alt: string };

export const customers: Customer[] = [
  { name: "Balkar", image: "/images/customers/balkar.jpg", alt: "Balkar logo" },
  { name: "Dasmesh", image: "/images/customers/dasmesh.jpg", alt: "Dasmesh logo" },
  { name: "Jagatjit Group", image: "/images/customers/jagatjit.jpg", alt: "Jagatjit Group logo" },
  { name: "KS Agrotech", image: "/images/customers/ks-agrotech.jpg", alt: "KS Agrotech Pvt. Ltd. logo" },
  { name: "Landforce", image: "/images/customers/landforce.jpg", alt: "Landforce logo" },
  { name: "Malkit AgroTech", image: "/images/customers/malkit-agrotech.png", alt: "Malkit AgroTech Pvt. Ltd. logo" },
  { name: "PREET Group", image: "/images/customers/preet.webp", alt: "PREET Group logo" },
  { name: "Sonalika International", image: "/images/customers/sonalika-international.png", alt: "Sonalika International logo" },
];
