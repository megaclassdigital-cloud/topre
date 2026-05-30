import "server-only";
import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "topre_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8;

type SessionPayload = {
  role: "admin";
  exp: number;
};

function getSecret() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_PASSWORD is not configured.");
  }
  return secret;
}

function base64Url(input: string) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function createAdminSessionToken() {
  const payload: SessionPayload = {
    role: "admin",
    exp: Date.now() + MAX_AGE_SECONDS * 1000,
  };
  const encodedPayload = base64Url(JSON.stringify(payload));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token?: string) {
  if (!token || !token.includes(".")) return false;
  const [encodedPayload, signature] = token.split(".");
  const expectedSignature = sign(encodedPayload);

  const signatureBuffer = Buffer.from(signature || "");
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length) return false;
  if (!crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) return false;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as SessionPayload;
    return payload.role === "admin" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function isAdminAuthenticated() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}

export function getAdminCookieMaxAge() {
  return MAX_AGE_SECONDS;
}
