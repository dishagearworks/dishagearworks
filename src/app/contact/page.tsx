import type { Metadata } from "next";
import { Suspense } from "react";
import { PageBanner } from "@/components/PageBanner";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { MailIcon, MapPinIcon, PhoneIcon, Icon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — Request a Quote for Agricultural Machinery Parts",
  description:
    "Contact DISHA GEARWORKS for agricultural machinery spare parts. Send an inquiry, request a quote, or reach us by email at Info@dishagearworks.in — Patiala Road, Nabha, Punjab.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DISHA GEARWORKS",
    description:
      "Tell us your requirements and our team will respond with a quotation and lead time. We welcome both domestic and export inquiries.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

const details = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: siteConfig.address.full,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in Touch"
        subtitle="Tell us your requirements and our team will respond with a quotation and lead time. We welcome both domestic and export inquiries."
        crumbs={[{ label: "Contact" }]}
        bgImage="/images/contact-hero.jpg"
      />

      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <SectionHeading
                eyebrow="Contact Details"
                title="We're here to help"
                align="left"
              />
              <ul className="mt-8 space-y-5">
                {details.map(({ icon: I, label, value, href }) => (
                  <li
                    key={label}
                    className="group flex items-start gap-4 rounded-lg border border-navy/10 bg-steel-light p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                      <I className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="label-mono text-orange">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="break-words font-heading text-base font-medium text-navy transition-colors hover:text-orange"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-heading text-base font-medium text-navy">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="group mt-5 flex items-start gap-4 rounded-lg border border-orange/30 bg-orange/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/50 hover:shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-orange shadow-card transition-transform duration-300 group-hover:scale-105">
                  <Icon name="tractor" className="h-6 w-6" />
                </span>
                <div>
                  <p className="label-mono text-orange">
                    Business Type
                  </p>
                  <p className="font-heading text-base font-medium text-navy">
                    {siteConfig.businessType}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <h2 className="mb-6 font-heading text-2xl font-bold text-navy">
                Send an Inquiry
              </h2>
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-card">
                    Loading form…
                  </div>
                }
              >
                <InquiryForm />
              </Suspense>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-steel-light pb-20">
        <div className="container-x">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
              <iframe
                title="DISHA GEARWORKS location — Nabha, Punjab"
                src="https://www.google.com/maps?q=Nabha,Punjab,India&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
