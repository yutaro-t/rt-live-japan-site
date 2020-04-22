import { csvData } from './rt_japan';
import csv from 'csvtojson';
import { StateDateData } from './type';

export async function fetchData(): Promise<StateDateData[]> {
  return (await csv().fromString(csvData)).map(d => ({
    pref: d.pref as string,
    date: new Date(d.date).getTime(),
    range90: [parseFloat(d.Low_90), parseFloat(d.High_90)] as [number, number],
    ML: parseFloat(d.ML)
  }));
}
