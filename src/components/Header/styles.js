import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  svg {
    fill: ${({ color }) => color};
    min-width: 105px;
  }

  h1 {
    color: ${({ color }) => color};
    font-weight: 300;

    margin-left: 1rem;
  }
`;
