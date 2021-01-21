import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import React from 'react';

export const LoseView: React.FC<IGameState> = ({ setGameState }) => {
  const handleButtonClick = () => setGameState(GAME_STATE.RESET);

  return (
    <div>
      <p>Lose View</p>
      <button className="btn" onClick={handleButtonClick}>
        Reset
      </button>
    </div>
  );
};
