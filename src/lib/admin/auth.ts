import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "./auth-edge";

export { COOKIE_NAME };

const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getPassword() {
  return process.env.ADMIN_PASSWORD || "alitworld123";
}

function getSecret() {
  return process.env.ADMIN_SECRET || getPassword();
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function createToken(): string {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `admin:${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return false;

  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  const expected = sign(payload);

  if (!safeEqual(signature, expected)) return false;

  const expires = Number(payload.split(":")[1]);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  return true;
}

export function checkPassword(password: string): boolean {
  const expected = getPassword();
  if (password.length !== expected.length) {
    safeEqual(sign(password), sign(expected));
    return false;
  }
  return safeEqual(password, expected);
}

export async function createSession(): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE_NAME, createToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function verifySession(): Promise<boolean> {
  const jar = await cookies();
  return verifyToken(jar.get(COOKIE_NAME)?.value);
}

export async function clearSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}
