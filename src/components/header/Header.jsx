import React, {useState} from 'react'
import * as S from './StyleHeader'

import logo from '/logoPNG.png'

const Header = ({beginRef, aboutMeRef, skillsRef, projectsRef, contactRef}) => {
  const [openedMenu, setOpenedMenu] = useState(false)

    const hamburgerClick = () => {
        setOpenedMenu(!openedMenu)
    }

    const scrollToBegin = () => {
      beginRef.current.scrollIntoView({ behavior: 'smooth' });
      setOpenedMenu(false);
    }

    const scrollToAboutMe = () => {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
      setOpenedMenu(false);
    }

    const scrollToSkills = () => {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      setOpenedMenu(false);
    }

    const scrollToProjects = () => {
      projectsRef.current.scrollIntoView({behavior: 'smooth'});
      setOpenedMenu(false)
    }

    const scrollToContact = () => {
      contactRef.current.scrollIntoView({behavior: 'smooth'});
      setOpenedMenu(false)
    }

  return (
    <div>
      <S.Header>
        <S.Logo src={logo} onClick={scrollToBegin} />
        <S.MenuHamburger>
          <S.Hamburger onClick={hamburgerClick}>
              <S.HamburgerBar style={{transform: `rotate(${openedMenu ? '45deg' : '0'}) translate(${openedMenu ? '10px, 9px' : '0, 0'})`}} />
              <S.HamburgerBar style={{transform: `translate(${openedMenu ? '800%' : '0'})`}} />
              <S.HamburgerBar style={{transform: `rotate(${openedMenu ? '-45deg' : '0'}) translate(${openedMenu ? '9px, -10px' : '0, 0'})`}} />
          </S.Hamburger>
          <S.NavMenu style={{ transform: `translateX(${openedMenu ? '0' : '100%'})` }} >
              <ul>
                <li><a onClick={scrollToBegin}>início</a></li>
                <li><a onClick={scrollToAboutMe}>Sobre</a></li>
                <li><a onClick={scrollToSkills}>Skills</a></li>
                <li><a onClick={scrollToProjects}>Projetos</a></li>
                <li><a onClick={scrollToContact}>Contato</a></li>
              </ul>
          </S.NavMenu>
        </S.MenuHamburger>
      </S.Header>
    </div>
  )
}

export default Header
