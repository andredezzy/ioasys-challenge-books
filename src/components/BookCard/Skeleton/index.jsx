import Skeleton from 'react-loading-skeleton';

import { Container, Info } from '../styles';

function BookCardSkeleton() {
  return (
    <Container>
      <Skeleton width={128} height="100%" />

      <Info>
        <header>
          <Skeleton width="100%" height={24} />
          <Skeleton
            width="100%"
            height={16}
            count={2}
            style={{ marginTop: 8 }}
          />
        </header>

        <footer>
          <Skeleton
            width="100%"
            height={16}
            count={3}
            style={{ marginTop: 8 }}
          />
        </footer>
      </Info>
    </Container>
  );
}

export default BookCardSkeleton;
