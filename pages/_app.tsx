import React, { useEffect, useState, useCallback } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@/components/shared/Layout'
import '@/styles/globals.css'
import '../styles/variables.css'

const PUBLIC_PATHS = ['/auth']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Start true to prevent flash
  const [isLoading, setIsLoading] = useState(true);
  const isPublicPath = PUBLIC_PATHS.includes(router.pathname);

  const checkAuth = useCallback(() => {
    const auth = localStorage.getItem('vaelora-auth');
    setIsAuthenticated(auth === 'true');
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Only check auth once on mount
    checkAuth();

    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'vaelora-auth') {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [checkAuth]);

  useEffect(() => {
    let mounted = true;

    const handleRouteChange = () => {
      if (mounted) {
        checkAuth();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      mounted = false;
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, checkAuth]);

  useEffect(() => {
    // Prevent navigation during loading
    if (isLoading) return;

    // Don't redirect if we're already on the correct path
    if (!isAuthenticated && !isPublicPath && router.pathname !== '/auth') {
      router.replace('/auth');
    } else if (isAuthenticated && router.pathname === '/auth') {
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, router, isPublicPath]);

  // Don't wrap auth page in Layout
  if (isPublicPath) {
    return <Component {...pageProps} />;
  }

  // Show nothing while checking auth
  if (isLoading) {
    return null;
  }

  // Only render protected pages if authenticated
  return isAuthenticated ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : null;
} 