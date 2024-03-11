import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contato.css'
import instaSvg from '/insta.svg'
import ghSvg from '/github.svg'

const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('preencha todos os campos');
      return;
    };

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_f3qjw3p", "template_ioa5q96", templateParams, "_scrs6fPcXiaOocFw")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  const instaClick = () => {
    window.open('https://www.instagram.com/dev.igoroliveira/', '_blank');
  };

  const ghClick = () => {
  window.open('https://github.com/igorOliveira-dev', '_blank');
  };  

  return (
    <div className='containerContato'>
      <div className="emailMesage">
        <h1 className='contatoTitle'>Contato</h1>

        <form className="formEmail" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="buttonSubmit" type="submit" value="Enviar" />
      </form>

      </div>
      <div className="contactsArea">
        <div className="contactEmailBox">
          <h2 className='contactEmailTitle'>E-mail para contato:</h2>
          <p className='contactEmailParagraph'>igor.oliveira.contact2210@gmail.com</p>
        </div>
        <div className="redesBox">
          <h2 className='redesTitle'>Siga nas redes:</h2>
          <div onClick={ghClick} className="ghContact">
            <img src={ghSvg} className='svgRedes' />
            <p>igorOliveira-dev</p>
          </div>
          <div onClick={instaClick} className="instaContact">
            <img src={instaSvg} className='svgRedes instaIcon' />
            <p>dev.igoroliveira</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
