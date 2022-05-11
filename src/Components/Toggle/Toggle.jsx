import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Toggle.style';

function Toggle({ children }) {
  const [toggle, setToggle] = useState(true);
  console.log('toggle ===', toggle);

  return (
    <S.ToggleEl>
      <S.Toggle onClick={() => setToggle(!toggle)} toggle={toggle}>
        <S.Bubble />
      </S.Toggle>
      {children}
    </S.ToggleEl>
  );
}

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Toggle;
