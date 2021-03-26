import styled from 'styled-components';

export const Container = styled.button`
  outline: 0;

  background: transparent;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  transition: border-color 0.2s;

  :not(:disabled):hover {
    border-color: rgba(51, 51, 51, 0.5);
  }

  :disabled {
    cursor: not-allowed;
  }
`;
