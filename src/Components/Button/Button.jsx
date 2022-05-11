import React from 'react';
import PropTypes from 'prop-types';
import { ButtonEl } from './Button.style';

const handleClick = '';

function Button({ type, color, children }) {
  return (
    <ButtonEl color={color} type={type} onClick={handleClick}>
      {children}
    </ButtonEl>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
