import { GameStats } from 'app/Game/models/GameStats';
import { GameStatistics } from 'app/Game/Running/Sections/GameStatistics/GameStatistics';
import { LettersGuessed } from 'app/Game/Running/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/Game/Running/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/Game/Running/Sections/WordDisplay/WordDisplay';
import { convertWordToHiddenArray } from 'app/Game/utilities/convertWordToHiddenArray';
import React from 'react';

export const RunningView: React.FC = () => {
  const word = 'HELLO WORLD';
  const lettersGuessed = ['A', 'B', 'C', 'D', 'E'];
  const statusMessage = 'This is a test message';
  const gameStats = new GameStats({
    wins: '10',
    losses: '2',
    remainingGuesses: '9',
  });

  const maskedWord = convertWordToHiddenArray(word, lettersGuessed);

  return (
    <>
      <WordDisplay hiddenWord={maskedWord} />

      <LettersGuessed lettersGuessed={lettersGuessed} />

      <StatusMessages message={statusMessage} />

      <GameStatistics gameStats={gameStats} />
    </>
  );
};
