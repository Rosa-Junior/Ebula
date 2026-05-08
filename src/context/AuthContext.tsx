import { createContext, useState, ReactNode, useEffect } from "react";
import { loginLocal, logoutLocal, loadSession } from "../services/authService";
import { SessionUser } from "../types/SessionUser";

type AuthContextData = {
  user: SessionUser | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextData | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  //   Guarda o usuário logado globalmente  
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   loadUser();
  }, []);

  async function loadUser() {
      try {
         const session = await loadSession();
         if (session) {setUser(session);}
      } finally {
         setLoading(false);
      }
   }

  //   Atualiza o usuário (login)
  async function login (email: string, senha: string) {
    const session = await loginLocal(email, senha);
    setUser(session);
  };

    //   Remove o usuário (logout)
  async function logout() {
    await logoutLocal();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};