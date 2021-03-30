import { GameStats } from 'app/Game/models/GameStats';
import { Card } from 'app/share/Card';
import React from 'react';

export const GameStatsCard: React.FC<{ stats: GameStats }> = ({ stats }) => (
  <Card>
    <p className="p-style-1">Wins: {stats.wins}</p>
    <p className="p-style-1">Losses: {stats.losses}</p>
  </Card>
);
