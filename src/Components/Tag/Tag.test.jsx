import { render } from '@testing-library/react';
import React from 'react';
import Tag from './Tag';

describe('Tag renders successfuly', () => {
  it('Tag matches snapshot', () => {
    const view = render(<Tag>text</Tag>);
    expect(view).toMatchSnapshot();
  });
});
