import React from 'react';
import { prefs } from './type';
import { PrefChart, Container as Dummy } from './components/PrefChart';
import { DataProvider } from './contexts/dataContext';
import styled from '@emotion/styled';
import { Abstract } from './components/Abstract';
import { MainChart } from './components/MainChart';

const Contents = styled.div({
  width: '100%',
  maxWidth: 1440,
  margin: '0 auto'
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

export const App: React.FC = () => {
  return (
    <DataProvider>
      <Contents>
        <Abstract />
        <Container>
          {prefs.map(pref => (
            <PrefChart pref={pref} key={pref} />
          ))}
          {Array.from({ length: 3 - (prefs.length % 3) }).map((_, i) => (
            <Dummy key={i} />
          ))}
        </Container>
      </Contents>
    </DataProvider>
  );
};
