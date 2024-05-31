import React, { useState, useRef, useEffect } from 'react'
import * as S from './StyleSkills.js'

import ScrollReveal from 'scrollreveal'

import LaptopUniverse from '/laptopUniverse.png'

const Skills = React.forwardRef((props, ref) => {

  const revealTitle = useRef();
  const revealFromLeft = Array(4).fill().map(() => useRef(null));
  const revealFromRight = Array(4).fill().map(() => useRef(null));

  useEffect(() => {
    ScrollReveal().reveal(revealTitle.current, {
        duration: 1500,
        reset: true,
        distance: '40%',
    });

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

  const [htmlHeight, setHtmlHeight] = useState('48px')
  const changeHtmlHeight = () => {
    if(htmlHeight === '48px') {
      setHtmlHeight('auto');
    } else {
      setHtmlHeight('48px')
    }
  }

  const [cssHeight, setCssHeight] = useState('48px')
  const changeCssHeight = () => {
    if(cssHeight === '48px') {
      setCssHeight('auto');
    } else {
      setCssHeight('48px')
    }
  }

  const [jsHeight, setJsHeight] = useState('48px')
  const changeJsHeight = () => {
    if(jsHeight === '48px') {
      setJsHeight('auto');
    } else {
      setJsHeight('48px')
    }
  }

  const [reactHeight, setReactHeight] = useState('48px')
  const changeReactHeight = () => {
    if(reactHeight === '48px') {
      setReactHeight('auto');
    } else {
      setReactHeight('48px')
    }
  }

  const [apiHeight, setApiHeight] = useState('48px')
  const changeApiHeight = () => {
    if(apiHeight === '48px') {
      setApiHeight('auto');
    } else {
      setApiHeight('48px')
    }
  }

  const [firebaseHeight, setFirebaseHeight] = useState('48px')
  const changeFirebaseHeight = () => {
    if(firebaseHeight === '48px') {
      setFirebaseHeight('auto');
    } else {
      setFirebaseHeight('48px')
    }
  }

  const [styleComponentsHeight, setStyleComponentsHeight] = useState('48px')
  const changeStyleComponentsHeight = () => {
    if(styleComponentsHeight === '48px') {
      setStyleComponentsHeight('auto');
    } else {
      setStyleComponentsHeight('48px')
    }
  }

  const [mySqlHeight, setMySqlHeight] = useState('48px')
  const changeMySqlHeight = () => {
    if(mySqlHeight === '48px') {
      setMySqlHeight('auto');
    } else {
      setMySqlHeight('48px')
    }
  }


  return (
    <div ref={ref}>
      <S.Container>
        <S.leftContent>
          <S.Title>Skills</S.Title>
  
          <S.SkillBox style={{height: htmlHeight}} ref={revealFromRight[0]}>
            <S.SkillName onClick={changeHtmlHeight}>HTML</S.SkillName>
            <S.SkillDesc>
              O HTML é uma linguagem de marcação utilizada para estruturar uma página web com documentos projetados para serem exibidos em um navegador web.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: cssHeight}} ref={revealFromLeft[0]}>
            <S.SkillName onClick={changeCssHeight}>CSS</S.SkillName>
            <S.SkillDesc>
              É uma linguagem de estilização que é usada para definir a aparência e a formatação de um documento escrito em HTML, ele pode criar qualquer idéia de layout levando o HTML como base.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: jsHeight}} ref={revealFromRight[1]}>
            <S.SkillName onClick={changeJsHeight}>JavaScript</S.SkillName>
            <S.SkillDesc>
              JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web, é o complemento que faltava ao HTML e CSS, ele traz infinitas possibilidades para a criação de sites.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: reactHeight}} ref={revealFromLeft[1]}>
            <S.SkillName onClick={changeReactHeight}>React JS</S.SkillName>
            <S.SkillDesc>
              React JS é uma biblioteca JavaScript de código aberto utilizada para criar interfazes de usuário, com react você pode criar componentes reutilizáveis que fazem o site poder ser feito com uma alta eficácia e em menores períodos de tempo, além disso ele traz novas diversas possibilidades de integração ao Back-End e é a biblioteca JS preferida entre diversos programadores.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: apiHeight}} ref={revealFromRight[2]}>
            <S.SkillName onClick={changeApiHeight}>APIs</S.SkillName>
            <S.SkillDesc>
              As APIs são conjuntos de regras e protocolos que permitem a comunicação de diferentes sistemas de software, são como pontes que conectam diferentes aplicativos e permitem que elas compartilhem dados e funcionalidades de maneira padronizada e controlada.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: firebaseHeight}} ref={revealFromLeft[2]}>
            <S.SkillName onClick={changeFirebaseHeight}>Firebase</S.SkillName>
            <S.SkillDesc>
              O firebase é uma plataforma desenvolvida pelo Google que fornece uma infraestrutura completissima de Back-End, ele traz possibilidades incriveis como: banco de dados, analytics, autenticação de usuários e várias outras.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: styleComponentsHeight}} ref={revealFromRight[3]}>
            <S.SkillName onClick={changeStyleComponentsHeight}>Styled Components</S.SkillName>
            <S.SkillDesc>
              o Styled Components é uma biblioteca para o React JS que permite estilizar a nível de componentes, nele os estilos são definidos diretamente no componente react e podendo combinar o CSS com a lógica do JavaScript e do React.
            </S.SkillDesc>
          </S.SkillBox>

          <S.SkillBox style={{height: mySqlHeight}} ref={revealFromLeft[3]}>
            <S.SkillName onClick={changeMySqlHeight}>mySQL</S.SkillName>
            <S.SkillDesc>
              MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL (Linguagem de Consulta Estruturada) como interface. É um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo e tem qualquer possibilidade um sistema de gerenciamento de bancos de dados poderia ter.
            </S.SkillDesc>
          </S.SkillBox>

        </S.leftContent>
        <S.RightContent>
          <S.LaptopUniverse src={LaptopUniverse} ref={revealTitle} />
        </S.RightContent>
      </S.Container>
    </div>
  )
})

export default Skills
