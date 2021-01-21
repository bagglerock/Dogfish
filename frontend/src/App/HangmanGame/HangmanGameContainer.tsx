import { HangmanViewSwitch } from 'app/HangmanGame/HangmanViewSwitch';
import { GameStats } from 'app/HangmanGame/models/GameStats';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import React, { useState } from 'react';

export const HangmanGameContainer: React.FC = () => {
  const [gameState, setGameState] = useState(GAME_STATE.OFF);
  const [stats, setStats] = useState(new GameStats());

  const [word, setWord] = useState('hello world');

  const getNewWord = () => setWord('new word');

  return <HangmanViewSwitch gameState={gameState} setGameState={setGameState} word={word} changeWord={getNewWord} />;
};

export interface IGameState {
  setGameState: React.Dispatch<React.SetStateAction<GAME_STATE>>;
}
