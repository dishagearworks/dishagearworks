"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { StaggerContainer, StaggerItem } from "./motion/FadeIn";

const currentYear = new Date().getFullYear();

const stats = [
  { value: `${currentYear - siteConfig.since}+`, label: "Years of Experience" },
  { value: siteConfig.repeatClients, label: "Repeat Clients" },
  { value: "1976", label: "Trusted Since" },
  { value: "100%", label: "Quality Focused" },
];

/** Counts up to the numeric part of `value` once scrolled into view. */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const m = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = m ? m[1] : "";
  const target = m ? parseInt(m[2], 10) : 0;
  const suffix = m ? m[3] : value;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const dur = 1400;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  // Safety net: guarantee the final value is shown even if the viewport
  // observer never fires or the animation is interrupted (some mobile
  // browsers / in-app webviews). The number can never stay stuck below target.
  useEffect(() => {
    const id = setTimeout(() => setN((cur) => (cur < target ? target : cur)), 1500);
    return () => clearTimeout(id);
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

/** Stats band with count-up animation — used on Home and About. */
export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-gradient py-16">
      <div className="pointer-events-none absolute inset-0 bg-metal-texture" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="container-x relative">
        <StaggerContainer className="grid grid-cols-2 divide-y divide-white/10 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="px-2 py-6 text-center sm:py-2 lg:px-6"
            >
              <div className="font-heading text-4xl font-semibold tracking-tight text-gradient-orange sm:text-5xl">
                <Counter value={s.value} />
              </div>
              <div className="label-mono mt-3 text-steel">{s.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
