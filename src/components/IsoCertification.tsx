import { ShieldIcon, CheckIcon, ArrowRightIcon } from "./icons";
import { FadeIn } from "./motion/FadeIn";

/**
 * ISO 9001:2015 certification section (navy band, brand colours).
 *
 * Accuracy: the certificate is held by Sandeep Industries (the firm behind the
 * DISHA GEARWORKS brand) for its quality management system; the certified
 * scope is the manufacturing of spare parts for combine harvesters. Wording is
 * deliberately precise — no "ISO verified/approved", no implication that
 * individual products or all activities are certified. The restrained shield
 * icon is original artwork, not the ISO logo or an accreditation mark.
 */

const facts: { label: string; value: string }[] = [
  { label: "Certified firm", value: "Sandeep Industries (brand: DISHA GEARWORKS)" },
  { label: "Certificate no.", value: "26MEQXV53" },
  { label: "Certification body", value: "Magnitude Management Services Pvt. Ltd." },
  {
    label: "Valid",
    value: "9 Oct 2026 – 8 Oct 2029 (subject to surveillance audits)",
  },
  {
    label: "Certified scope",
    value: "Manufacturing of spare parts for combine harvesters",
  },
];

export function IsoCertification() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-16 sm:py-20"
      aria-labelledby="iso-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-metal-texture" />
      <div className="container-x relative">
        <FadeIn className="grid items-center gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-12">
          {/* Credential badge (original artwork, not the ISO logo) */}
          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow">
              <ShieldIcon className="h-8 w-8" />
            </span>
            <div>
              <p className="label-mono text-orange">Quality Management</p>
              <p className="font-heading text-2xl font-bold leading-tight text-white">
                ISO 9001:2015
              </p>
              <p className="text-sm text-steel">Certified</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="label-mono mb-3 inline-flex items-center gap-2.5 text-orange">
              <span className="h-px w-7 bg-orange/70" /> Quality Certification
            </span>
            <h2
              id="iso-heading"
              className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl"
            >
              ISO 9001:2015 Certified
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
              Sandeep Industries, the firm behind DISHA GEARWORKS, holds ISO
              9001:2015 certification for its quality management system. The
              certified scope covers the manufacturing of spare parts for
              combine harvesters.
            </p>

            <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <div>
                    <dt className="label-mono text-steel/70">{f.label}</dt>
                    <dd className="text-sm font-medium text-white">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-7">
              <a
                href="/iso-9001-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the ISO 9001:2015 certificate (PDF, opens in a new tab)"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-gradient px-8 py-4 font-heading text-[15px] font-medium tracking-tight text-white shadow-glow ring-1 ring-inset ring-white/15 transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(201,116,58,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                View Certificate
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-steel/60">
              Certification applies to the quality management system for the
              stated scope, not to individual products.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
