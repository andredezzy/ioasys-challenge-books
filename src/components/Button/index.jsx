import { FiLoader } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

function Button({ loading, children, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <Loading>
          <FiLoader />
        </Loading>
      ) : (
        children
      )}
    </Container>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
