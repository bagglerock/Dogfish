import { HangmanGameContainer } from 'app/HangmanGame/HangmanGameContainer';
import React from 'react';

export const Main: React.FC = () => {
  return (
    <main className="main p-3 w-100">
      <HangmanGameContainer />
    </main>
  );
};
