import { join, map } from 'lodash';

const SPACER = '\u00A0';

export function formatHiddenWord(hiddenWord: string[]): string {
  const formattedHiddenWord = map(hiddenWord, letter => {
    if (letter === ' ') {
      return SPACER;
    }

    return letter;
  });

  return join(formattedHiddenWord, ' ');
}
