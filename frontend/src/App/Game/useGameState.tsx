import { useState } from 'react';

export const useGameState = () => {
  const [gameState, setGameState] = useState(0);

  return {
    gameState,
    setGameState,
  };
};
