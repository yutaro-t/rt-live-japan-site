import React from 'react';
import { prefs } from './type';
import { PrefChart } from './components/PrefChart';
import { DataProvider } from './contexts/dataContext';

export const App: React.FC = () => {
  return (
    <DataProvider>
      {prefs.map(pref => (
        <PrefChart pref={pref} key={pref} />
      ))}
    </DataProvider>
  );
};
