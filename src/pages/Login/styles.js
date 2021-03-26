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
`;

export const Form = styled.div`
  margin-top: 3rem;

  > #input-container {
    max-width: 368px;

    + #input-container {
      margin-top: 1rem;
    }
  }
`;
