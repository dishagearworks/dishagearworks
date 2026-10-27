import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { customers } from "@/config/customers";

/**
 * "Companies We Have Manufactured For" — a static, responsive logo wall.
 * Each logo sits on a uniform white card (so logos with white, transparent or
 * coloured backgrounds all read consistently) using object-contain, which
 * preserves each logo's original proportions and colours (no stretching or
 * recolouring). Static by design; no animation.
 */
export function CustomerLogos() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="customers-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Customers"
          title="Companies We Have Manufactured For"
          subtitle="A selection of agricultural machinery businesses we have supplied precision components to."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {customers.map((c) => (
            <li key={c.name}>
              <div className="flex h-28 items-center justify-center rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-card sm:h-32">
                <div className="relative h-14 w-full sm:h-16">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 20vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
