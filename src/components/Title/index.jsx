import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Container } from './styles';

function Title({ color = '#333' }) {
  return (
    <Container color={color}>
      <Logo alt="Ioasys" />

      <h1>Books</h1>
    </Container>
  );
}

export default Title;
