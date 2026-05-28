import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  try {
    const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
      headers: { cookie: request.headers.get("cookie") || "" },
    });

    const sessionData = await response.json().catch(() => null);
    
    // Better auth returns { session, user }
    const session = sessionData?.session;
    const user = sessionData?.user;

    if (pathname.startsWith("/admin")) {
      if (!user || user.role !== "admin") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }

    if (pathname.startsWith("/dashboard")) {
      if (!user) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  } catch (error) {
    // If auth server fails, fallback to redirect if protected
    if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
