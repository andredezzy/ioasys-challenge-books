import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  height: 4rem;

  > label {
    position: absolute;
    top: 0.5rem;
    left: 1rem;

    font-size: 0.8rem;
    color: #fff;
    opacity: 0.5;
  }

  > input {
    width: 100%;
    height: 100%;

    border: 0;
    outline: none;
    background: transparent;

    padding: 1.25rem 1rem 0;

    color: #fff;
  }
`;

export const Children = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;

  height: 100%;

  display: flex;
  align-items: center;
`;
