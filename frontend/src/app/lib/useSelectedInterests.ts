'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useSelectedInterests() {
  const { data: session } = useSession();

  useEffect(() => {
    const checkSelectedInterests = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(`http://localhost:8000/user/selected-interests/${session.user.email}`);
          if (response.ok) {
            const data = await response.json();
            // Store in both cookie and localStorage for redundancy
            document.cookie = `selectedInterests=${data.selectedInterests}; path=/`;
            localStorage.setItem('selectedInterests', String(data.selectedInterests));
          }
        } catch (error) {
          console.error('Error checking selected interests:', error);
        }
      }
    };

    checkSelectedInterests();
  }, [session]);
}
