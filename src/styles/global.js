import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 960px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    height: 100%;

    background: url(${backgroundImg}) no-repeat center center fixed;
    background-size: cover;
  }

  body, #root {
    min-height: 100vh;
  }

  body {
    color: #333;
  }

  body, input, textarea, button {
    font: 400 16px "Heebo", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
