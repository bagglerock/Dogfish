import { useState } from 'react';

export enum GAME_STATE {
  OFF = 0,
  RUNNING = 1,
}

export const useGameState = () => {
  const [gameState, setGameState] = useState(0);

  return {
    gameState,
    setGameState,
  };
};
