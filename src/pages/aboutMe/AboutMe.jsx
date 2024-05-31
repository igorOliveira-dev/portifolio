import React, {useEffect, useRef} from 'react'
import * as S from './StyleAboutMe.js'
import ScrollReveal from 'scrollreveal';

import igor from '/igor.jpg'

const AboutMe = React.forwardRef((props, ref) => {
    
    const leftReveal = useRef();
    const rightReveal = useRef();    

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

  return (
    <div ref={ref}>
      <S.Container>
        <S.LeftContent ref={leftReveal}>
          <S.Title>Sobre</S.Title>
          <S.Paragraph>
            Olá! Eu sou o Igor, um desenvolvedor web full-stack. Atualmente, estou cursando Desenvolvimento de Sistemas na ETEC, onde estou aprimorando minhas habilidades técnicas e aprendendo sobre as melhores práticas desse ramo, além disso busco aprimorar meus conhecimentos em diversos cursos online.
          </S.Paragraph>
          <S.Paragraph>
            Como desenvolvedor full-stack, tenho a capacidade única de ver o panorama geral de um projeto, desde a concepção da ideia até a implementação final. Isso me permite entender e trabalhar efetivamente em todas as camadas de um aplicativo web - desde o gerenciamento de banco de dados no back-end até a criação de interfaces de usuário intuitivas no front-end.
          </S.Paragraph>
          <S.Paragraph>
            Para empresas e indivíduos, isso significa que posso ser seu único ponto de contato para todas as suas necessidades de desenvolvimento web. Seja para construir um site do zero, adicionar novas funcionalidades a um aplicativo existente ou otimizar seu site para melhor desempenho e experiência do usuário.
          </S.Paragraph>
          <S.Paragraph>
            Acredito que a tecnologia tem o poder de transformar ideias em realidade e estou comprometido em usar minhas habilidades para ajudar você a alcançar seus objetivos. Seja você uma startup procurando construir seu primeiro MVP, uma empresa estabelecida procurando expandir sua presença online ou um indivíduo com uma ideia brilhante, estou aqui para ajudar.
          </S.Paragraph>
          <S.Paragraph>
            Vamos juntos transformar suas ideias em realidade!
          </S.Paragraph>
        </S.LeftContent>
        <S.RightContent>
          <S.IgorImg src={igor} ref={rightReveal} />
        </S.RightContent>
      </S.Container>
    </div>
  )
})

export default AboutMe
