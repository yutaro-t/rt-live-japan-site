export const prefs = [
  '三重県' as const,
  '京都府' as const,
  '佐賀県' as const,
  '兵庫県' as const,
  '北海道' as const,
  '千葉県' as const,
  '和歌山県' as const,
  '埼玉県' as const,
  '大分県' as const,
  '大阪府' as const,
  '奈良県' as const,
  '宮城県' as const,
  '宮崎県' as const,
  '富山県' as const,
  '山口県' as const,
  '山形県' as const,
  '山梨県' as const,
  '岐阜県' as const,
  '岡山県' as const,
  '島根県' as const,
  '広島県' as const,
  '徳島県' as const,
  '愛媛県' as const,
  '愛知県' as const,
  '新潟県' as const,
  '東京都' as const,
  '栃木県' as const,
  '沖縄県' as const,
  '滋賀県' as const,
  '熊本県' as const,
  '石川県' as const,
  '神奈川県' as const,
  '福井県' as const,
  '福岡県' as const,
  '福島県' as const,
  '秋田県' as const,
  '群馬県' as const,
  '茨城県' as const,
  '長崎県' as const,
  '長野県' as const,
  '青森県' as const,
  '静岡県' as const,
  '香川県' as const,
  '高知県' as const,
  '鳥取県' as const,
  '鹿児島県' as const
];

export type Prefs = typeof prefs[0];

export interface StateDateData {
  pref: string;
  date: number;
  ML: number;
  range90: [number, number];
}
