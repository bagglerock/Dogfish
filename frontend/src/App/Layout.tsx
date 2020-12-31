import React from 'react';

export const Layout: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>

      <main>
        <p>Hangman, coming soon..</p>
      </main>

      <footer>
        <p>&copy; Oscar Villalta {year}</p>
      </footer>
    </>
  );
};
