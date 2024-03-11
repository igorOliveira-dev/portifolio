import React from 'react'
import './inicio.css'
import igor from '/igor1-1.jpg'

const Inicio = () => {
  return (
    <div className='containerInicio'>
      <div className="leftInicio">
        <h1>
          <strong className='igorTxt'>Igor Oliveira.</strong>
          <br />
          <span className='devTxt'>Dev Full-Stack</span>
        </h1>
        <a className='gitHubBtn' href='https://github.com/igorOliveira-dev' target='_blank'>GitHub</a>
      </div>
      <img className='igor' src={igor} />
    </div>
  )
}

export default Inicio
