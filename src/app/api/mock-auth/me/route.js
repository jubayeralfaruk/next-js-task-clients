import { NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/server-auth';

export async function GET() {
  try {
    const user = getUserFromCookie();
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Not authenticated'
      }, { status: 401 });
    }
    
    return NextResponse.json({
      success: true,
      user
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}