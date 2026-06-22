"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "secondary" | "outline" | "outlineDark";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-orange-gradient text-white shadow-glow ring-1 ring-inset ring-white/15 hover:shadow-[0_16px_40px_-8px_rgba(201,116,58,0.7)]",
  secondary:
    "bg-white text-navy ring-1 ring-inset ring-navy/10 hover:bg-steel-light",
  outline:
    "border border-white/25 text-white hover:border-orange hover:bg-white/[0.04] hover:text-orange",
  outlineDark:
    "border border-navy/25 text-navy hover:border-orange hover:bg-navy/[0.04] hover:text-orange",
};

const sizeClass: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

type QuoteButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withIcon?: boolean;
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
};

/**
 * Primary call-to-action button. Renders as a Link when `href` is given,
 * otherwise as a <button> (used by the inquiry form).
 */
export function QuoteButton({
  children = "Request a Quote",
  href,
  variant = "primary",
  size = "md",
  withIcon = true,
  className = "",
  type = "button",
  fullWidth = false,
}: QuoteButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-md font-heading font-medium tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {withIcon && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className={fullWidth ? "w-full" : "inline-block"}>
        <Link href={href} className={classes}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} className={classes} {...motionProps}>
      {inner}
    </motion.button>
  );
}
