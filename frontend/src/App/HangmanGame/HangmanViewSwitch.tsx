import { IGameState } from 'app/HangmanGame/HangmanGameContainer';
import { GameStats } from 'app/HangmanGame/models/GameStats';
import { GAME_STATE } from 'app/HangmanGame/share/const';
import { LoseView } from 'app/HangmanGame/Views/LoseView/LoseView';
import { OffView } from 'app/HangmanGame/Views/OffView/OffView';
import { ResetView } from 'app/HangmanGame/Views/ResetView/ResetView';
import { RunningView } from 'app/HangmanGame/Views/RunningView/RunningView';
import { WinView } from 'app/HangmanGame/Views/WinView/WinView';
import React from 'react';

export const HangmanViewSwitch: React.FC<HangmanViewSwitchProps & IGameState> = props => {
  let View;

  switch (props.gameState) {
    case GAME_STATE.RUNNING:
      View = RunningView;
      break;
    case GAME_STATE.WIN:
      View = WinView;
      break;
    case GAME_STATE.LOSE:
      View = LoseView;
      break;
    case GAME_STATE.RESET:
      View = ResetView;
      break;
    default:
      View = OffView;
      break;
  }

  return <View {...props} />;
};

interface HangmanViewSwitchProps {
  gameState: GAME_STATE;
  word: string;
  changeWord: () => void;
  stats: GameStats;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
}
