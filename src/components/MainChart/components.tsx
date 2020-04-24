import React from 'react';
import { Rectangle } from 'recharts';

function shortPref(pref: any) {
  if (pref === '北海道') return pref;
  return pref.slice(0, -1);
}

export const PrefLabel: React.FC<any> = ({
  x,
  y,
  value,
  width,
  stroke,
  height,
  isVertical
}) => {
  const display = shortPref(value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={isVertical ? (width === 0 ? 10 : width) : width / 2}
        dy={isVertical ? 8 : height === 0 ? -4 : 3}
        textAnchor="middle"
        fill={stroke}
        fontSize={display.length === 3 ? 6 : 8}
      >
        {display}
      </text>
    </g>
  );
};

export const BarShape: React.FC<any> = props => {
  const { dataKey, background, isVertical } = props;
  const { [dataKey]: values } = props;
  if (isVertical) {
    const width = ((values[1] - values[0]) / 4) * background.width;
    const x = (values[0] * background.width) / 4 + background.x;
    const _props = {
      ...props,
      x,
      width
    };

    return <Rectangle {..._props} />;
  }
  const height = ((values[1] - values[0]) / 4) * background.height;
  const y = ((4 - values[1]) * background.height) / 4 + background.y;
  const _props = {
    ...props,
    y,
    height
  };
  return <Rectangle {..._props} />;
};

export const DotShape: React.FC<any> = props => {
  const { x, y, background, width: _width, isVertical } = props;
  const width = 21;

  if (isVertical) {
    const _props = {
      ...props,
      x: Math.max(background.x, background.x + _width - width / 2),
      width
    };
    return <Rectangle {..._props} />;
  }

  const height = 16;
  const _props = {
    ...props,
    x: x - (width - _width) / 2,
    y: Math.min(y - height / 2, background.height + background.y - height),
    width,
    height
  };
  return <Rectangle {..._props} />;
};
