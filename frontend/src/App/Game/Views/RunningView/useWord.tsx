import { convertWordToHiddenArray } from 'app/Game/utilities/convertWordToHiddenArray';
import { indexOf } from 'lodash';
import { useEffect, useState } from 'react';

export const useWord = (word: string) => {
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [maskedWord, setMaskedWord] = useState<string[]>(convertWordToHiddenArray(word, lettersGuessed));

  useEffect(() => {
    const updateWordOnKeyPress = (event: KeyboardEvent) => {
      const keyPressed = event.key.toUpperCase();
      if (keyPressed.length > 1) {
        // prevents 'Enter Key' from going into lettersGuessed array
        return;
      }

      if (isDuplicateLetter(keyPressed)) {
        return;
      }

      updateWord(keyPressed);
    };

    window.addEventListener('keypress', updateWordOnKeyPress);

    return () => {
      window.addEventListener('keypress', updateWordOnKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateWord = (key: string) => {
    const _lettersGuessed = lettersGuessed;

    _lettersGuessed.push(key);

    setLettersGuessed(_lettersGuessed);

    setMaskedWord(convertWordToHiddenArray(word, lettersGuessed));
  };

  const isDuplicateLetter = (key: string) => {
    return indexOf(lettersGuessed, key) !== -1;
  };

  return {
    maskedWord,
    lettersGuessed,
  };
};
