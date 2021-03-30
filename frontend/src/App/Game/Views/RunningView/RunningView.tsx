import { IGameState } from 'app/Game/Game';
import { useWord } from 'app/Game/hooks/useWord';
import { GameStats } from 'app/Game/models/GameStats';
import { Alphabet } from 'app/Game/Views/RunningView/Sections/Alphabet/Alphabet';
import { LettersGuessed } from 'app/Game/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/Game/Views/RunningView/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/Game/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { useUpdateStats } from 'app/Game/Views/RunningView/useUpdateStats';
import { Card } from 'app/share/Card';
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

      <Card>
        <p className="p-style-1">Remaining Guesses: {remainingGuesses.toString()}</p>
      </Card>

      <Alphabet />
    </>
  );
};

interface RunningViewProps {
  word: string;
  stats: GameStats;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
}
