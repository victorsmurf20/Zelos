'use client'
import React, { useState } from 'react';
import './usuario.css'; // Certifique-se de que o caminho está correto

const chamadosIniciais = [
  { id: 1, protocolo: '#2025-0158', assunto: 'Computador do laboratório 3 não liga', categoria: 'Manutenção de Equipamento', data: '28/07/2025', status: 'Aberto' },
  { id: 2, protocolo: '#2025-0159', assunto: 'Não consigo acessar o Wi-Fi', categoria: 'Problemas com Wi-Fi', data: '30/07/2025', status: 'Em Andamento' },
];

export default function ChamadosUsuario() {
  const [chamados, setChamados] = useState(chamadosIniciais);
  
  // Estados para os novos campos do formulário
  const [titulo, setTitulo] = useState('');
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');

  // Estado para controlar a visibilidade do formulário
  const [isFormVisible, setIsFormVisible] = useState(false);

  function abrirChamado(e) {
    e.preventDefault();
    if (!titulo.trim() || !servico.trim() || !descricao.trim()) {
      alert('Por favor, preencha todos os campos do chamado.');
      return;
    }
    const novo = {
      id: chamados.length + 1,
      protocolo: `#2025-0${150 + chamados.length + 1}`,
      assunto: titulo,
      categoria: servico, // Mapeando serviço para categoria
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'Aberto',
    };
    setChamados([...chamados, novo]);
    
    // Limpar campos e fechar o formulário
    setTitulo('');
    setServico('');
    setDescricao('');
    setIsFormVisible(false);
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Aberto': return 'status-badge aberto';
      case 'Em Andamento': return 'status-badge em-andamento';
      default: return 'status-badge concluido';
    }
  };

  return (
    <div className="chamados-container">
      <h2 className="chamados-title">Meus Chamados</h2>

      {/* --- ÁREA DO NOVO CHAMADO --- */}
      <div className="novo-chamado-container">
        {/* Renderização Condicional: ou mostra o botão, ou o formulário */}
        {!isFormVisible ? (
          <button 
            className="abrir-chamado-btn" 
            onClick={() => setIsFormVisible(true)}
          >
            Abrir Novo Chamado
          </button>
        ) : (
          <form 
            onSubmit={abrirChamado} 
            // Adiciona a classe 'visible' para ativar a animação do CSS
            className={`novo-chamado-form ${isFormVisible ? 'visible' : ''}`}
          >
            <button 
              type="button" 
              className="close-btn" 
              onClick={() => setIsFormVisible(false)}
            >
              &times;
            </button>
            <h3>Abrir Novo Chamado</h3>
            
            <div className="input-group">
              <label htmlFor="titulo">Título</label>
              <input
                id="titulo"
                type="text"
                placeholder="Ex: Impressora não funciona"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="servico">Serviço</label>
              <select 
                id="servico"
                value={servico} 
                onChange={e => setServico(e.target.value)} 
                required
              >
                <option value="" disabled>Selecione um tipo</option>
                <option value="Externo">Externo</option>
                <option value="Manutenção">Manutenção</option>
                <option value="Apoio Técnico">Apoio Técnico</option>
                <option value="Limpeza">Limpeza</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                placeholder="Descreva o problema ou a solicitação com mais detalhes."
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                required
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Enviar Chamado
            </button>
          </form>
        )}
      </div>

      {/* --- TABELA DE CHAMADOS --- */}
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
              <td data-label="Protocolo">{c.protocolo}</td>
              <td data-label="Assunto">{c.assunto}</td>
              <td data-label="Categoria">{c.categoria}</td>
              <td data-label="Data">{c.data}</td>
              <td data-label="Status">
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