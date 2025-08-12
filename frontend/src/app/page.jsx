'use client'

import React, { useState } from "react";
import './components/login/login.css'; // O CSS importado permanece o mesmo

const LoginPage = () => {
  const [user, setUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuário (E-mail ou CPF):", user);
    alert(`Tentativa de login com o usuário: ${user}`);
  };

  return (
    <div className="login-page">
      {/* Cabeçalho inspirado na imagem */}
      <header className="login-header">
        <div className="logo">
          <strong>SENAI</strong> EDUCAÇÃO ONLINE
        </div>
        <div className="header-actions">
          <div className="theme-toggle">💡</div>
          <div className="manual-acesso">Manual de acesso ❔</div>
        </div>
      </header>

      {/* Container principal do formulário */}
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
          <button type="submit">Avançar</button>
        </form>
      </main>

      {/* Rodapé inspirado na imagem */}
      <footer className="login-footer">
        © SENAI-SP - 2025
      </footer>
    </div>
  );
};

export default LoginPage;