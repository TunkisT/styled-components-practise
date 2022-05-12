import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Component Button loads successfully', () => {
  it('renders successfully', () => {
    const view = render(<Button>Text</Button>);
    expect(view).toMatchSnapshot();
  });

  it('', ()=> {
    fireEvent
  })
});
