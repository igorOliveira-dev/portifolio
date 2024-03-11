import React from 'react'
import './tecnologias.css'

const Tecnologias = () => {
  return (
    <div className='containerTecnologias'>
        <h1 className='tecnologiasTitle'>Tecnologias</h1>
        <hr className='lineTecnologias' />
        <div className="tecBox">
            <h1 className='tecTitle'>HTML, CSS e JavaScript</h1>
            <p className='tecDesc'>Este trio é essencial nas paginas web, ele é a estruturação, estilização e interação da pagina, sendo obrigatorio qualquer programador web conhece-los muito bem.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>React JS</h1>
            <p className='tecDesc'>É uma biblioteca JavaScript muito eficiente, baseada em componentização, é uma biblioteca usada por muitos desenvolvedores e muitas vezes a preferida para criar suas aplicações web.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>Node JS</h1>
            <p className='tecDesc'>O Node faz com que seja possivel interpretar um codigo JavaScript fora do navegador, sendo usado para programação tanto Back-End quanto Front-End.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>PHP</h1>
            <p className='tecDesc'>É uma linguagem de script que pode ser embutida dentro do HTML e é muito usado para o desenvolvimento web, sendo mais voltado ao lado do Back-End.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>MySQL</h1>
            <p className='tecDesc'>O MySQL é um sistema de gerenciamento de banco de dados bastante usado em uma ampla variedade de aplicaticos e cenários, para a programação no MySQL é usada a linguagem SQL.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>APIs</h1>
            <p className='tecDesc'>As APIs permitem a interação de um diferentes softwares, fazendo com que seja possivel colocar informações de um software em outro, como por exemplo um software de clima que pega as informações de clima de uma API fornecedora.</p>
        </div>
        <div className="tecBox">
            <h1 className='tecTitle'>Design</h1>
            <p className='tecDesc'>Além do lado desenvolvedor, eu também posso criar uma parte visual complexa com ferramentas de design como: Figma, PhotoShop e Inkscape.</p>
        </div>
    </div>
  )
}

export default Tecnologias
