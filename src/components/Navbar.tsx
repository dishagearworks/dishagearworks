"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/config/site";
import { QuoteButton } from "./QuoteButton";

/**
 * LOGO ─────────────────────────────────────────────────────────────────
 * The logo lives at /public/logo.png. To swap it, just replace that file
 * (keep the name, or update the src below). It sits on a white chip so the
 * full-colour metallic logo reads cleanly on the dark header.
 */
function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="DISHA GEARWORKS home">
      <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
        <Image
          src="/logo.png"
          alt="DISHA GEARWORKS"
          width={180}
          height={80}
          loading="eager"
          className="h-10 w-auto sm:h-11"
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : "border-b border-white/5"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-orange" : "text-steel hover:text-white"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange"
                    />
                  ) : (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-orange/70 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <QuoteButton href="/contact" size="sm" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-2.5 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-2.5 -rotate-45" : "top-[18px]"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-navy-800 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? "bg-white/5 text-orange"
                          : "text-steel hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 px-1">
                <QuoteButton href="/contact" fullWidth />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
