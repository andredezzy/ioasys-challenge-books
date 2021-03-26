import PropTypes from 'prop-types';

import { Container, Children } from './styles';

function Input({ name, label, children, ...rest }) {
  return (
    <Container id="input-container">
      <label htmlFor={name}>{label}</label>

      <input id={name} {...rest} />

      <Children>{children}</Children>
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Input.defaultProps = {
  children: <></>,
};

export default Input;
