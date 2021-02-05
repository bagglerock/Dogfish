import { IGameState } from 'app/Game/Game';
import { GAME_STATE } from 'app/Game/share/const';
import { Card } from 'app/share/Card';
import React from 'react';

export const WinView: React.FC<IGameState & WinViewProps> = ({ setGameState, changeWord }) => {
  const handleButtonClick = () => {
    changeWord();

    setGameState(GAME_STATE.OFF);
  };

  return (
    <>
      <Card>
        <p className="p-style-1">Congratulations, you have won!</p>
      </Card>

      <div className="pt-5 text-center w-100">
        <button className="btn" onClick={handleButtonClick}>
          Reset
        </button>
      </div>
    </>
  );
};

interface WinViewProps {
  changeWord: () => void;
}
