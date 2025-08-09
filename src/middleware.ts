import { verifyToken } from '@/shared';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log("Middleware triggered for path:", request.nextUrl.pathname);
  
  const token = request.cookies.get('token')?.value;
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/');

  if (!token) {
    console.log("No token found");
    if (isApiRoute) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decoded = await verifyToken(token)
    const response = NextResponse.next();

    response.headers.set('x-user-id', decoded.id as string);
    console.log("Token verified, user ID:", decoded.id);
    return response;
  } catch (e) {
    console.log("Token verification failed:", e);
    if (isApiRoute) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/api/user/:path*',
    '/api/product/:path*',
    '/dashboard/:path*'
  ]
} 