import styled, {keyframes} from "styled-components"

export const Container = styled.section `
    padding-top: 100px;
    box-sizing: content-box;
    height: calc(100vh - (100px));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div ``

export const Title = styled.h1 `
    background-image: linear-gradient(45deg, ${props => props.theme.Secondary}, #ff6cab, ${props => props.theme.Secondary}, #7366ff);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 80px;
    animation: titleColorsAnimation 3s linear infinite;
    @media (max-width: 550px) {
        font-size: 65px;
    }
    @media (max-width: 475px) {
        font-size: 50px;
    }
    @keyframes titleColorsAnimation {
        50% {
            background-position-x: 100%;
        }
        100% {
            background-position: 0%;
        }
    }
`

export const Subtitle = styled.h2 `
    color: ${props => props.theme.Quaternary};
    text-decoration: underline;
    font-style: italic;
    letter-spacing: 3px;
    font-size: 30px;
    @media (max-width: 550px) {
        font-size: 20px;
    }
    @media (max-width: 475px) {
        font-size: 16px;
    }
`

export const IconsBox = styled.div ``

export const Icon = styled.img `
    height: 35px;
    width: 35px;
    filter: grayscale(1);
    transition: .4s;
    padding: 10px;
    box-sizing: content-box;
    &:hover {
        filter: grayscale(0);
        transform: translateY(10%);
    }
`