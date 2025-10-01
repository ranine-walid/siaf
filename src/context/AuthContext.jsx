import { createContext, useContext, useState } from "react";

// 1️⃣ Créer le contexte
const AuthContext = createContext();

// 2️⃣ Fournisseur du contexte
export function AuthProvider({ children }) {
  // Pour le moment on simule la connexion (true par défaut)
  const [isconnected, setIsConnected] = useState(true);

  // Fonctions de login/logout simulées
  const login = () => setIsConnected(true);
  const logout = () => setIsConnected(false);

  return (
    <AuthContext.Provider value={{ isconnected, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3️⃣ Hook pour accéder plus facilement au contexte
export function useAuth() {
  return useContext(AuthContext);
}
