// Server-side authentication utilities
import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME } from './auth';

// Get user from cookie (server-side)
export function getUserFromCookie() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME);
    
    if (!token) return null;
    
    const user = JSON.parse(atob(token.value));
    return user;
  } catch (error) {
    return null;
  }
}

// Set authentication cookie (server-side)
export function setAuthCookie(response, user) {
  const token = btoa(JSON.stringify(user));
  
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });
}

// Remove authentication cookie (server-side)
export function removeAuthCookie(response) {
  response.cookies.delete(AUTH_COOKIE_NAME);
}