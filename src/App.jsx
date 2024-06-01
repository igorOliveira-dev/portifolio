import React, {createRef} from 'react'
import Header from './components/header/Header'
import GlobalStyle, * as S from './Style'

import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from './themes'
import Begin from './pages/begin/Begin';
import AboutMe from './pages/aboutMe/AboutMe';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function isDarkModePreferred() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const isDarkMode = isDarkModePreferred();
  const beginRef = React.createRef();
  const aboutMeRef = React.createRef();
  const skillsRef = React.createRef();
  const projectsRef = React.createRef();
  const contactRef = React.createRef();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <S.Main>
        <Header beginRef={beginRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
          <Begin ref={beginRef} />
          <AboutMe ref={aboutMeRef}/>
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        <Footer />
      </S.Main>
    </ThemeProvider>
  )
}

export default App
