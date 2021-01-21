import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { useWord } from 'app/HangmanGame/hooks/useWord';
import { GameStats } from 'app/HangmanGame/models/GameStats';
import { GAME_STATE, HIDDEN_CHARACTER } from 'app/HangmanGame/share/const';
import { GameStatistics } from 'app/HangmanGame/Views/RunningView/Sections/GameStatistics/GameStatistics';
import { LettersGuessed } from 'app/HangmanGame/Views/RunningView/Sections/LettersGuessed/LettersGuessed';
import { StatusMessages } from 'app/HangmanGame/Views/RunningView/Sections/StatusMessages/StatusMessages';
import { WordDisplay } from 'app/HangmanGame/Views/RunningView/Sections/WordDisplay/WordDisplay';
import { indexOf } from 'lodash';
import React, { useEffect } from 'react';

export const RunningView: React.FC<IGameState & RunningViewProps> = ({ setGameState, word, stats, setStats }) => {
  const { maskedWord, lettersGuessed, remainingGuesses } = useWord(word);

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
