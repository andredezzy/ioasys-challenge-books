import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: #333;

    margin-right: 1rem;

    @media (max-width: 600px) {
      display: none;
    }

    > strong {
      font-weight: 500;
    }
  }
`;
