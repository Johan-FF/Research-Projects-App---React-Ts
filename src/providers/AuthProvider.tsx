import { ReactNode, createContext, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";

const localStorageToken = "PR-USER-TOKEN";

interface AuthContextValue {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  setToken: (token: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextValue>({
  token: null,
  login: async () => {},
  setToken: (token: string) => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(
    localStorage.getItem(localStorageToken) || null
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await fetch("", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            dispatch(updateUser(userData));
          } else {
            setToken(null);
            localStorage.removeItem(localStorageToken);
          }
        } catch (error) {
          console.error("Failed to fetch user", error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const login = async (username: string, password: string) => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      localStorage.setItem(localStorageToken, data.token);
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setToken(null);
    dispatch(updateUser({}));
    localStorage.removeItem(localStorageToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
