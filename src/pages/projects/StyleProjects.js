import styled from "styled-components";

export const Container = styled.section `
    height: calc(100vh - (100px));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

export const Title = styled.h1 `
    color: ${props => props.theme.Quaternary};
    font-size: 35px;
    margin-bottom: 20px;
`

export const Carousel = styled.div `
    display: flex;
    align-items: center;
`

export const LeftArrow = styled.button `
    height: 75px;
    transform: scaleY(5);
    font-weight: bolder;
    width: 30px;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.Quaternary};
    padding: 20px;
    cursor: pointer;
    @media (max-width: 550px) {
        padding: 10px;
    }
`

export const RightArrow = styled.button `
    height: 75px;
    transform: scaleY(5);
    font-weight: bolder;
    width: 30px;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.Quaternary};
    padding: 20px;
    cursor: pointer;
    @media (max-width: 550px) {
        padding: 10px;
    }
`

export const ActiveCarousel = styled.div `
    width: 400px;
    height: 250px;
    background-color: ${props => props.theme.Tertiary};
    border: 1px solid ${props => props.theme.Secondary};
    margin-inline: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
    @media (max-width: 550px) {
        width: 75vw;
    }
`

export const ProjectTitle = styled.h2 `
    color: ${props => props.theme.Quaternary};
    margin-bottom: 10px;
`

export const ProjectDesc = styled.p `
    color: ${props => props.theme.Secondary};
    width: 85%;
    text-align: center;
`

export const ProjectBtns = styled.div `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 250px;
    transition: .4s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 550px) {
        width: 76vw;
    }
`

export const CodeBtn = styled.button `
    transition: .4s;
    padding: 10px;
    width: 150px;
    margin: 15px;
    background-color: ${props => props.theme.Tertiary};
    color: ${props => props.theme.Secondary};
    border: 1px solid ${props => props.theme.Secondary};
    &:hover {
        background-color: ${props => props.theme.Primary};
        border-color: ${props => props.theme.Tertiary}
    }
`

export const ProjectBtn = styled.button `
    transition: .4s;
    padding: 10px;
    width: 150px;
    background-color: ${props => props.theme.Tertiary};
    color: ${props => props.theme.Secondary};
    border: 1px solid ${props => props.theme.Secondary};
    &:hover {
        background-color: ${props => props.theme.Primary};
        border-color: ${props => props.theme.Tertiary}
    }
`