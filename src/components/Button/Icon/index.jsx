import PropTypes from 'prop-types';

import { Container } from './styles';

function IconButton({ icon: Icon, ...rest }) {
  return (
    <Container id="icon-button-container" {...rest}>
      <Icon />
    </Container>
  );
}

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default IconButton;
