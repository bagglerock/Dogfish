import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import React from 'react';

export const OffView: React.FC<IGameState> = ({ setGameState }) => {
  const handleButtonClick = () => setGameState(GAME_STATE.RUNNING);

  return (
    <div className="pt-5 text-center w-100">
      <button className="btn" onClick={handleButtonClick}>
        start game
      </button>
    </div>
  );
};
