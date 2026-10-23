// middleware.ts (Place this file in your root or src/ directory)
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
	const token = request.cookies.get('token')?.value
	const { pathname } = request.nextUrl

	// Define routes that require authentication
	if (pathname.startsWith('/chats') && !token) {
		// Redirect unauthenticated users to login
		return NextResponse.redirect(new URL('/signup', request.url))
	}

	return NextResponse.next()
}

// Optional: Limit the middleware to only run on specific paths
export const config = {
	matcher: ['/chats/:path*']
}
