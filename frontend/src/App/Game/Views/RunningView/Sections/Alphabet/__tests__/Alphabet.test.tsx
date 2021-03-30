import { render } from '@testing-library/react';
import { Alphabet } from 'app/Game/Views/RunningView/Sections/Alphabet/Alphabet';

test('renders Alphabet', () => {
  const { container } = render(<Alphabet updateWord={jest.fn()} />);

  expect(container).toMatchSnapshot();
});
