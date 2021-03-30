import { render } from '@testing-library/react';
import { Header } from 'app/Layout/Header/Header';

test('renders App/Layout', () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});
