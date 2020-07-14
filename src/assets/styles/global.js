import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'PT Sans Caption', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

  html, body, #root {
    height: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #E5E5E5;
  }
`;
