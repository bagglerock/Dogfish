import { Game } from 'app/Game/Game';
import React from 'react';
import './main.scss';

export const Main: React.FC = () => (
  <main className="main p-3 w-100">
    <Game />
  </main>
);
