import { GameStats } from 'app/Game/models/GameStats';
import { GAME_STATE, HIDDEN_CHARACTER } from 'app/Game/share/const';
import { indexOf } from 'lodash';
import React, { useEffect } from 'react';

export const useUpdateStats = (
  setGameState: React.Dispatch<React.SetStateAction<GAME_STATE>>,
  setStats: React.Dispatch<React.SetStateAction<GameStats>>,
  maskedWord: string[],
  remainingGuesses: number
) => {
  useEffect(() => {
    if (indexOf(maskedWord, HIDDEN_CHARACTER) === -1) {
      setStats(stats => {
        return new GameStats({ ...stats, wins: stats.wins + 1 });
      });

      setGameState(GAME_STATE.WIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maskedWord]);

  useEffect(() => {
    if (remainingGuesses === 0) {
      setStats(stats => {
        return new GameStats({ ...stats, losses: stats.losses + 1 });
      });

      setGameState(GAME_STATE.LOSE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingGuesses]);
};
