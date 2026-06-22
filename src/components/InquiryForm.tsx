"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { QuoteButton } from "./QuoteButton";
import { CheckIcon } from "./icons";
import { products } from "@/config/products";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-steel-light/50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/30";
const labelClass =
  "mb-2 block font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-navy/70";

/**
 * Inquiry form. With no backend configured it opens the visitor's email
 * client pre-filled to {siteConfig.email}. To wire up a real backend,
 * replace the body of `handleSubmit` with a fetch() to your API route.
 */
export function InquiryForm() {
  const params = useSearchParams();
  const presetProduct = params.get("product") ?? "";
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) as string) || "—";

    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Product Requirement: ${get("product")}`,
      `Quantity: ${get("quantity")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    const subject = `Inquiry from ${get("name")} — ${get("product")}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <div className="relative rounded-lg border border-navy/10 bg-white p-6 shadow-card sm:p-8">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-8 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-gradient text-white shadow-glow">
              <CheckIcon className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">
              Thank you!
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Your email draft has opened. If it didn&apos;t, please write to us
              directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-orange"
              >
                {siteConfig.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-orange hover:underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-orange">*</span>
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input id="company" name="company" className={inputClass} placeholder="Your company" />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-orange">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="+91 ..."
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-orange">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="product" className={labelClass}>
            Product Requirement
          </label>
          <input
            id="product"
            name="product"
            list="product-options"
            defaultValue={presetProduct}
            className={inputClass}
            placeholder="e.g. Sprockets"
          />
          <datalist id="product-options">
            {products.map((p) => (
              <option key={p.slug} value={p.title} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="quantity" className={labelClass}>
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            className={inputClass}
            placeholder="e.g. 500 pcs"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputClass} resize-y`}
            placeholder="Share specifications, drawings reference, or any details..."
          />
        </div>

        <div className="sm:col-span-2">
          <QuoteButton type="submit" size="lg" fullWidth withIcon>
            Send Inquiry
          </QuoteButton>
        </div>
      </form>
    </div>
  );
}
