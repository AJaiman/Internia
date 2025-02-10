import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session?.email) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const response = await fetch(`${process.env.API_URL}/user/selected-interests/${session.email}`);
    const data = await response.json();

    if (data.selectedInterests) {
      // User has already selected interests, redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } else {
      // User needs to select interests
      return NextResponse.redirect(new URL('/interest-selection', req.url));
    }
  } catch (error) {
    console.error('Error checking interests:', error);
    return NextResponse.redirect(new URL('/interest-selection', req.url));
  }
} 