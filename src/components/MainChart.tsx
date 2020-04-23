import React, { useMemo } from 'react';
import { useData } from '@App/contexts/dataContext';
import { prefs } from '@App/type';
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
  Rectangle,
  LabelList
} from 'recharts';

function shortPref(pref: any) {
  if (pref === '北海道') return pref;
  return pref.slice(0, -1);
}

const AxisTick: React.FC<any> = ({ x, y, value, width, stroke }) => {
  const display = shortPref(value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={width / 2}
        dy={3}
        textAnchor="middle"
        fill={stroke}
        fontSize={display.length === 3 ? 6 : 8}
      >
        {display}
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

const DotShape: React.FC<any> = props => {
  const { y: _y } = props;
  const y = _y - 8;
  const height = 16;
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
        <XAxis dataKey="pref" tick={false} interval={0} />
        <YAxis domain={[0, 4]} allowDataOverflow />
        <Tooltip />
        <Bar
          dataKey="range50"
          shape={props => <BarShape {...props} dataKey="range50" />}
          isAnimationActive={false}
          radius={1000}
          stackId="aaaaaa"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              opacity={1}
              fill={entry.ML > 1 ? 'rgba(235, 83, 88)' : 'rgba(53, 179, 46)'}
            />
          ))}
        </Bar>
        <Bar
          dataKey="range90"
          isAnimationActive={false}
          stackId="aaaaaa"
          radius={1000}
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
        <Bar
          dataKey="ML"
          isAnimationActive={false}
          stackId="aaaaaa"
          radius={1000}
          shape={DotShape}
        >
          <LabelList dataKey="pref" content={<AxisTick />} />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              opacity={1}
              stroke={entry.ML > 1 ? 'rgba(235, 83, 88)' : 'rgba(53, 179, 46)'}
              fill="#fff"
            />
          ))}
        </Bar>
        <ReferenceLine y={1} stroke="rgba(235, 83, 88)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
