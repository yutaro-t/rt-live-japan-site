import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo
} from 'react';
import { fetchData } from '@App/api';
import { StateDateData } from '@App/type';

export type ContextType =
  | {
      data: StateDateData[];
      maxDate: Date;
      minDate: Date;
      maxY: number;
      minY: number;
    }
  | undefined;

export const dataContext = createContext<ContextType>(undefined);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<StateDateData[] | undefined>(undefined);

  useEffect(() => {
    fetchData().then(d => setData(() => d));
  }, []);

  const value = useMemo(() => {
    if (!data) return undefined;
    const dates = data.map(d => d.date);

    return {
      data: data,
      minDate: new Date(Math.min.apply(null, dates)),
      maxDate: new Date(Math.max.apply(null, dates)),
      minY: Math.min.apply(
        null,
        data.map(d => d.range90[0])
      ),
      maxY: Math.max.apply(
        null,
        data.map(d => d.range90[1])
      )
    };
  }, [data]);

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export function useData(pref?: string): ContextType {
  const value = useContext(dataContext);
  if (!value) return undefined;
  if (!pref) {
    return value;
  }

  return {
    ...value,
    data: value.data.filter(d => d.pref === pref)
  };
}
