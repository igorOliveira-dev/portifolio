import styled from "styled-components";

export const Footer = styled.div `
    width: 100vw;
    height: 50px;
    position: relative;
    bottom: 0;
    padding: 10px;
    & > p {
        color: ${props => props.theme.Secondary};
        text-align: center;
    }
`