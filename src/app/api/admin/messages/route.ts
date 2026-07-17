import { NextResponse } from "next/server";
import { verifySession } from "@/lib/admin/auth";
import { readJson, writeJson } from "@/lib/admin/store";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export async function GET() {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await readJson<ContactMessage[]>("messages.json");
  return NextResponse.json(messages);
}

export async function DELETE(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const messages = await readJson<ContactMessage[]>("messages.json");
  const next = messages.filter((m) => m.id !== id);
  if (next.length === messages.length) {
    return NextResponse.json({ error: "Message not found" }, { status: 404 });
  }

  await writeJson("messages.json", next);
  return NextResponse.json({ success: true });
}
