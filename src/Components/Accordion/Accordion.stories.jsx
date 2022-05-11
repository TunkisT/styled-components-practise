import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const primary = () => (
  <Accordion
    title='Section 1 title'
    text='lorem ipsum latus peris ja kuti lamusi j hyger'
  />
);
