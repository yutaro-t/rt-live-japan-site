import React, { useMemo } from 'react';
import useWindowDimensions from '@App/contexts/useWIndowDimensions';
import { useData } from '@App/contexts/dataContext';
import { prefs } from '@App/type';
import { VerticalChart } from './VerticalChart';
import { HorizontalChart } from './HorizontalChart';

export const MainChart: React.FC = () => {
  const windowDimension = useWindowDimensions();
  const isVerticle = windowDimension.width < 800;

  const value = useData();
  const selectedDate = new Date().getTime();

  const data = useMemo(() => {
    if (!value) return [];
    const data = prefs.map(pref => {
      for (const d of value[pref]) {
        if (d.date < selectedDate) return { ...d, pref };
      }
      return {
        pref,
        ML: Number.NEGATIVE_INFINITY,
        range50: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY] as [
          number,
          number
        ],
        range90: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY] as [
          number,
          number
        ]
      };
    });

    data.sort((a, b) => a?.ML - b?.ML);
    return data;
  }, [value, selectedDate]);

  if (!value) return null;

  if (isVerticle) {
    return <VerticalChart data={data} />;
  }
  return <HorizontalChart data={data} />;
};
