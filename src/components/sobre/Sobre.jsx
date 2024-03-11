import React from 'react'
import './sobre.css'
import pinguim from '/logoPNG.png'

const Sobre = () => {
  return (
    <div className='containerSobre'>
        <div className="leftSobre">
        <h1 className='sobreTitle'>Sobre</h1>
        <p className='contentSobre'>Prazer, eu sou o Igor, um programador Front-End aluno do curso de desenvolvimento de sistemas na ETEC (Escola Técnica Estadual). <br /> Desde cedo gosto da área de tecnologia e de correr atrás dos meus objetivos, procuro conhecimentos aprofundados nas tecnologias por conteúdos online e sempre crio projetos pessoais para treina-los.</p>
      </div>
      <img src={pinguim} alt="pinguim" className='pinguimSobre' />
    </div>
  )
}

export default Sobre
