import { map, split } from 'lodash';
import React from 'react';
import { Button } from 'react-bootstrap';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const VirtualKeyboard: React.FC<KeyboardProps> = ({ updateWord }) => {
  const alphabetArray = split(ALPHABET, '');

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const letter = (e.target as HTMLButtonElement).value;

    updateWord(letter);
  };

  return (
    <div className="d-flex flex-wrap game-card m-2">
      {map(alphabetArray, letter => {
        return (
          <Button key={letter} className="p-style-1" onClick={handleOnClick} value={letter.toUpperCase()}>
            {letter.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
};

interface KeyboardProps {
  updateWord(letter: string): void;
}
