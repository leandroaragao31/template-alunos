import React from 'react';
import { Footer } from '../Componets/Footer';
import { Header } from '../Componets/Header';
import { Main } from '../Componets/Main';
import { GlobalStyle } from '../Componets/styles';

export default function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </div>
  );
}
