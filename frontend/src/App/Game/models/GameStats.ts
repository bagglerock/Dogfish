export class GameStats {
  wins: string = '';
  losses: string = '';

  constructor(data: Partial<GameStats> = {}) {
    Object.assign(this, data);
  }
}
