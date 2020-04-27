const mapper = {
  ML: '最頻値',
  range50: '信頼区間50%',
  range90: '信頼区間90%'
};

const order = {
  ML: 0,
  range50: 1,
  range90: 2
};

function shortenFloat(v) {
  return v.toFixed ? v.toFixed(2) : v;
}

export function formatTooltip(value: any, name: string) {
  return [
    Array.isArray(value)
      ? value.map(shortenFloat).join(' ~ ')
      : shortenFloat(value),
    mapper[name] ?? name
  ];
}

export function sortItem(props: any) {
  return order[props.name] ?? -1;
}
