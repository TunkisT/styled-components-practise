import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ color, type, children, onClick }) => {
  return (
    <S.Button color={color} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'secondary',
  type: 'button',
};

export default Button;
