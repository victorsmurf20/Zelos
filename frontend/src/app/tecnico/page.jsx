'use client';
import React, { useState } from 'react';
import './tecnico.css';
import Header from '../components/headers/header';

const chamadosTecnicoIniciais = [
  { id: 1, protocolo: '#2025-0158', assunto: 'Computador do laboratório 3 não liga', categoria: 'Manutenção de Equipamento', data: '28/07/2025', status: 'Aberto', checklist: ['Verificar energia', 'Testar cabo', 'Reiniciar PC'] },
  { id: 2, protocolo: '#2025-0159', assunto: 'Não consigo acessar o Wi-Fi', categoria: 'Problemas com Wi-Fi', data: '30/07/2025', status: 'Aberto', checklist: ['Checar senha', 'Reiniciar roteador', 'Verificar sinal'] },
  { id: 3, protocolo: '#2025-0160', assunto: 'Tela do projetor quebrada', categoria: 'Equipamento Audiovisual', data: '02/08/2025', status: 'Aberto', checklist: ['Trocar lâmpada', 'Limpar lente', 'Testar conexão HDMI'] },
];

export default function ChamadosTecnico() {
  const [chamados, setChamados] = useState(chamadosTecnicoIniciais);
  const [modalAberto, setModalAberto] = useState(false);
  const [chamadoSelecionado, setChamadoSelecionado] = useState(null);

  const marcarResolvido = (id) => {
    setChamados(chamados.map(c => c.id === id ? { ...c, status: 'Concluído' } : c));
  };

  const abrirModal = (chamado) => {
    setChamadoSelecionado(chamado);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setChamadoSelecionado(null);
  };

  const statusClasses = {
    'Aberto': 'status-aberto',
    'Em Andamento': 'status-andamento',
    'Checklist': 'status-checklist',
    'Concluído': 'status-concluido'
  };

  return (
    <>
    <Header />
      <div className="tecnico-container">
        <h2>📋 Chamados para Técnicos</h2>

        <div className="chamados-lista">
          {chamados.map(c => (
            <div key={c.id} className="chamado-card">
              <div className="chamado-header">
                <span className="protocolo">{c.protocolo}</span>
                <span className={`status ${statusClasses[c.status]}`}>{c.status}</span>
              </div>

              <h3>{c.assunto}</h3>
              <p><b>Categoria:</b> {c.categoria}</p>
              <p><b>Data:</b> {c.data}</p>

              {(c.status !== 'Concluído') && (
                <>
                  <button className="btn-resolvido" onClick={() => abrirModal(c)}>
                    📋 Ver CheckList
                  </button>
                  <button className="btn-resolvido" onClick={() => marcarResolvido(c.id)}>
                    ✅ Marcar como Resolvido
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* MODAL */}
        {modalAberto && chamadoSelecionado && (
          <div className="modal-overlay" onClick={fecharModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{chamadoSelecionado.assunto}</h3>
              <p><b>Categoria:</b> {chamadoSelecionado.categoria}</p>
              <p><b>Data:</b> {chamadoSelecionado.data}</p>
              <h4>CheckList:</h4>
              <ul>
                {chamadoSelecionado.checklist.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <button className="btn-resolvido" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
