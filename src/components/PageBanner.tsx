"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Crumb = { label: string; href?: string };

/** Compact hero/banner for inner pages with breadcrumb + title.
 *  Pass `bgImage` to show a photo behind the banner with a cinematic slow
 *  zoom/pan + gentle scroll parallax + subtle orange glow (kept readable with
 *  a left→right dark overlay), e.g. on the Contact "Get in Touch" hero. */
export function PageBanner({
  title,
  subtitle,
  crumbs = [],
  bgImage,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  bgImage?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // gentle parallax: image drifts slightly slower than scroll
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      ref={ref}
      className={`relative isolate flex flex-col justify-center overflow-hidden bg-navy-gradient pt-32 pb-16 sm:pt-40 sm:pb-20 ${
        bgImage ? "min-h-[560px] sm:min-h-[600px]" : ""
      }`}
    >
      {/* optional background photo: parallax layer → slow zoom/pan → image */}
      {bgImage && (
        <>
          <motion.div
            aria-hidden
            style={{ y: parallaxY }}
            className="absolute -inset-y-[14%] inset-x-0 -z-20"
          >
            <div className="hero-kenburns absolute inset-0">
              <Image
                src={bgImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[60%_45%]"
              />
            </div>
          </motion.div>
          {/* readability overlays — stronger on the left where the text sits */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/45" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/75 to-transparent" />
          {/* subtle warm industrial glow / light-sweep */}
          <div className="glow-breathe pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_28%,rgba(201,116,58,0.20),transparent_46%)]" />
        </>
      )}

      {/* texture / blueprint grid — only when there's no photo, to avoid clutter */}
      {!bgImage && (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-metal-texture" />
          <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-70" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-px bg-white/[0.05]" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-0 top-1/2 -z-10 h-px w-full origin-left bg-gradient-to-r from-orange/40 via-white/10 to-transparent"
          />
        </>
      )}

      <div className="container-x corner-ticks relative">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-mono mb-5 flex flex-wrap items-center gap-2.5 text-steel"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-orange">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2.5">
              <span className="text-orange/50">/</span>
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-orange">
                  {c.label}
                </Link>
              ) : (
                <span className="text-orange">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
