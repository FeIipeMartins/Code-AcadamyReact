import React from 'react';
import "./Cabecalho.css";
import NomelogoSemFundo from '../../Assets/Imagens/NomelogoSemFundo.png';
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <div className="Cabecalho">
            <Link to='/'><img src={NomelogoSemFundo} alt="" /></Link>

      <div className="Cabecalho__acessos">
        <nav className="Controle_Usuario">
          <button className="cadastro">
            <Link to='/cadastro'>Cadastre-se</Link> 
            {/* <a href="FazerCadastro.html">Cadastrar-se</a> */}
          </button>

          <button className="login">
            <Link to='/login'>Entrar</Link>
            {/* <a href="FazerLogin.html">Entrar</a> */}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Cabecalho;
