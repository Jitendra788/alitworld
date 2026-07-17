import { NextResponse } from "next/server";
import type { BlogPost } from "@/data/blogs";
import { verifySession } from "@/lib/admin/auth";
import { readJson, writeJson } from "@/lib/admin/store";

export async function GET() {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blogs = await readJson<BlogPost[]>("blogs.json");
  const sorted = [...blogs].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date) || a.slug.localeCompare(b.slug),
  );
  return NextResponse.json(sorted);
}

export async function PUT(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let blogs: BlogPost[];
  try {
    blogs = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!Array.isArray(blogs)) {
    return NextResponse.json({ error: "Expected an array of blogs" }, { status: 400 });
  }

  await writeJson("blogs.json", blogs);
  return NextResponse.json({ success: true });
}
