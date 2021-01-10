import { HIDDEN_CHARACTER } from 'app/Game/share/const';
import { useGuesses } from 'app/Game/Views/RunningView/Sections/hooks/useGuesses';
import { indexOf, map } from 'lodash';
import { useEffect, useState } from 'react';

export const useWord = (word: string) => {
  const initialMaskedWord = convertWordToHiddenArray(word, []);
  const [maskedWord, setMaskedWord] = useState<string[]>(initialMaskedWord);

  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);

  const { remainingGuesses, setRemainingGuesses } = useGuesses();

  useEffect(() => {
    const updateOnKeyPress = (event: KeyboardEvent) => {
      const keyPressed = event.key.toUpperCase();
      if (keyPressed.length > 1) {
        // prevents things like 'Enter Key' from going into lettersGuessed array
        return;
      }

      if (isDuplicateLetter(keyPressed)) {
        return;
      }

      updateWord(keyPressed);
    };

    window.addEventListener('keypress', updateOnKeyPress);

    return () => {
      window.addEventListener('keypress', updateOnKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateWord = (key: string) => {
    const _lettersGuessed = lettersGuessed;

    _lettersGuessed.push(key);

    setLettersGuessed(_lettersGuessed);

    if (indexOf(word, key) === -1) {
      setRemainingGuesses(remainingGuesses => remainingGuesses - 1);

      return;
    }

    setMaskedWord(convertWordToHiddenArray(word, lettersGuessed));
  };

  const isDuplicateLetter = (key: string) => {
    return indexOf(lettersGuessed, key) !== -1;
  };

  return {
    maskedWord,
    lettersGuessed,
    remainingGuesses,
  };
};

function convertWordToHiddenArray(word: string, lettersGuessed: string[]) {
  const maskedWord = map(word, letter => {
    if (indexOf(lettersGuessed, letter) !== -1) {
      return letter;
    }

    const characterCode = letter.charCodeAt(0);

    if (characterCode >= 65 && characterCode <= 90) {
      return HIDDEN_CHARACTER;
    }

    return letter;
  });

  return maskedWord;
}
