import axios from 'axios';
import React, { useEffect } from 'react';

export const Main: React.FC = () => {
  useEffect(() => {
    axios.get('/api/test').then(response => {
      console.log('test', response);
    });
  }, []);

  return (
    <main className="main p-3">
      <p>Hangman, coming soon..</p>
    </main>
  );
};
