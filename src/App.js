import React from 'react';
import './App.css';
import Cabecalho from './Componentes/Cabecalho/Cabecalho';
import Flooter from './Componentes/Flooter/Flooter';
import { Outlet } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <main>
        <Cabecalho />
        <Outlet />
        <Flooter />
      </main>

      {/* <div>
        <Cabecalho />
      </div>
      <div>
        <Apresentacao />
      </div>
      <div>
        <VideoComponentes/>
      </div>
      <div>
        <Professores/>
      </div>
      <div>
        <NovosProfessores/>  
      </div>
      <div>
        < Faq/>
      </div>
      <div>
        <Parceiros/>
      </div> */}
    </div>
  );
}

export default App;
