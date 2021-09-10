import { IGameState } from 'app/Game/Game';
import { useWord } from 'app/Game/hooks/useWord';
import { GameStats } from 'app/Game/models/GameStats';
import { LettersGuessed } from 'app/Game/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { VirtualKeyboard } from 'app/Game/Views/RunningView/Sections/VirtualKeyboard/VirtualKeyboard';
import { WordDisplay } from 'app/Game/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { useUpdateStats } from 'app/Game/Views/RunningView/useUpdateStats';
import { Card } from 'app/share/Card';
import React from 'react';

export const RunningView: React.FC<IGameState & RunningViewProps> = ({ setGameState, word, setStats }) => {
  const { maskedWord, lettersGuessed, remainingGuesses, updateWord } = useWord(word);

  useUpdateStats(setGameState, setStats, maskedWord, remainingGuesses);

  return (
    <>
      <WordDisplay hiddenWord={maskedWord} />

      <LettersGuessed lettersGuessed={lettersGuessed} />

      <Card>
        <p className="p-style-1">Remaining Guesses: {remainingGuesses.toString()}</p>
      </Card>

      <VirtualKeyboard updateWord={updateWord} />
    </>
  );
};

interface RunningViewProps {
  word: string;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
}
