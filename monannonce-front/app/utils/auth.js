// auth.js
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';

export const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      (async () => {
        const isAuthenticated = await useAuth();
        if (!isAuthenticated) {
          router.replace('/pages/login'); // Redirect to login page if not authenticated
        }
      })();
    }, []);

    return <Component {...props} />;
  };
};
