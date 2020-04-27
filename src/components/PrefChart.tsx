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
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';
import styled from '@emotion/styled';
import { Prefs } from '@App/type';
import { formatTooltip } from './utils';

function formatDate(time: number): string {
  return new Date(time).toDateString().slice(4, 10);
}

export const Container = styled.div(
  {
    flex: '1 0 calc(30% - 32px)',
    minWidth: 264,
    justifyContent: 'space-between',
    padding: 8,
    margin: 16
  },
  props => ({
    boxShadow:
      typeof props.children !== 'undefined'
        ? '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)'
        : 'none'
  })
);

const Heading = styled.h3({
  paddingLeft: 32,
  fontSize: '1.2em',
  fontWeight: 'bold',
  width: '60%',
  margin: 0,
  padding: 0
});

const Value = styled.div<{ isGreen: boolean }>(
  {
    width: '40%',
    textAlign: 'right'
  },
  props => ({
    color: props.isGreen ? 'green' : 'red'
  })
);
const Flex = styled.div({
  display: 'flex',
  margin: 16
});

function justifyOffset(def: number) {
  if (isNaN(def)) return 0;
  if (def < 0) return 0;
  if (def > 1) return 1;
  return def;
}

export const PrefChart: React.FC<{ pref: Prefs }> = ({ pref }) => {
  const rootData = useData();
  if (typeof rootData === 'undefined') return <Container />;
  const data = rootData[pref];

  const maxValue = Math.max.apply(null, data.map(d => d.range90[1]) ?? [1]);
  const minValue = Math.min.apply(null, data.map(d => d.range90[0]) ?? [0]);
  const offset = justifyOffset((maxValue - 1) / (maxValue - minValue));

  const maxLine = Math.max.apply(null, data.map(d => d.ML) ?? [1]);
  const minLine = Math.min.apply(null, data.map(d => d.ML) ?? [0]);
  const lineOffset = justifyOffset((maxLine - 1) / (maxLine - minLine));
  const latest = data[0]?.ML ?? 0;
  return (
    <Container>
      <Flex>
        <Heading>{pref}</Heading>
        <Value isGreen={latest < 1}>{latest.toString().slice(0, 4)}</Value>
      </Flex>

      <ResponsiveContainer width="100%" height={160}>
        <ComposedChart
          data={data}
          margin={{ top: 0, right: 0, left: -24, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient
              id={`splitColor-${pref}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
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
            <linearGradient
              id={`lineColor-${pref}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
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
            domain={[
              new Date('2020-03-01').getTime(),
              new Date().setDate(new Date().getDate() - 1)
            ]}
            tickFormatter={formatDate}
            allowDataOverflow
          />
          <YAxis type="number" domain={[0, 4]} allowDataOverflow />
          <Tooltip
            labelFormatter={v => formatDate(v as number)}
            formatter={formatTooltip}
          />
          <Line
            type="monotone"
            dataKey="ML"
            stroke={`url(#lineColor-${pref})`}
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />

          <Area
            type="monotone"
            dataKey="range90"
            stroke="none"
            fill={`url(#splitColor-${pref})`}
            activeDot={false}
            opacity={0.2}
            isAnimationActive={false}
          />
          <ReferenceLine y={1} stroke="rgba(235, 83, 88, 0.6)" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
};
