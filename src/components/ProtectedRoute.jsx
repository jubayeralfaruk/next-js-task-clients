'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMockAuth } from '@/contexts/MockAuthContext';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isAuthenticated: mockAuth, loading: mockLoading } = useMockAuth();

  const isAuthenticated = mockAuth || !!session;
  const isLoading = status === 'loading' || mockLoading;

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
        <span className="ml-4 text-white">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return children;
}