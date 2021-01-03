import { RunningView } from 'app/Game/Views/RunningView/RunningView';
import React, { useState } from 'react';

export const Game: React.FC = () => {
  const [gameState] = useState(1);

  if (gameState === 1) {
    return <RunningView />;
  }

  return null;
};
