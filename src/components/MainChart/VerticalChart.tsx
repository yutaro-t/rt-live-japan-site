import React from 'react';
import { Props } from './props';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';
import { BarShape, DotShape, PrefLabel } from './components';
import { formatTooltip, sortItem } from './utils';

export const VerticalChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={720}>
      <BarChart
        data={data}
        margin={{ top: 12, right: 12, left: -24, bottom: 24 }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis domain={[0, 4]} interval={0} type="number" />
        <YAxis dataKey="pref" tick={false} allowDataOverflow type="category" />
        <Tooltip itemSorter={sortItem} formatter={formatTooltip} />
        <Bar
          dataKey="range50"
          isAnimationActive={false}
          radius={1000}
          shape={props => <BarShape {...props} dataKey="range50" isVertical />}
          stackId="aaaaaa"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell2-${index}`}
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
          shape={props => <BarShape {...props} dataKey="range90" isVertical />}
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
          shape={<DotShape isVertical />}
        >
          <LabelList dataKey="pref" content={<PrefLabel isVertical />} />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              opacity={1}
              stroke={entry.ML > 1 ? 'rgba(235, 83, 88)' : 'rgba(53, 179, 46)'}
              fill="#fff"
            />
          ))}
        </Bar>
        <ReferenceLine x={1} stroke="rgba(235, 83, 88)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
