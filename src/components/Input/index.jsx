import { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container, Children } from './styles';

function Input({ name, label, children, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <Container id="input-container">
      <label htmlFor={name}>{label}</label>

      <input ref={inputRef} id={name} defaultValue={defaultValue} {...rest} />

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
