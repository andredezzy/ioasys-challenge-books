import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 224px;

  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.05);

  padding: 1rem;

  cursor: pointer;

  transition: box-shadow 0.2s;

  :hover {
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 100%;
  }
`;

export const Info = styled.div`
  margin-left: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    h1 {
      font-size: 1rem;
      font-weight: 500;
    }

    h2 {
      font-size: 0.9rem;
      font-weight: 400;
      color: #ab2680;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    color: #999;
    font-size: 0.9rem;
  }
`;
