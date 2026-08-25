import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, getExpectedToken } from "../../../../lib/auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");
  const redirect = String(formData.get("redirect") || "/case-studies");

  const correctPassword = process.env.CASE_STUDY_PASSWORD || "";

  if (!correctPassword || password !== correctPassword) {
    const loginUrl = new URL("/case-studies/login", request.url);
    loginUrl.searchParams.set("redirect", redirect);
    loginUrl.searchParams.set("error", "1");
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const token = await getExpectedToken();
  const response = NextResponse.redirect(new URL(redirect, request.url), {
    status: 303,
  });

  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
