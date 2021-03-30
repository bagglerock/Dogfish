import { Card } from 'app/share/Card';
import { map, split } from 'lodash';
import React from 'react';

export const Keyboard: React.FC<KeyboardProps> = ({ updateWord }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="d-flex flex-wrap game-card m-2">
      {map(split(alphabet, ''), letter => {
        return (
          <Card key={letter} onClick={() => updateWord(letter)} style={{ borderRadius: '25%' }}>
            <p className="p-style-1">{letter.toUpperCase()}</p>
          </Card>
        );
      })}
    </div>
  );
};

interface KeyboardProps {
  updateWord: (letter: string) => void;
}
