'use client'
import React, { useState } from 'react';
import '../Styles/login.css';

export default function Login() {
  // Estado para a aba ativa (Admin, Técnico, Usuário)
  const [activeTab, setActiveTab] = useState('Admin');

  // Estados para os campos do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para feedback ao usuário
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o recarregamento da página
    setLoading(true);
    setError('');

    try {
      // O endereço do seu back-end. Altere se for diferente.
      const apiUrl = 'http://localhost:3001/auth/login'; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
          userType: activeTab, // Envia o tipo de usuário para o back-end
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Se a resposta não for OK (ex: 401, 400), lança um erro com a mensagem do back-end
        throw new Error(data.message || 'Falha na autenticação');
      }

      // Se o login for bem-sucedido:
      console.log('Login bem-sucedido:', data.user);
      alert(`Login como ${activeTab} realizado com sucesso!`);
      // Aqui você redirecionaria o usuário para o painel principal, por exemplo:
      // window.location.href = '/dashboard';

    } catch (err) {
      // Captura qualquer erro de rede ou da lógica acima
      setError(err.message);
      console.error('Erro de login:', err.message);
    } finally {
      // Garante que o estado de loading seja desativado ao final
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Sistema de Chamados</h1>
        <p className="login-subtitle">Escola SENAI Armando de Arruda Pereira</p>

        <div className="tab-container">
          {['Admin', 'Técnico', 'Usuário'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email ou Matrícula</label>
          <input
            type="text" // Alterado para text para aceitar matrículas que não são emails
            placeholder="seuemail@senai.br"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="****************"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a href="#" className="forgot-password">Esqueceu a senha?</a>

          {/* Exibe mensagens de erro, se houver */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Entrando...' : `Entrar como ${activeTab}`}
          </button>
        </form>
      </div>
    </div>
  );
}