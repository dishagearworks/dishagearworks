import Image from "next/image";
import { siteConfig } from "@/config/site";
import { QuoteButton } from "./QuoteButton";
import { GearIcon, ShieldIcon, ClockIcon, UsersIcon } from "./icons";

const trustPoints = [
  { icon: ClockIcon, label: `Since ${siteConfig.since}` },
  { icon: UsersIcon, label: `${siteConfig.repeatClients} Repeat Clients` },
  { icon: GearIcon, label: "Precision Engineering" },
  { icon: ShieldIcon, label: "Made in India" },
];

/**
 * Split hero — image left, content right. Entrance reveals are CSS-based
 * (`.reveal-stagger`), so the headline/CTAs are always visible even if JS
 * doesn't run; the image is visible by default (no opacity gate).
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-steel-light pt-20">
      <div className="lg:grid lg:grid-cols-[54%_46%]">
        {/* ── Left: hero image (top banner on mobile, angled panel on desktop) ── */}
        <div className="relative h-[40vh] overflow-hidden sm:h-[46vh] lg:h-auto lg:min-h-[84vh] lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
          <div className="hero-kenburns absolute inset-0">
            <Image
              src="/images/hero/combine-sunset.jpg"
              alt="Combine harvester working in a wheat field at sunset"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center"
            />
          </div>
          {/* subtle depth + warmth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent" />
        </div>

        {/* ── Right: content panel ── */}
        <div className="relative flex items-center px-5 py-12 sm:px-8 lg:py-20 lg:pl-6 lg:pr-12 xl:pr-20">
          {/* faint gear watermark */}
          <GearIcon
            className="pointer-events-none absolute -bottom-12 -right-10 h-72 w-72 text-navy/[0.04]"
            strokeWidth={0.5}
          />
          {/* decorative dot grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-6 top-8 hidden h-20 w-28 opacity-70 lg:block [background-image:radial-gradient(circle,rgba(26,24,21,0.16)_1.4px,transparent_1.4px)] [background-size:14px_14px]"
          />

          <div className="reveal-stagger relative w-full max-w-xl">
            {/* eyebrow */}
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-orange/25 bg-orange/10 text-orange">
                <GearIcon className="h-5 w-5" />
              </span>
              <span className="label-mono text-orange">{siteConfig.tagline}</span>
            </div>

            {/* headline */}
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl xl:text-6xl">
              Precision Agricultural Machinery{" "}
              <span className="text-gradient-orange">Components</span> Since{" "}
              {siteConfig.since}
              <span className="text-orange">.</span>
            </h1>

            {/* thin accent line */}
            <span className="mt-5 block h-0.5 w-16 rounded-full bg-orange-gradient" />

            {/* paragraph */}
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Manufacturer of sprockets, pulleys, bearing housings, gears, shafts,
              hubs, flanges, bushes, sleeves and custom CNC components for combine
              harvesters and agricultural machinery — trusted by{" "}
              {siteConfig.repeatClients} repeat clients.
            </p>

            {/* trust highlights */}
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              {trustPoints.map(({ icon: I, label }, idx) => (
                <li key={label} className="flex items-center gap-3">
                  {idx > 0 && (
                    <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden />
                  )}
                  <span className="flex items-center gap-2 text-sm font-medium text-navy">
                    <I className="h-[18px] w-[18px] text-orange" />
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <QuoteButton href="/contact" size="lg">
                Request a Quote
              </QuoteButton>
              <QuoteButton href="/products" size="lg" variant="outlineDark">
                View Products
              </QuoteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
