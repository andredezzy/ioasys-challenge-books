import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.button`
  border: 0;
  outline: 0;

  background: #fff;
  color: #b22e6f;
  border-radius: 44px;

  padding: 0.5rem 1.5rem;

  font-weight: 500;

  transition: all 0.2s;

  :hover {
    background: ${darken(0.025, '#fff')};
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotate} 2s linear infinite;

  svg {
    margin: 0;
    height: 16px;
    width: 16px;
  }
`;
