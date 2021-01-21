import { formatHiddenWord } from 'app/HangmanGame/utilities/formatHiddenWord';
import { Card } from 'app/share/Card';
import React from 'react';

export const WordDisplay: React.FC<WordDisplayProps> = ({ hiddenWord }) => {
  const formattedHiddenWord = formatHiddenWord(hiddenWord);

  return (
    <Card>
      <p className="p-style-1">{formattedHiddenWord}</p>
    </Card>
  );
};

interface WordDisplayProps {
  hiddenWord: string[];
}
