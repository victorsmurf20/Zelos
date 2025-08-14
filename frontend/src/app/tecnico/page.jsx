'use client'
import React, { useState } from 'react';

const chamadosTecnicoIniciais = [
  { id: 1, protocolo: '#2025-0158', assunto: 'Computador do laboratório 3 não liga', categoria: 'Manutenção de Equipamento', data: '28/07/2025', status: 'Aberto' },
  { id: 2, protocolo: '#2025-0159', assunto: 'Não consigo acessar o Wi-Fi', categoria: 'Problemas com Wi-Fi', data: '30/07/2025', status: 'Em Andamento' },
];

export default function ChamadosTecnico() {
  const [chamados, setChamados] = useState(chamadosTecnicoIniciais);

  function marcarResolvido(id) {
    setChamados(chamados.map(c => c.id === id ? { ...c, status: 'Concluído' } : c));
  }

  return (
    <div style={{padding:'20px', fontFamily:'Arial', maxWidth:'900px', margin:'auto'}}>
      <h2 style={{color:'#002366'}}>Chamados para Técnicos</h2>
      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead>
          <tr style={{background:'#f0f0f0'}}>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Protocolo</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Assunto</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Categoria</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Data</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Status</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map(c => (
            <tr key={c.id}>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>{c.protocolo}</td>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>{c.assunto}</td>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>{c.categoria}</td>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>{c.data}</td>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>
                <span style={{
                  padding:'5px 10px',
                  borderRadius:'15px',
                  backgroundColor: c.status === 'Aberto' ? '#cce5ff' : c.status === 'Em Andamento' ? '#e0bbff' : '#d4edda',
                  color: c.status === 'Aberto' ? '#004085' : c.status === 'Em Andamento' ? '#4b0082' : '#155724',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}>
                  {c.status}
                </span>
              </td>
              <td style={{padding:'10px', border:'1px solid #ccc'}}>
                {(c.status === 'Aberto' || c.status === 'Em Andamento') && (
                  <button
                    onClick={() => marcarResolvido(c.id)}
                    style={{background:'#e66a0e', color:'white', border:'none', padding:'6px 12px', borderRadius:'5px', cursor:'pointer'}}
                  >
                    Marcar como Resolvido
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
