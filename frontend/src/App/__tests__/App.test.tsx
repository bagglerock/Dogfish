import { render } from '@testing-library/react';
import { App } from 'App/App';
import React from 'react';

test('renders learn react link', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});