import React, { useEffect } from 'react';
import axios from 'axios';
import './App.scss';

export const App: React.FC = () => {
  useEffect(() => {
    axios.get('/api/test').then(response => {
      console.log(response);
    });
  }, []);

  return (
    <div className="app">
      <p>Hangman, Coming soon...</p>
    </div>
  );
};
