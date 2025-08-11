'use client'
import React, { useState } from 'react';

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
    if (!novoAssunto || !novaCategoria) return alert('Preencha assunto e categoria');
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

  return (
    <div style={{padding:'20px', fontFamily:'Arial', maxWidth:'900px', margin:'auto'}}>
      <h2 style={{color:'#002366'}}>Meus Chamados</h2>
      <form onSubmit={abrirChamado} style={{marginBottom:'20px'}}>
        <h3>Abrir Novo Chamado</h3>
        <input 
          placeholder="Assunto" 
          value={novoAssunto} 
          onChange={e => setNovoAssunto(e.target.value)} 
          style={{padding:'8px', marginRight:'10px', width:'300px'}} 
        />
        <input 
          placeholder="Categoria" 
          value={novaCategoria} 
          onChange={e => setNovaCategoria(e.target.value)} 
          style={{padding:'8px', marginRight:'10px', width:'200px'}} 
        />
        <button type="submit" style={{background:'#e66a0e', color:'white', border:'none', padding:'10px 15px', borderRadius:'5px', cursor:'pointer'}}>
          Abrir Chamado
        </button>
      </form>

      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead>
          <tr style={{background:'#f0f0f0'}}>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Protocolo</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Assunto</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Categoria</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Data</th>
            <th style={{padding:'10px', border:'1px solid #ccc'}}>Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
