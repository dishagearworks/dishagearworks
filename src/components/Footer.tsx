import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks } from "@/config/site";
import { products } from "@/config/products";
import { GearIcon, MailIcon, MapPinIcon, PhoneIcon, InstagramIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-800">
      {/* subtle background gear */}
      <GearIcon
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-white/[0.02] animate-spin-slow"
        strokeWidth={0.6}
      />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand + description */}
        <div className="lg:col-span-4">
          <span className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/5">
            <Image
              src="/logo.png"
              alt="DISHA GEARWORKS"
              width={200}
              height={89}
              className="h-11 w-auto"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel">
            {siteConfig.footerTagline} {siteConfig.businessType} in Nabha,
            Punjab — trusted by {siteConfig.repeatClients} repeat clients across
            India and abroad since {siteConfig.since}.
          </p>
          <span className="label-mono mt-6 inline-flex items-center gap-2 rounded-sm border border-orange/30 bg-orange/10 px-3 py-1.5 text-orange">
            <GearIcon className="h-4 w-4" /> Since {siteConfig.since}
          </span>

          {siteConfig.social.instagram && (
            <div className="mt-6">
              <p className="label-mono text-steel">Follow us</p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DISHA GEARWORKS on Instagram"
                className="group mt-3 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-steel transition-colors hover:border-orange hover:text-orange"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h3 className="label-mono text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-steel transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resources"
                className="text-sm text-steel transition-colors hover:text-orange"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/combine-harvester-spare-parts-manufacturer"
                className="text-sm text-steel transition-colors hover:text-orange"
              >
                Combine Harvester Spare Parts Manufacturer
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h3 className="label-mono text-white">
            Products
          </h3>
          <ul className="mt-5 space-y-3">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-sm text-steel transition-colors hover:text-orange"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="label-mono text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-steel">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all transition-colors hover:text-orange"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <span className="flex flex-col gap-1">
                {siteConfig.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="whitespace-nowrap transition-colors hover:text-orange"
                  >
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-steel sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-steel/70">
            {siteConfig.industry} · {siteConfig.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
}
