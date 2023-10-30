import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RouterPath } from './enums/router-path';

export function middleware(request: NextRequest) {
  const { nextUrl, cookies, url } = request;
  
  const path = nextUrl.pathname;
  const userToken = cookies.get('token')?.value;

  const exceptPaths = ['/login', '/register'];

  if (!userToken) {
    return NextResponse.redirect(new URL(RouterPath.Login, url));
  } else if (userToken && exceptPaths.includes(path)) {
    return NextResponse.redirect(new URL(RouterPath.Home, request.url));
  }
}
export const config = {
  matcher: ['/', '/passport/:path*', '/retro-mileage-claim/:path*', '/logout'],
};
