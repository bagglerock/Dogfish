import { render } from '@testing-library/react';
import { VirtualKeyboard } from 'app/Game/Views/RunningView/Sections/VirtualKeyboard/VirtualKeyboard';

test('renders VirtualKeyboard', () => {
  const { container } = render(<VirtualKeyboard updateWord={jest.fn()} />);

  expect(container).toMatchSnapshot();
});
