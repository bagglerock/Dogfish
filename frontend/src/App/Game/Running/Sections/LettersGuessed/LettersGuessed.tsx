import { Card } from 'app/share/Card';
import { join } from 'lodash';
import React from 'react';

export const LettersGuessed: React.FC<LettersGuessedProps> = ({ lettersGuessed }) => {
  return (
    <Card>
      <p className="p-style-1">{join(lettersGuessed, ', ')}</p>
    </Card>
  );
};

interface LettersGuessedProps {
  lettersGuessed: string[];
}
