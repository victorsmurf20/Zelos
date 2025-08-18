'use client'

import React, { useState } from "react";
import './components/login/login.css';

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuário (E-mail ou CPF):", user);
    console.log("Senha:", password);
    // Lógica de autenticação aqui
  };

  return (
    <div className="login-page">
      <div className="background"></div>

      <div className="content">
        <header className="login-header">
          <div className="logo">
            <strong>SENAI</strong> EDUCAÇÃO ONLINE
          </div>
        </header>

        <main className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <p className="login-subtitle">Bem-vindo(a) ao Portal Online SENAI-SP!</p>

            <div className="input-group">
              <label htmlFor="user">Usuário</label>
              <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Insira seu e-mail ou CPF"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button type="submit">Avançar</button>
          </form>
        </main>

        <footer className="login-footer">
          © SENAI-SP - 2025
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
