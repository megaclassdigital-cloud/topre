import { NextRequest, NextResponse } from "next/server";
import { createAdminSessionToken, getAdminCookieMaxAge, getAdminCookieName } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = String(body.password || "");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ message: "ADMIN_PASSWORD belum diset." }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ message: "Password salah. Silakan coba lagi." }, { status: 401 });
    }

    const response = NextResponse.json({ message: "Login berhasil." });
    response.cookies.set({
      name: getAdminCookieName(),
      value: createAdminSessionToken(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: getAdminCookieMaxAge(),
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Request tidak valid." }, { status: 400 });
  }
}
