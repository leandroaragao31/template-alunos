import React from 'react';
import { Footer } from '../Componets/Footer';
import { Header } from '../Componets/Header';
import { Main } from '../Componets/Main';
import { GlobalStyle } from '../Componets/styles';
import { Helmet } from 'react-helmet'

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>Trabalho Final</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </div>
  );
}
