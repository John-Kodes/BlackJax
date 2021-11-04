import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
// Config
import { API_URL } from "./config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkUserLoggedIn(), []);

  const login = async (email, password) => {
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

    if (data.status === "success") {
      // Setting cookies
      Cookies.set("jwt", data.token, {
        expires: 90,
        secure: process.env.NODE_ENV !== "development",
      });
      setUser(data.data.user);
      setError(null);
    } else {
      setError(
        "Login failed. Email or password may be incorrect, please try again"
      );
    }
  };

  const signup = async (email, password, username, color) => {
    const req = await fetch(`${API_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
        color,
      }),
    });

    const data = await req.json();
    console.log(data);

    if (data.status === "success") {
      // Setting cookies
      Cookies.set("jwt", data.token, {
        expires: 90,
        secure: process.env.NODE_ENV !== "development",
      });
      setUser(data.data.user);
      setError(null);
    } else {
      setError(data.message.replaceAll("`", ""));
    }
  };

  const logout = async () => {
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
    <AuthContext.Provider
      value={{ user, error, setError, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;