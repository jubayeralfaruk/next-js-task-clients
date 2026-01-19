import { NextResponse } from 'next/server';
import { removeAuthCookie } from '@/lib/server-auth';

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logout successful'
    });
    
    // Remove authentication cookie
    removeAuthCookie(response);
    
    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}