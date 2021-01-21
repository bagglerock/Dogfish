import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import React, { useEffect } from 'react';

export const ResetView: React.FC<IGameState & ResetViewProps> = ({ setGameState, changeWord }) => {
  const handleButtonClick = () => setGameState(GAME_STATE.OFF);

  useEffect(() => changeWord(), [changeWord]);

  return (
    <div>
      <p>Reset View</p>
      <button className="btn" onClick={handleButtonClick}>
        to Off
      </button>
    </div>
  );
};

interface ResetViewProps {
  changeWord: () => void;
}
