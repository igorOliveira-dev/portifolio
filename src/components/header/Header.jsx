import { useState, useEffect } from 'react'
import React from 'react'
import './header.css'
import logo from '/logoPNG.png'

const Header = ({inicioRef, sobreRef, tecnologiasRef, projetosRef, contatoRef}) => {
  const rolarParaSeção = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth'
    });
    if (window.innerWidth <= 560) {
      toggleVisibility();
    }
  };
  
  const [isVisble, setIsVisible] = useState(window.innerWidth > 560);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 560);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 560);
      setIsOpen(window.innerWidth <= 560);
    };

    window.addEventListener('resize', handleResize);

    // Limpeza na desmontagem
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[] );

  const toggleVisibility = () => {
    setIsVisible(!isVisble);
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <header>
        <img src={logo} alt="logo" className='logo' />
        <ul className='menu' style={{display: isVisble ? 'flex' : 'none'}}>
          <li><a href="#inicio" onClick={(e) => { e.preventDefault(); rolarParaSeção(inicioRef)}}>inicio</a></li>
          <li><a href="#sobre" onClick={(e) => { e.preventDefault(); rolarParaSeção(sobreRef)}}>sobre</a></li>
          <li><a href="#tecnologias" onClick={(e) => { e.preventDefault(); rolarParaSeção(tecnologiasRef)}}>tecnologias</a></li>
          <li><a href="#projetos" onClick={(e) => { e.preventDefault(); rolarParaSeção(projetosRef)}}>projetos</a></li>
          <li><a href="#contato" onClick={(e) => { e.preventDefault(); rolarParaSeção(contatoRef)}}>contato</a></li>
        </ul>
        <button className={`hamburgerBtn ${isOpen ? 'open' : ''}`} onClick={toggleVisibility}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </div>
  )
}

export default Header
