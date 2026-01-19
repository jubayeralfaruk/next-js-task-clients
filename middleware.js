import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Protected routes that require authentication
  const protectedRoutes = ['/add-product', '/manage-products', '/update-product'];
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  if (isProtectedRoute) {
    // Check for mock auth cookie first
    const mockAuthToken = req.cookies.get('mock-auth-token');
    
    if (mockAuthToken) {
      // Mock auth is present, allow access
      return NextResponse.next();
    }
    
    // Fall back to NextAuth middleware for protected routes
    return withAuth(
      function middleware(req) {
        return NextResponse.next();
      },
      {
        callbacks: {
          authorized: ({ token }) => !!token,
        },
      }
    )(req);
  }
  
  // Allow access to public routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/add-product/:path*',
    '/manage-products/:path*', 
    '/update-product/:path*'
  ]
};