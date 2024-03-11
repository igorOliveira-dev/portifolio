import React from 'react'
import './projetos.css'

const Projetos = () => {
  return (
    <div className='containerProjetos'>
      <h1 className='projetosTitle'>Projetos</h1>
      <div className="projetosBox">

        {/* PROJETO TO DO LIST */}
        <div className="toDoList projeto">
          <div className="projectTextArea">
            <h1 className='projectTitle'>To Do List</h1>
            <p className='projectDesc'>Esta é uma lista de tarefas feita em react.</p>
          </div>
          <div className="projectBtnArea">
            <a href='https://github.com/igorOliveira-dev/to-do-list-react' target='_blank'>código</a>
            <a href='https://igoroliveira-dev.github.io/to-do-list-react/' target='_blank'>projeto</a>
          </div>
        </div>

        {/* PROJETO CALCULADORA IMC */}
        <div className="calculadoraImc projeto">
          <div className="projectTextArea">
            <h1 className='projectTitle calculadoraImcTitle'>Calculadora IMC</h1>
            <p className='projectDesc'>Uma calculadora de IMC programada em JavaScript</p>
          </div>
          <div className="projectBtnArea">
            <a href='https://github.com/igorOliveira-dev/Calculadora-IMC' target='_blank'>código</a>
            <a href='https://igoroliveira-dev.github.io/Calculadora-IMC/' target='_blank'>projeto</a>
          </div>
        </div>

        {/* PROJETOS EM BREVE */}
        <div className="emBreve projeto">
          <h1 className='projectTitle'>Em breve</h1>
        </div>

        <div className="emBreve projeto">
          <h1 className='projectTitle'>Em breve</h1>
        </div>

        <div className="emBreve projeto">
          <h1 className='projectTitle'>Em breve</h1>
        </div>

        <div className="emBreve projeto">
          <h1 className='projectTitle'>Em breve</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Projetos
