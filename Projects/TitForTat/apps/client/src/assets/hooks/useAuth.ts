// src/hooks/useAuth.ts
export default function useAuth() {
  const token = localStorage.getItem('authToken');
  return !!token; // return true if token exists
}
