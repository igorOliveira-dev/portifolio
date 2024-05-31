import styled from "styled-components";

export const Container = styled.section `
    height: calc(100vh - (100px));
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1 `
    color: ${props => props.theme.Quaternary};
    font-size: 35px;
`

export const ContactForm = styled.form `
    display: flex;
    flex-direction: column;
`

export const Input = styled.input `
    height: 30px;
    width: 400px;
    padding: 10px;
    margin-top: 7px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.Secondary};
    color: ${props => props.theme.Secondary};
`

export const MessageBox = styled.textarea `
    height: 200px;
    width: 400px;
    padding: 10px;
    margin-top: 7px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.Secondary};
    color: ${props => props.theme.Secondary};
`

export const SubmitInput = styled.input `
    width: 400px;
    height: 30;
    padding: 10px;
    margin-top: 7px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.Secondary};
    color: ${props => props.theme.Secondary};
`

export const ContactEmail = styled.p `
    color: ${props => props.theme.Quaternary};
    font-size: 14px;
    margin-top: 10px;
`