import { readFileSync } from "fs";
import path from "path";
import type { FaqItem, PortfolioItem } from "@/data/site";

const cmsDir = path.join(process.cwd(), "src", "data", "cms");

/** Read CMS JSON via fs (avoids Turbopack HMR bugs on static JSON imports). */
function loadCmsJson<T>(file: string): T {
  const raw = readFileSync(path.join(cmsDir, file), "utf8");
  return JSON.parse(raw) as T;
}

export function getPortfolio(): PortfolioItem[] {
  return loadCmsJson<PortfolioItem[]>("projects.json");
}

export function getFaqs(): FaqItem[] {
  return loadCmsJson<FaqItem[]>("faqs.json");
}
