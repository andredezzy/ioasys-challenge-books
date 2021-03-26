import styled from 'styled-components';

import loginBackgroundImg from '../../assets/login-background.jpg';

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: url(${loginBackgroundImg}) #fff no-repeat center/cover;

  z-index: -1;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    position: relative;

    margin-top: 3rem;

    #input-container {
      max-width: 368px;

      + #input-container {
        margin-top: 1rem;
      }
    }
  }
`;

export const ErrorTooltip = styled.div`
  position: absolute;
  bottom: -80px;
  left: 0;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  padding: 1rem;

  color: #fff;
  font-weight: bold;

  :before {
    content: '';
    display: block;

    position: absolute;
    left: 17px;
    top: -20px;

    width: 0;
    height: 0;

    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
  }
`;
