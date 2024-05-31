import styled from "styled-components";

export const Container = styled.section `
    height: auto;
    padding-block: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;
`

export const leftContent = styled.div ``

export const RightContent = styled.div `
    @media (max-width: 1180px) {
       display: none;
    }
`

export const Title = styled.h1 `
    color: ${props => props.theme.Quaternary};
    font-size: 35px;
`

export const SkillBox = styled.div `
    width: 500px;
    background-color: ${props => props.theme.Tertiary};
    margin-top: 10px;
    padding: 5px;
    overflow-y: hidden;
    @media (max-width: 640px) {
        width: 90vw;
    }
`

export const SkillName = styled.h2 `
    color: ${props => props.theme.Quaternary};
    font-size: 25px;
    padding-block: 5px;
    border-bottom: 1px solid ${props => props.theme.Secondary};
    cursor: pointer;
`

export const SkillDesc = styled.p `
    color: ${props => props.theme.Secondary};
    margin-top: 15px;
`

export const LaptopUniverse = styled.img `
    height: 500px;
    width: 500px;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`