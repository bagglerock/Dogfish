import { useState } from 'react';

const MAX_GUESSES = 10;

export const useGuesses = () => {
  const [remainingGuesses, setRemainingGuesses] = useState(MAX_GUESSES);

  return {
    remainingGuesses,
    setRemainingGuesses,
  };
};
