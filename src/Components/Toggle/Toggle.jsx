import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Toggle.style';

function Toggle({ children }) {
  let type = false;
  return (
    <S.ToggleEl>
      <S.Toggle onClick={type === !type}>
        <S.Bubble />
      </S.Toggle>
      {children}
    </S.ToggleEl>
  );
}

Toggle.propTypes = {
  color: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Toggle;
