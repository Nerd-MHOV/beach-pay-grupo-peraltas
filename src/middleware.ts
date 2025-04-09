import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./lib/session";
import { canAccessPage, PublicPages } from "./lib/authorization";

export default async function middleware(req: NextRequest) {
  // 1. Check if router is protected
  // const protectedRoutes = ["/panel"];
  const freeRoutes = PublicPages;
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = !freeRoutes.includes(currentPath);

  // 2. check for valid session
  const session = await verifySession(false);
  // 3. redirect unauthorized users
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (currentPath === "/login" && session?.userId) {
    return NextResponse.redirect(new URL("/panel", req.nextUrl));
  }

  // 4. check if user has access to the page
  const canAccess = canAccessPage({
    role: session?.userRole || "",
    page: currentPath,
  })

  if (!canAccess) {
    return NextResponse.redirect(new URL("/not-permitted", req.nextUrl));
  }
  // 5. render route
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
