import { IGameState } from 'app/Game/Game';
import { GameStats } from 'app/Game/models/GameStats';
import { GAME_STATE } from 'app/Game/share/const';
import { GameStatsCard } from 'app/Game/Views/Cards/GameStatsCard';
import { StatusMessages } from 'app/Game/Views/Cards/StatusMessages';
import { LoseView } from 'app/Game/Views/LoseView/LoseView';
import { OffView } from 'app/Game/Views/OffView/OffView';
import { RunningView } from 'app/Game/Views/RunningView/RunningView';
import { WinView } from 'app/Game/Views/WinView/WinView';
import React from 'react';

export const ViewSwitch: React.FC<ViewSwitchProps & IGameState> = props => {
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

    default:
      View = OffView;
      break;
  }

  return (
    <>
      <GameStatsCard stats={props.stats} />
      <StatusMessages message="" />
      <View {...props} />
    </>
  );
};

interface ViewSwitchProps {
  gameState: GAME_STATE;
  word: string;
  changeWord: () => void;
  stats: GameStats;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
}
