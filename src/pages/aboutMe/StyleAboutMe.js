import styled from "styled-components"

export const Container = styled.section `
    padding-top: 100px;
    box-sizing: content-box;
    height: calc(100vh - (100px));
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;
    @media (max-width: 900px) {
        flex-direction: column;
        height: 140vh;
    }
`

export const LeftContent = styled.div``
export const RightContent = styled.div``

export const Title = styled.h1 `
    color: ${props => props.theme.Quaternary};
    font-size: 35px;
`

export const Paragraph = styled.p `
    color: ${props => props.theme.Secondary};
    max-width: 500px;
    margin-top: 10px;
    @media (max-width: 550px) {
        width: 90vw;
    }
`

export const IgorImg = styled.img `
    height: 250px;
    width: 250px;
    object-fit: cover;
    margin-block: 15px;
`