import { difference, map, split } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './VirtualKeyboard.scss';

const ALPHABET_ARRAY = split('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');

export const VirtualKeyboard: React.FC<KeyboardProps> = ({ updateWord, excludeKeys }) => {
  const [alphabet, setAlphabet] = useState<string[]>(ALPHABET_ARRAY);

  useEffect(() => {
    setAlphabet(difference(alphabet, excludeKeys));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [excludeKeys.length]);

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const letter = (e.target as HTMLButtonElement).value;

    updateWord(letter);
  };

  return (
    <div className="d-flex flex-wrap game-card m-2">
      {map(alphabet, letter => {
        return (
          <Button
            key={letter}
            className="p-style-1 mx-2 my-1 px-3 virtual-keyboard__button"
            onClick={handleOnClick}
            value={letter.toUpperCase()}
          >
            {letter.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
};

interface KeyboardProps {
  updateWord(letter: string): void;
  excludeKeys: string[];
}
