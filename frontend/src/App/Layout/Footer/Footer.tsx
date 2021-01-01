import React from 'react';

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer pt-3">
      <h1>&copy; Oscar Villalta {year}</h1>
    </footer>
  );
};
