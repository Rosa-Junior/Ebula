import { createContext, useState, ReactNode, useEffect } from "react";
import { loginLocal, logoutLocal, loadSession } from "../services/authService";

// type User = {
//   id: string;
//   nome: string;
//   email: string;
//   senha: string;
//   areaAtuacao: string;
// };

type AuthContextType = {
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>(
    {
        user: null,
        login: async () => {},
        logout: async () => {},
        loading: true,
    }
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  //   Guarda o usuário logado globalmente  
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await loadSession();
      setUser(session);
      setLoading(false);
    })();
  }, []);

  //   Atualiza o usuário (login)
  async function login (email: string, password: string) {
    const session = await loginLocal(email, password);
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

// const { user, login } = useContext(AuthContext);