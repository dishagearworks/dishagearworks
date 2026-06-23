"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SmartImage } from "./PlaceholderImage";
import { QuoteButton } from "./QuoteButton";
import { CheckIcon } from "./icons";
import type { Product } from "@/config/products";

/**
 * Product card with image, short description, feature chips and a
 * "Request Quote" button. Hover lifts the card and highlights the hairline edge.
 * `index` shows a mono part-index (e.g. "P-03") for an engineering catalogue feel.
 */
export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-navy/10 bg-white shadow-card transition-all duration-300 hover:border-orange/40 hover:shadow-cardHover"
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block overflow-hidden border-b border-navy/[0.07] bg-steel-light/40"
        aria-label={`View ${product.title}`}
      >
        <div className="transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]">
          <SmartImage
            src={product.image}
            alt={`${product.title} — agricultural machinery spare part manufactured by DISHA GEARWORKS`}
            label={product.title}
          />
        </div>
        {/* subtle dark wash on hover — adds depth without hiding the product */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold leading-tight text-navy">
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-orange focus:outline-none focus-visible:text-orange"
          >
            {product.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {product.features.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1.5 rounded-sm border border-navy/10 bg-steel-light px-2.5 py-1 text-xs font-medium text-navy-600"
            >
              <CheckIcon className="h-3 w-3 text-orange" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <QuoteButton
            href={`/contact?product=${encodeURIComponent(product.title)}`}
            size="sm"
            fullWidth
          >
            Request Quote
          </QuoteButton>
        </div>
      </div>
    </motion.article>
  );
}
