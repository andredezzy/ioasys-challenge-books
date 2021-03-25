import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    height: 100%;
  }

  body, #root {
    min-height: 100vh;
  }

  body {
    background: url(${backgroundImg}) #fff no-repeat center/cover;
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
