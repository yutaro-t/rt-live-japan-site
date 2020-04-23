import React from 'react';
import styled from '@emotion/styled';

const Header = styled.h2`
  font-size: 18px;
`;

export const Footer: React.FC = () => (
  <>
    <Header>当サイトについて</Header>
    <p>
      <a href="https://twitter.com/kevin">Kevin Systrom</a>氏らによる
      <a href="https://rt.live/">
        R<sub>t</sub> Covid-19
      </a>
      を日本の都道府県へと拡張したものです。
      <br />
      運営・開発は、<a href="https://twitter.com/souring001">souring</a>,{' '}
      <a href="https://github.com/yutaro-t">yutaro-t</a>
      によってボランティアで行われています。
      <br />
      問合せは
      <a href="mailto:rt.live.japan@gmail.com">こちら</a>
      までお願いします。
      <br />
      こうした活動を推奨してくださったKevin
      Systrom氏をはじめとする、アメリカ版のサイト制作に尽力された皆様に深く感謝申し上げます。
    </p>

    <Header>
      R<sub>t</sub>の算出について
    </Header>
    <p>
      ここに示される指標 (R<sub>t</sub>
      )は、都道府県ごとに算出されたウイルスの実効再生産数の時間的変化を表しています。これにより、特定の地域において、1人の感染者が何人に感染させるかを推定することができます。1.0未満ならば、ウイルスは広がりますが、足踏み状態になり、全員が感染する前に消えていきます。1.0以上であれば、その地域で感染が拡大していくことを意味します。
    </p>
    <p>
      そして、我々の行動によってR<sub>t</sub>
      の値は日々変動します。アメリカでは州ごとに様々なロックダウン計画があり、地域ごとのR
      <sub>t</sub>
      の比較や変化から、ウイルスの感染拡大を遅らせるための政策がどれだけ効果的であるかを測るのに役立つとされています。
    </p>
    <p>
      詳しくは、Kevin Systrom氏の
      <a href="http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/">
        ブログ(The Metric We Need to Manage COVID-19)
      </a>
      をご覧ください。
      <br />R<sub>t</sub>
      の算出方法についての詳細は、 Kevin Systrom氏の
      <a href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb">
        Jupyter notebook
      </a>
      をご参照ください。
      <br />
      日本版を生成しているコードは
      <a href="https://github.com/souring001/covid-19/blob/master/generate_csv.py">
        こちら
      </a>
      で公開しています。
      <br />
      本サイトで公表しているデータは、ジャッグジャパン株式会社が提供している
      <a href="https://gis.jag-japan.com/covid19jp">
        都道府県別新型コロナウイルス感染者数マップ
      </a>
      のCSVデータを使用しています。
    </p>
  </>
);