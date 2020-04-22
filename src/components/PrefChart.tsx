import React from 'react';
import { useData } from '@App/contexts/dataContext';
import {
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ComposedChart,
  Area,
  CartesianGrid,
  ReferenceLine
} from 'recharts';

function formatDate(time: number): string {
  return new Date(time).toDateString().slice(4, 10);
}

export const PrefChart: React.FC<{ pref: string }> = ({ pref }) => {
  const value = useData(pref);

  const maxValue = Math.max.apply(
    null,
    value?.data.map(d => d.range90[1]) ?? [1]
  );
  const minValue = Math.min.apply(
    null,
    value?.data.map(d => d.range90[0]) ?? [0]
  );
  const offset = (maxValue - 1) / (maxValue - minValue);

  const maxLine = Math.max.apply(null, value?.data.map(d => d.ML) ?? [1]);
  const minLine = Math.min.apply(null, value?.data.map(d => d.ML) ?? [0]);
  const lineOffset = (maxLine - 1) / (maxLine - minLine);
  return (
    <>
      {pref}
      <ComposedChart
        width={730}
        height={250}
        data={value?.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <defs>
          <linearGradient id={`splitColor-${pref}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset={offset}
              stopColor="rgba(235, 83, 88)"
              stopOpacity={1}
            />
            <stop
              offset={offset}
              stopColor="rgba(53, 179, 46)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id={`lineColor-${pref}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset={lineOffset}
              stopColor="rgba(235, 83, 88)"
              stopOpacity={1}
            />
            <stop
              offset={lineOffset}
              stopColor="rgba(53, 179, 46)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          type="number"
          domain={[new Date('2020-03-01').getTime(), new Date().getTime()]}
          tickFormatter={formatDate}
          allowDataOverflow
        />
        <YAxis type="number" domain={[0, 4]} allowDataOverflow />
        <Tooltip labelFormatter={v => formatDate(v as number)} />
        <Line
          type="monotone"
          dataKey="ML"
          stroke={`url(#lineColor-${pref})`}
          dot={false}
          strokeWidth={2}
        />

        <Area
          type="monotone"
          dataKey="range90"
          stroke="none"
          fill={`url(#splitColor-${pref})`}
          activeDot={false}
          opacity={0.2}
        />
        <ReferenceLine y={1} stroke="rgba(235, 83, 88, 0.6)" />
      </ComposedChart>
    </>
  );
};
