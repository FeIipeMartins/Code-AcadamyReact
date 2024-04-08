import React from 'react';
import './Header.css';
import logo from '../../../Assets/Imagens/NomelogoSemFundo.png'; 
import userImage from '../../../Assets/Imagens/Usuario.png'; 

function HeaderPesquisa({ userName, onSearch }) {
  const identificadorPesquisa = event => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="CabecalhoP">
      <img src={logo} alt="Logo" className="Cabecalho__logo" />
      <div className="Barra-Pesquisa">
        <input
          type="text"
          placeholder="Pesquisar curso..."
          onChange={identificadorPesquisa}
        />
      </div>
      <div className="user-info">
        <span className="UserName">Bem-vindo, {userName}</span>
        <img src={userImage} alt="User" className="user-image" />
      </div>
    </div>
  );
}

export default HeaderPesquisa;
