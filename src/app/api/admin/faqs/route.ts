import { NextResponse } from "next/server";
import { verifySession } from "@/lib/admin/auth";
import { readJson, writeJson } from "@/lib/admin/store";

export type FaqItem = {
  question: string;
  answer: string;
};

export async function GET() {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const faqs = await readJson<FaqItem[]>("faqs.json");
  return NextResponse.json(faqs);
}

export async function PUT(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let faqs: FaqItem[];
  try {
    faqs = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!Array.isArray(faqs)) {
    return NextResponse.json({ error: "Expected an array of FAQs" }, { status: 400 });
  }

  await writeJson("faqs.json", faqs);
  return NextResponse.json({ success: true });
}
