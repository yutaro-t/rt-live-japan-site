import { Prefs } from '@App/type';

export interface Props {
  data: {
    pref: Prefs;
    ML: number;
    range50: [number, number];
    range90: [number, number];
  }[];
}
