import React, { useRef } from 'react';
import './App.css';
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import Sobre from './components/sobre/Sobre';
import Tecnologias from './components/tecnologias/Tecnologias';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';
import Rodape from './components/rodape/Rodape';

function App() {
  const inicioRef = useRef(null);
  const sobreRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  return (
    <div>
      <Header inicioRef={inicioRef} sobreRef={sobreRef} tecnologiasRef={tecnologiasRef} projetosRef={projetosRef} contatoRef={contatoRef} />
      <div ref={inicioRef}>
        <Inicio />
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
      <div ref={tecnologiasRef}>
        <Tecnologias />
      </div>
      <div ref={projetosRef}>
        <Projetos />
      </div>
      <div ref={contatoRef}>
        <Contato />
      </div>
      <Rodape />
    </div>
  );
}

export default App;