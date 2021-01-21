import { HangmanViewSwitch } from 'app/HangmanGame/HangmanViewSwitch';
import { GameStats } from 'app/HangmanGame/models/GameStats';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import { upperCase } from 'lodash';
import React, { useState } from 'react';

export const HangmanGameContainer: React.FC = () => {
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
    <HangmanViewSwitch
      gameState={gameState}
      setGameState={setGameState}
      word={word}
      changeWord={getNewWord}
      stats={stats}
      setStats={setStats}
    />
  );
};

export interface IGameState {
  setGameState: React.Dispatch<React.SetStateAction<GAME_STATE>>;
}
