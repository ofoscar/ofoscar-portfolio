import { useState } from 'react';

const AUTH_KEY = 'auth_user';

export interface AuthUser {
  username: string;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      return stored ? (JSON.parse(stored) as AuthUser) : null;
    } catch {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }
  });

  function saveUser(username: string) {
    const authUser = { username };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
    setUser(authUser);
  }

  function clearUser() {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  }

  return { user, isLoggedIn: user !== null, saveUser, clearUser };
}
