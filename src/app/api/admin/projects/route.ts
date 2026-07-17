import { NextResponse } from "next/server";
import type { PortfolioItem } from "@/data/site";
import { verifySession } from "@/lib/admin/auth";
import { readJson, writeJson } from "@/lib/admin/store";

export async function GET() {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projects = await readJson<PortfolioItem[]>("projects.json");
  return NextResponse.json(projects);
}

export async function PUT(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let projects: PortfolioItem[];
  try {
    projects = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!Array.isArray(projects)) {
    return NextResponse.json(
      { error: "Expected an array of projects" },
      { status: 400 },
    );
  }

  await writeJson("projects.json", projects);
  return NextResponse.json({ success: true });
}
