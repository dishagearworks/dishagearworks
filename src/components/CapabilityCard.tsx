"use client";

import { motion } from "framer-motion";
import { Icon } from "./icons";
import type { Capability } from "@/config/capabilities";

type CapabilityCardProps = {
  capability: Capability;
  /** dark=true → styled for dark navy backgrounds */
  dark?: boolean;
  /** optional two-digit index, e.g. "03" */
  index?: string;
};

/** Capability tile with icon, title and description. */
export function CapabilityCard({ capability, dark = false, index }: CapabilityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative h-full overflow-hidden rounded-lg border p-7 transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-orange/40 hover:bg-white/[0.05]"
          : "border-navy/10 bg-white shadow-card hover:border-orange/40 hover:shadow-cardHover"
      }`}
    >
      {index && (
        <span
          className={`label-mono absolute right-5 top-6 text-[11px] ${
            dark ? "text-white/25" : "text-navy/20"
          }`}
        >
          {index}
        </span>
      )}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-orange/30 bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange-gradient group-hover:text-white">
        <Icon name={capability.icon} className="h-6 w-6" />
      </div>
      <h3
        className={`font-heading text-lg font-semibold leading-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {capability.title}
      </h3>
      <p
        className={`mt-2.5 text-sm leading-relaxed ${
          dark ? "text-steel" : "text-slate-600"
        }`}
      >
        {capability.description}
      </p>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}
