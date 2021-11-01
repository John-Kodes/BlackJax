import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
// Config
import { API_URL } from "./config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkUserLoggedIn(), []);

  const login = async (email, password) => {
    try {
      const req = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await req.json();

      // Setting cookies
      Cookies.set("jwt", data.token, {
        expires: 90,
        secure: process.env.NODE_ENV !== "development",
      });
      setUser(data.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const token = Cookies.get("jwt");

      const res = await fetch(`${API_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log(data);

      Cookies.remove("jwt");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const checkUserLoggedIn = async () => {
    const token = Cookies.get("jwt");

    if (!token) return setUser(null);

    const res = await fetch(`${API_URL}/users/isLoggedIn`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.status === "success") {
      setUser(data.data.user);
      console.log(user);
    } else setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
