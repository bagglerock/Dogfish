import { IGameState } from 'app/Game/Game';
import { GameStats } from 'app/Game/models/GameStats';
import { GAME_STATE } from 'app/Game/share/const';
import { LoseView } from 'app/Game/Views/LoseView/LoseView';
import { OffView } from 'app/Game/Views/OffView/OffView';
import { RunningView } from 'app/Game/Views/RunningView/RunningView';
import { WinView } from 'app/Game/Views/WinView/WinView';
import { Card } from 'app/share/Card';
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
      <Card>
        <p className="p-style-1">Wins: {props.stats.wins}</p>
        <p className="p-style-1">Losses: {props.stats.losses}</p>
      </Card>
      <View {...props} />
      );
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
