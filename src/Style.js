import styled from "styled-components"

export const Main = styled.div `
    background-color: ${props => props.theme.Primary};
    font-family: Arial, Helvetica, sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
`

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.Secondary} ${props => props.theme.Primary};
  }
  
  /* Chrome, Edge, and Safari scrollbar */
  *::-webkit-scrollbar {
    width: 6px;
  }
  
  *::-webkit-scrollbar-track {
    background: ${props => props.theme.Primary};
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.Secondary};
    border: 1px solid ${props => props.theme.Primary};
  }
`;

export default GlobalStyle;