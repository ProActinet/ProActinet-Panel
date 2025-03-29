import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface AuthState {
  user: any | null;
  setAuth: (params: { user: any }) => void;
  clearAuth: () => void;
}

// Custom localStorage wrapper to match Zustand's storage format
const customStorage: PersistStorage<AuthState> = {
  getItem: (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  },
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setAuth: ({ user }) => set({ user }),
      clearAuth: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // Key used in localStorage
      storage: customStorage, // Custom storage wrapper
    }
  )
);

export default useAuthStore;
