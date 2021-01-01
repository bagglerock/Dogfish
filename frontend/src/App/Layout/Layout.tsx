import { Footer } from 'app/Layout/Footer/Footer';
import { Header } from 'app/Layout/Header/Header';
import { Main } from 'app/Layout/Main/Main';
import React from 'react';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
};
