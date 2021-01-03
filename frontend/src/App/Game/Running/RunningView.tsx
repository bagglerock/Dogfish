import { WordDisplay } from 'app/Game/Sections/WordDisplay/WordDisplay';
import { convertWordToHiddenArray } from 'app/Game/utilities/convertWordToHiddenArray';
import { Card } from 'app/share/Card';
import React from 'react';

export const RunningView: React.FC = () => {
  const word = 'HELLO WORLD';
  const lettersGuessed = ['A', 'B', 'C', 'D', 'E'];

  const maskedWord = convertWordToHiddenArray(word, lettersGuessed);

  return (
    <>
      <Card>
        <WordDisplay hiddenWord={maskedWord} />
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
