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
