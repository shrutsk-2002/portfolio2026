import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, getExpectedToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Never gate the login page itself or the verify API route.
  if (
    pathname.startsWith("/case-studies/login") ||
    pathname.startsWith("/api/case-studies/verify")
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const expected = await getExpectedToken();

  if (cookie && cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/case-studies/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

// Only run this middleware on paths under /case-studies/
export const config = {
  matcher: ["/case-studies/:path*"],
};
