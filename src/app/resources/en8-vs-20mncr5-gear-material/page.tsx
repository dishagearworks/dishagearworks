import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { getArticle } from "@/config/articles";
import { siteConfig } from "@/config/site";

const article = getArticle("en8-vs-20mncr5-gear-material")!;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.description,
  alternates: { canonical: `/resources/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.description,
    url: `${siteConfig.url}/resources/${article.slug}`,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell article={article}>
      <p>
        Two materials come up again and again when discussing agricultural
        gearbox components: <strong>EN8</strong> and <strong>20MnCr5</strong>.
        They are not competitors so much as tools for different jobs. Choosing
        well means matching the material to how the part is loaded — and knowing
        when heat treatment changes the picture.
      </p>

      <h2>EN8 — a dependable medium-carbon steel</h2>
      <p>
        EN8 is an unalloyed medium-carbon steel valued for its balance of
        strength, machinability and cost. It is a sensible default for{" "}
        <Link href="/products/shafts">shafts</Link>, spacers, many general gears
        and components that see moderate loads. EN8 can be through-hardened and
        tempered to raise strength where a part needs it, and it machines
        cleanly, which keeps cost reasonable on bulk and replacement work.
      </p>
      <p>
        Where EN8 reaches its limit is heavy, repeated tooth contact under shock
        loads. A through-hardened gear is hard all the way through, which can
        make the tooth more brittle than ideal for high-impact duty.
      </p>

      <h2>20MnCr5 — a case-hardening alloy for gears</h2>
      <p>
        20MnCr5 is a chromium-manganese alloy steel designed for{" "}
        <strong>carburizing</strong> (case hardening). After carburizing, the
        gear tooth has a hard, wear-resistant surface over a tougher, more
        ductile core. That combination — hard skin, tough heart — is exactly
        what a loaded gear tooth wants: resistance to surface wear and pitting on
        the outside, and the ability to absorb shock without cracking on the
        inside.
      </p>
      <p>
        This is why higher-duty gears in assemblies such as the{" "}
        <Link href="/products/5-speed-gdr-gearbox-assembly">
          5 Speed GDR gearbox
        </Link>{" "}
        and the{" "}
        <Link href="/products/4-speed-gdr-gearbox-assembly">
          4 Speed GDR gearbox
        </Link>{" "}
        are commonly made from 20MnCr5 and carburized, while shafts in the same
        assembly are often EN8.
      </p>

      <h2>Why carburizing matters</h2>
      <p>
        Carburizing diffuses carbon into the surface of a low-carbon alloy before
        hardening, creating a hardened "case" of a controlled depth. The result
        is a part that resists the two things that kill gear teeth — abrasive
        wear and contact fatigue — without becoming brittle throughout. The case
        depth and hardness are chosen for the component and its duty.
      </p>

      <h2>How to specify the right material</h2>
      <ul>
        <li>
          <strong>Moderate load, cost-sensitive, simple geometry:</strong> EN8,
          tempered if extra strength is needed.
        </li>
        <li>
          <strong>Loaded gear teeth, wear and shock:</strong> 20MnCr5,
          carburized.
        </li>
        <li>
          <strong>Shafts and supports within a gearbox:</strong> EN8 is common
          and economical.
        </li>
        <li>
          <strong>Unsure?</strong> Share the application, the failure mode of the
          old part (worn teeth vs cracked vs bent) and we will recommend a
          material as per requirement.
        </li>
      </ul>
      <p>
        At DISHA GEARWORKS, gears are manufactured in 20MnCr5 and EN8 as per
        component requirement, with carburizing available where it adds value.
        Every assembly is inspected before dispatch and gearbox assemblies are
        tested.
      </p>
      <p>
        Planning a gearbox or gear order?{" "}
        <Link href="/products/5-speed-gdr-gearbox-assembly">
          Explore our gearbox assemblies
        </Link>{" "}
        or <Link href="/contact">request a quote</Link> with your sample, drawing
        or application details.
      </p>
    </ArticleShell>
  );
}
