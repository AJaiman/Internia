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

  // Get selectedInterests from cookie
  const selectedInterests = req.cookies.get('selectedInterests')?.value === 'true';

  if (!selectedInterests && session.email) {
    try {
      const response = await fetch(`http://localhost:8000/user/selected-interests/${session.email}`);
      const data = await response.json();
      
      if (data.selectedInterests) {
        // If backend confirms interests are selected, set the cookie and continue
        const response = NextResponse.next();
        response.cookies.set('selectedInterests', 'true', {
          path: '/',
          maxAge: 31536000,
          sameSite: 'lax'
        });
        return response;
      }
    } catch (error) {
      console.error('Error checking interests:', error);
    }

    // If no interests are selected or there was an error checking
    if (req.nextUrl.pathname !== '/interest-selection') {
      return NextResponse.redirect(new URL('/interest-selection', req.url));
    }
    return NextResponse.next();
  }

  // If interests are selected:
  // 1. Redirect to dashboard if trying to access interest-selection or root path
  // 2. Allow access to other pages
  if (selectedInterests) {
    if (req.nextUrl.pathname === '/interest-selection' || req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};