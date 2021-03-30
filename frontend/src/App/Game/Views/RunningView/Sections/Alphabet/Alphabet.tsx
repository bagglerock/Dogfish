import { Card } from 'app/share/Card';
import { map, split } from 'lodash';
import React from 'react';

export const Alphabet: React.FC<AlphabetProps> = ({ updateWord }) => {
  const alphabet = 'abcdefghijklmonpqrstuvwxyz';

  return (
    <div className="d-flex flex-wrap game-card m-2">
      {map(split(alphabet, ''), letter => {
        return (
          <Card key={letter} onClick={() => updateWord(letter)}>
            <p className="p-style-1">{letter}</p>
          </Card>
        );
      })}
    </div>
  );
};

interface AlphabetProps {
  updateWord: (letter: string) => void;
}
