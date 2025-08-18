// Header.jsx
import React from 'react';
import './header.css'; // Import do CSS do Header

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SENAI_logo.svg/2560px-SENAI_logo.svg.png" 
          alt="Logo SENAI"
        />
      </div>

      <div className="header-actions">
        {/* O link agora leva para /login, como solicitado anteriormente */}
        <a href="/login" className="logout-btn">
          {/* 1. Corrigido o caminho da imagem */}
          <img src="/exit.png" alt="Ícone de saída" className="logout-icon" />    
        </a>
      </div>
    </header>
  );
};

export default Header;