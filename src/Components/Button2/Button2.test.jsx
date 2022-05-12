import { render } from '@testing-library/react';
import React from 'react';
import Button2 from './Button2';

describe('Button renders successfully', () => {
  it('Button matches snapshot', () => {
    const view = render(<Button2>text</Button2>);
    expect(view).toMatchSnapshot();
  });
});
