import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";
import { readJson, writeJson } from "@/lib/admin/store";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveMessage(name: string, email: string, message: string) {
  try {
    const messages = await readJson<ContactMessage[]>("messages.json");
    messages.unshift({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });
    await writeJson("messages.json", messages);
  } catch (err) {
    console.error("[contact:save]", err);
  }
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name" }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters" },
      { status: 400 },
    );
  }

  await saveMessage(name, email, message);

  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[contact:dev]", { name, email, message });
    return NextResponse.json({
      success: true,
      message:
        "Message received! (Dev mode — add RESEND_API_KEY in .env.local to send real emails)",
    });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ?? "Alitworld Technologies <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you! We'll get back to you within 24 hours.",
  });
}
