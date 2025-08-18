'use client'
import React, { useState } from 'react';
import Header from '../components/headers/header.jsx'; // 1. Importando o Header
import './usuario.css'; // Import do CSS

const chamadosIniciais = [
  // ... (dados dos chamados permanecem os mesmos)
];

export default function ChamadosUsuario() {
  const [chamados, setChamados] = useState(chamadosIniciais);

  // ... (todos os estados e funções permanecem os mesmos)
  const [titulo, setTitulo] = useState('');
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [detalheAberto, setDetalheAberto] = useState(null);
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
      categoria: servico,
      descricao: descricao,
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'Aberto',
    };
    setChamados([...chamados, novo]);
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
    // 2. Usando um Fragment <> para agrupar o Header e o conteúdo
    <>
      <Header /> {/* 3. Adicionando o componente Header aqui */}
      
      <div className="chamados-container">
        <h2 className="chamados-title">Meus Chamados</h2>

        {/* --- ABRIR NOVO CHAMADO --- */}
        <div className="novo-chamado-container">
          {!isFormVisible ? (
            <button className="abrir-chamado-btn" onClick={() => setIsFormVisible(true)}>
              Abrir Novo Chamado
            </button>
          ) : (
            <form onSubmit={abrirChamado} className={`novo-chamado-form ${isFormVisible ? 'visible' : ''}`}>
              <div className="form-header">
                <h3>Abrir Novo Chamado</h3>
                <button type="button" className="close-btn" onClick={() => setIsFormVisible(false)}>
                  &times;
                </button>
              </div>

              <div className="linha-dupla">
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

        {/* --- LISTA DE CHAMADOS EM CARDS --- */}
        <div className="meus-chamados-grid">
          {chamados.map(c => (
            <div key={c.id} className="meus-chamado-card">
              <div className="meus-card-header">
                <span className="protocolo">{c.protocolo}</span>
                <span className={getStatusClass(c.status)}>{c.status}</span>
              </div>
              <h3>{c.assunto}</h3>
              <p><strong>Categoria:</strong> {c.categoria}</p>
              <p><strong>Data:</strong> {c.data}</p>
              <button className="detalhes-btn" onClick={() => setDetalheAberto(c)}>
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* --- MODAL DETALHES --- */}
        {detalheAberto && (
          <div className="modal-overlay" onClick={() => setDetalheAberto(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{detalheAberto.assunto}</h3>
                <button className="close-btn" onClick={() => setDetalheAberto(null)}>&times;</button>
              </div>
              <p><strong>Protocolo:</strong> {detalheAberto.protocolo}</p>
              <p><strong>Categoria:</strong> {detalheAberto.categoria}</p>
              <p><strong>Data:</strong> {detalheAberto.data}</p>
              <p><strong>Status:</strong> {detalheAberto.status}</p>
              <hr />
              <p><strong>Descrição:</strong> {detalheAberto.descricao}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}