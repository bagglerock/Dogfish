import { render } from '@testing-library/react';
import { Header } from 'app/Layout/Header/Header';
import React from 'react';

test('renders App/Layout', () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});
