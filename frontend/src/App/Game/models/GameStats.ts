export class GameStats {
  wins: string = '';
  losses: string = '';
  remainingGuesses: string = '';

  constructor(data: Partial<GameStats> = {}) {
    Object.assign(this, data);
  }
}
