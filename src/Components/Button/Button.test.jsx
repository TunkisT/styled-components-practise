import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Component Button loads successfully', () => {
  it('renders successfully', () => {
    const view = render(<Button>Text</Button>);
    expect(view).toMatchSnapshot();
  });

  it('calls onClick prop when clicked', () => {
    const handler = jest.fn();
    render(<Button onClick={handler}>text</Button>);
    fireEvent.click(screen.getByText(/text/i));
    expect(handler).toBeCalled();
  });
});
