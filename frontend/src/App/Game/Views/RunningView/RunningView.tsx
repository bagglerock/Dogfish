import { GameStats } from 'app/Game/models/GameStats';
import { GAME_STATE, HIDDEN_CHARACTER } from 'app/Game/share/const';
import { GameStatistics } from 'app/Game/Views/RunningView/Sections/GameStatistics/GameStatistics';
import { useWord } from 'app/Game/Views/RunningView/Sections/hooks/useWord';
import { LettersGuessed } from 'app/Game/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/Game/Views/RunningView/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/Game/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { indexOf } from 'lodash';
import React, { useEffect } from 'react';

export const RunningView: React.FC<RunningViewProps> = ({ changeGameState }) => {
  const word = 'HELLO WORLD';
  const { maskedWord, lettersGuessed, remainingGuesses } = useWord(word);

  useEffect(() => {
    if (indexOf(maskedWord, HIDDEN_CHARACTER) === -1) {
      changeGameState(GAME_STATE.OFF);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maskedWord]);

  useEffect(() => {
    if (remainingGuesses === 0) {
      changeGameState(GAME_STATE.OFF);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingGuesses]);

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

interface RunningViewProps {
  changeGameState: React.Dispatch<React.SetStateAction<number>>;
}
