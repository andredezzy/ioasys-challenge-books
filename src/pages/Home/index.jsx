import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import IconButton from '../../components/Button/Icon';
import Header from '../../components/Header';
import { useAuthentication } from '../../hooks/useAuthentication';

import BooksList from './BooksList';
import { Container, Flex, Profile } from './styles';

function Home() {
  const { user, signOut } = useAuthentication();

  const history = useHistory();

  function handleSignOut() {
    signOut();

    history.push('/login');
  }

  return (
    <Container>
      <Flex>
        <Header />

        <Profile>
          <span>
            Bem vindo, <strong>{user.name}!</strong>
          </span>

          <IconButton icon={FiLogOut} onClick={handleSignOut} />
        </Profile>
      </Flex>

      <BooksList />
    </Container>
  );
}

export default Home;
