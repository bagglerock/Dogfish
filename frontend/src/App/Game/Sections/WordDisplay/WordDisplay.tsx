import { formatHiddenWord } from 'app/Game/utilities/formatHiddenWord';
import React from 'react';

export const WordDisplay: React.FC<WordDisplayProps> = ({ hiddenWord }) => {
  const formattedHiddenWord = formatHiddenWord(hiddenWord);

  return <p className="p-style-1">{formattedHiddenWord}</p>;
};

interface WordDisplayProps {
  hiddenWord: string[];
}
