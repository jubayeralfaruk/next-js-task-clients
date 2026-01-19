// Mock authentication system with cookies
// This file contains utilities that work on both server and client

// Hardcoded credentials for mock authentication
export const MOCK_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'password123'
};

export const AUTH_COOKIE_NAME = 'mock-auth-token';

// Mock authentication function (server-side)
export function authenticateUser(email, password) {
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    return {
      success: true,
      user: {
        id: '1',
        email: MOCK_CREDENTIALS.email,
        name: 'Admin User'
      }
    };
  }
  return {
    success: false,
    error: 'Invalid email or password'
  };
}

// Client-side cookie utilities
export const clientAuth = {
  setToken: (user) => {
    const token = btoa(JSON.stringify(user));
    document.cookie = `${AUTH_COOKIE_NAME}=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;
  },
  
  getToken: () => {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie => 
      cookie.trim().startsWith(`${AUTH_COOKIE_NAME}=`)
    );
    
    if (!authCookie) return null;
    
    try {
      const token = authCookie.split('=')[1];
      return JSON.parse(atob(token));
    } catch (error) {
      return null;
    }
  },
  
  removeToken: () => {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};