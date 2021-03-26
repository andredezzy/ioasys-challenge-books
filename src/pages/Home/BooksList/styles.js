import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5rem;
`;

export const List = styled.main`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-content: center;

  @media (max-width: 1520px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 2rem;

  @media (max-width: 600px) {
    justify-content: center;

    span {
      order: 2;
    }

    #icon-button-container {
      :first-child {
        order: 1;
      }

      :last-child {
        order: 3;
      }
    }
  }

  span {
    margin: 0 1rem;

    strong {
      font-weight: 500;
    }
  }

  #icon-button-container + #icon-button-container {
    margin-left: 0.5rem;
  }
`;
