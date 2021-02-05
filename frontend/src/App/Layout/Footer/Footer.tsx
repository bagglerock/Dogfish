import React from 'react';
import './footer.scss';

export const Footer: React.FC = () => {
  const date = new Date(Date.now());
  const year = date.getFullYear();

  return (
    <footer className="footer pt-3">
      <h1>&copy; {year} Oscar Villalta</h1>
    </footer>
  );
};
