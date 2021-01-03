import { GameStats } from 'app/Game/models/GameStats';
import { Card } from 'app/share/Card';
import React from 'react';

export const GameStatistics: React.FC<GameStatisticsProps> = ({ gameStats }) => {
  return (
    <Card>
      <p className="p-style-1">Wins: {gameStats.wins}</p>
      <p className="p-style-1">Losses: {gameStats.losses}</p>
      <p className="p-style-1">Remaining Guesses: {gameStats.remainingGuesses}</p>
    </Card>
  );
};

interface GameStatisticsProps {
  gameStats: GameStats;
}
