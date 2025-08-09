import { verifyToken } from '@/shared';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decoded = await verifyToken(token)
    const response = NextResponse.next();

    response.headers.set('x-user-id', decoded.id as any);
    return response;
  } catch (e) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
export const config = {
  matcher: ['/user*', '/api/product*'],
}

