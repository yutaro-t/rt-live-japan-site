import React, { useEffect, useState, createContext, useContext } from 'react';
import { fetchData } from '@App/api';
import { DataByPref } from '@App/type';

export type ContextType = DataByPref | undefined;

export const dataContext = createContext<ContextType>(undefined);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ContextType>(undefined);

  useEffect(() => {
    fetchData().then(d => setData(() => d));
  }, []);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export function useData(): ContextType {
  const value = useContext(dataContext);
  return value;
}
