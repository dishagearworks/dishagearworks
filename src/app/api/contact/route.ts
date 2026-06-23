import { NextResponse } from "next/server";

// Run on the Node.js runtime (default) so we can talk to the email API.
export const runtime = "nodejs";
// This endpoint must never be cached/prerendered.
export const dynamic = "force-dynamic";

/** Receiving inbox + sender. Overridable via env; sensible defaults. */
const TO_EMAIL =
  process.env.CONTACT_EMAIL || process.env.CONTACT_TO_EMAIL || "info@dishagearworks.in";
// FROM must use the domain verified in Resend (dishagearworks.in).
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "DISHA GEARWORKS <website@dishagearworks.in>";

const MAX = { name: 120, company: 160, phone: 40, email: 160, product: 160, quantity: 60, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // ── Spam protection ──────────────────────────────────────────────
  // 1) Honeypot: a hidden field real users never see/fill. If it has a
  //    value, silently accept (don't tip off the bot) but drop the message.
  if (clean(data.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }
  // 2) Time-trap: forms submitted suspiciously fast are almost always bots.
  const startedAt = Number(data.formStartedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2500) {
    return NextResponse.json({ ok: true });
  }

  // ── Validation (prevents empty / malformed submissions) ──────────
  const name = clean(data.name, MAX.name);
  const company = clean(data.company, MAX.company);
  const phone = clean(data.phone, MAX.phone);
  const email = clean(data.email, MAX.email);
  const product = clean(data.product, MAX.product);
  const quantity = clean(data.quantity, MAX.quantity);
  const message = clean(data.message, MAX.message);

  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!phone) errors.push("phone");
  if (!email || !EMAIL_RE.test(email)) errors.push("email");
  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, a valid email and phone number." },
      { status: 400 }
    );
  }

  // ── Configuration check ──────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  // ── Compose + send via Resend ────────────────────────────────────
  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["Phone", phone],
    ["Email", email],
    ["Product Requirement", product || "—"],
    ["Quantity", quantity || "—"],
  ];
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1815;max-width:600px">
      <p style="font-size:15px;margin:0 0 16px">Hello DISHA GEARWORKS team,</p>
      <p style="font-size:15px;margin:0 0 16px">You have received a new enquiry from the website contact form. Details are below.</p>
      <table style="border-collapse:collapse;font-size:14px;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 14px 6px 0;color:#555;white-space:nowrap;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="font-size:14px;margin:18px 0 4px;color:#555"><strong>Message</strong></p>
      <p style="font-size:14px;white-space:pre-wrap;margin:0">${escapeHtml(message || "—")}</p>
      <p style="font-size:13px;margin:24px 0 0;color:#888">You can reply directly to this email to respond to ${escapeHtml(name)}.<br>Submitted via the contact form on dishagearworks.in</p>
    </div>
  `;
  const text =
    `Hello DISHA GEARWORKS team,\n\nYou have received a new enquiry from the website contact form.\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessage:\n${message || "—"}\n\n` +
    `Reply directly to this email to respond to ${name}.\nSubmitted via the contact form on dishagearworks.in`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New website enquiry${product ? ` — ${product}` : ""} from ${name}`,
        html,
        text,
        // Unique ref stops Gmail/Outlook from collapsing separate enquiries
        // into one thread, and gives each message a clean identity.
        headers: { "X-Entity-Ref-ID": crypto.randomUUID() },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Could not send your enquiry right now. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
