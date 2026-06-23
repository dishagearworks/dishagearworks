"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { QuoteButton } from "./QuoteButton";
import { CheckIcon } from "./icons";
import { products } from "@/config/products";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-steel-light/50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/30";
const labelClass =
  "mb-2 block font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-navy/70";

/**
 * Inquiry form. Submits directly to the secure /api/contact route, which
 * emails the enquiry to {siteConfig.email} via Resend. Includes client +
 * server validation, a hidden honeypot and a submit-time trap for spam,
 * and clear success / error states.
 */
export function InquiryForm() {
  const params = useSearchParams();
  const presetProduct = params.get("product") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Timestamp when the form was first rendered — used by the API time-trap.
  const startedAt = useRef(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: (fd.get("name") as string) || "",
      company: (fd.get("company") as string) || "",
      phone: (fd.get("phone") as string) || "",
      email: (fd.get("email") as string) || "",
      product: (fd.get("product") as string) || "",
      quantity: (fd.get("quantity") as string) || "",
      message: (fd.get("message") as string) || "",
      // spam protection
      company_website: (fd.get("company_website") as string) || "",
      formStartedAt: startedAt.current,
    };

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(
          data.error || "Could not send your enquiry. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div className="relative rounded-lg border border-navy/10 bg-white p-6 shadow-card sm:p-8">
      <AnimatePresence>
        {status === "success" && (
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
              Your enquiry has been sent — our team will get back to you with a
              quotation and lead time. You can also reach us directly at{" "}
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
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-orange hover:underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        {/* Honeypot — hidden off-screen; real users never fill it, bots do */}
        <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="company_website">Company Website</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
          {status === "error" && (
            <p
              role="alert"
              className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errorMsg}
            </p>
          )}
          <QuoteButton
            type="submit"
            size="lg"
            fullWidth
            withIcon
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send Inquiry"}
          </QuoteButton>
        </div>
      </form>
    </div>
  );
}
