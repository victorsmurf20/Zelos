'use client'
import React, { useState } from 'react';
import './usuario.css'; // Certifique-se de que o caminho está correto

const chamadosIniciais = [
  { id: 1, protocolo: '#2025-0158', assunto: 'Computador do laboratório 3 não liga', categoria: 'Manutenção de Equipamento', data: '28/07/2025', status: 'Aberto' },
  { id: 2, protocolo: '#2025-0159', assunto: 'Não consigo acessar o Wi-Fi', categoria: 'Problemas com Wi-Fi', data: '30/07/2025', status: 'Em Andamento' },
];

export default function ChamadosUsuario() {
  const [chamados, setChamados] = useState(chamadosIniciais);
  const [novoAssunto, setNovoAssunto] = useState('');
  const [novaCategoria, setNovaCategoria] = useState('');

  function abrirChamado(e) {


    
    e.preventDefault();
    if (!novoAssunto.trim() || !novaCategoria.trim()) { // Usando trim() para evitar apenas espaços em branco
      alert('Por favor, preencha o assunto e a categoria.');
      return;
    }
    const novo = {
      id: chamados.length + 1,
      protocolo: `#2025-0${150 + chamados.length + 1}`,
      assunto: novoAssunto,
      categoria: novaCategoria,
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'Aberto',
    };
    setChamados([...chamados, novo]);
    setNovoAssunto('');
    setNovaCategoria('');
  }

  // Função para determinar a classe CSS do badge de status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Aberto':
        return 'status-badge aberto';
      case 'Em Andamento':
        return 'status-badge em-andamento';
      // Adicione mais casos se houver outros status, como 'Concluído'
      default:
        return 'status-badge concluido'; // Um status padrão, caso não seja um dos conhecidos
    }
  };

  return (
    <div className="chamados-container">
      
      <h2 className="chamados-title">Meus Chamados</h2>

      <form onSubmit={abrirChamado} className="novo-chamado-form">
        <h3>Abrir Novo Chamado</h3>
        <div className="input-group">
          <input
            placeholder="Assunto do chamado"
            value={novoAssunto}
            onChange={e => setNovoAssunto(e.target.value)}
            required // Torna o campo obrigatório no HTML5
          />
        </div>
        <div className="input-group">
          <input
            placeholder="Categoria (ex: Hardware, Software)"
            value={novaCategoria}
            onChange={e => setNovaCategoria(e.target.value)}
            required // Torna o campo obrigatório no HTML5
          />
        </div>
        <button type="submit" className="submit-button">
          Abrir Chamado
        </button>
      </form>

      <table className="chamados-table">
        <thead>
          <tr>
            <th>Protocolo</th>
            <th>Assunto</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map(c => (
            <tr key={c.id}>
              <td>{c.protocolo}</td>
              <td>{c.assunto}</td>
              <td>{c.categoria}</td>
              <td>{c.data}</td>
              <td>
                <span className={getStatusClass(c.status)}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}