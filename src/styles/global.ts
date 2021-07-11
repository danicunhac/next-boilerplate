import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
