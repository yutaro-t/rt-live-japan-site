import React from 'react';
import { prefs } from './type';
import { PrefChart, Container as Dummy } from './components/PrefChart';
import { DataProvider } from './contexts/dataContext';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1440,
  margin: '0 auto',
  flexWrap: 'wrap'
});

export const App: React.FC = () => {
  return (
    <DataProvider>
      <Container>
        {prefs.map(pref => (
          <PrefChart pref={pref} key={pref} />
        ))}
        {Array.from({ length: prefs.length % 3 }).map((_, i) => (
          <Dummy key={i} />
        ))}
      </Container>
    </DataProvider>
  );
};
