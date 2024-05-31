import styled from "styled-components";

export const Header = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
    background-color: ${props => props.theme.Tertiary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 1;
`

export const Logo = styled.img `
    height: 75px;
    @media (min-width: 900px) {
        margin-left: 10px;
    }
`

export const MenuHamburger = styled.div``

export const Hamburger = styled.div `
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    transition: .4s;
    border-radius: 15px;
    box-sizing: content-box;
    &:hover {
        background-color: #00000040;
    }
    @media (min-width: 900px) {
        margin-right: 20px;
    }
`

export const HamburgerBar = styled.div `
    width: 40px;
    height: 5px;
    background-color: ${props => props.theme.Secondary};
    transition: .4s;
`

export const NavMenu = styled.div `
    max-width: 500px;
    width: 60vw;
    height: calc(100vh - (100px));
    position: fixed;
    right: 0;
    top: 100px;
    background-color: ${props => props.theme.Primary};
    border-left: 1px solid ${props => props.theme.Secondary};
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    & > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: calc(100vh - (100px));
        & > li > a {
            color: ${props => props.theme.Secondary};
            text-decoration: none;
            padding: 20px;
            font-size: 20px;
            cursor: pointer;
        }
    }
`