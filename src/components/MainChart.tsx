import React, { useMemo } from 'react';
import { useData } from '@App/contexts/dataContext';
import { prefs, Prefs } from '@App/type';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  BarChart,
  ReferenceLine,
  Cell,
  RectangleProps,
  Rectangle
} from 'recharts';

function shortPref(pref: Prefs) {
  if (pref === '北海道') return pref;
  return pref.slice(0, -1);
}

const AxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        fontSize={12}
        transform="rotate(-45)"
      >
        {shortPref(payload.value)}
      </text>
    </g>
  );
};

const BarShape: React.FC<any> = props => {
  const { dataKey, background } = props;
  const { [dataKey]: values } = props;
  const y = (1 - values[0] / 4) * background.height + background.y;
  const height = ((values[0] - values[1]) / 4) * background.height;
  const _props = {
    ...props,
    y,
    height
  };
  return <Rectangle {..._props} />;
};

export const MainChart: React.FC = () => {
  const value = useData();
  const selectedDate = new Date().getTime();

  const data = useMemo(() => {
    if (!value) return [];
    const data = prefs.map(pref => {
      for (const d of value[pref]) {
        if (d.date < selectedDate) return { ...d, pref };
      }
      return { ...value[pref][value[pref].length - 1], pref };
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    data.sort((a, b) => a!.ML - b!.ML);
    return data;
  }, [value, selectedDate]);

  if (!value) return null;

  return (
    <ResponsiveContainer width="100%" height={480}>
      <BarChart
        data={data}
        margin={{ top: 12, right: 0, left: -24, bottom: 24 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="pref" tick={<AxisTick />} interval={0} />
        <YAxis domain={[0, 4]} allowDataOverflow />
        <Tooltip />
        <Bar
          dataKey="range50"
          shape={props => <BarShape {...props} dataKey="range50" />}
          isAnimationActive={false}
          stackId="aaaaaa"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              opacity={0.7}
              fill={entry.ML > 1 ? 'rgba(235, 83, 88)' : 'rgba(53, 179, 46)'}
            />
          ))}
        </Bar>
        <Bar
          dataKey="range90"
          isAnimationActive={false}
          stackId="aaaaaa"
          shape={props => <BarShape {...props} dataKey="range90" />}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell2-${index}`}
              opacity={0.2}
              fill={entry.ML > 1 ? 'rgba(235, 83, 88)' : 'rgba(53, 179, 46)'}
            />
          ))}
        </Bar>
        <ReferenceLine y={1} stroke="rgba(235, 83, 88, 0.6)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
