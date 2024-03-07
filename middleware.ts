import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: ['/((?!api/|_next/|_static/|_vercel|_sites/|_assets/|assets/|favicon/|favicon.ico).*)'],
};

export default function middleware(req: NextRequest) {
    req.nextUrl.pathname = '/app';
    return NextResponse.rewrite(req.nextUrl);

}
