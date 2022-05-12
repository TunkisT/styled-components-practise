import { render } from '@testing-library/react';
import React from 'react';
import Toggle from './Toggle';

describe('Toggle renders successfuly', () => {
  it('Toggle matches snapshot', () => {
    const view = render(<Toggle>text</Toggle>);
    expect(view).toMatchSnapshot();
  });
});
