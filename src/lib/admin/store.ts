import { promises as fs } from "fs";
import path from "path";

const cmsDir = path.join(process.cwd(), "src", "data", "cms");

export async function readJson<T>(file: string): Promise<T> {
  const filePath = path.join(cmsDir, file);
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function writeJson<T>(file: string, data: T): Promise<void> {
  const filePath = path.join(cmsDir, file);
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}
