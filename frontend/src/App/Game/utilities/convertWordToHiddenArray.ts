import { indexOf, map } from 'lodash';

export function convertWordToHiddenArray(word: string, lettersGuessed: string[]): string[] {
  const maskedWord = map(word, letter => {
    if (indexOf(lettersGuessed, letter) !== -1) {
      return letter;
    }

    const characterCode = letter.charCodeAt(0);

    if (characterCode >= 65 && characterCode <= 90) {
      return '-';
    }

    return letter;
  });

  return maskedWord;
}
