import { render } from '@testing-library/react';
import React from 'react';
import Accordion from './Accordion';

describe('Accordion renders successfuly', () => {
  it('Accordion matches snapshot', () => {
    const view = render(<Accordion />);
    expect(view).toMatchSnapshot();
  });
});
