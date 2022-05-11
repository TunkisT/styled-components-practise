import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.style';

function Tag({ color, children }) {


  const splitColor = (color) => {
    
  }

  return <S.TagEl color={color}>{children}</S.TagEl>;
}

Tag.propTypes = {
  color: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tag;
