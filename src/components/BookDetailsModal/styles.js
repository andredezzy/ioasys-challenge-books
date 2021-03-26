import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Info = styled.div`
  margin-left: 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    h1 {
      font-size: 1.75rem;
      font-weight: 500;
    }

    h2 {
      font-size: 0.9rem;
      font-weight: 400;
      color: #ab2680;
    }
  }

  footer,
  > div {
    h1,
    strong,
    span,
    p {
      font-size: 1rem;
      font-weight: 500;
    }

    span,
    p {
      font-weight: 400;
      color: #999;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  > div {
    h1 {
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.75;
      overflow-y: auto;

      max-height: 124px;

      ::-webkit-scrollbar {
        width: 6px;
      }

      ::-webkit-scrollbar-thumb {
        background: #ab2680;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${lighten(0.05, '#ab2680')};
      }

      svg {
        margin-right: 0.5rem;
        margin-bottom: -6px;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border: 0;
  outline: 0;

  background: #fff;
  border-radius: 50%;

  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  :hover {
    background: ${darken(0.025, '#fff')};
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const Container = styled.div`
  border: 0;
  outline: 0;
  overflow-y: auto;

  position: absolute;
  inset: 16px;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;

  max-width: 960px;
  max-height: 624px;

  display: flex;

  background: #fff;
  border-radius: 4px;

  padding: 3rem;

  @media (max-width: 960px) {
    max-height: auto;
    flex-direction: column;

    padding: 2rem;

    ${Info} {
      margin-top: 2rem;
      margin-left: 0;

      footer,
      > div {
        margin-top: 3rem;
      }
    }
  }

  img {
    box-flex: 1;
    flex: 1 1 auto;

    object-fit: contain;

    width: 100%;
    max-height: 100%;

    filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.2));
  }
`;
