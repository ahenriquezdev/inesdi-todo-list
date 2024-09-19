import { useState, useEffect } from "react";
import { LoginForm } from "@/components/login-form";
import { Navbar } from "@/components/navbar";
import { TodoApp } from "@/components/todo-app";
import { readLocalStorage, writeLocalStorage } from "@/services/local-storage";

export function App() {
  const [userToken, setUserToken] = useState(null);
  const AUTH_KEY = "_AUTH"

  useEffect(() => {
    const token = readLocalStorage(AUTH_KEY);
    if (token) {
      setUserToken(token);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    setUserToken(token);
    writeLocalStorage(AUTH_KEY, token);
  };

  const handleLogout = () => {
    setUserToken(null);
    writeLocalStorage(AUTH_KEY, null);
  };

  return (
    <div className="relative">
      <Navbar token={userToken} onLogout={handleLogout} />
      <div className="pt-16">
        {!userToken ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <TodoApp />
        )}
      </div>
    </div>
  );
}
