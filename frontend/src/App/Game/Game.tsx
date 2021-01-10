import { GAME_STATE } from 'app/Game/share/const';
import { useGameState } from 'app/Game/useGameState';
import { RunningView } from 'app/Game/Views/RunningView/RunningView';
import React from 'react';
import './game.scss';

export const Game: React.FC = () => {
  const { gameState, setGameState } = useGameState();

  const handleGame = () => {
    setGameState(GAME_STATE.RUNNING);
  };

  if (gameState === 1) {
    return <RunningView changeGameState={setGameState} />;
  }

  return (
    <>
      <div className="pt-5 text-center w-100">
        <button className="btn" onClick={handleGame}>
          start game
        </button>
      </div>
    </>
  );
};
