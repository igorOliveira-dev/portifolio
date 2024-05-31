import React, {useRef, useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'

import ScrollReveal from 'scrollreveal'

import * as S from './StyleContact.js'

const Contact = React.forwardRef((props, ref) => {

  const revealFromLeft = Array(3).fill().map(() => useRef(null));
  const revealFromRight = Array(2).fill().map(() => useRef(null));

  useEffect(() => {

    revealFromLeft.map((ref, index) => {
      if (ref.current) {
        ScrollReveal().reveal(ref.current, {
          origin: 'left',
          duration: 1500,
          reset: true,
          distance: '20%',
        });
      }
    });

    revealFromRight.map((ref, index) => {
      if (ref.current) {
        ScrollReveal().reveal(ref.current, {
          origin: 'right',
          duration: 1500,
          reset: true,
          distance: '20%',
        });
      }
    });
    
  }, []);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('preencha todos os campos');
      return;
    };

    alert("email enviado com sucesso")

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_USER_ID)
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <div ref={ref}>
        <S.Container>
          <S.ContactForm onSubmit={sendEmail}>

            <S.Title
            ref={revealFromLeft[0]}>Contato</S.Title>

            <S.Input
            ref={revealFromRight[0]}
            type='text'
            placeholder='Insira seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />

            <S.Input
            ref={revealFromLeft[1]}
            type='email'
            placeholder='Insira seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <S.MessageBox
            ref={revealFromRight[1]}
            placeholder='Insira a mensagem...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            />

            <S.SubmitInput
            ref={revealFromLeft[2]}
            type='submit'
            value={'Enviar'} />

            <S.ContactEmail>Email para contato: igor.oliveira.contact2210@gmail.com</S.ContactEmail>
          </S.ContactForm>
        </S.Container>
    </div>
  )
})

export default Contact
