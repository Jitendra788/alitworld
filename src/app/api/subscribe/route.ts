import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    console.info("[subscribe:dev]", email);
    return NextResponse.json({
      success: true,
      message: "Subscribed! (Dev mode — email not sent)",
    });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ?? "Alitworld Technologies <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: "New newsletter subscriber",
    html: `<p><strong>Email:</strong> ${email}</p>`,
  });

  if (error) {
    return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: "You're subscribed! Welcome to Alitworld Technologies.",
  });
}
