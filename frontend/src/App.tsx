import React, { useEffect } from 'react';
import axios from 'axios';

export const App: React.FC = () => {
  useEffect(() => {
    axios.get('/api/test').then(response => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <p>Hangman, Coming soon...</p>
    </>
  );
};
