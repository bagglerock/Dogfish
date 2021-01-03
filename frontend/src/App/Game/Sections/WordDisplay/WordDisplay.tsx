import React from 'react';

export const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => <p className="p-style-1">{word}</p>;

interface WordDisplayProps {
  word: string;
}
