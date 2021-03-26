import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container } from './styles';

function Header({ color }) {
  return (
    <Container color={color}>
      <Logo alt="Ioasys" />

      <h1>Books</h1>
    </Container>
  );
}

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: '#333',
};

export default Header;
