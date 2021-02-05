import { ViewSwitch } from 'app/Game/ViewSwitch';
import { GameStats } from 'app/Game/models/GameStats';
import { GAME_STATE } from 'app/Game/share/const';
import { upperCase } from 'lodash';
import React, { useState } from 'react';

export const Game: React.FC = () => {
  const [gameState, setGameState] = useState(GAME_STATE.OFF);
  const [stats, setStats] = useState(
    new GameStats({
      wins: 0,
      losses: 0,
    })
  );

  const [word, setWord] = useState(upperCase('hello world'));

  const getNewWord = () => setWord(upperCase('new word'));

  return (
    <ViewSwitch gameState={gameState} setGameState={setGameState} word={word} changeWord={getNewWord} stats={stats} setStats={setStats} />
  );
};

export interface IGameState {
  setGameState: React.Dispatch<React.SetStateAction<GAME_STATE>>;
}
