import React, { useState, useRef, useEffect } from 'react'
import * as S from './StyleProjects.js'
import ScrollReveal from 'scrollreveal';

const Projects = React.forwardRef((props, ref) => {

    const reveal = useRef();
    const leftReveal = useRef();
    const rightReveal = useRef();
    useEffect(() => {
        ScrollReveal().reveal(reveal.current, {
            duration: 1500,
            reset: true,
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(leftReveal.current, {
            duration: 1500,
            reset: true,
            origin: 'left',
            distance: '20%',
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(rightReveal.current, {
            duration: 1500,
            reset: true,
            origin: 'right',
            distance: '20%',
        });
      }, []);

    const [activeCarousel, setActiveCarousel] = useState(2)
    const projectTitles = ['Calculadora IMC', 'Mind', 'To do List'];
    const projectDesc = [
        'Esta calculadora foi feita programada em JavaScript e com base no seu peso e sua algura, calcula o seu IMC, este é um projeto simples apenas para treinar conceitos básicos do JavaScript.',

        'Este projeto foi feito para ajudar pessoas que passam por problemas em sua saúde mental, tendo conteúdos sobre diversas condições mentais, questionários para avaliação e até mesmo uma comunidade para os usuários postarem seus relatos. O site foi programado em react, teve o uso do firebase e algumas outras ferramentas.',

        'Este projeto é uma lista de tarefas feita em react, é um clássico projeto para treinar os conhecimentos em uma linguagem e essa lista de tarefas usa várias das possibilidades de coisas a serem feita utilizando o react.'
    ]
    const projectLinks = [
        'https://igoroliveira-dev.github.io/Calculadora-IMC/',
        'https://igoroliveira-dev.github.io/Mind/',
        'https://igoroliveira-dev.github.io/to-do-list-react/',
    ]
    const codeLinks = [
        'https://github.com/igorOliveira-dev/Calculadora-IMC',
        'https://github.com/igorOliveira-dev/Mind',
        'https://github.com/igorOliveira-dev/to-do-list-react',
    ]
    
    const leftArrowClick = () => {
        if (activeCarousel > 1) {
            setActiveCarousel(Activecarousel => Activecarousel - 1)
        }
        else {
            setActiveCarousel(3)
        }
    }

    const rightArrowClick = () => {
        if (activeCarousel < 3) {
            setActiveCarousel(Activecarousel => Activecarousel + 1)
        }
        else {
            setActiveCarousel(1)
        }
    }

    const [overCarousel, setOverCarousel] = useState(false)

    const mouseOverCarousel = () => {
        setOverCarousel(true);
    }

    const mouseOutCarousel = () => {
        setOverCarousel(false);
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (
    <div ref={ref}>
        <S.Container>
            <S.Title>Projetos</S.Title>
            <S.Carousel>
                <S.LeftArrow onClick={leftArrowClick} ref={leftReveal}>{'<'}</S.LeftArrow>
                <S.ActiveCarousel ref={reveal} onMouseOver={mouseOverCarousel} onMouseLeave={mouseOutCarousel}>
                    <S.ProjectTitle>
                        {projectTitles[activeCarousel - 1]}
                    </S.ProjectTitle>
                    <S.ProjectDesc>
                        {projectDesc[activeCarousel -1]}
                    </S.ProjectDesc>
                </S.ActiveCarousel>
                <S.ProjectBtns
                onMouseOver={mouseOverCarousel} onMouseLeave={mouseOutCarousel}
                style={{backdropFilter: overCarousel ? 'blur(15px)' : 'none'}}
                >
                    <S.ProjectBtn style={{transform: overCarousel ? 'translateY(0)' : 'translateY(-800%)'}}
                    onClick={() => openInNewTab(projectLinks[activeCarousel - 1])}
                    >
                        Projeto
                    </S.ProjectBtn>
                    <S.CodeBtn style={{transform: overCarousel ? 'translateY(0)' : 'translateY(800%)'}}
                    onClick={() => openInNewTab(codeLinks[activeCarousel - 1])}
                    >
                        Código
                    </S.CodeBtn>
                </S.ProjectBtns>
                <S.RightArrow onClick={rightArrowClick} ref={rightReveal}>{'>'}</S.RightArrow>
            </S.Carousel>
        </S.Container>
    </div>
  )
})

export default Projects
