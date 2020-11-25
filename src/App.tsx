import React from 'react';
import { prefs } from './type';
import { PrefChart, Container as Dummy } from './components/PrefChart';
import { DataProvider } from './contexts/dataContext';
import styled from '@emotion/styled';
import { Abstract } from './components/Abstract';
import { Footer } from './components/Footer';
import { MainChart } from './components/MainChart';
import { GlobalStyle } from './styles/GlobalStyle';
import { Contents } from './styles/Contents';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

export const App: React.FC = () => {
  return (
    <DataProvider>
      <GlobalStyle />
      <Contents>
        <Abstract />
      </Contents>
    </DataProvider>
  );
};
