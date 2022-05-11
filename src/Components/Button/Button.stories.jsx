import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => (
  <Button type='primary' color='grey'>
    Primary button
  </Button>
);
export const secondary = () => (
  <Button type='secondary' color='pink'>
    Secondary button
  </Button>
);
