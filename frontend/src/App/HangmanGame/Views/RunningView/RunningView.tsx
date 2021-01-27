import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { useWord } from 'app/HangmanGame/hooks/useWord';
import { GameStats } from 'app/HangmanGame/models/GameStats';
import { GameStatistics } from 'app/HangmanGame/Views/RunningView/Sections/GameStatistics/GameStatistics';
import { LettersGuessed } from 'app/HangmanGame/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/HangmanGame/Views/RunningView/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/HangmanGame/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { useUpdateStats } from 'app/HangmanGame/Views/RunningView/useUpdateStats';
import React from 'react';

export const RunningView: React.FC<IGameState & RunningViewProps> = ({ setGameState, word, stats, setStats }) => {
  const { maskedWord, lettersGuessed, remainingGuesses } = useWord(word);

  useUpdateStats(setGameState, setStats, maskedWord, remainingGuesses);

  const statusMessage = 'This is a test message';

  return (
    <>
      <WordDisplay hiddenWord={maskedWord} />

      <LettersGuessed lettersGuessed={lettersGuessed} />

      <StatusMessages message={statusMessage} />

      <GameStatistics gameStats={stats} remainingGuesses={remainingGuesses.toString()} />
    </>
  );
};

interface RunningViewProps {
  word: string;
  stats: GameStats;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
}
