import React from 'react';

export const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <div className="game-card m-2" {...rest}>
    {children}
  </div>
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
