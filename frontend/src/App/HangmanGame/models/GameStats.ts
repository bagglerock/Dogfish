export class GameStats {
  wins: number = 0;
  losses: number = 0;

  constructor(data: Partial<GameStats> = {}) {
    Object.assign(this, data);
  }
}
