import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const BLOG_ORIGIN = process.env.NEXT_PUBLIC_URL;

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      loading: false,

      setUser: (userData) => set({ user: userData }),

      listenForAuth: () => {        
        const requestUserData = () => {          
          if (window.opener && window.opener !== window) {
            window.opener.postMessage(
              { type: 'REQUEST_AUTH_USER' },
              BLOG_ORIGIN
            );
          }
        };
        
        setTimeout(requestUserData, 500);

        const handleMessage = (event) => {
          if (event.origin !== BLOG_ORIGIN) {
            return;
          }

          if (event.data?.type === 'AUTH_USER' && event.data?.payload) {
            set({ user: event.data.payload });
          }
        };

        window.addEventListener('message', handleMessage);

        return () => {
          window.removeEventListener('message', handleMessage);
        };
      },

      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-painel-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;