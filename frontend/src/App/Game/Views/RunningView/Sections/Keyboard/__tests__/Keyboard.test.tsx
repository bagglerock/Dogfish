import { render } from '@testing-library/react';
import { Keyboard } from 'app/Game/Views/RunningView/Sections/Keyboard/Keyboard';

test('renders Keyboard', () => {
  const { container } = render(<Keyboard updateWord={jest.fn()} />);

  expect(container).toMatchSnapshot();
});
