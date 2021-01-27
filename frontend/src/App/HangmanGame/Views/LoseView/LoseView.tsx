import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import { Card } from 'app/share/Card';
import React from 'react';

export const LoseView: React.FC<IGameState & LoseViewProps> = ({ setGameState, changeWord }) => {
  const handleButtonClick = () => {
    changeWord();

    setGameState(GAME_STATE.OFF);
  };

  return (
    <>
      <Card>
        <p className="p-style-1">You lose, please try again.</p>
      </Card>

      <div className="pt-5 text-center w-100">
        <button className="btn" onClick={handleButtonClick}>
          Reset
        </button>
      </div>
    </>
  );
};

interface LoseViewProps {
  changeWord: () => void;
}
