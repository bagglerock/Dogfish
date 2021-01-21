import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import React from 'react';

export const ResetView: React.FC<IGameState> = ({ setGameState }) => {
  const handleButtonClick = () => setGameState(GAME_STATE.OFF);

  return (
    <div>
      <p>Reset View</p>
      <button className="btn" onClick={handleButtonClick}>
        to Off
      </button>
    </div>
  );
};
