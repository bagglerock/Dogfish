import { Card } from 'app/share/Card';
import { map, split } from 'lodash';
import React from 'react';

export const Alphabet: React.FC = () => {
  const alphabet = 'abcdefghijklmonpqrstuvwxyz';

  return (
    <div className="d-flex flex-wrap game-card m-2">
      {map(split(alphabet, ''), letter => {
        return (
          <Card key={letter} onClick={() => console.log(letter)}>
            <p className="p-style-1">{letter}</p>
          </Card>
        );
      })}
    </div>
  );
};
