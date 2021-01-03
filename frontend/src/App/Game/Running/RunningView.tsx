import { WordDisplay } from 'app/Game/Sections/WordDisplay/WordDisplay';
import { Card } from 'app/share/Card';
import React from 'react';

export const RunningView: React.FC = () => {
  const word = 'Hello World';
  const lettersGuessed = ['a', 'b', 'c', 'd', 'e'];

  const convertedWord = maskWord(word, lettersGuessed);

  return (
    <>
      <Card>
        <WordDisplay word={convertedWord} />
      </Card>

      <Card>
        <p className="p-style-1">Letters Guessed</p>
      </Card>

      <Card>
        <p className="p-style-1">Status</p>
      </Card>

      <Card>
        <p className="p-style-1">Statistics</p>
      </Card>
    </>
  );
};

function maskWord(word: string, lettersGuessed: string[]) {
  return word;
}
