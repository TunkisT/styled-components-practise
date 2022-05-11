import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Accordion.style';

function Accordion({ title, text }) {
  return (
    <S.Accordion>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Accordion>
  );
}

Accordion.propTypes = {};

export default Accordion;
