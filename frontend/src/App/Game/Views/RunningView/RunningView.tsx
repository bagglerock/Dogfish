import { GameStats } from 'app/Game/models/GameStats';
import { GameStatistics } from 'app/Game/Views/RunningView/Sections/GameStatistics/GameStatistics';
import { LettersGuessed } from 'app/Game/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/Game/Views/RunningView/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/Game/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { useWord } from 'app/Game/Views/RunningView/useWord';
import React from 'react';

export const RunningView: React.FC = () => {
  const word = 'HELLO WORLD';
  const { maskedWord, lettersGuessed, remainingGuesses } = useWord(word);

  const statusMessage = 'This is a test message';
  const gameStats = new GameStats({
    wins: '10',
    losses: '2',
  });

  return (
    <>
      <WordDisplay hiddenWord={maskedWord} />

      <LettersGuessed lettersGuessed={lettersGuessed} />

      <StatusMessages message={statusMessage} />

      <GameStatistics gameStats={gameStats} remainingGuesses={remainingGuesses.toString()} />
    </>
  );
};
