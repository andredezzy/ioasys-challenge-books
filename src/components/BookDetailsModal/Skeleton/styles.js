import styled from 'styled-components';

export const ImageSkeletonContainer = styled.div`
  > span {
    display: flex;
    justify-content: center;

    height: 100%;
    width: 100%;

    > span {
      width: 408px !important;
      height: 100%;

      @media (max-width: 960px) {
        max-width: 296px;
        height: 424px;
      }
    }
  }
`;

export const QuotesSkeletonContainer = styled.span`
  display: flex;
  align-items: center;

  > span {
    width: 100%;
  }
`;
