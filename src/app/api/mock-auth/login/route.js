import { NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth';
import { setAuthCookie } from '@/lib/server-auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    const result = authenticateUser(email, password);
    
    if (result.success) {
      // Create response with user data
      const response = NextResponse.json({
        success: true,
        user: result.user,
        message: 'Login successful'
      });
      
      // Set authentication cookie
      setAuthCookie(response, result.user);
      
      return response;
    } else {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}