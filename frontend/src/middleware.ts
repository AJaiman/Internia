import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// All protected paths
const protectedPaths = ['/discover', '/favorites', '/history'];

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if the request is for a protected path
  const isProtectedPath = protectedPaths.some(path =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (!session) {
    // Redirect to the main page if no session exists
    if (isProtectedPath) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // Get selectedInterests from localStorage (client-side storage isn't available in middleware)
  const selectedInterests = req.cookies.get('selectedInterests')?.value === 'true';

  // If interests aren't selected:
  // 1. Redirect to interest-selection if trying to access other pages
  // 2. Allow access to interest-selection page
  if (!selectedInterests) {
    if (req.nextUrl.pathname !== '/interest-selection') {
      return NextResponse.redirect(new URL('/interest-selection', req.url));
    }
    return NextResponse.next();
  }

  // If interests are selected:
  // 1. Redirect to dashboard if trying to access interest-selection
  // 2. Allow access to other pages
  if (selectedInterests && req.nextUrl.pathname === '/interest-selection') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};