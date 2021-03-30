import { render } from '@testing-library/react';
import { Footer } from 'app/Layout/Footer/Footer';

test('renders App/Layout', () => {
  Date.now = jest.fn(() => new Date('2000-01-01T01:00:00Z').getTime());

  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
